import { Link } from 'react-router-dom';
import { PageHeader } from '../components/ui/PageHeader';
import './pages.css';

export function AboutPage() {
  return (
    <div className="container page-container page-narrow">
      <PageHeader
        title="About us"
        subtitle="ASSUME is an open-source simulation toolbox developed by a research community working on electricity markets, reinforcement learning and energy system design."
      />

      <section className="section prose-stack">
        <p>
          The transformation of electricity markets associated with the transition towards high shares of renewable power
          generation results in the constant development of market mechanisms, increasing sector coupling, and creating new
          market platforms. Introducing a new market or changing the current market design does, however, affect all other
          markets and their participants because of their strong interrelation in not necessarily foreseeable ways. This
          raised the need for tools and simulation models to investigate and understand such complex interplay of markets and
          predict possible adverse effects and misuse of market power.
        </p>
        <p>
          With ASSUME (2021 – 2025) a team of researchers developed a highly modular and easy-to-use energy market simulation
          toolbox with integrated reinforcement learning methods. Different reinforcement learning algorithms in multi-agent
          simulations of electricity markets have been tested resulting in promising bidding strategies and the ability to
          model complex market interactions. The toolbox has enabled an agile analysis of market designs and bidding
          strategies of new actors and emerging market dynamics in our fast-changing energy system.
        </p>
        <p>
          With ADAPT (2025 – 2028), the successor of the ASSUME project, we aim to expand on this. The ADAPT project –
          Adaptive AI‐supported Simulation Toolbox for Energy Markets Design – is developing a user‐friendly, adaptive
          simulation platform built on deep reinforcement learning (DRL). ASSUME already provides a comprehensive technical
          foundation that can be used for market‐design studies, and will be further developed in ADAPT in three major areas:
        </p>
        <p>
          <strong>Adaptive market‐agent</strong> – The platform introduces an AI‐driven market‐agent that represents the
          regulator or market‐design authority. It can autonomously tweak market rules and parameters, observe how
          participants react, and continuously learn how to improve the design. This creates flexible, self‐optimising
          market‐designs that stay effective in a rapidly changing environment.
        </p>
        <p>
          <strong>Low‐code, user‐friendly RL toolbox with explainable results</strong> – A low‐code reinforcement‐learning
          interface and an intuitive front‐end make the advanced DRL engine accessible to researchers without deep
          programming skills. Integrated AI assistants built on large‐language models guide users through configuration and
          operation, while built‐in explainability tools shed light on the multi‐agent simulation outcomes, fostering trust in
          the insights generated.
        </p>
        <p>
          <strong>Inclusion of local grids and sector coupling</strong> – The tool is extended to model distribution networks,
          local energy systems and cross‐sector interactions. This enables distribution‐system operators and other downstream
          actors to simulate congestion‐management measures, test regulatory options (e.g., extensions of § 14a EnWG), and
          design incentive schemes for flexible loads such as electrolyzers, steel plants and other industrial consumers that
          can respond to dynamic price and grid signals, thereby supporting overall system optimisation and stability.
        </p>
        <p>
          These developments will allow researchers, TSOs, DSOs, unit operators, regulators to assess the effects of market or
          regulatory changes in a model that captures intricate relationships between market designs and market participants.
          Use cases could include reforms to grid‐tariff structures, the creation of capacity markets and bidding zone
          configurations.
        </p>
      </section>

      <section className="section">
        <h2 className="subsection-title">Meet our Team</h2>
        <Link to="/community" className="link-arrow">
          See the full team on the community page →
        </Link>
      </section>

      <section className="section">
        <h2 className="subsection-title">Publications</h2>
        <Link to="/research" className="link-arrow">
          Browse publications on the research page →
        </Link>
      </section>
    </div>
  );
}
