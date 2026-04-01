import { Link } from 'react-router-dom';
import { fundedProjects } from '../content/fundedProjects';

export function AboutPage() {
  return (
    <section className="section">
      <div className="container">
        <div className="page-head">
          <div className="breadcrumbs">
            <Link to="/">Home</Link> · Background
          </div>
          <h1>Background</h1>
          <p className="muted" style={{ margin: 0, maxWidth: '80ch' }}>
            ASSUME is an open-source, agent-based simulation toolbox for electricity markets, designed to make market-design studies
            practical and reproducible - from small thesis projects to research-grade experiments.
          </p>
        </div>

        <div className="prose" style={{ marginTop: '1rem' }}>
          <h2>What problem ASSUME targets</h2>
          <p>
            Electricity markets are changing rapidly. High renewable shares, new market platforms, and tighter sector coupling mean
            market rules keep evolving - and changes rarely affect only one part of the system. ASSUME is intended to help study these
            interdependencies and to explore market outcomes under realistic assumptions.
          </p>

          <h2>What makes ASSUME distinctive</h2>
          <p>
            ASSUME&apos;s core idea is modularity: you can swap agent representations, market configurations, and bidding strategies. A
            distinctive feature is the integration of <strong>deep reinforcement learning</strong> into behavioral strategies of market
            agents, enabling adaptive behavior instead of fixed rule-only heuristics.
          </p>

          <h2>What you can explore with it</h2>
          <ul>
            <li>Comparing market designs and regulatory interventions</li>
            <li>Studying bidding under uncertainty and portfolio effects</li>
            <li>Exploring multi-agent dynamics and learning-based strategies</li>
          </ul>
        </div>
        <h2 style={{ marginTop: '2rem' }}>Research funding</h2>
        
        <div className="prose" style={{ marginTop: '1rem' }}>
          <h2>ASSUME project (2022-2025)</h2>
          <p>
            The <strong>ASSUME</strong> collaborative research project (2022-2025) produced the open-source ASSUME toolbox: an
            agent-based simulation environment for electricity markets that uses deep reinforcement learning (DRL) for participant
            strategies where appropriate. Partners delivered the core software, examples, documentation, and community channels; the
            code remains publicly available and continues to evolve.
          </p>
          <p>
            That phase established the technical foundation used today for market-design studies - modular agents, configurable markets,
            and workflows for learning and analysis.
          </p>
        </div>
        <div className="prose" style={{ marginTop: '1rem' }}>
          <h2>ADAPT project (2025-2028)</h2>
          <p>
            The accelerating energy transition and growing complexity of electricity markets challenge market participants, grid
            operators, and regulators. Understanding stakeholder interaction and the effects of market or regulatory change needs
            methods that capture intricate relationships - something traditional models often simplify too far. Developments such as
            reforms to grid-tariff structures and the design of capacity markets must keep supply reliable, reward flexibility, and
            encourage investment in the right places.
          </p>
          <p>
            <strong>ADAPT</strong> (Adaptive AI-supported Simulation Toolbox for Energy Market Design) responds to that need. It
            develops a user-friendly, adaptive simulation platform built on deep reinforcement learning. The work builds on the existing
            ASSUME framework: ASSUME already provides a strong technical base for market-design studies, and ADAPT extends it in three
            directions:
          </p>
          <ul>
            <li>
              <strong>Adaptive market agent</strong> - An AI-driven agent representing the regulator or market-design authority. It can
              adjust market rules and parameters, observe how participants react, and learn how to improve design over time, supporting
              flexible market arrangements in a changing environment.
            </li>
            <li>
              <strong>Low-code RL toolbox with explainable results</strong> - A low-code reinforcement-learning interface and front end
              make the DRL engine usable for researchers without deep programming expertise. Guided configuration and explainability
              tools help interpret multi-agent outcomes and build trust in the results.
            </li>
            <li>
              <strong>Local grids and sector coupling</strong> - The modelling scope extends to distribution networks, local energy
              systems, and cross-sector links. That lets downstream actors explore congestion management, regulatory options, and
              incentive schemes for flexible loads (for example industry and electrolysis) in response to price and grid signals.
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
