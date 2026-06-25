import { CheckCircle2, CircleDashed } from 'lucide-react';
import './pages.css';

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
    <div className="container page-container">
      <header className="page-header">
        <h1 className="page-title">Project Roadmap</h1>
        <p className="page-subtitle">
          Tracking the evolution of the ASSUME toolbox and the upcoming milestones for the ADAPT initiative.
        </p>
      </header>

      <div className="roadmap-timeline">
        {/* Timeline Line */}
        <div className="roadmap-line" />

        {milestones.map((milestone) => (
          <div key={milestone.title} className="roadmap-item">
            <div className="roadmap-icon-wrapper">
              {milestone.status === 'completed' ? (
                <CheckCircle2 size={48} color="var(--brand-secondary)" className="roadmap-icon" />
              ) : milestone.status === 'current' ? (
                <CircleDashed size={48} color="var(--brand-primary)" className="roadmap-icon" />
              ) : (
                <div className="roadmap-icon-empty" />
              )}
            </div>
            
            <div className={`roadmap-content ${milestone.status === 'current' ? 'current' : ''}`}>
              <span className="roadmap-year">{milestone.year}</span>
              <h3>{milestone.title}</h3>
              <p>{milestone.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
