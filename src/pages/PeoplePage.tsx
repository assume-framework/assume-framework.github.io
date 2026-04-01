import { Link } from 'react-router-dom';

export function PeoplePage() {
  return (
    <section className="section">
      <div className="container">
        <div className="page-head">
          <div className="breadcrumbs">
            <Link to="/">Home</Link> · People
          </div>
          <h1>People</h1>
          <p className="muted" style={{ margin: 0, maxWidth: '85ch' }}>
            ASSUME is developed by a collaboration across several institutions. Below is an overview of contributing organizations, team
            profiles, and funding. For the full author list and citation, see{' '}
            <Link to="/publications">Publications</Link>.
          </p>
        </div>

        <div className="prose" style={{ marginTop: '1.25rem' }}>
          <h2>Contributing institutions</h2>
          <p>The project team includes researchers from institutions such as:</p>
          <ul>
            <li>INATECH CIG, University of Freiburg</li>
            <li>WIN - IM, Karlsruhe Institute of Technology (KIT)</li>
            <li>FH Aachen - University of Applied Sciences</li>
            <li>Fraunhofer ISI</li>
            <li>Fraunhofer IEG</li>
          </ul>
        </div>

        <h2 style={{ paddingTop: '0.5rem', marginBottom: 0 }}>Team &amp; contributors</h2>
        <p className="muted" style={{ marginTop: '0.35rem' }}>
          Profiles include collaborators named in the SoftwareX article and other key contributors.{' '}
          <Link to="/publications">Publications</Link> has the full author list and citation.
        </p>

        <div className="people-grid" style={{ marginTop: '1rem' }}>
          <article className="card person">
            <div className="avatar" aria-hidden="true">
              GG
            </div>
            <div>
              <h3>Gunter Grimm</h3>
              <div className="meta">INATECH CIG, University of Freiburg</div>
              <p>
                Research associate and doctoral student focusing on market participants' interaction with regulation and market
                design across time horizons. He coordinates the ADAPT project.
              </p>
            </div>
          </article>

          <article className="card person">
            <div className="avatar" aria-hidden="true">
              JR
            </div>
            <div>
              <h3>Jannik Raskob</h3>
              <div className="meta">FH Aachen - University of Applied Sciences</div>
              <p>
                ASSUME GUI, reinforcement learning, market simulation
              </p>
            </div>
          </article>

          <article className="card person">
            <div className="avatar" aria-hidden="true">
              FR
            </div>
            <div>
              <h3>Finn Reinecke</h3>
              <div className="meta">INATECH CIG, University of Freiburg</div>
              <p>
                reinforcement learning, market simulation
              </p>
            </div>
          </article>

          <article className="card person">
            <div className="avatar" aria-hidden="true">
              MT
            </div>
            <div>
              <h3>Marie Thederan</h3>
              <div className="meta">WIN - IM, KIT</div>
              <p>
                reinforcement learning, market simulation, market learning
              </p>
            </div>
          </article>

          <article className="card person">
            <div className="avatar" aria-hidden="true">
              KM
            </div>
            <div>
              <h3>Kim K. Miskiw</h3>
              <div className="meta">WIN - IM, KIT</div>
              <p>
                Research interests include deep reinforcement learning in electricity market simulations, agent-based electricity market
                modeling, energy market engineering, and stochastic optimization (including work on bidding under uncertainty in
                sequential markets).
              </p>
            </div>
          </article>

          <article className="card person">
            <div className="avatar" aria-hidden="true">
              MK
            </div>
            <div>
              <h3>Manish Khanra</h3>
              <div className="meta">Fraunhofer ISI</div>
              <p>
                Works on integrating hydrogen and e-fuels for decarbonizing hard-to-abate sectors, electricity market and technology
                diffusion models, and policy aspects for industry sectors - connected to ASSUME-related energy-market studies.
              </p>
            </div>
          </article>

          <article className="card person">
            <div className="avatar" aria-hidden="true">
              FM
            </div>
            <div>
              <h3>Florian Maurer</h3>
              <div className="meta">FH Aachen - University of Applied Sciences</div>
              <p>
                Open-source development, agent-based modeling of energy markets to compare market designs
                and policies.
              </p>
            </div>
          </article>

          <article className="card person">
            <div className="avatar" aria-hidden="true">
              NH
            </div>
            <div>
              <h3>Nick Harder</h3>
              <div className="meta">Former INATECH CIG</div>
              <p>
                Former core developer of ASSUME, initial developer of reinforcement learning and project lead of the ASSUME project.
              </p>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
