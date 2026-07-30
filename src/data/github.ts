// github.json is regenerated at build time by scripts/fetch-github-data.mjs.
// The interfaces below are the contract that script has to satisfy; import from
// this module rather than from the JSON file directly.
import data from './github.json';

export interface GitHubRelease {
  tag: string;
  publishedAt: string;
  url: string;
  summary: string;
}

export interface GitHubRepoStats {
  fullName: string;
  url: string;
  stars: number;
  forks: number;
  contributors: number;
  license: string;
  createdAt: string;
}

export interface GitHubData {
  generatedAt: string;
  repo: GitHubRepoStats;
  releases: GitHubRelease[];
}

export const githubData: GitHubData = data;
