import { Star, GitFork, Users, Tag } from 'lucide-react';
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
    { label: 'Stars', value: numberFormat.format(repo.stars), icon: <Star size={22} /> },
    { label: 'Forks', value: numberFormat.format(repo.forks), icon: <GitFork size={22} /> },
    { label: 'Contributors', value: numberFormat.format(repo.contributors), icon: <Users size={22} /> },
    {
      label: 'Latest release',
      value: latestRelease ? latestRelease.tag : repo.license,
      meta: latestRelease ? formatDate(latestRelease.publishedAt) : undefined,
      icon: <Tag size={22} />
    }
  ];

  return (
    <div className="gh-stat-band">
      <dl className="gh-stat-grid">
        {stats.map((stat) => (
          <div key={stat.label} className="gh-stat">
            <div className="gh-stat-icon" aria-hidden="true">{stat.icon}</div>
            <dd>{stat.value}</dd>
            <dt>{stat.label}</dt>
            {stat.meta && <p className="gh-stat-meta">{stat.meta}</p>}
          </div>
        ))}
      </dl>
      <p className="gh-caption">
        Live from{' '}
        <a href={repo.url} target="_blank" rel="noopener noreferrer">
          {repo.fullName}
        </a>{' '}
        &middot; refreshed {formatDate(generatedAt)} &middot; open-source under the {repo.license} license since{' '}
        {new Date(repo.createdAt).getFullYear()}.
      </p>
    </div>
  );
}
