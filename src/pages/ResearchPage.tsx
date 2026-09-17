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
    title: 'Decarbonising cement production through electrification and thermal storage: impacts on electricity markets and transmission redispatch',
    meta: 'Manish Khanra, Parag Patil and Marian Klobasa - Applied Energy, Volume 426, 2026, Article 128666',
    url: 'https://doi.org/10.1016/j.apenergy.2026.128666',
    linkLabel: 'DOI Link'
  },
  {
    title: 'A framework for decision making under deep uncertainty in hard-to-abate industries: An application case for investment in a German steel plant',
    meta: 'Manish Khanra, Marian Klobasa and Parag Patil - Energy Strategy Reviews, Volume 64, 2026, Article 102185',
    url: 'https://doi.org/10.1016/j.esr.2026.102185',
    linkLabel: 'DOI Link'
  },
  {
    title: 'Comparative Evaluation of Distribution Grid Congestion Management Mechanisms',
    meta: 'Kim K. Miskiw, Ahmed S. Alahmed, Shannon Y.S. Hwang, Audun Botterud and Philipp Staudt - SSRN Working Paper, 2026',
    url: 'https://doi.org/10.2139/ssrn.6863778',
    linkLabel: 'SSRN Link'
  },
  {
    title: 'Enhancing Realism in Day-Ahead Market Bidding: Actor Design in Multi-Agent Deep Reinforcement Learning',
    meta: 'Marie Thederan, Kim K. Miskiw and Christof Weinhardt - EEM 2026',
    url: 'https://doi.org/10.1109/EEM68581.2026.11589765',
    linkLabel: 'DOI Link'
  },
  {
    title: 'Multi Power-Market Bidding: Stochastic Programming and Reinforcement Learning',
    meta: 'Kim K. Miskiw, Nick Harder and Philipp Staudt - HICSS 2024',
    url: 'https://scholarspace.manoa.hawaii.edu/bitstreams/ab278af7-2dfe-4c36-a538-eaccb8be1262/download',
    linkLabel: 'PDF Link'
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
  },
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
    title: 'Modeling Participation of Storage Units in Electricity Markets using Multi-Agent Deep Reinforcement Learning',
    meta: 'Nick Harder, Anke Weidlich and Philipp Staudt - e-Energy ’23',
    url: 'https://doi.org/10.1145/3575813.3597351',
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

        <p className="prose" style={{ marginBottom: '2rem' }}>
          The transformation of electricity markets associated with the transition towards high shares of renewable power
          generation results in the constant development of market mechanisms, increasing sector coupling, and creating new
          market platforms. Introducing a new market or changing the current market design does, however, affect all other
          markets and their participants because of their strong interrelation in not necessarily foreseeable ways. This
          raised the need for tools and simulation models to investigate and understand such complex interplay of markets and
          predict possible adverse effects and misuse of market power.
        </p>

        <div className="project-list">
          <div>
            <h3 className="subsection-title">ASSUME project (2022-2025)</h3>
            <div className="prose-stack">
              <p>
                The <strong>ASSUME</strong> collaborative research project (2022-2025) produced the open-source ASSUME toolbox: a highly
                modular, easy-to-use agent-based simulation environment for electricity markets with integrated deep reinforcement learning
                (DRL) methods for participant strategies where appropriate. Different reinforcement learning algorithms were tested in
                multi-agent simulations, resulting in promising bidding strategies and the ability to model complex market interactions.
                Partners delivered the core software, examples, documentation and community channels; the code remains publicly available
                and continues to evolve.
              </p>
              <p>
                That phase established the technical foundation used today for market-design studies - modular agents, configurable markets,
                and workflows for learning and analysis - enabling agile analysis of market designs and bidding strategies of new actors and
                emerging market dynamics in our fast-changing energy system. The ASSUME project was funded by the <strong>Federal Ministry for Economic Affairs and Energy (BMWE)</strong>.
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
                  autonomously tweak market rules and parameters, observe how participants react, and continuously learn how to improve the
                  design - creating flexible, self-optimising market designs that stay effective in a rapidly changing environment.
                </li>
                <li>
                  <strong>Low-code RL toolbox with explainable results</strong> - A low-code reinforcement-learning interface and intuitive
                  front end make the DRL engine accessible to researchers without deep programming skills. Integrated AI assistants built on
                  large language models guide configuration and operation, while built-in explainability tools shed light on the multi-agent
                  simulation outcomes.
                </li>
                <li>
                  <strong>Local grids and sector coupling</strong> - The modelling scope extends to distribution networks, local energy
                  systems and cross-sector links, enabling downstream actors to simulate congestion-management measures, test regulatory
                  options (e.g. extensions of &sect; 14a EnWG), and design incentive schemes for flexible loads such as electrolyzers, steel
                  plants and other industrial consumers.
                </li>
              </ul>
              <p>
                These developments will allow researchers, TSOs, DSOs, unit operators and regulators to assess the effects of market or
                regulatory changes in a model that captures intricate relationships between market designs and market participants, with
                use cases spanning reforms to grid-tariff structures, the creation of capacity markets, and bidding zone configurations.
              </p>
            </div>
          </div>
        </div>
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

        <h3 className="subsection-title">Related Publications</h3>
        <ul className="pub-list">
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
