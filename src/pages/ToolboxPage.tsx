import { Terminal, Database, PlayCircle, BookOpen, Layers, AppWindow } from 'lucide-react';
import { Button } from '../components/ui/Button';

export function ToolboxPage() {
  return (
    <div className="container" style={{ padding: '4rem 0' }}>
      <header style={{ marginBottom: '4rem', maxWidth: '800px' }}>
        <h1 style={{ fontSize: '3rem', marginBottom: '1rem', letterSpacing: '-0.02em' }}>The Software Ecosystem</h1>
        <p style={{ fontSize: '1.25rem', color: 'var(--text-secondary)' }}>
          An open-source framework for agent-based simulations of European electricity markets, integrating Deep Reinforcement Learning natively.
        </p>
      </header>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem', marginBottom: '4rem' }}>
        
        {/* Core Engine */}
        <div className="feature-card">
          <div className="feature-icon" style={{ padding: 0, overflow: 'hidden', backgroundColor: 'transparent' }}>
            <img src="/assume-only-logo.png" alt="ASSUME Logo" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
          </div>
          <h3>ASSUME (Core Engine)</h3>
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
        </div>

        {/* GUI */}
        <div className="feature-card">
          <div className="feature-icon">
            <AppWindow size={24} />
          </div>
          <h3>ASSUME GUI</h3>
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
        </div>

        {/* Examples */}
        <div className="feature-card">
          <div className="feature-icon">
            <Layers size={24} />
          </div>
          <h3>ASSUME Examples</h3>
          <p style={{ marginBottom: '1.5rem' }}>
            Runnable example scenarios and scripts in a separate, lightweight repository. Explore typical workflows quickly without bloating the main package.
          </p>
          <div style={{ display: 'flex', gap: '1rem' }}>
            <Button variant="outline" href="https://github.com/assume-framework/assume-examples" target="_blank" rel="noopener noreferrer">View Repository</Button>
          </div>
        </div>
      </div>

      <section style={{ backgroundColor: 'var(--bg-secondary)', padding: '3rem', borderRadius: 'var(--radius-lg)', border: '1px solid var(--border-color)', marginBottom: '4rem' }}>
        <h2 style={{ marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
          <PlayCircle color="var(--brand-primary)" /> Interactive Tutorials
        </h2>
        <p style={{ color: 'var(--text-secondary)', marginBottom: '2rem', maxWidth: '700px' }}>
          Get started immediately with our Google Colab notebooks. Learn how to configure new units, adapt RL algorithms, and simulate storage operators without setting up a local environment.
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
