import { githubData } from '../../data/github';
import './github.css';

const dateFormat = new Intl.DateTimeFormat('en-GB', { day: 'numeric', month: 'long', year: 'numeric' });

export function ReleaseFeed() {
  const { repo, releases } = githubData;

  if (releases.length === 0) {
    return null;
  }

  return (
    <ul className="gh-release-list">
      {releases.map((release) => (
        <li key={release.tag} className="gh-release">
          <span className="gh-release-date">{dateFormat.format(new Date(release.publishedAt))}</span>
          <h3 className="gh-release-tag">{release.tag}</h3>
          {release.summary && <p className="gh-release-summary">{release.summary}</p>}
          <a className="gh-link" href={release.url} target="_blank" rel="noopener noreferrer">
            Read the release notes for {release.tag} →
          </a>
        </li>
      ))}
      <li className="gh-release">
        <a className="gh-link" href={`${repo.url}/releases`} target="_blank" rel="noopener noreferrer">
          All releases on GitHub →
        </a>
      </li>
    </ul>
  );
}
