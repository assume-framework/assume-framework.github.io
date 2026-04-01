import { useCallback, useState } from 'react';
import { Link } from 'react-router-dom';

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

export function PublicationsPage() {
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
    <section className="section">
      <div className="container">
        <div className="page-head">
          <div className="breadcrumbs">
            <Link to="/">Home</Link> · Publications
          </div>
          <h1>Publications</h1>
          <p className="muted" style={{ margin: 0, maxWidth: '85ch' }}>
            How to cite ASSUME, plus related papers from the research group. The canonical reference is the SoftwareX article; further
            reading is listed below.
          </p>
        </div>

        <div className="prose" style={{ marginTop: '1rem' }}>
          <h2>Cite ASSUME</h2>
          <p>
            Cite the SoftwareX article:{' '}
            <em>
              ASSUME: An agent-based simulation framework for exploring electricity market dynamics with reinforcement learning
            </em>
            , <strong>SoftwareX</strong>, Volume 30, 2025, Article 102176.
          </p>
          <p>
            DOI:{' '}
            <a href="https://doi.org/10.1016/j.softx.2025.102176" rel="noopener noreferrer">
              10.1016/j.softx.2025.102176
            </a>{' '}
            · Publisher page:{' '}
            <a href="https://www.sciencedirect.com/science/article/pii/S2352711025001438" rel="noopener noreferrer">
              ScienceDirect
            </a>
          </p>

          <h3>BibTeX</h3>
          <div className="bibtex-block">
            <button
              type="button"
              className="bibtex-copy"
              onClick={copyBibtex}
              aria-label="Copy BibTeX to clipboard"
            >
              {copyState === 'copied' ? 'Copied' : copyState === 'error' ? 'Failed' : 'Copy'}
            </button>
            <pre>
              <code>{ASSUME_BIBTEX}</code>
            </pre>
          </div>

          <p>
            Releases are archived on Zenodo with version-specific DOIs; see the repository for current links.
          </p>

        </div>
        <div className="prose" style={{ marginTop: '1rem' }}>
          <h2>Related publications</h2>
          <p className="muted">Further reading on multi-agent electricity markets, reinforcement learning, and related methods.</p>

          <ul>
            <li>
              Nick Harder, Ramiz Qussous, and Anke Weidlich -{' '}
              <strong>
                <em>
                  Fit for purpose: Modeling wholesale electricity markets realistically with multi-agent deep reinforcement learning
                </em>
              </strong>{' '}
              - Energy and AI, Volume 14, 2023 -{' '}
              <a href="https://doi.org/10.1016/j.egyai.2023.100295" rel="noopener noreferrer">
                DOI
              </a>
            </li>

            <li>
              Nick Harder, Anke Weidlich, and Philipp Staudt -{' '}
              <strong>
                <em>Finding individual strategies for storage units in electricity market models using deep reinforcement learning</em>
              </strong>{' '}
              - Energy Inform 6 (Suppl 1), 41, 2023 -{' '}
              <a href="https://doi.org/10.1186/s42162-023-00293-0" rel="noopener noreferrer">
                DOI
              </a>
            </li>

            <li>
              Florian Maurer, Kim K. Miskiw, Rebeca Ramirez Acosta, Nick Harder, Volker Sander &amp; Sebastian Lehnhoff -{' '}
              <strong>Market Abstraction of Energy Markets and Policies - Application in an Agent-Based Modeling Toolbox</strong> -
              Lecture Notes in Computer Science, vol 14468 -{' '}
              <a href="http://dx.doi.org/10.1007/978-3-031-48652-4_10" rel="noopener noreferrer">
                DOI
              </a>
            </li>

            <li>
              Kim K. Miskiw, Nick Harder and Philipp Staudt -{' '}
              <strong>Multi Power-Market Bidding: Stochastic Programming and Reinforcement Learning</strong> - HICSS 2024 -{' '}
              <a
                href="https://scholarspace.manoa.hawaii.edu/bitstreams/ab278af7-2dfe-4c36-a538-eaccb8be1262/download"
                rel="noopener noreferrer"
              >
                PDF
              </a>
            </li>

            <li>
              Nick Harder, Anke Weidlich, and Philipp Staudt -{' '}
              <strong>Modeling Participation of Storage Units in Electricity Markets using Multi-Agent Deep Reinforcement Learning.</strong>{' '}
              - e-Energy ’23 -{' '}
              <a href="https://doi.org/10.1145/3575813.3597351" rel="noopener noreferrer">
                DOI
              </a>
            </li>

            <li>
              Manish Khanra, Parag Patil, Marian Klobasa, and Daniel Scholz -{' '}
              <strong>
                Economic Evaluation of Electricity and Hydrogen-Based Steel Production Pathways: Leveraging Market Dynamics and Grid
                Congestion Mitigation through Demand Side Flexibility.
              </strong>{' '}
              - EEM 2024 -{' '}
              <a href="https://doi.org/10.1109/EEM60825.2024.10608890" rel="noopener noreferrer">
                DOI
              </a>
            </li>

            <li>
              Florian Maurer, Felix Nitsch, Johannes Kochems, Christoph Schimeczek, Volker Sander, and Sebastian Lehnhoff -{' '}
              <strong>Know Your Tools - A Comparison of Open-Source Energy Market Simulation Models.</strong> - EEM 2024 -{' '}
              <a href="https://doi.org/10.1109/EEM60825.2024.10609021" rel="noopener noreferrer">
                DOI
              </a>
            </li>

            <li>
              Johanna Adams, Nick Harder, and Anke Weidlich -{' '}
              <strong>Do Block Orders Matter? Impact of Regular Block and Linked Orders on Electricity Market Simulation Outcomes.</strong>{' '}
              - EEM 2024 -{' '}
              <a href="https://doi.org/10.1109/EEM60825.2024.10608956" rel="noopener noreferrer">
                DOI
              </a>
            </li>

            <li>
              Kim K. Miskiw and Philipp Staudt -{' '}
              <strong>Explainable Deep Reinforcement Learning for Multi-Agent Electricity Market Simulations.</strong> - EEM 2024 -{' '}
              <a href="https://doi.org/10.1109/EEM60825.2024.10608907" rel="noopener noreferrer">
                DOI
              </a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
