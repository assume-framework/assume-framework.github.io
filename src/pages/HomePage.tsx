import { Button } from '../components/ui/Button';
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
          Explore the future of energy markets with deep reinforcement learning, sector coupling, and adaptive AI architectures.
        </p>
        <div className="hero-actions">
          <Button variant="primary" to="/toolbox">Get Started</Button>
          <Button variant="secondary" href="https://assume.readthedocs.io/en/latest/" target="_blank" rel="noopener noreferrer">View Documentation</Button>
        </div>
      </section>

      {/* Feature Cards Grid */}
      <section className="features-grid">
        <div className="feature-card">
          <div className="feature-icon">
            <Network size={28} />
          </div>
          <h3>Sector Coupling & Grids</h3>
          <p>Model complex distribution networks and test incentive schemes for flexible loads like electrolyzers and industrial consumers.</p>
        </div>

        <div className="feature-card">
          <div className="feature-icon">
            <Zap size={28} />
          </div>
          <h3>Deep Reinforcement Learning</h3>
          <p>A user-friendly, low-code RL toolbox designed for researchers to optimize market designs without deep programming expertise.</p>
        </div>

        <div className="feature-card">
          <div className="feature-icon">
            <Lightbulb size={28} />
          </div>
          <h3>Adaptive Market-Agents</h3>
          <p>Simulate regulators and market authorities that autonomously tweak rules and observe participant reactions.</p>
        </div>
      </section>

      {/* News Feed Section */}
      <section className="news-feed">
        <h2>Latest Updates</h2>
        <div className="news-list">
          <div className="news-item">
            <span className="news-date">October 12, 2025</span>
            <p className="news-title">ADAPT Project officially launched to build on ASSUME foundation.</p>
          </div>
          <div className="news-item">
            <span className="news-date">August 05, 2025</span>
            <p className="news-title">New Paper Published: "Evaluating RL Strategies in Sector Coupling."</p>
          </div>
          <div className="news-item">
            <span className="news-date">March 22, 2025</span>
            <p className="news-title">Version 2.0 of assume-gui released with low-code RL capabilities.</p>
          </div>
        </div>
      </section>
    </div>
  );
}
