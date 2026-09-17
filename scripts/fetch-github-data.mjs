// Collects public repository statistics and recent releases from the GitHub API
// and writes them to src/data/github.json, which is imported by the website.
//
// This runs at BUILD time (see the `prebuild` script), never in the browser:
// the unauthenticated API allows only 60 requests per hour and IP, and visitors
// behind a shared institute IP would exhaust that quickly. Fetching here also
// means no visitor data is sent to github.com when the site is viewed.
//
// In CI the workflow passes GITHUB_TOKEN, which raises the limit to 5000/hour.
// If the request fails, the committed github.json is kept as a fallback so a
// GitHub outage or an offline build never breaks the deployment.

import { writeFile, access } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import { dirname, resolve } from 'node:path';

const REPO = 'assume-framework/assume';
const RELEASE_COUNT = 4;
const SUMMARY_MAX_LENGTH = 200;

const OUT_FILE = resolve(dirname(fileURLToPath(import.meta.url)), '../src/data/github.json');

const headers = {
  Accept: 'application/vnd.github+json',
  'X-GitHub-Api-Version': '2022-11-28',
  'User-Agent': 'assume-framework.github.io-build'
};

if (process.env.GITHUB_TOKEN) {
  headers.Authorization = `Bearer ${process.env.GITHUB_TOKEN}`;
}

async function request(path) {
  const response = await fetch(`https://api.github.com${path}`, { headers });
  if (!response.ok) {
    throw new Error(`GET ${path} failed with ${response.status} ${response.statusText}`);
  }
  return response;
}

// The repository object has no contributor count. Requesting a single
// contributor per page turns the number of pages into the total, which the
// Link header exposes as rel="last".
async function fetchContributorCount() {
  const response = await request(`/repos/${REPO}/contributors?per_page=1&anon=0`);
  const lastPage = /[?&]page=(\d+)>;\s*rel="last"/.exec(response.headers.get('link') ?? '');
  if (lastPage) {
    return Number(lastPage[1]);
  }
  const contributors = await response.json();
  return contributors.length;
}

// Release notes are long markdown changelogs. We only want one readable line as
// a teaser, so take the first list item and strip the markup around it.
function extractSummary(body) {
  const lines = (body ?? '').replace(/\r/g, '').split('\n');

  for (const line of lines) {
    const trimmed = line.trim();
    const isEmpty = trimmed.length === 0;
    const isHeading = /^#{1,6}\s/.test(trimmed);
    const isSectionLabel = /^\*\*.+:\*\*$/.test(trimmed);
    if (isEmpty || isHeading || isSectionLabel) continue;

    const text = trimmed
      .replace(/^[-*]\s+/, '')
      .replace(/\[([^\]]+)\]\([^)]*\)/g, '$1')
      .replace(/<[^>]+>/g, '')
      .replace(/[*_`]/g, '')
      .replace(/\s+/g, ' ')
      .trim();

    if (!text) continue;
    if (text.length <= SUMMARY_MAX_LENGTH) return text;

    const cut = text.slice(0, SUMMARY_MAX_LENGTH);
    const lastSpace = cut.lastIndexOf(' ');
    return `${(lastSpace > 0 ? cut.slice(0, lastSpace) : cut).replace(/[,.;:]$/, '')}…`;
  }

  return '';
}

async function main() {
  const [repo, releases, contributors] = await Promise.all([
    request(`/repos/${REPO}`).then((response) => response.json()),
    request(`/repos/${REPO}/releases?per_page=15`).then((response) => response.json()),
    fetchContributorCount()
  ]);

  const data = {
    generatedAt: new Date().toISOString(),
    repo: {
      fullName: repo.full_name,
      url: repo.html_url,
      stars: repo.stargazers_count,
      forks: repo.forks_count,
      contributors,
      license: repo.license?.spdx_id ?? 'AGPL-3.0',
      createdAt: repo.created_at
    },
    releases: releases
      .filter((release) => !release.draft && !release.prerelease)
      .slice(0, RELEASE_COUNT)
      .map((release) => ({
        tag: release.tag_name,
        publishedAt: release.published_at,
        url: release.html_url,
        summary: extractSummary(release.body)
      }))
  };

  await writeFile(OUT_FILE, `${JSON.stringify(data, null, 2)}\n`, 'utf8');
  console.log(
    `Wrote ${OUT_FILE}: ${data.repo.stars} stars, ${data.repo.contributors} contributors, ` +
      `${data.releases.length} releases (latest ${data.releases[0]?.tag ?? 'none'})`
  );
}

try {
  await main();
} catch (error) {
  console.warn(`Could not refresh GitHub data: ${error.message}`);
  try {
    await access(OUT_FILE);
    console.warn('Keeping the committed src/data/github.json as a fallback.');
  } catch {
    console.error('No committed src/data/github.json to fall back on — the build needs this file.');
    process.exit(1);
  }
}
