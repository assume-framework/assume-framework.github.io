import { githubData } from '../../data/github';
import './github.css';

const numberFormat = new Intl.NumberFormat('en-GB');
const dateFormat = new Intl.DateTimeFormat('en-GB', { day: 'numeric', month: 'long', year: 'numeric' });

function formatDate(isoDate: string) {
  return dateFormat.format(new Date(isoDate));
}

export function GitHubStats() {
  const { repo, releases, generatedAt } = githubData;
  const latestRelease = releases[0];

  const stats = [
    { label: 'Contributors', value: numberFormat.format(repo.contributors) },
    { label: 'Stars', value: numberFormat.format(repo.stars) },
    { label: 'Forks', value: numberFormat.format(repo.forks) },
    {
      label: 'Latest release',
      value: latestRelease ? latestRelease.tag : repo.license,
      meta: latestRelease ? formatDate(latestRelease.publishedAt) : undefined
    }
  ];

  return (
    <>
      <dl className="gh-stat-grid">
        {stats.map((stat) => (
          <div key={stat.label} className="gh-stat">
            <dt>{stat.label}</dt>
            <dd>{stat.value}</dd>
            {stat.meta && <p className="gh-stat-meta">{stat.meta}</p>}
          </div>
        ))}
      </dl>
      <p className="gh-caption">
        Collected from{' '}
        <a href={repo.url} target="_blank" rel="noopener noreferrer">
          {repo.fullName}
        </a>{' '}
        on {formatDate(generatedAt)}. The repository has been developed openly under the {repo.license} license since{' '}
        {new Date(repo.createdAt).getFullYear()}.
      </p>
    </>
  );
}
