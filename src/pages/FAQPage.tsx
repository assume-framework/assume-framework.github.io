export function FAQPage() {
  return (
    <div className="container" style={{ padding: '4rem 0' }}>
      <header style={{ marginBottom: '4rem', maxWidth: '800px' }}>
        <h1 style={{ fontSize: '3rem', marginBottom: '1rem', letterSpacing: '-0.02em' }}>Frequently Asked Questions</h1>
        <p style={{ fontSize: '1.25rem', color: 'var(--text-secondary)' }}>
          Answers to common questions about the ASSUME framework, terminology, and modeling concepts.
        </p>
      </header>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem', maxWidth: '900px' }}>
        
        <section>
          <h2 style={{ fontSize: '1.5rem', marginBottom: '0.75rem' }}>What makes ASSUME different from other market simulators?</h2>
          <p style={{ color: 'var(--text-secondary)', lineHeight: 1.7 }}>
            A unique feature of the ASSUME toolbox is its native integration of <strong>Deep Reinforcement Learning (DRL)</strong> into the behavioral strategies of market agents. This overcomes the limitations of fixed, rule-based behaviors in traditional Agent-Based Models (ABMs), enabling agents to adapt dynamically in response to changing market conditions.
          </p>
        </section>

        <section>
          <h2 style={{ fontSize: '1.5rem', marginBottom: '0.75rem' }}>Do I need to be an AI expert to use the RL features?</h2>
          <p style={{ color: 'var(--text-secondary)', lineHeight: 1.7 }}>
            No. The framework provides pre-built, plug-and-play modules for both demand and generation. Furthermore, the <strong>ADAPT project</strong> extension is specifically developing a low-code RL toolbox with an explainable interface, designed specifically for researchers without deep AI programming expertise.
          </p>
        </section>

        <section>
          <h2 style={{ fontSize: '1.5rem', marginBottom: '0.75rem' }}>What is "Sector Coupling" in this context?</h2>
          <p style={{ color: 'var(--text-secondary)', lineHeight: 1.7 }}>
            Sector coupling refers to the integration of the electricity sector with other energy sectors (like heat, mobility, or hydrogen). In ASSUME, you can model complex distribution networks and test incentive schemes for flexible loads like electrolyzers and industrial consumers, linking downstream actors to the core wholesale electricity market.
          </p>
        </section>

        <section>
          <h2 style={{ fontSize: '1.5rem', marginBottom: '0.75rem' }}>What are "Zonal clearing" and "NTCs"?</h2>
          <p style={{ color: 'var(--text-secondary)', lineHeight: 1.7 }}>
            European electricity markets are primarily split into bidding zones (Zonal Clearing). <strong>NTCs</strong> (Net Transfer Capacities) define the maximum power exchange limits between these zones. ASSUME utilizes the <strong>PyPSA</strong> library to calculate network-based market clearing, allowing for realistic modeling of congestion management, re-dispatch, and cross-border power flows.
          </p>
        </section>

        <section>
          <h2 style={{ fontSize: '1.5rem', marginBottom: '0.75rem' }}>Can I use a database to store and analyze my scenarios?</h2>
          <p style={{ color: 'var(--text-secondary)', lineHeight: 1.7 }}>
            Yes. ASSUME supports output to a <strong>TimescaleDB</strong> database. The official repository includes a Docker Compose setup that spins up the database alongside preconfigured <strong>Grafana</strong> dashboards, allowing you to instantly visualize your market simulation results without building analytics from scratch.
          </p>
        </section>

      </div>
    </div>
  );
}
