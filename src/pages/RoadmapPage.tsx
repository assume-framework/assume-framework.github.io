import { CheckCircle2, CircleDashed } from 'lucide-react';

const milestones = [
  {
    year: '2022-2025',
    title: 'ASSUME Project',
    status: 'completed',
    description: 'Establishment of the core agent-based simulation framework, integration of deep reinforcement learning, and development of initial market setups.'
  },
  {
    year: '2025',
    title: 'ADAPT Project Launch',
    status: 'current',
    description: 'Kickoff of the Adaptive AI-supported Simulation Toolbox for Energy Market Design. Focus shifts to low-code interfaces and explainable RL.'
  },
  {
    year: '2026',
    title: 'Adaptive Market Agent',
    status: 'upcoming',
    description: 'Release of the AI-driven agent representing the regulator to adjust market rules autonomously and observe participant reactions.'
  },
  {
    year: '2027',
    title: 'Local Grids & Sector Coupling',
    status: 'upcoming',
    description: 'Extension of the modelling scope to distribution networks and cross-sector links, enabling congestion management simulations.'
  },
  {
    year: '2028',
    title: 'ADAPT Completion',
    status: 'upcoming',
    description: 'Finalization of the low-code RL toolbox with comprehensive explainability tools for researchers.'
  }
];

export function RoadmapPage() {
  return (
    <div className="container" style={{ padding: '4rem 0' }}>
      <header style={{ marginBottom: '4rem', maxWidth: '800px' }}>
        <h1 style={{ fontSize: '3rem', marginBottom: '1rem', letterSpacing: '-0.02em' }}>Project Roadmap</h1>
        <p style={{ fontSize: '1.25rem', color: 'var(--text-secondary)' }}>
          Tracking the evolution of the ASSUME toolbox and the upcoming milestones for the ADAPT initiative.
        </p>
      </header>

      <div style={{ position: 'relative', maxWidth: '800px' }}>
        {/* Timeline Line */}
        <div style={{ position: 'absolute', left: '23px', top: '0', bottom: '0', width: '2px', backgroundColor: 'var(--border-color)' }} />

        {milestones.map((milestone, idx) => (
          <div key={idx} style={{ display: 'flex', gap: '2rem', marginBottom: '3rem', position: 'relative' }}>
            <div style={{ backgroundColor: 'var(--bg-primary)', zIndex: 1, marginTop: '0.25rem' }}>
              {milestone.status === 'completed' ? (
                <CheckCircle2 size={48} color="var(--brand-secondary)" style={{ backgroundColor: 'var(--bg-primary)', borderRadius: '50%' }} />
              ) : milestone.status === 'current' ? (
                <CircleDashed size={48} color="var(--brand-primary)" style={{ backgroundColor: 'var(--bg-primary)', borderRadius: '50%' }} />
              ) : (
                <div style={{ width: '48px', height: '48px', borderRadius: '50%', border: '2px solid var(--border-color)', backgroundColor: 'var(--bg-secondary)' }} />
              )}
            </div>
            
            <div style={{ flex: 1, padding: '1.5rem', backgroundColor: milestone.status === 'current' ? 'var(--bg-secondary)' : 'transparent', border: milestone.status === 'current' ? '1px solid var(--border-color)' : 'none', borderRadius: 'var(--radius-md)' }}>
              <span style={{ fontSize: '0.9rem', fontWeight: 600, color: 'var(--brand-accent)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>{milestone.year}</span>
              <h3 style={{ fontSize: '1.5rem', margin: '0.5rem 0' }}>{milestone.title}</h3>
              <p style={{ color: 'var(--text-secondary)', margin: 0, lineHeight: 1.6 }}>{milestone.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
