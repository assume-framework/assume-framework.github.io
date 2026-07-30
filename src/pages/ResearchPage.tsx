import { useState, useCallback } from 'react';
import { Button } from '../components/ui/Button';
import { PageHeader } from "../components/ui/PageHeader";
import './pages.css';

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

interface Publication {
  title: string;
  meta: string;
  url: string;
  linkLabel: string;
}

const publications: Publication[] = [
  {
    title: 'Fit for purpose: Modeling wholesale electricity markets realistically with multi-agent deep reinforcement learning',
    meta: 'Nick Harder, Ramiz Qussous and Anke Weidlich - Energy and AI, Volume 14, 2023',
    url: 'https://doi.org/10.1016/j.egyai.2023.100295',
    linkLabel: 'DOI Link'
  },
  {
    title: 'Finding individual strategies for storage units in electricity market models using deep reinforcement learning',
    meta: 'Nick Harder, Anke Weidlich and Philipp Staudt - Energy Inform 6 (Suppl 1), 41, 2023',
    url: 'https://doi.org/10.1186/s42162-023-00293-0',
    linkLabel: 'DOI Link'
  },
  {
    title: 'Market Abstraction of Energy Markets and Policies - Application in an Agent-Based Modeling Toolbox',
    meta: 'Florian Maurer, Kim K. Miskiw, Rebeca Ramirez Acosta, Nick Harder, Volker Sander & Sebastian Lehnhoff - Lecture Notes in Computer Science, vol 14468',
    url: 'http://dx.doi.org/10.1007/978-3-031-48652-4_10',
    linkLabel: 'DOI Link'
  },
  {
    title: 'Multi Power-Market Bidding: Stochastic Programming and Reinforcement Learning',
    meta: 'Kim K. Miskiw, Nick Harder and Philipp Staudt - HICSS 2024',
    url: 'https://scholarspace.manoa.hawaii.edu/bitstreams/ab278af7-2dfe-4c36-a538-eaccb8be1262/download',
    linkLabel: 'PDF Link'
  },
  {
    title: 'Modeling Participation of Storage Units in Electricity Markets using Multi-Agent Deep Reinforcement Learning',
    meta: 'Nick Harder, Anke Weidlich and Philipp Staudt - e-Energy ’23',
    url: 'https://doi.org/10.1145/3575813.3597351',
    linkLabel: 'DOI Link'
  },
  {
    title: 'Economic Evaluation of Electricity and Hydrogen-Based Steel Production Pathways: Leveraging Market Dynamics and Grid Congestion Mitigation through Demand Side Flexibility.',
    meta: 'Manish Khanra, Parag Patil, Marian Klobasa and Daniel Scholz - EEM 2024',
    url: 'https://doi.org/10.1109/EEM60825.2024.10608890',
    linkLabel: 'DOI Link'
  },
  {
    title: 'Know Your Tools - A Comparison of Open-Source Energy Market Simulation Models.',
    meta: 'Florian Maurer, Felix Nitsch, Johannes Kochems, Christoph Schimeczek, Volker Sander and Sebastian Lehnhoff - EEM 2024',
    url: 'https://doi.org/10.1109/EEM60825.2024.10609021',
    linkLabel: 'DOI Link'
  },
  {
    title: 'Do Block Orders Matter? Impact of Regular Block and Linked Orders on Electricity Market Simulation Outcomes.',
    meta: 'Johanna Adams, Nick Harder and Anke Weidlich - EEM 2024',
    url: 'https://doi.org/10.1109/EEM60825.2024.10608956',
    linkLabel: 'DOI Link'
  },
  {
    title: 'Explainable Deep Reinforcement Learning for Multi-Agent Electricity Market Simulations.',
    meta: 'Kim K. Miskiw and Philipp Staudt - EEM 2024',
    url: 'https://doi.org/10.1109/EEM60825.2024.10608907',
    linkLabel: 'DOI Link'
  }
];

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
    <div className="container page-container page-medium">
      <PageHeader title="Research & Applications" subtitle="The academic foundation, funded research projects and scientific use cases powered by the ASSUME ecosystem." />

      {/* Funding Projects */}
      <section className="section">
        <h2 className="section-title">Funded Projects</h2>

        <div className="project-list">
          <div>
            <h3 className="subsection-title">ASSUME project (2022-2025)</h3>
            <div className="prose-stack">
              <p>
                The <strong>ASSUME</strong> collaborative research project (2022-2025) produced the open-source ASSUME toolbox: an
                agent-based simulation environment for electricity markets that uses deep reinforcement learning (DRL) for participant
                strategies where appropriate. Partners delivered the core software, examples, documentation and community channels; the
                code remains publicly available and continues to evolve.
              </p>
              <p>
                That phase established the technical foundation used today for market-design studies - modular agents, configurable markets,
                and workflows for learning and analysis. The ASSUME project was funded by the <strong>Federal Ministry for Economic Affairs and Climate Action (BMWK)</strong>.
              </p>
            </div>
          </div>

          <div>
            <h3 className="subsection-title">ADAPT project (2025-2028)</h3>
            <div className="prose-stack">
              <p>
                The accelerating energy transition and growing complexity of electricity markets challenge market participants, grid
                operators and regulators. Understanding stakeholder interaction and the effects of market or regulatory change needs
                methods that capture intricate relationships - something traditional models often simplify too far. Developments such as
                reforms to grid-tariff structures and the design of capacity markets must keep supply reliable, reward flexibility, and
                encourage investment in the right places.
              </p>
              <p>
                <strong>ADAPT</strong> (Adaptive AI-supported Simulation Toolbox for Energy Market Design) responds to that need. It
                develops a user-friendly, adaptive simulation platform built on deep reinforcement learning. The work builds on the existing
                ASSUME framework: ASSUME already provides a strong technical base for market-design studies and ADAPT extends it in three directions:
              </p>
              <ul>
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
        </div>
      </section>

      {/* Past Workshops  */}
      <section id="workshops" className="section section-divided">
        <h2 className="section-title">Past Workshops</h2>

        <h3 className="subsection-title">Final Workshop &ndash; Agenda &amp; Session Abstracts</h3>
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
      <section className="section section-divided">
        <h2 className="section-title">Publications</h2>

        <div className="cite-box">
          <h3>Cite ASSUME</h3>
          <p className="prose" style={{ marginBottom: '1.5rem' }}>
            Cite the SoftwareX article: <em>ASSUME: An agent-based simulation framework for exploring electricity market dynamics with reinforcement learning</em>, <strong>SoftwareX</strong>, Volume 30, 2025, Article 102176.
          </p>
          <div className="cite-code">
            <div className="cite-toolbar">
              <span>BibTeX</span>
              <Button variant="outline" className="cite-copy" onClick={copyBibtex}>
                {copyState === 'copied' ? 'Copied!' : copyState === 'error' ? 'Failed' : 'Copy'}
              </Button>
            </div>
            <pre>
              <code>{ASSUME_BIBTEX}</code>
            </pre>
          </div>
          <p className="cite-note">
            To cite a specific version, all releases are archived on Zenodo: <a href="https://doi.org/10.5281/zenodo.8088760" target="_blank" rel="noopener noreferrer">DOI: 10.5281/zenodo.8088760</a>
          </p>
        </div>

        <h3 className="subsection-title">Related Publications (Use Cases)</h3>
        <ul className="pub-list split-2">
          {publications.map((publication) => (
            <li key={publication.url} className="pub-item">
              <p className="pub-title">{publication.title}</p>
              <p className="pub-meta">{publication.meta}</p>
              <a className="pub-link" href={publication.url} target="_blank" rel="noopener noreferrer">
                {publication.linkLabel}
              </a>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
