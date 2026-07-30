import { Mail, GitBranch, MessageSquare, Users } from 'lucide-react';
import { Button } from '../components/ui/Button';
import { GitHubStats } from '../components/ui/GitHubStats';
import { PageHeader } from "../components/ui/PageHeader";
import './pages.css';

const team = [
  {
    id: 'grimm',
    name: 'Gunter Grimm',
    meta: 'INATECH CIG, University of Freiburg',
    bio: "Research associate and doctoral student focusing on market participants' interaction with regulation and market design across time horizons. He coordinates the ADAPT project.",
    initials: 'GG',
    image: '/img/people/gunter-grimm.jpg'
  },
  {
    id: 'raskob',
    name: 'Jannik Raskob',
    meta: 'IDT, FH Aachen - University of Applied Sciences',
    bio: 'PhD student working with agentic AI, ASSUME GUI and ontologies.',
    initials: 'JR',
    image: '/img/people/jannik-raskob.jpg'
  },
  {
    id: 'reinecke',
    name: 'Finn Reinecke',
    meta: 'INATECH CIG, University of Freiburg',
    bio: 'Reinforcement learning, market simulation',
    initials: 'FR'
  },
  {
    id: 'miskiw',
    name: 'Kim K. Miskiw',
    meta: 'WIN - IM, KIT',
    bio: 'Research interests include deep reinforcement learning in electricity market simulations, agent-based electricity market modeling, energy market engineering and stochastic optimization.',
    initials: 'KM',
    image: '/img/people/kim-k-miskiw.png'
  },
  {
    id: 'khanra',
    name: 'Manish Khanra',
    meta: 'Fraunhofer ISI',
    bio: 'Works on integrating hydrogen and e-fuels for decarbonizing hard-to-abate sectors, electricity market and technology diffusion models.',
    initials: 'MK',
    image: '/img/people/manish-khanra.png'
  },
  {
    id: 'maurer',
    name: 'Florian Maurer',
    meta: 'IDT, FH Aachen - University of Applied Sciences',
    bio: 'Open-source development, agent-based modeling of energy markets to compare market designs and policies.',
    initials: 'FM',
    image: '/img/people/florian-maurer.png'
  },
  {
    id: 'harder',
    name: 'Nick Harder',
    meta: 'Former INATECH CIG',
    bio: 'Former core developer of ASSUME, initial developer of reinforcement learning and project lead of the ASSUME project.',
    initials: 'NH'
  },
  {
    id: 'patil',
    name: 'Parag Patil',
    meta: 'Fraunhofer IEG',
    bio: 'Demand-side flexibility modeling, hydrogen-based steel production pathways and infrastructure modeling.',
    initials: 'PP'
  },
  {
    id: 'qussous',
    name: 'Ramiz Qussous',
    meta: 'INATECH CIG, University of Freiburg',
    bio: 'Co-author of ASSUME, wholesale electricity market modeling with multi-agent deep reinforcement learning.',
    initials: 'RQ'
  },
  {
    id: 'thederan',
    name: 'Marie Thederan',
    meta: 'WIN - IM, KIT',
    bio: 'Market simulation, agent-based electricity market modeling.',
    initials: 'MT'
  }
];

export function CommunityPage() {
  return (
    <div className="container page-container">
      <PageHeader title="Community & Team" subtitle="ASSUME is developed by a collaboration across several institutions." />

      <section className="section">
        <h2 className="section-title">Contributing Institutions</h2>
        <ul className="inst-grid">
          {[
            { name: 'INATECH CIG, University of Freiburg', url: 'https://www.inatech.uni-freiburg.de/en/chairs/computational-economics' },
            { name: 'WIN - IM, Karlsruhe Institute of Technology (KIT)', url: 'https://im.iism.kit.edu/' },
            { name: 'IDT, FH Aachen - University of Applied Sciences', url: 'https://idt.fh-aachen.de' },
            { name: 'Fraunhofer ISI', url: 'https://www.isi.fraunhofer.de/' },
            { name: 'Fraunhofer IEG', url: 'https://www.ieg.fraunhofer.de/' }
          ].map(inst => (
            <li key={inst.name} className="inst-card">
              <a href={inst.url} target="_blank" rel="noopener noreferrer">
                {inst.name}
              </a>
            </li>
          ))}
        </ul>
      </section>

      <section className="section">
        <h2 className="section-title">Team & Contributors</h2>
        <div className="team-grid">
          {team.map(member => (
            <div key={member.id} className="team-card">
              {member.image ? (
                <img src={member.image} alt={member.name} className="team-avatar" />
              ) : (
                <div className="team-initials" aria-hidden="true">{member.initials}</div>
              )}
              <div className="team-body">
                <h3 className="team-name">{member.name}</h3>
                <p className="team-meta">{member.meta}</p>
                <p className="team-bio">{member.bio}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="section section-divided">
        <h2 className="section-title">Get in Touch</h2>
        <p className="prose" style={{ marginBottom: '2rem' }}>
          Have questions or want to collaborate? The best way to reach us is through our Matrix channel, opening an issue on GitHub, or asking on the OpenMod Discourse forum.
        </p>
        <div className="btn-row">
          <Button variant="primary" href="https://matrix.to/#/#assume-framework:matrix.org" target="_blank" rel="noopener noreferrer">
            <MessageSquare size={18} /> Join Matrix Chat
          </Button>
          <Button variant="outline" href="https://forum.openmod.org/" target="_blank" rel="noopener noreferrer">
            <Users size={18} /> OpenMod Forum
          </Button>
          <Button variant="outline" href="https://github.com/assume-framework/assume/issues" target="_blank" rel="noopener noreferrer">
            <GitBranch size={18} /> GitHub Issues
          </Button>
          <Button variant="outline" href="mailto:gunter.grimm@inatech.uni-freiburg.de">
            <Mail size={18} /> Email Coordinator
          </Button>
        </div>
      </section>

      <section className="section section-divided">
        <h2 className="section-title">Contributing</h2>
        <p className="prose" style={{ marginBottom: '2rem' }}>
          ASSUME is built for the community. We welcome contributions ranging from new market mechanisms and bidding strategies to bug fixes and documentation improvements.
        </p>
        <Button variant="outline" href="https://github.com/assume-framework/assume/blob/main/CONTRIBUTING.md" target="_blank" rel="noopener noreferrer">
          <GitBranch size={18} /> Contribution Guidelines
        </Button>
      </section>

      <section className="section section-divided">
        <h2 className="section-title">The Repository in Numbers</h2>
        <GitHubStats />
      </section>
    </div>
  );
}
