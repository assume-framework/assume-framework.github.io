import { Link } from 'react-router-dom';
import { projects, type Project } from '../content/projects';

function ProjectLinks({ links }: { links: Project['links'] }) {
  return (
    <div className="project-card__actions">
      {links.map((l) =>
        'href' in l ? (
          <a key={l.label} className="btn" href={l.href} rel="noopener noreferrer">
            {l.label}
          </a>
        ) : (
          <Link key={l.label} className="btn" to={l.to}>
            {l.label}
          </Link>
        )
      )}
    </div>
  );
}

export function ProjectsPage() {
  return (
    <section className="section">
      <div className="container">
        <div className="page-head">
          <div className="breadcrumbs">
            <Link to="/">Home</Link> · Projects
          </div>
          <h1>Projects</h1>
          <p className="muted" style={{ margin: 0, maxWidth: '85ch' }}>
            The ASSUME ecosystem spans the core simulation package, a configuration GUI, and a separate examples repository.
          </p>
        </div>

        <div className="projects-list">
          {projects.map((p) => (
            <article key={p.id} className="project-card">
              {p.image ? (
                <div className="project-card__media">
                  <img src={p.image.src} alt={p.image.alt} loading="lazy" />
                </div>
              ) : null}
              <div className="project-card__body">
                <h2>{p.title}</h2>
                <p className="project-card__subtitle muted">{p.subtitle}</p>
                <p className="project-card__desc">{p.description}</p>
                <ProjectLinks links={p.links} />
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
