import { useState, useCallback } from 'react';
import { Button } from '../components/ui/Button';

const ASSUME_BIBTEX = `@article{ASSUME,
  title = {{ASSUME: An agent-based simulation framework for exploring electricity market dynamics with reinforcement learning}},
  author = {Harder, Nick and Miskiw, Kim K and Khanra, Manish and Maurer, Florian and Patil, Parag and Qussous, Ramiz and Weinhardt, Christof and Klobasa, Marian and Ragwitz, Mario and Weidlich, Anke},
  journal = {SoftwareX},
  volume = {30},
  pages = {102176},
  year = {2025},
  issn = {2352-7110},
  doi = {10.1016/j.softx.2025.102176},
  url = {https://www.sciencedirect.com/science/article/pii/S2352711025001438},
  keywords = {Electricity markets, Python, Reinforcement learning, Agent-based modeling}
}`;

export function ResearchPage() {
  const [copyState, setCopyState] = useState<'idle' | 'copied' | 'error'>('idle');

  const copyBibtex = useCallback(async () => {
    try {
      await navigator.clipboard.writeText(ASSUME_BIBTEX);
      setCopyState('copied');
      window.setTimeout(() => setCopyState('idle'), 2000);
    } catch {
      setCopyState('error');
      window.setTimeout(() => setCopyState('idle'), 2500);
    }
  }, []);

  return (
    <div className="container" style={{ padding: '4rem 0' }}>
      <header style={{ marginBottom: '4rem', maxWidth: '800px' }}>
        <h1 style={{ fontSize: '3rem', marginBottom: '1rem', letterSpacing: '-0.02em' }}>Research & Applications</h1>
        <p style={{ fontSize: '1.25rem', color: 'var(--text-secondary)' }}>
          The academic foundation, funded research projects, and scientific use cases powered by the ASSUME ecosystem.
        </p>
      </header>

      {/* Funding Projects */}
      <section style={{ marginBottom: '5rem' }}>
        <h2 style={{ fontSize: '2.5rem', marginBottom: '2rem' }}>Funded Projects</h2>
        
        <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem' }}>
          <div>
            <h3 style={{ fontSize: '1.75rem', marginBottom: '1rem' }}>ASSUME project (2022-2025)</h3>
            <p style={{ color: 'var(--text-secondary)', lineHeight: 1.7, marginBottom: '1rem' }}>
              The <strong>ASSUME</strong> collaborative research project (2022-2025) produced the open-source ASSUME toolbox: an
              agent-based simulation environment for electricity markets that uses deep reinforcement learning (DRL) for participant
              strategies where appropriate. Partners delivered the core software, examples, documentation, and community channels; the
              code remains publicly available and continues to evolve.
            </p>
            <p style={{ color: 'var(--text-secondary)', lineHeight: 1.7 }}>
              That phase established the technical foundation used today for market-design studies - modular agents, configurable markets,
              and workflows for learning and analysis. The ASSUME project was funded by the <strong>Federal Ministry for Economic Affairs and Climate Action (BMWK)</strong>.
            </p>
          </div>

          <div>
            <h3 style={{ fontSize: '1.75rem', marginBottom: '1rem' }}>ADAPT project (2025-2028)</h3>
            <p style={{ color: 'var(--text-secondary)', lineHeight: 1.7, marginBottom: '1rem' }}>
              The accelerating energy transition and growing complexity of electricity markets challenge market participants, grid
              operators, and regulators. Understanding stakeholder interaction and the effects of market or regulatory change needs
              methods that capture intricate relationships - something traditional models often simplify too far. Developments such as
              reforms to grid-tariff structures and the design of capacity markets must keep supply reliable, reward flexibility, and
              encourage investment in the right places.
            </p>
            <p style={{ color: 'var(--text-secondary)', lineHeight: 1.7, marginBottom: '1rem' }}>
              <strong>ADAPT</strong> (Adaptive AI-supported Simulation Toolbox for Energy Market Design) responds to that need. It
              develops a user-friendly, adaptive simulation platform built on deep reinforcement learning. The work builds on the existing
              ASSUME framework: ASSUME already provides a strong technical base for market-design studies, and ADAPT extends it in three directions:
            </p>
            <ul style={{ color: 'var(--text-secondary)', lineHeight: 1.7, marginLeft: '1.5rem', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              <li>
                <strong>Adaptive market agent</strong> - An AI-driven agent representing the regulator or market-design authority. It can
                adjust market rules and parameters, observe how participants react, and learn how to improve design over time.
              </li>
              <li>
                <strong>Low-code RL toolbox with explainable results</strong> - A low-code reinforcement-learning interface and front end
                make the DRL engine usable for researchers without deep programming expertise. Guided configuration and explainability tools.
              </li>
              <li>
                <strong>Local grids and sector coupling</strong> - The modelling scope extends to distribution networks, local energy
                systems, and cross-sector links. That lets downstream actors explore congestion management and incentive schemes.
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Publications */}
      <section style={{ borderTop: '1px solid var(--border-color)', paddingTop: '4rem' }}>
        <h2 style={{ fontSize: '2.5rem', marginBottom: '2rem' }}>Publications</h2>
        
        <div style={{ backgroundColor: 'var(--bg-secondary)', padding: '2rem', borderRadius: 'var(--radius-lg)', border: '1px solid var(--border-color)', marginBottom: '3rem' }}>
          <h3 style={{ marginBottom: '1rem' }}>Cite ASSUME</h3>
          <p style={{ marginBottom: '1.5rem' }}>
            Cite the SoftwareX article: <em>ASSUME: An agent-based simulation framework for exploring electricity market dynamics with reinforcement learning</em>, <strong>SoftwareX</strong>, Volume 30, 2025, Article 102176.
          </p>
          <div style={{ background: 'var(--bg-primary)', padding: '1.5rem', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border-color)', position: 'relative' }}>
            <pre style={{ overflowX: 'auto', fontSize: '0.9rem', margin: 0 }}>
              <code>{ASSUME_BIBTEX}</code>
            </pre>
            <Button 
              variant="outline" 
              onClick={copyBibtex} 
              style={{ position: 'absolute', top: '1rem', right: '1rem', fontSize: '0.8rem', padding: '0.5rem 1rem' }}
            >
              {copyState === 'copied' ? 'Copied!' : copyState === 'error' ? 'Failed' : 'Copy BibTeX'}
            </Button>
          </div>
          <p style={{ marginTop: '1rem', fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
            To cite a specific version, all releases are archived on Zenodo: <a href="https://doi.org/10.5281/zenodo.8088760" style={{ color: 'var(--brand-primary)' }} target="_blank" rel="noopener noreferrer">DOI: 10.5281/zenodo.8088760</a>
          </p>
        </div>

        <h3 style={{ fontSize: '1.75rem', marginBottom: '1.5rem' }}>Related Publications (Use Cases)</h3>
        <ul style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', listStyle: 'none', padding: 0 }}>
          <li style={{ padding: '1.5rem', border: '1px solid var(--border-color)', borderRadius: 'var(--radius-md)' }}>
             <p style={{ margin: '0 0 0.5rem 0', fontWeight: 600 }}>Fit for purpose: Modeling wholesale electricity markets realistically with multi-agent deep reinforcement learning</p>
             <p style={{ margin: '0 0 0.5rem 0', color: 'var(--text-secondary)', fontSize: '0.9rem' }}>Nick Harder, Ramiz Qussous, and Anke Weidlich - Energy and AI, Volume 14, 2023</p>
             <a href="https://doi.org/10.1016/j.egyai.2023.100295" style={{ color: 'var(--brand-primary)', fontWeight: 500 }} target="_blank" rel="noopener noreferrer">DOI Link</a>
          </li>
          <li style={{ padding: '1.5rem', border: '1px solid var(--border-color)', borderRadius: 'var(--radius-md)' }}>
             <p style={{ margin: '0 0 0.5rem 0', fontWeight: 600 }}>Finding individual strategies for storage units in electricity market models using deep reinforcement learning</p>
             <p style={{ margin: '0 0 0.5rem 0', color: 'var(--text-secondary)', fontSize: '0.9rem' }}>Nick Harder, Anke Weidlich, and Philipp Staudt - Energy Inform 6 (Suppl 1), 41, 2023</p>
             <a href="https://doi.org/10.1186/s42162-023-00293-0" style={{ color: 'var(--brand-primary)', fontWeight: 500 }} target="_blank" rel="noopener noreferrer">DOI Link</a>
          </li>
          <li style={{ padding: '1.5rem', border: '1px solid var(--border-color)', borderRadius: 'var(--radius-md)' }}>
             <p style={{ margin: '0 0 0.5rem 0', fontWeight: 600 }}>Market Abstraction of Energy Markets and Policies - Application in an Agent-Based Modeling Toolbox</p>
             <p style={{ margin: '0 0 0.5rem 0', color: 'var(--text-secondary)', fontSize: '0.9rem' }}>Florian Maurer, Kim K. Miskiw, Rebeca Ramirez Acosta, Nick Harder, Volker Sander &amp; Sebastian Lehnhoff - Lecture Notes in Computer Science, vol 14468</p>
             <a href="http://dx.doi.org/10.1007/978-3-031-48652-4_10" style={{ color: 'var(--brand-primary)', fontWeight: 500 }} target="_blank" rel="noopener noreferrer">DOI Link</a>
          </li>
          <li style={{ padding: '1.5rem', border: '1px solid var(--border-color)', borderRadius: 'var(--radius-md)' }}>
             <p style={{ margin: '0 0 0.5rem 0', fontWeight: 600 }}>Multi Power-Market Bidding: Stochastic Programming and Reinforcement Learning</p>
             <p style={{ margin: '0 0 0.5rem 0', color: 'var(--text-secondary)', fontSize: '0.9rem' }}>Kim K. Miskiw, Nick Harder and Philipp Staudt - HICSS 2024</p>
             <a href="https://scholarspace.manoa.hawaii.edu/bitstreams/ab278af7-2dfe-4c36-a538-eaccb8be1262/download" style={{ color: 'var(--brand-primary)', fontWeight: 500 }} target="_blank" rel="noopener noreferrer">PDF Link</a>
          </li>
          <li style={{ padding: '1.5rem', border: '1px solid var(--border-color)', borderRadius: 'var(--radius-md)' }}>
             <p style={{ margin: '0 0 0.5rem 0', fontWeight: 600 }}>Modeling Participation of Storage Units in Electricity Markets using Multi-Agent Deep Reinforcement Learning</p>
             <p style={{ margin: '0 0 0.5rem 0', color: 'var(--text-secondary)', fontSize: '0.9rem' }}>Nick Harder, Anke Weidlich, and Philipp Staudt - e-Energy ’23</p>
             <a href="https://doi.org/10.1145/3575813.3597351" style={{ color: 'var(--brand-primary)', fontWeight: 500 }} target="_blank" rel="noopener noreferrer">DOI Link</a>
          </li>
          <li style={{ padding: '1.5rem', border: '1px solid var(--border-color)', borderRadius: 'var(--radius-md)' }}>
             <p style={{ margin: '0 0 0.5rem 0', fontWeight: 600 }}>Economic Evaluation of Electricity and Hydrogen-Based Steel Production Pathways: Leveraging Market Dynamics and Grid Congestion Mitigation through Demand Side Flexibility.</p>
             <p style={{ margin: '0 0 0.5rem 0', color: 'var(--text-secondary)', fontSize: '0.9rem' }}>Manish Khanra, Parag Patil, Marian Klobasa, and Daniel Scholz - EEM 2024</p>
             <a href="https://doi.org/10.1109/EEM60825.2024.10608890" style={{ color: 'var(--brand-primary)', fontWeight: 500 }} target="_blank" rel="noopener noreferrer">DOI Link</a>
          </li>
          <li style={{ padding: '1.5rem', border: '1px solid var(--border-color)', borderRadius: 'var(--radius-md)' }}>
             <p style={{ margin: '0 0 0.5rem 0', fontWeight: 600 }}>Know Your Tools - A Comparison of Open-Source Energy Market Simulation Models.</p>
             <p style={{ margin: '0 0 0.5rem 0', color: 'var(--text-secondary)', fontSize: '0.9rem' }}>Florian Maurer, Felix Nitsch, Johannes Kochems, Christoph Schimeczek, Volker Sander, and Sebastian Lehnhoff - EEM 2024</p>
             <a href="https://doi.org/10.1109/EEM60825.2024.10609021" style={{ color: 'var(--brand-primary)', fontWeight: 500 }} target="_blank" rel="noopener noreferrer">DOI Link</a>
          </li>
          <li style={{ padding: '1.5rem', border: '1px solid var(--border-color)', borderRadius: 'var(--radius-md)' }}>
             <p style={{ margin: '0 0 0.5rem 0', fontWeight: 600 }}>Do Block Orders Matter? Impact of Regular Block and Linked Orders on Electricity Market Simulation Outcomes.</p>
             <p style={{ margin: '0 0 0.5rem 0', color: 'var(--text-secondary)', fontSize: '0.9rem' }}>Johanna Adams, Nick Harder, and Anke Weidlich - EEM 2024</p>
             <a href="https://doi.org/10.1109/EEM60825.2024.10608956" style={{ color: 'var(--brand-primary)', fontWeight: 500 }} target="_blank" rel="noopener noreferrer">DOI Link</a>
          </li>
          <li style={{ padding: '1.5rem', border: '1px solid var(--border-color)', borderRadius: 'var(--radius-md)' }}>
             <p style={{ margin: '0 0 0.5rem 0', fontWeight: 600 }}>Explainable Deep Reinforcement Learning for Multi-Agent Electricity Market Simulations.</p>
             <p style={{ margin: '0 0 0.5rem 0', color: 'var(--text-secondary)', fontSize: '0.9rem' }}>Kim K. Miskiw and Philipp Staudt - EEM 2024</p>
             <a href="https://doi.org/10.1109/EEM60825.2024.10608907" style={{ color: 'var(--brand-primary)', fontWeight: 500 }} target="_blank" rel="noopener noreferrer">DOI Link</a>
          </li>
        </ul>
      </section>
    </div>
  );
}
