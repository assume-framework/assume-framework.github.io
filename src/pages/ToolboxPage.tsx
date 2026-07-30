import { Database, PlayCircle, BookOpen, Layers, AppWindow, ListChecks } from 'lucide-react';
import { Button } from '../components/ui/Button';
import { FeatureCard } from '../components/ui/FeatureCard';
import { PageHeader } from "../components/ui/PageHeader";

type FeatureStatus = 'implemented' | 'in-progress' | 'planned';

interface Feature {
  name: string;
  status: FeatureStatus;
  description: string;
}

interface FeatureGroup {
  category: string;
  features: Feature[];
}

const STATUS_META: Record<FeatureStatus, { label: string; color: string }> = {
  'implemented': { label: 'Implemented', color: 'var(--brand-secondary)' },
  'in-progress': { label: 'Work in progress', color: 'var(--brand-accent)' },
  'planned': { label: 'Planned', color: 'var(--text-muted)' }
};

function StatusBadge({ status }: { status: FeatureStatus }) {
  const meta = STATUS_META[status];
  return (
    <span
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: '0.5rem',
        fontSize: '0.8rem',
        fontWeight: 600,
        whiteSpace: 'nowrap',
        padding: '0.3rem 0.7rem',
        borderRadius: 'var(--radius-full)',
        border: '1px solid var(--border-color)',
        backgroundColor: 'var(--bg-secondary)',
        color: 'var(--text-primary)'
      }}
    >
      <span
        aria-hidden="true"
        style={{ width: 8, height: 8, borderRadius: '50%', backgroundColor: meta.color, flexShrink: 0 }}
      />
      {meta.label}
    </span>
  );
}

// Migrated from the legacy assume-project.de "ASSUME Toolbox" feature table.
// NOTE: status reflects November 2025 — verify/refresh before publishing.
const featureGroups: FeatureGroup[] = [
  {
    category: 'Markets',
    features: [
      {
        name: 'Market modularity',
        status: 'implemented',
        description:
          'Parent classes provide the basic structure, functionality and syntax that specific markets adapt for interchangeability, starting with a combination of intraday (IDM) and day-ahead (DAM) markets.'
      },
      {
        name: 'Market coupling',
        status: 'implemented',
        description:
          'Spatially interconnected electricity markets via net transfer capacities (NTC), plus different commodity markets such as gas and hydrogen.'
      },
      {
        name: 'Interchangeable clearing algorithms',
        status: 'implemented',
        description:
          'Market clearing is treated as one interchangeable component that can be adapted easily within each market representation.'
      },
      {
        name: 'Redispatch market',
        status: 'implemented',
        description:
          'A market after the day-ahead electricity market that handles redispatch while respecting grid constraints.'
      },
      {
        name: 'Sector coupling',
        status: 'implemented',
        description: 'Detailed modelling of sector-coupling technologies.'
      }
    ]
  },
  {
    category: 'Agents',
    features: [
      {
        name: 'Asset modularity',
        status: 'implemented',
        description:
          'Parent classes provide the basic structure, functionality and syntax that specific agents adapt for interchangeability.'
      },
      {
        name: 'Learning agents',
        status: 'implemented',
        description: 'Deep reinforcement learning is used to define bidding policies.'
      },
      {
        name: 'Exchangeable bidding policies',
        status: 'implemented',
        description: 'Both naive policies and policies learned by the RL agents are supported.'
      },
      {
        name: 'Demand-side management units',
        status: 'implemented',
        description:
          'Beyond fixed demand, demand-side agents can carry their own collection of technologies, such as heat pumps and PV.'
      },
      {
        name: 'Different bid types',
        status: 'implemented',
        description: 'Support for different bids, including block bids and similar order types.'
      },
      {
        name: 'Portfolio optimization',
        status: 'implemented',
        description: 'Available; not yet extensively tested.'
      }
    ]
  },
  {
    category: 'General',
    features: [
      {
        name: 'Database output storage',
        status: 'implemented',
        description:
          'Results can be written to traditional CSV formats or to the provided TimescaleDB for storing simulation outputs.'
      },
      {
        name: 'Graphical result analysis',
        status: 'implemented',
        description:
          'The provided Grafana dashboards allow analysing individual runs, comparing several simulations and tracking the learning progress of DRL agents.'
      },
      {
        name: 'Network representation',
        status: 'implemented',
        description: 'An adaptable network representation that can also read and solve PyPSA examples inside ASSUME.'
      },
      {
        name: 'Communication layer',
        status: 'implemented',
        description:
          'Order books used between agents and markets, built on the mango agent framework.'
      },
      {
        name: 'Interoperable I/O formats',
        status: 'implemented',
        description:
          'Standard data formats adapted from other open-source tools and conventions, enabling scenario reading from AMIRIS and PyPSA.'
      },
      {
        name: 'Scalability & parallel execution',
        status: 'implemented',
        description: 'ASSUME can be run across different Docker containers for parallel execution.'
      }
    ]
  },
  {
    category: 'Deep Reinforcement Learning',
    features: [
      {
        name: 'Strategies for multiple unit types',
        status: 'implemented',
        description: 'Learned strategies for power plants and different storage types.'
      },
      {
        name: 'Multi-market bidding strategy',
        status: 'in-progress',
        description:
          'To handle the variety of configurable markets, the DRL algorithmic settings are being adjusted to manage several markets at once.'
      },
      {
        name: 'Explainability features',
        status: 'in-progress',
        description:
          'Because the learned DRL strategies are rather exploratory, methods to assess them with the help of explainable RL are under development.'
      },
      {
        name: 'Additional algorithms',
        status: 'planned',
        description:
          'Adding PPO alongside MATD3, plus LSTM policies and importance-sampling buffers for MATD3.'
      }
    ]
  }
];

export function ToolboxPage() {
  return (
    <div className="container" style={{ padding: '4rem 0' }}>
      <PageHeader title="The Software Ecosystem" subtitle="An open-source framework for agent-based simulations of European electricity markets, integrating Deep Reinforcement Learning natively." />

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem', marginBottom: '4rem' }}>
        
        {/* Core Engine */}
        <FeatureCard
          icon={<img src="/assume-only-logo.png" alt="ASSUME Logo" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />}
          title="ASSUME (Core Engine)"
        >
          <p style={{ marginBottom: '1rem' }}>
            The Python-based engine that overcomes the limitations of fixed, rule-based behaviors in ABMs by leveraging DRL. It enables researchers to simulate strategic interactions under a wide range of scenarios.
          </p>
          <div style={{ background: 'var(--bg-tertiary)', padding: '1rem', borderRadius: 'var(--radius-sm)', fontFamily: 'monospace', fontSize: '0.9rem', marginBottom: '1.5rem' }}>
            pip install 'assume-framework[all]'
          </div>
          <div style={{ display: 'flex', gap: '1rem' }}>
            <Button variant="outline" href="https://github.com/assume-framework/assume" target="_blank" rel="noopener noreferrer">GitHub</Button>
            <Button variant="outline" href="https://assume.readthedocs.io/en/latest/" target="_blank" rel="noopener noreferrer">Docs</Button>
          </div>
        </FeatureCard>

        {/* GUI */}
        <FeatureCard icon={<AppWindow size={24} />} title="ASSUME GUI">
          <p style={{ marginBottom: '1.5rem' }}>
            A companion web application that allows you to create ASSUME configurations directly in your browser. It acts as a configuration builder and runs scenarios via a backend service.
          </p>
          <div style={{ marginBottom: '1.5rem', borderRadius: 'var(--radius-sm)', overflow: 'hidden', border: '1px solid var(--border-color)' }}>
            <img src="/img/screenshots/assume-gui.png" alt="ASSUME GUI Dashboard" style={{ width: '100%', display: 'block' }} />
          </div>
          <div style={{ display: 'flex', gap: '1rem' }}>
            <Button variant="outline" href="https://github.com/assume-framework/assume-gui" target="_blank" rel="noopener noreferrer">GitHub</Button>
            <Button variant="outline" href="https://assume.idt.fh-aachen.de" target="_blank" rel="noopener noreferrer">Live Demo</Button>
          </div>
        </FeatureCard>

        {/* Examples */}
        <FeatureCard icon={<Layers size={24} />} title="ASSUME Examples">
          <p style={{ marginBottom: '1.5rem' }}>
            Runnable example scenarios and scripts in a separate, lightweight repository. Explore typical workflows quickly without bloating the main package.
          </p>
          <div style={{ display: 'flex', gap: '1rem' }}>
            <Button variant="outline" href="https://github.com/assume-framework/assume-examples" target="_blank" rel="noopener noreferrer">View Repository</Button>
          </div>
        </FeatureCard>
      </div>

      {/* Feature Status Matrix (migrated from legacy site) */}
      <section id="status" style={{ marginBottom: '4rem' }}>
        <style>{`
          .fm-group { margin-bottom: 2.5rem; }
          .fm-group:last-child { margin-bottom: 0; }
          .fm-group-title { font-size: 1.25rem; margin: 0 0 0.25rem 0; }
          .fm-table { border-top: 1px solid var(--border-color); }
          .fm-row {
            display: grid;
            grid-template-columns: minmax(200px, 240px) 168px 1fr;
            gap: 0.75rem 1.5rem;
            align-items: start;
            padding: 1rem 0;
            border-bottom: 1px solid var(--border-color);
          }
          .fm-name { font-weight: 600; color: var(--text-primary); }
          .fm-desc { color: var(--text-secondary); font-size: 0.92rem; line-height: 1.55; margin: 0; }
          @media (max-width: 720px) {
            .fm-row { grid-template-columns: 1fr; gap: 0.5rem; padding: 1.15rem 0; }
          }
        `}</style>

        <h2 style={{ marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
          <ListChecks color="var(--brand-primary)" /> Feature Status
        </h2>
        <p style={{ color: 'var(--text-secondary)', marginBottom: '0.5rem', maxWidth: '700px', lineHeight: 1.6 }}>
          The ASSUME core framework covers a broad set of markets, agents and analysis features. The overview below tracks what is already implemented, in progress or planned.
        </p>
        <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem', marginBottom: '2.5rem' }}>
          Status as of November 2025.
        </p>

        {featureGroups.map((group) => (
          <div key={group.category} className="fm-group">
            <h3 className="fm-group-title">{group.category}</h3>
            <div className="fm-table">
              {group.features.map((feature) => (
                <div key={feature.name} className="fm-row">
                  <div className="fm-name">{feature.name}</div>
                  <div>
                    <StatusBadge status={feature.status} />
                  </div>
                  <p className="fm-desc">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </section>

      <section style={{ backgroundColor: 'var(--bg-secondary)', padding: '3rem', borderRadius: 'var(--radius-lg)', border: '1px solid var(--border-color)', marginBottom: '4rem' }}>
        <h2 style={{ marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
          <PlayCircle color="var(--brand-primary)" /> Interactive Tutorials
        </h2>
        <p style={{ color: 'var(--text-secondary)', marginBottom: '2rem', maxWidth: '700px' }}>
          Get started immediately with our Google Colab notebooks. Learn how to configure new units, adapt RL algorithms and simulate storage operators without setting up a local environment.
        </p>
        <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
          <Button variant="outline" href="https://colab.research.google.com/github/assume-framework/assume/blob/main/examples/notebooks/03_custom_unit_example.ipynb" target="_blank" rel="noopener noreferrer">Custom Unit Example</Button>
          <Button variant="outline" href="https://colab.research.google.com/github/assume-framework/assume/blob/main/examples/notebooks/04b_reinforcement_learning_example.ipynb" target="_blank" rel="noopener noreferrer">RL Power Plant</Button>
          <Button variant="outline" href="https://colab.research.google.com/github/assume-framework/assume/blob/main/examples/notebooks/04c_reinforcement_learning_storage_example.ipynb" target="_blank" rel="noopener noreferrer">RL Storage</Button>
        </div>
      </section>

      <section style={{ backgroundColor: 'var(--bg-secondary)', padding: '3rem', borderRadius: 'var(--radius-lg)', border: '1px solid var(--border-color)', marginBottom: '4rem' }}>
        <h2 style={{ marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
          <Database color="var(--brand-primary)" /> Feature Deep-Dives
        </h2>
        <p style={{ color: 'var(--text-secondary)', marginBottom: '2rem', maxWidth: '700px' }}>
          Dive into the official documentation to explore the advanced capabilities of the ASSUME framework, including database integrations and learning algorithms.
        </p>
        <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
          <Button variant="outline" href="https://assume.readthedocs.io/en/latest/installation.html#timescale-database-and-grafana-dashboards" target="_blank" rel="noopener noreferrer">TimescaleDB & Grafana Setup</Button>
          <Button variant="outline" href="https://assume.readthedocs.io/en/latest/learning_algorithm.html" target="_blank" rel="noopener noreferrer">Deep Reinforcement Learning</Button>
          <Button variant="outline" href="https://assume.readthedocs.io/en/latest/network_clearing.html" target="_blank" rel="noopener noreferrer">PyPSA Network Clearing</Button>
        </div>
      </section>

      <section style={{ borderTop: '1px solid var(--border-color)', paddingTop: '4rem' }}>
        <h2 style={{ marginBottom: '1.5rem' }}>Documentation & Contributing</h2>
        <p style={{ color: 'var(--text-secondary)', marginBottom: '2rem', maxWidth: '700px' }}>
          ASSUME is built for the community. We provide extensive API documentation and welcome contributions ranging from new market mechanisms to bug fixes.
        </p>
        <div style={{ display: 'flex', gap: '1rem' }}>
          <Button variant="primary" href="https://assume.readthedocs.io/en/latest/" target="_blank" rel="noopener noreferrer">Read the Docs</Button>
          <Button variant="secondary" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }} href="https://github.com/assume-framework/assume" target="_blank" rel="noopener noreferrer">
             <BookOpen size={18} /> View on GitHub
          </Button>
        </div>
      </section>

    </div>
  );
}