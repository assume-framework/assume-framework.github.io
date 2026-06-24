import { Mail, GitBranch } from 'lucide-react';
import { Button } from '../components/ui/Button';

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
    meta: 'FH Aachen - University of Applied Sciences',
    bio: 'ASSUME GUI, reinforcement learning, market simulation',
    initials: 'JR'
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
    bio: 'Research interests include deep reinforcement learning in electricity market simulations, agent-based electricity market modeling, energy market engineering, and stochastic optimization.',
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
    meta: 'FH Aachen - University of Applied Sciences',
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
  }
];

export function CommunityPage() {
  return (
    <div className="container" style={{ padding: '4rem 0' }}>
      <header style={{ marginBottom: '4rem', maxWidth: '800px' }}>
        <h1 style={{ fontSize: '3rem', marginBottom: '1rem', letterSpacing: '-0.02em' }}>Community & Team</h1>
        <p style={{ fontSize: '1.25rem', color: 'var(--text-secondary)' }}>
          ASSUME is developed by a collaboration across several institutions.
        </p>
      </header>

      <section style={{ marginBottom: '5rem' }}>
        <h2 style={{ fontSize: '2rem', marginBottom: '2rem' }}>Contributing Institutions</h2>
        <ul style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1rem', listStyle: 'none', padding: 0 }}>
          <li style={{ padding: '1.5rem', backgroundColor: 'var(--bg-secondary)', border: '1px solid var(--border-color)', borderRadius: 'var(--radius-sm)', fontWeight: 500 }}>INATECH CIG, University of Freiburg</li>
          <li style={{ padding: '1.5rem', backgroundColor: 'var(--bg-secondary)', border: '1px solid var(--border-color)', borderRadius: 'var(--radius-sm)', fontWeight: 500 }}>WIN - IM, Karlsruhe Institute of Technology (KIT)</li>
          <li style={{ padding: '1.5rem', backgroundColor: 'var(--bg-secondary)', border: '1px solid var(--border-color)', borderRadius: 'var(--radius-sm)', fontWeight: 500 }}>FH Aachen - University of Applied Sciences</li>
          <li style={{ padding: '1.5rem', backgroundColor: 'var(--bg-secondary)', border: '1px solid var(--border-color)', borderRadius: 'var(--radius-sm)', fontWeight: 500 }}>Fraunhofer ISI</li>
          <li style={{ padding: '1.5rem', backgroundColor: 'var(--bg-secondary)', border: '1px solid var(--border-color)', borderRadius: 'var(--radius-sm)', fontWeight: 500 }}>Fraunhofer IEG</li>
        </ul>
      </section>

      <section style={{ marginBottom: '5rem' }}>
        <h2 style={{ fontSize: '2rem', marginBottom: '2rem' }}>Team & Contributors</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: '2rem' }}>
          {team.map(member => (
            <div key={member.id} style={{ display: 'flex', gap: '1.5rem', padding: '1.5rem', border: '1px solid var(--border-color)', borderRadius: 'var(--radius-md)' }}>
              {member.image ? (
                <img 
                  src={member.image} 
                  alt={member.name} 
                  style={{ width: '48px', height: '48px', flexShrink: 0, borderRadius: '50%', objectFit: 'cover', border: '1px solid var(--border-color)' }}
                />
              ) : (
                <div style={{ width: '48px', height: '48px', flexShrink: 0, backgroundColor: 'var(--bg-tertiary)', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '50%', fontWeight: 600, color: 'var(--brand-primary)' }}>
                  {member.initials}
                </div>
              )}
              <div>
                <h3 style={{ fontSize: '1.1rem', marginBottom: '0.25rem' }}>{member.name}</h3>
                <p style={{ fontSize: '0.85rem', color: 'var(--brand-accent)', fontWeight: 600, marginBottom: '0.75rem' }}>{member.meta}</p>
                <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', margin: 0, lineHeight: 1.5 }}>{member.bio}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section style={{ borderTop: '1px solid var(--border-color)', paddingTop: '4rem' }}>
        <h2 style={{ fontSize: '2rem', marginBottom: '1.5rem' }}>Get in Touch</h2>
        <p style={{ color: 'var(--text-secondary)', marginBottom: '2rem', maxWidth: '600px' }}>
          Have questions or want to collaborate? The best way to reach us is through our Matrix channel or by opening an issue on GitHub.
        </p>
        <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
          <Button variant="primary" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }} href="mailto:gunter.grimm@inatech.uni-freiburg.de">
            <Mail size={18} /> Join Matrix Chat
          </Button>
          <Button variant="outline" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }} href="https://github.com/assume-framework/assume/issues" target="_blank" rel="noopener noreferrer">
            <GitBranch size={18} /> GitHub Issues
          </Button>
        </div>
      </section>
    </div>
  );
}
