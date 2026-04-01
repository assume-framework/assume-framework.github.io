import { Link } from 'react-router-dom';

type TeamMember = {
  id: string;
  name: string;
  meta: string;
  bio: string;
  initials: string;
  /** Path under `public/`, e.g. `/img/people/gunter-grimm.jpg` */
  photoSrc?: string;
};

const team: TeamMember[] = [
  {
    id: 'grimm',
    name: 'Gunter Grimm',
    meta: 'INATECH CIG, University of Freiburg',
    bio: "Research associate and doctoral student focusing on market participants' interaction with regulation and market design across time horizons. He coordinates the ADAPT project.",
    initials: 'GG',
    photoSrc: '/img/people/gunter-grimm.jpg',
  },
  {
    id: 'raskob',
    name: 'Jannik Raskob',
    meta: 'FH Aachen - University of Applied Sciences',
    bio: 'ASSUME GUI, reinforcement learning, market simulation',
    initials: 'JR',
  },
  {
    id: 'reinecke',
    name: 'Finn Reinecke',
    meta: 'INATECH CIG, University of Freiburg',
    bio: 'Reinforcement learning, market simulation',
    initials: 'FR',
  },
  {
    id: 'thederan',
    name: 'Marie Thederan',
    meta: 'WIN - IM, KIT',
    bio: 'Reinforcement learning, market simulation, market learning',
    initials: 'MT',
  },
  {
    id: 'miskiw',
    name: 'Kim K. Miskiw',
    meta: 'WIN - IM, KIT',
    bio: 'Research interests include deep reinforcement learning in electricity market simulations, agent-based electricity market modeling, energy market engineering, and stochastic optimization (including work on bidding under uncertainty in sequential markets).',
    initials: 'KM',
    photoSrc: '/img/people/kim-k-miskiw.png',
  },
  {
    id: 'khanra',
    name: 'Manish Khanra',
    meta: 'Fraunhofer ISI',
    bio: 'Works on integrating hydrogen and e-fuels for decarbonizing hard-to-abate sectors, electricity market and technology diffusion models, and policy aspects for industry sectors - connected to ASSUME-related energy-market studies.',
    initials: 'MK',
    photoSrc: '/img/people/manish-khanra.png',
  },
  {
    id: 'maurer',
    name: 'Florian Maurer',
    meta: 'FH Aachen - University of Applied Sciences',
    bio: 'Open-source development, agent-based modeling of energy markets to compare market designs and policies.',
    initials: 'FM',
    photoSrc: '/img/people/florian-maurer.png',
  },
  {
    id: 'harder',
    name: 'Nick Harder',
    meta: 'Former INATECH CIG',
    bio: 'Former core developer of ASSUME, initial developer of reinforcement learning and project lead of the ASSUME project.',
    initials: 'NH',
  },
];

function PersonVisual({ member }: { member: TeamMember }) {
  if (member.photoSrc) {
    return (
      <img className="person-photo" src={member.photoSrc} alt="" width={64} height={64} loading="lazy" />
    );
  }
  return (
    <div className="avatar" aria-hidden="true">
      {member.initials}
    </div>
  );
}

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
          {team.map((member) => (
            <article key={member.id} className="card person">
              <PersonVisual member={member} />
              <div>
                <h3>{member.name}</h3>
                <div className="meta">{member.meta}</div>
                <p>{member.bio}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
