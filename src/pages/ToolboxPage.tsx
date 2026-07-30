import { Database, PlayCircle, BookOpen, Layers, AppWindow, ListChecks, Tag } from 'lucide-react';
import { Button } from '../components/ui/Button';
import { FeatureCard } from '../components/ui/FeatureCard';
import { PageHeader } from "../components/ui/PageHeader";
import { ReleaseFeed } from '../components/ui/ReleaseFeed';
import './pages.css';

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
    <span className="status-badge">
      <span className="status-dot" aria-hidden="true" style={{ backgroundColor: meta.color }} />
      {meta.label}
    </span>
  );
}

// NOTE: status reflects November 2025.
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
    <div className="container page-container">
      <PageHeader title="The Software Ecosystem" subtitle="An open-source framework for agent-based simulations of European electricity markets, integrating Deep Reinforcement Learning natively." />

      <div className="card-grid section">

        {/* Core Engine */}
        <FeatureCard
          icon={<img src="/assume-only-logo.png" alt="" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />}
          title="ASSUME (Core Engine)"
        >
          <p style={{ marginBottom: '1rem' }}>
            The Python-based engine that overcomes the limitations of fixed, rule-based behaviors in ABMs by leveraging DRL. It enables researchers to simulate strategic interactions under a wide range of scenarios.
          </p>
          <div className="toolbox-install">pip install 'assume-framework[all]'</div>
          <div className="btn-row">
            <Button variant="outline" href="https://github.com/assume-framework/assume" target="_blank" rel="noopener noreferrer">GitHub</Button>
            <Button variant="outline" href="https://assume.readthedocs.io/en/latest/" target="_blank" rel="noopener noreferrer">Docs</Button>
          </div>
        </FeatureCard>

        {/* GUI */}
        <FeatureCard icon={<AppWindow size={24} />} title="ASSUME GUI">
          <p style={{ marginBottom: '1.5rem' }}>
            A companion web application that allows you to create ASSUME configurations directly in your browser. It acts as a configuration builder and runs scenarios via a backend service.
          </p>
          <figure className="toolbox-shot">
            <img src="/img/screenshots/assume-gui.png" alt="ASSUME GUI Dashboard" />
          </figure>
          <div className="btn-row">
            <Button variant="outline" href="https://github.com/assume-framework/assume-gui" target="_blank" rel="noopener noreferrer">GitHub</Button>
            <Button variant="outline" href="https://assume.idt.fh-aachen.de" target="_blank" rel="noopener noreferrer">Live Demo</Button>
          </div>
        </FeatureCard>

        {/* Examples */}
        <FeatureCard icon={<Layers size={24} />} title="ASSUME Examples">
          <p style={{ marginBottom: '1.5rem' }}>
            Runnable example scenarios and scripts in a separate, lightweight repository. Explore typical workflows quickly without bloating the main package.
          </p>
          <div className="btn-row">
            <Button variant="outline" href="https://github.com/assume-framework/assume-examples" target="_blank" rel="noopener noreferrer">View Repository</Button>
          </div>
        </FeatureCard>
      </div>

      {/* Feature Status Matrix */}
      <section id="status" className="section">
        <h2 className="section-title" style={{ marginBottom: '1rem' }}>
          <ListChecks color="var(--brand-primary)" /> Feature Status
        </h2>
        <p className="prose" style={{ marginBottom: '0.5rem' }}>
          The ASSUME core framework covers a broad set of markets, agents and analysis features. The overview below tracks what is already implemented, in progress or planned.
        </p>
        <p style={{ color: 'var(--text-muted)', fontSize: 'var(--fs-tiny)', marginBottom: '2.5rem' }}>
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



      <section className="panel section">
        <h2 className="section-title">
          <PlayCircle color="var(--brand-primary)" /> Interactive Tutorials
        </h2>
        <p className="prose" style={{ marginBottom: '2rem' }}>
          Get started immediately with our Google Colab notebooks. Learn how to configure new units, adapt RL algorithms and simulate storage operators without setting up a local environment.
        </p>
        <div className="btn-row">
          <Button variant="outline" href="https://colab.research.google.com/github/assume-framework/assume/blob/main/examples/notebooks/03_custom_unit_example.ipynb" target="_blank" rel="noopener noreferrer">Custom Unit Example</Button>
          <Button variant="outline" href="https://colab.research.google.com/github/assume-framework/assume/blob/main/examples/notebooks/04b_reinforcement_learning_example.ipynb" target="_blank" rel="noopener noreferrer">RL Power Plant</Button>
          <Button variant="outline" href="https://colab.research.google.com/github/assume-framework/assume/blob/main/examples/notebooks/04c_reinforcement_learning_storage_example.ipynb" target="_blank" rel="noopener noreferrer">RL Storage</Button>
        </div>
      </section>

      <section className="panel section">
        <h2 className="section-title">
          <Database color="var(--brand-primary)" /> Feature Deep-Dives
        </h2>
        <p className="prose" style={{ marginBottom: '2rem' }}>
          Dive into the official documentation to explore the advanced capabilities of the ASSUME framework, including database integrations and learning algorithms.
        </p>
        <div className="btn-row">
          <Button variant="outline" href="https://assume.readthedocs.io/en/latest/installation.html#timescale-database-and-grafana-dashboards" target="_blank" rel="noopener noreferrer">TimescaleDB & Grafana Setup</Button>
          <Button variant="outline" href="https://assume.readthedocs.io/en/latest/learning_algorithm.html" target="_blank" rel="noopener noreferrer">Deep Reinforcement Learning</Button>
          <Button variant="outline" href="https://assume.readthedocs.io/en/latest/network_clearing.html" target="_blank" rel="noopener noreferrer">PyPSA Network Clearing</Button>
        </div>
      </section>


      {/* Releases (collected from the GitHub API at build time) */}
      <section id="releases" className="section section-divided">
        <h2 className="section-title" style={{ marginBottom: '1rem' }}>
          <Tag color="var(--brand-primary)" /> Latest Releases
        </h2>
        <p className="prose" style={{ marginBottom: '2rem' }}>
          The toolbox is released as versioned packages, so results can be reproduced against a specific version.
          Every release is archived on Zenodo with its own DOI.
        </p>
        <ReleaseFeed />
      </section>

      <section className="section section-divided">
        <h2 className="section-title">Documentation & Contributing</h2>
        <p className="prose" style={{ marginBottom: '2rem' }}>
          ASSUME is built for the community. We provide extensive API documentation and welcome contributions ranging from new market mechanisms to bug fixes.
        </p>
        <div className="btn-row">
          <Button variant="primary" href="https://assume.readthedocs.io/en/latest/" target="_blank" rel="noopener noreferrer">Read the Docs</Button>
          <Button variant="secondary" href="https://github.com/assume-framework/assume" target="_blank" rel="noopener noreferrer">
             <BookOpen size={18} /> View on GitHub
          </Button>
        </div>
      </section>

    </div>
  );
}