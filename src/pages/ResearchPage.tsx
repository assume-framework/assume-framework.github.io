import { useState, useCallback } from 'react';
import { Button } from '../components/ui/Button';
import { PageHeader } from "../components/ui/PageHeader";

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
      <PageHeader title="Research & Applications" subtitle="The academic foundation, funded research projects and scientific use cases powered by the ASSUME ecosystem." />

      {/* Funding Projects */}
      <section style={{ marginBottom: '5rem' }}>
        <h2 style={{ fontSize: '2.5rem', marginBottom: '2rem' }}>Funded Projects</h2>
        
        <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem' }}>
          <div>
            <h3 style={{ fontSize: '1.75rem', marginBottom: '1rem' }}>ASSUME project (2022-2025)</h3>
            <p style={{ color: 'var(--text-secondary)', lineHeight: 1.7, marginBottom: '1rem' }}>
              The <strong>ASSUME</strong> collaborative research project (2022-2025) produced the open-source ASSUME toolbox: an
              agent-based simulation environment for electricity markets that uses deep reinforcement learning (DRL) for participant
              strategies where appropriate. Partners delivered the core software, examples, documentation and community channels; the
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
              operators and regulators. Understanding stakeholder interaction and the effects of market or regulatory change needs
              methods that capture intricate relationships - something traditional models often simplify too far. Developments such as
              reforms to grid-tariff structures and the design of capacity markets must keep supply reliable, reward flexibility, and
              encourage investment in the right places.
            </p>
            <p style={{ color: 'var(--text-secondary)', lineHeight: 1.7, marginBottom: '1rem' }}>
              <strong>ADAPT</strong> (Adaptive AI-supported Simulation Toolbox for Energy Market Design) responds to that need. It
              develops a user-friendly, adaptive simulation platform built on deep reinforcement learning. The work builds on the existing
              ASSUME framework: ASSUME already provides a strong technical base for market-design studies and ADAPT extends it in three directions:
            </p>
            <ul style={{ color: 'var(--text-secondary)', lineHeight: 1.7, marginLeft: '1.5rem', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              <li>
                <strong>Adaptive market agent</strong> - An AI-driven agent representing the regulator or market-design authority. It can
                adjust market rules and parameters, observe how participants react and learn how to improve design over time.
              </li>
              <li>
                <strong>Low-code RL toolbox with explainable results</strong> - A low-code reinforcement-learning interface and front end
                make the DRL engine usable for researchers without deep programming expertise. Guided configuration and explainability tools.
              </li>
              <li>
                <strong>Local grids and sector coupling</strong> - The modelling scope extends to distribution networks, local energy
                systems and cross-sector links. That lets downstream actors explore congestion management and incentive schemes.
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Past Workshops (migrated verbatim from legacy assume-project.de) */}
      <section id="workshops" style={{ borderTop: '1px solid var(--border-color)', paddingTop: '4rem', marginBottom: '5rem' }}>
        <style>{`
          .wk-meta { color: var(--text-secondary); margin: 0.25rem 0; }
          .wk-subhead { font-size: 1.1rem; margin: 2rem 0 0.75rem; }
          .wk-body-text { color: var(--text-secondary); line-height: 1.7; margin-bottom: 1rem; }
          .wk-body-text strong, .wk-meta strong { color: var(--text-primary); }
          .wk-format { color: var(--text-secondary); line-height: 1.7; margin: 0.5rem 0; padding-left: 1.25rem; }
          .wk-agenda { border-top: 1px solid var(--border-color); margin-top: 0.5rem; }
          .wk-agenda-row {
            display: grid;
            grid-template-columns: 130px 1fr 200px 80px;
            gap: 0.5rem 1.5rem;
            padding: 1rem 0;
            border-bottom: 1px solid var(--border-color);
            align-items: start;
          }
          .wk-time { font-weight: 600; color: var(--text-primary); font-size: 0.9rem; }
          .wk-session { color: var(--text-secondary); font-size: 0.95rem; line-height: 1.5; }
          .wk-session strong { color: var(--text-primary); }
          .wk-speaker { color: var(--text-secondary); font-size: 0.9rem; }
          .wk-duration { color: var(--text-muted); font-size: 0.9rem; }
          @media (max-width: 720px) {
            .wk-agenda-row { grid-template-columns: 1fr; gap: 0.25rem; padding: 1.15rem 0; }
          }
          .wk-details {
            border: 1px solid var(--border-color);
            border-radius: var(--radius-md);
            padding: 0 1.5rem;
            margin-bottom: 1rem;
            background-color: var(--bg-secondary);
          }
          .wk-details > summary {
            cursor: pointer;
            padding: 1.25rem 0;
            font-weight: 600;
            font-size: 1.05rem;
            color: var(--text-primary);
          }
          .wk-details[open] > summary { border-bottom: 1px solid var(--border-color); }
          .wk-details .wk-body { padding: 1.25rem 0; }
          .wk-details .wk-body-text:last-child { margin-bottom: 0; }
          .wk-lead { color: var(--text-secondary); margin: 0 0 1rem; }
          .wk-lead strong, .wk-body strong { color: var(--text-primary); }
          .wk-part-label { font-weight: 600; color: var(--text-primary); margin: 1.25rem 0 0.5rem; }
        `}</style>

        <h2 style={{ fontSize: '2.5rem', marginBottom: '2rem' }}>Past Workshops</h2>

        <h3 style={{ fontSize: '1.75rem', marginBottom: '1rem' }}>Final Workshop &ndash; Agenda &amp; Session Abstracts</h3>
        <p className="wk-meta"><strong>Date:</strong> Wednesday, 9 July 2025</p>
        <p className="wk-meta" style={{ marginBottom: '1.5rem' }}><strong>Format:</strong> Online via Zoom</p>

        <h4 className="wk-subhead">Introduction</h4>
        <p className="wk-body-text">
          The transition to high shares of renewable power, coupled with emerging actors and rapidly evolving market rules, calls for tools that can <strong>simulate, stress-test, and help design tomorrow's electricity markets</strong>. <strong>ASSUME</strong> (Agent-Based Electricity Markets Simulation Toolbox) combines agent-based modelling with deep-reinforcement learning to explore adaptive bidding behaviour, sector-coupling, and system-level effects across multiple inter-linked markets.
        </p>
        <p className="wk-body-text">
          This final workshop showcased the toolbox, underlying science, and practical workflows. <strong>Sessions were modular</strong>&mdash;participants were able to join whichever topics interested them&mdash;but at the core was the <strong>Opening Session</strong> for essential context.
        </p>

        <h4 className="wk-subhead">Session Format</h4>
        <p className="wk-body-text" style={{ marginBottom: '0.5rem' }}>Each technical session followed a common structure:</p>
        <p className="wk-format"><strong>20 min &mdash; Scientific presentation</strong> (conference-style deep dive)</p>
        <p className="wk-format"><strong>70 min &mdash; Hands-on notebook walk-through</strong> using Google Colab to reproduce key results and experiment with the model</p>

        <h4 className="wk-subhead">Agenda Overview</h4>
        <div className="wk-agenda">
          <div className="wk-agenda-row">
            <div className="wk-time">09:00 &ndash; 09:30</div>
            <div className="wk-session"><strong>Opening Session</strong> &ndash; Importance of simulation tools, project overview, session previews</div>
            <div className="wk-speaker">Prof. Dr. Anke Weidlich, ASSUME Team</div>
            <div className="wk-duration">30 min</div>
          </div>
          <div className="wk-agenda-row">
            <div className="wk-time">09:30 &ndash; 11:00</div>
            <div className="wk-session"><strong>Session 1 &ndash;</strong> Adaptive Behavior in Zero-Marginal-Cost Systems</div>
            <div className="wk-speaker">Kim Miskiw</div>
            <div className="wk-duration">90 min</div>
          </div>
          <div className="wk-agenda-row">
            <div className="wk-time">13:00 &ndash; 14:30</div>
            <div className="wk-session"><strong>Session 2 &ndash;</strong> Demand-Side Management Modeling</div>
            <div className="wk-speaker">Manish Khanra</div>
            <div className="wk-duration">90 min</div>
          </div>
          <div className="wk-agenda-row">
            <div className="wk-time">15:00 &ndash; 16:30</div>
            <div className="wk-session"><strong>Session 3 &ndash;</strong> Redispatch Modelling &amp; Network Integration</div>
            <div className="wk-speaker">Parag Patil</div>
            <div className="wk-duration">90 min</div>
          </div>
        </div>

        <h4 className="wk-subhead" style={{ marginBottom: '1rem' }}>Session Abstracts</h4>

        <details className="wk-details">
          <summary>Session 1 &ndash; Adaptive Behavior and Market Dynamics in Zero-Marginal-Cost Energy Systems</summary>
          <div className="wk-body">
            <p className="wk-lead"><strong>Lead:</strong> Kim Miskiw (KIT)</p>
            <p className="wk-part-label">Scientific presentation (20 min)</p>
            <p className="wk-body-text">
              The presentation explains why electricity systems with near-zero marginal costs require new analytical approaches to predict bidding behavior and price formation. It outlines the <strong>multi-agent deep-reinforcement-learning</strong> framework implemented in ASSUME and highlights key modelling challenges&mdash;partial observability, non-stationarity, and convergence of competing strategies. Example architectures, including the <strong>centralised-critic/decoupled-actor</strong> setup and <strong>MATD3</strong>, demonstrate scalable solutions. Case-study results illustrate how storage and renewable agents learn profitable bids and how their interaction shapes market prices and system stability.
            </p>
            <p className="wk-part-label">Hands-on workshop (70 min)</p>
            <p className="wk-body-text">
              Participants split into small teams to build and test bidding strategies for storage and renewable agents in a simplified zero-marginal-cost market. Each team defines the agents' <strong>observation</strong> and <strong>action</strong> spaces, implements them in an interactive Google Colab notebook, and runs multi-agent simulations. Interim results are shared in short peer presentations, followed by instructor feedback. The exercise wraps up with <strong>convergence testing</strong> and visual analysis of <strong>price-duration curves</strong> to assess how learned strategies shape market outcomes and stability.
            </p>
          </div>
        </details>

        <details className="wk-details">
          <summary>Session 2 &ndash; Industrial Demand-Side Management in ASSUME</summary>
          <div className="wk-body">
            <p className="wk-lead"><strong>Lead:</strong> Manish Khanra (Fraunhofer ISI)</p>
            <p className="wk-part-label">Scientific presentation (20 min)</p>
            <p className="wk-body-text">
              This talk shows how ASSUME couples <strong>investment planning</strong> with operational market participation for energy-intensive industries. Using a paper-production plant, it demonstrates an <strong>investment layer</strong> that reflects heterogeneous risk profiles and evaluates retrofit options under uncertainties in CO&#8322; prices, natural-gas prices, renewable availability, and policy incentives. Participants will see how <strong>Flex-Bid</strong> strategies in ancillary-service markets and participation in <strong>Redispatch 3.0</strong> convert inherent flexibility into new revenue streams while reducing CO&#8322; emissions and redispatch costs.
            </p>
            <p className="wk-part-label">Hands-on workshop (70 min)</p>
            <p className="wk-body-text">
              Attendees configure <strong>Demand-Side Units</strong> for low-temperature heat processes, integrate heat pumps and thermal storage, and link them to multiple markets inside ASSUME. They experiment with Flex-Bid parameters, simulate Redispatch 3.0 participation, and compare risk-adjusted revenues, CO&#8322; savings, and redispatch reductions across various retrofit scenarios.
            </p>
          </div>
        </details>

        <details className="wk-details">
          <summary>Session 3 &ndash; Redispatch Modelling and Network Integration</summary>
          <div className="wk-body">
            <p className="wk-lead"><strong>Lead:</strong> Parag Patil (Fraunhofer IEG)</p>
            <p className="wk-part-label">Scientific presentation (20 min)</p>
            <p className="wk-body-text">
              The presentation examines Germany's growing <strong>grid-congestion</strong> challenge amid rapid renewable expansion. It details methods to locate congestion points, outlines the current redispatch process, and quantifies how escalating renewable penetration drives redispatch volumes and costs. Industrial flexibilities&mdash;such as steel and pulp &amp; paper plants&mdash;are highlighted as <strong>virtual power plants</strong> capable of supplying demand-side relief.
            </p>
            <p className="wk-part-label">Hands-on workshop (70 min)</p>
            <p className="wk-body-text">
              Participants work through a sequence of <strong>three-node case studies</strong>: (1) baseline redispatch; (2) inclusion of Demand-Side Units; (3) addition of a large industrial flexibility provider. They measure congestion and cost metrics at each stage before scaling to a <strong>Germany-wide network</strong> to evaluate regional redispatch quantities and the system-wide impact of industrial flexibility.
            </p>
          </div>
        </details>
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
             <p style={{ margin: '0 0 0.5rem 0', color: 'var(--text-secondary)', fontSize: '0.9rem' }}>Nick Harder, Ramiz Qussous and Anke Weidlich - Energy and AI, Volume 14, 2023</p>
             <a href="https://doi.org/10.1016/j.egyai.2023.100295" style={{ color: 'var(--brand-primary)', fontWeight: 500 }} target="_blank" rel="noopener noreferrer">DOI Link</a>
          </li>
          <li style={{ padding: '1.5rem', border: '1px solid var(--border-color)', borderRadius: 'var(--radius-md)' }}>
             <p style={{ margin: '0 0 0.5rem 0', fontWeight: 600 }}>Finding individual strategies for storage units in electricity market models using deep reinforcement learning</p>
             <p style={{ margin: '0 0 0.5rem 0', color: 'var(--text-secondary)', fontSize: '0.9rem' }}>Nick Harder, Anke Weidlich and Philipp Staudt - Energy Inform 6 (Suppl 1), 41, 2023</p>
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
             <p style={{ margin: '0 0 0.5rem 0', color: 'var(--text-secondary)', fontSize: '0.9rem' }}>Nick Harder, Anke Weidlich and Philipp Staudt - e-Energy ’23</p>
             <a href="https://doi.org/10.1145/3575813.3597351" style={{ color: 'var(--brand-primary)', fontWeight: 500 }} target="_blank" rel="noopener noreferrer">DOI Link</a>
          </li>
          <li style={{ padding: '1.5rem', border: '1px solid var(--border-color)', borderRadius: 'var(--radius-md)' }}>
             <p style={{ margin: '0 0 0.5rem 0', fontWeight: 600 }}>Economic Evaluation of Electricity and Hydrogen-Based Steel Production Pathways: Leveraging Market Dynamics and Grid Congestion Mitigation through Demand Side Flexibility.</p>
             <p style={{ margin: '0 0 0.5rem 0', color: 'var(--text-secondary)', fontSize: '0.9rem' }}>Manish Khanra, Parag Patil, Marian Klobasa and Daniel Scholz - EEM 2024</p>
             <a href="https://doi.org/10.1109/EEM60825.2024.10608890" style={{ color: 'var(--brand-primary)', fontWeight: 500 }} target="_blank" rel="noopener noreferrer">DOI Link</a>
          </li>
          <li style={{ padding: '1.5rem', border: '1px solid var(--border-color)', borderRadius: 'var(--radius-md)' }}>
             <p style={{ margin: '0 0 0.5rem 0', fontWeight: 600 }}>Know Your Tools - A Comparison of Open-Source Energy Market Simulation Models.</p>
             <p style={{ margin: '0 0 0.5rem 0', color: 'var(--text-secondary)', fontSize: '0.9rem' }}>Florian Maurer, Felix Nitsch, Johannes Kochems, Christoph Schimeczek, Volker Sander and Sebastian Lehnhoff - EEM 2024</p>
             <a href="https://doi.org/10.1109/EEM60825.2024.10609021" style={{ color: 'var(--brand-primary)', fontWeight: 500 }} target="_blank" rel="noopener noreferrer">DOI Link</a>
          </li>
          <li style={{ padding: '1.5rem', border: '1px solid var(--border-color)', borderRadius: 'var(--radius-md)' }}>
             <p style={{ margin: '0 0 0.5rem 0', fontWeight: 600 }}>Do Block Orders Matter? Impact of Regular Block and Linked Orders on Electricity Market Simulation Outcomes.</p>
             <p style={{ margin: '0 0 0.5rem 0', color: 'var(--text-secondary)', fontSize: '0.9rem' }}>Johanna Adams, Nick Harder and Anke Weidlich - EEM 2024</p>
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