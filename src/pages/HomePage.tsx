import { Button } from '../components/ui/Button';
import { FeatureCard } from '../components/ui/FeatureCard';
import { Zap, Network, Lightbulb } from 'lucide-react';
import './home.css';

export function HomePage() {
  return (
    <div className="container">
      {/* Hero Section */}
      <section className="hero-section">
        <h1 className="hero-title">
          Agent-Based Electricity Markets <br />
          <span className="hero-highlight">Simulation Toolbox</span>
        </h1>
        <p className="hero-subtitle">
          Explore the future of energy markets with deep reinforcement learning, sector coupling and adaptive AI architectures.
        </p>
        <div className="hero-actions">
          <Button variant="primary" to="/toolbox">Get Started</Button>
          <Button variant="secondary" href="https://assume.readthedocs.io/en/latest/" target="_blank" rel="noopener noreferrer">View Documentation</Button>
        </div>
      </section>

      {/* Feature Cards Grid */}
      <section className="features-grid">
        <FeatureCard icon={<Network size={28} />} title="Sector Coupling & Grids">
          <p>Model complex distribution networks and test incentive schemes for flexible loads like electrolyzers and industrial consumers.</p>
        </FeatureCard>

        <FeatureCard icon={<Zap size={28} />} title="Deep Reinforcement Learning">
          <p>A user-friendly, low-code RL toolbox designed for researchers to optimize market designs without deep programming expertise.</p>
        </FeatureCard>

        <FeatureCard icon={<Lightbulb size={28} />} title="Adaptive Market-Agents">
          <p>Simulate regulators and market authorities that autonomously tweak rules and observe participant reactions.</p>
        </FeatureCard>
      </section>

      {/* Results in Action Section */}
      <section style={{ margin: '6rem 0' }}>
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>Results in Action</h2>
          <p style={{ fontSize: '1.2rem', color: 'var(--text-secondary)', maxWidth: '800px', margin: '0 auto', lineHeight: 1.6 }}>
            ASSUME has been used to solve real-world market design problems, such as evaluating industrial demand-side flexibility, analyzing learning storage operators and modeling congestion management. 
            The ecosystem provides built-in integration with <strong>TimescaleDB</strong> and <strong>Grafana</strong> for instant scenario analysis.
          </p>
        </div>
        
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem', alignItems: 'center' }}>
          <div style={{ borderRadius: 'var(--radius-lg)', overflow: 'hidden', border: '1px solid var(--border-color)', boxShadow: '0 10px 30px rgba(0,0,0,0.1)' }}>
            <img src="/img/screenshots/Grafana_General.png" alt="Grafana General Dashboard showing electricity market prices and volumes" style={{ width: '100%', display: 'block' }} />
          </div>
          <div style={{ borderRadius: 'var(--radius-lg)', overflow: 'hidden', border: '1px solid var(--border-color)', boxShadow: '0 10px 30px rgba(0,0,0,0.1)' }}>
            <img src="/img/screenshots/Grafana_General_2.png" alt="Grafana General Dashboard showing detailed agent dispatch profiles" style={{ width: '100%', display: 'block' }} />
          </div>
        </div>
      </section>

      {/* Citing ASSUME */}
      <section className="news-feed">
        <h2>Cite ASSUME</h2>
        <p style={{ color: 'var(--text-secondary)', marginBottom: '1.5rem', lineHeight: 1.6 }}>
          If you use ASSUME in your research, please cite the SoftwareX article:
        </p>
        <div className="news-item">
          <p className="news-title" style={{ fontWeight: 600 }}>
            ASSUME: An agent-based simulation framework for exploring electricity market dynamics with reinforcement learning
          </p>
          <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', margin: '0.5rem 0' }}>
            Nick Harder, Kim K. Miskiw, Manish Khanra, Florian Maurer, Parag Patil, Ramiz Qussous, Christof Weinhardt, Marian Klobasa, Mario Ragwitz, Anke Weidlich — <em>SoftwareX</em>, Volume 30, 2025
          </p>
          <a href="https://doi.org/10.1016/j.softx.2025.102176" style={{ color: 'var(--brand-primary)', fontWeight: 500 }} target="_blank" rel="noopener noreferrer">DOI: 10.1016/j.softx.2025.102176</a>
        </div>
      </section>
    </div>
  );
}
