import './layout.css';

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-inner">
        <p>&copy; {new Date().getFullYear()} ASSUME Project. Open-Source Energy Simulation Toolbox.</p>
        <p>Supported by the ADAPT initiative.</p>
      </div>
    </footer>
  );
}
