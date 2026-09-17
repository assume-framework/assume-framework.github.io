import { Mail, GitBranch, MessageSquare, Users, Calendar } from 'lucide-react';
import { Button } from '../components/ui/Button';
import { PageHeader } from "../components/ui/PageHeader";
import './pages.css';

const team = [
  {
    id: 'colmenares-montero',
    name: 'Dr. Gloria Maria Colmenares Montero',
    meta: 'Fraunhofer IEG',
    bio: 'Working at Fraunhofer IEG on flexibility markets, energy economics and regulation.',
    initials: 'GC'
  },
  {
    id: 'grimm',
    name: 'Gunter Grimm',
    meta: 'INATECH CIG, University of Freiburg',
    bio: "Research associate and doctoral student focusing on market participants' interaction with regulation and market design across time horizons. He coordinates the ADAPT project.",
    initials: 'GG',
    image: '/img/people/gunter-grimm.jpg'
  },
  {
    id: 'khanra',
    name: 'Manish Khanra',
    meta: 'Fraunhofer ISI',
    bio: 'Works on integrating hydrogen and e-fuels for decarbonizing hard-to-abate sectors, electricity market and technology diffusion models.',
    initials: 'MK',
    image: '/img/people/manish-khanra.png'
  },
  {
    id: 'maurer',
    name: 'Florian Maurer',
    meta: 'IDT, FH Aachen - University of Applied Sciences',
    bio: 'Open-source development, agent-based modeling of energy markets to compare market designs and policies.',
    initials: 'FM',
    image: '/img/people/florian-maurer.png'
  },
  {
    id: 'miskiw',
    name: 'Kim K. Miskiw',
    meta: 'WIN - IM, KIT',
    bio: 'Research interests include deep reinforcement learning in electricity market simulations, agent-based electricity market modeling, energy market engineering and stochastic optimization.',
    initials: 'KM',
    image: '/img/people/kim-k-miskiw.png'
  },
  {
    id: 'patil',
    name: 'Parag Patil',
    meta: 'Fraunhofer IEG',
    bio: 'Demand-side flexibility modeling, hydrogen-based steel production pathways and infrastructure modeling.',
    initials: 'PP',
    image: '/img/people/parag-patil.jpg'
  },
  {
    id: 'qussous',
    name: 'Ramiz Qussous',
    meta: 'INATECH CIG, University of Freiburg',
    bio: 'Co-author of ASSUME, wholesale electricity market modeling with multi-agent deep reinforcement learning.',
    initials: 'RQ',
    image: '/img/people/ramiz-qussous.jpg'
  },
  {
    id: 'raskob',
    name: 'Jannik Raskob',
    meta: 'IDT, FH Aachen - University of Applied Sciences',
    bio: 'PhD student working with agentic AI, ASSUME GUI and ontologies.',
    initials: 'JR',
    image: '/img/people/jannik-raskob.jpg'
  },
  {
    id: 'reinecke',
    name: 'Finn Reinecke',
    meta: 'INATECH CIG, University of Freiburg',
    bio: 'Reinforcement learning, market simulation',
    initials: 'FR',
    image: '/img/people/finn-reinecke.jpg'
  },
  {
    id: 'thederan',
    name: 'Marie Thederan',
    meta: 'WIN - IM, KIT',
    bio: 'Market simulation, agent-based electricity market modeling.',
    initials: 'MT',
    image: '/img/people/marie-thederan.jpg'
  },
  {
    id: 'wanniger',
    name: 'Carl Wanniger',
    meta: 'INATECH CIG, University of Freiburg',
    bio: '',
    initials: 'CW',
    image: '/img/people/carl-wanniger.jpg'
  }
];

export function CommunityPage() {
  return (
    <div className="container page-container">
      <PageHeader title="Community & Team" subtitle="ASSUME is developed by a collaboration across several institutions." />

      <section className="section">
        <h2 className="section-title">Contributing Institutions</h2>
        <ul className="inst-grid">
          {[
            { name: 'INATECH CIG, University of Freiburg', url: 'https://uni-freiburg.de/tf-inatech-tev/' },
            { name: 'WIN - IM, Karlsruhe Institute of Technology (KIT)', url: 'https://im.iism.kit.edu/' },
            { name: 'IDT, FH Aachen - University of Applied Sciences', url: 'https://idt.fh-aachen.de' },
            { name: 'Fraunhofer ISI', url: 'https://www.isi.fraunhofer.de/' },
            { name: 'Fraunhofer IEG', url: 'https://www.ieg.fraunhofer.de/' }
          ].map(inst => (
            <li key={inst.name} className="inst-card">
              <a href={inst.url} target="_blank" rel="noopener noreferrer">
                {inst.name}
              </a>
            </li>
          ))}
        </ul>
      </section>

      <section className="section">
        <h2 className="section-title">Core Development Team</h2>
        <div className="team-grid">
          {team.map(member => (
            <div key={member.id} className="team-card">
              {member.image ? (
                <img src={member.image} alt={member.name} className="team-avatar" />
              ) : (
                <div className="team-initials" aria-hidden="true">{member.initials}</div>
              )}
              <div className="team-body">
                <h3 className="team-name">{member.name}</h3>
                <p className="team-meta">{member.meta}</p>
                {member.bio && <p className="team-bio">{member.bio}</p>}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="section section-divided">
        <h2 className="section-title">Your Contribution</h2>
        <p className="prose" style={{ marginBottom: '2rem' }}>
          ASSUME is built for the community. We welcome contributions ranging from new market mechanisms and bidding strategies to bug fixes and documentation improvements.
        </p>
        <Button variant="outline" href="https://github.com/assume-framework/assume/blob/main/CONTRIBUTING.md" target="_blank" rel="noopener noreferrer">
          <GitBranch size={18} /> Contribution Guidelines
        </Button>
      </section>

      <section className="section section-divided">
        <h2 className="section-title">Get in Touch</h2>
        <p className="prose" style={{ marginBottom: '2rem' }}>
          Have questions or want to collaborate? The best way to reach us is through our Matrix channel, opening an issue on GitHub, or asking on the OpenMod Discourse forum.
        </p>
        <div className="panel" style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start', marginBottom: '2rem' }}>
          <Calendar color="var(--brand-primary)" style={{ flexShrink: 0, marginTop: '0.15rem' }} />
          <p className="prose" style={{ margin: 0 }}>
            <strong>Open Consultations</strong> &mdash; we hold an open consultation on the last Friday of every month, starting at 14:00. All are welcome; details are shared on our Matrix channel.
          </p>
        </div>
        <div className="btn-row">
          <Button variant="primary" href="https://matrix.to/#/#assume-framework:matrix.org" target="_blank" rel="noopener noreferrer">
            <MessageSquare size={18} /> Join Matrix Chat
          </Button>
          <Button variant="outline" href="https://forum.openmod.org/" target="_blank" rel="noopener noreferrer">
            <Users size={18} /> OpenMod Forum
          </Button>
          <Button variant="outline" href="https://github.com/assume-framework/assume/issues" target="_blank" rel="noopener noreferrer">
            <GitBranch size={18} /> GitHub Issues
          </Button>
          <Button variant="outline" href="mailto:gunter.grimm@inatech.uni-freiburg.de">
            <Mail size={18} /> Email Coordinator
          </Button>
        </div>
      </section>

      {/* Past Workshops */}
      <section id="workshops" className="section section-divided">
        <h2 className="section-title">Past Workshops</h2>
        <p className="prose" style={{ marginBottom: '2rem' }}>
          Beyond online sessions, the ASSUME team regularly runs in-person workshops and tutorials at conferences such as the <strong>ABM4Energy Conference</strong> and <strong>DACH+ Energy Informatics</strong>.
        </p>

        <div className="workshop-gallery">
          <figure>
            <img src="/img/workshops/IMG_20231004_093436.jpg" alt="Participants following an early ASSUME workshop session" />
            <figcaption>Early ASSUME workshop session at Dach+ Energy Informatics 2023</figcaption>
          </figure>
          <figure>
            <img src="/img/workshops/1728906778928.jpg" alt="Hands-on workshop session with participants coding along" />
            <figcaption>Coding session during an ASSUME workshop at Dach+ Energy Informatics 2024</figcaption>
          </figure>
          <figure>
            <img src="/img/workshops/1751450410096.jpg" alt="Instructor leading a coding session at an ASSUME workshop" />
            <figcaption>Coding session during an ASSUME workshop at Dach+ Energy Informatics 2024</figcaption>
          </figure>
          <figure>
            <img src="/img/workshops/PXL_20260330_095813655.jpg" alt="ASSUME team member presenting at the ABM4Energy Conference" />
            <figcaption>Poster Presentation at the ABM4Energy Conference 2026</figcaption>
          </figure>
          <figure>
            <img src="/img/workshops/abm4energy-vienna-group.jpg" alt="ASSUME team in front of the conference venue in Vienna" />
            <figcaption>ASSUME team at the ABM4Energy Conference 2026</figcaption>
          </figure>
        </div>

        <h3 className="subsection-title">Last Workshop &ndash; Agenda &amp; Session Abstracts</h3>
        <p className="wk-meta"><strong>Date:</strong> Wednesday, 9 July 2025</p>
        <p className="wk-meta" style={{ marginBottom: '1.5rem' }}><strong>Format:</strong> Online via Zoom</p>

        <h4 className="wk-subhead">Introduction</h4>
        <p className="wk-body-text">
          The transition to high shares of renewable power, coupled with emerging actors and rapidly evolving market rules, calls for tools that can <strong>simulate, stress-test, and help design tomorrow's electricity markets</strong>. <strong>ASSUME</strong> (Agent-Based Electricity Markets Simulation Toolbox) combines agent-based modelling with deep-reinforcement learning to explore adaptive bidding behaviour, sector-coupling, and system-level effects across multiple inter-linked markets.
        </p>
        <p className="wk-body-text">
          This final workshop of the ASSUME project showcased the toolbox, underlying science, and practical workflows. <strong>Sessions were modular</strong>&mdash;participants were able to join whichever topics interested them&mdash;but at the core was the <strong>Opening Session</strong> for essential context.
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

    </div>
  );
}
