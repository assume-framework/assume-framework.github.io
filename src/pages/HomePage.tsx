import { Link } from 'react-router-dom';
import { projects, linksForHomeCarousel } from '../content/projects';

export function HomePage() {
  return (
    <>
      <section className="hero">
        <div className="container hero-grid">
          <div className="hero-card hero-main">
            <div className="kicker">
              <span className="dot" aria-hidden="true" /> Open source · Python
            </div>
            <h1>Simulate electricity markets with modular agents - including reinforcement learning.</h1>
            <p className="lead">
              The transition toward high shares of renewable generation drives rapid market evolution: new mechanisms, tighter sector
              coupling, and new platforms. Changes in market design can affect other markets and participants through strong
              interdependencies - often in non-obvious ways.
            </p>
            <p className="lead" style={{ marginTop: '.6rem' }}>
              <strong>ASSUME</strong> is a highly modular, easy-to-use simulation toolbox for agent-based studies of European
              electricity markets (focus: German setup). It can be used with fixed strategies, and it also supports{' '}
              <strong>deep reinforcement learning</strong> so agents can learn adaptive behavior from market feedback.
            </p>
            <div className="cta-row">
              <a className="btn primary" href="https://github.com/assume-framework/assume" rel="noopener noreferrer">
                View on GitHub
              </a>
              <a className="btn" href="https://assume.readthedocs.io/en/latest/" rel="noopener noreferrer">
                Read the docs
              </a>
              <a className="btn" href="https://assume.readthedocs.io/en/latest/installation.html" rel="noopener noreferrer">
                Installation
              </a>
            </div>
          </div>

          <aside className="hero-card hero-side" aria-label="Quick facts">
            <div className="stat">
              <strong>What you can study</strong>
              <span>Market design comparisons, congestion management, bidding under uncertainty, multi-agent dynamics.</span>
            </div>
            <div className="stat">
              <strong>Why it is different</strong>
              <span>Plug-and-play agent modules (demand &amp; generation) plus RL strategies for adaptive behavior.</span>
            </div>
            <div className="stat">
              <strong>Where to start</strong>
              <span>Install via pip, run examples, optionally connect TimescaleDB + Grafana dashboards.</span>
            </div>
          </aside>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2>Core capabilities</h2>
          <p className="muted" style={{ marginTop: 0 }}>
            What the toolbox is built for.
          </p>
          <div className="grid-3" style={{ marginTop: '1rem' }}>
            <article className="card">
              <div className="pill">Agent-based modeling</div>
              <h3>Modular market participants</h3>
              <p>Model supply and demand with composable agents and strategies, instead of hard-coded, one-off behaviors.</p>
            </article>
            <article className="card">
              <div className="pill blue">Deep RL</div>
              <h3>Learning strategies</h3>
              <p>
                Use deep reinforcement learning where it makes sense to study adaptation, strategic interaction, and emergent
                behavior.
              </p>
            </article>
            <article className="card">
              <div className="pill purple">Network clearing</div>
              <h3>Optional extensions</h3>
              <p>Add network-based clearing capabilities (e.g., PyPSA-dependent workflows) when your study requires them.</p>
            </article>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2>Ecosystem</h2>
          <p className="muted" style={{ marginTop: 0, maxWidth: '85ch' }}>
            Quick links to the core toolbox and companion projects commonly used for scenario setup, documentation, and
            configuration workflows.
          </p>
          <div className="carousel" role="region" aria-label="ASSUME ecosystem">
            <div className="carousel-track">
              {projects.map((item) => (
                <article key={item.id} className="carousel-card">
                  <div className="carousel-head">
                    <div>
                      <h3>{item.title}</h3>
                      <div className="muted">{item.subtitle}</div>
                    </div>
                  </div>
                  <p className="muted" style={{ marginTop: '.6rem' }}>
                    {item.description}
                  </p>
                  <div className="carousel-actions" aria-label={`${item.title} links`}>
                    {linksForHomeCarousel(item).map((l) =>
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
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2>From research to practice</h2>
          <p className="muted" style={{ marginTop: 0 }}>
            Built to be approachable for smaller projects (including theses) and still practical for research-grade studies.
          </p>
          <div className="prose" style={{ marginTop: '1rem' }}>
            <p>
              ASSUME emphasizes customizability: you can adapt agent representations, market configurations, and bidding strategies while
              building on shared modules. For more context, see <Link to="/about">Background</Link>.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
