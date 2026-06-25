import './layout.css';

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-inner">
        <p>
          &copy; {new Date().getFullYear()} <a href="https://assume.readthedocs.io/en/latest/developers.html" target="_blank" rel="noopener noreferrer">ASSUME developers</a>.
          Licensed under <a href="https://www.gnu.org/licenses/agpl-3.0.html" target="_blank" rel="noopener noreferrer">AGPL-3.0</a>.
        </p>
        <p>
          Funded by the <strong>Federal Ministry for Economic Affairs and Climate Action (BMWK)</strong>.
          {' '}<a href="https://doi.org/10.5281/zenodo.8088760" target="_blank" rel="noopener noreferrer">Zenodo Archive</a>
          {' · '}<a href="https://joss.theoj.org/papers/a8843ad1978808dc593b16437a2a029e" target="_blank" rel="noopener noreferrer">JOSS</a>
        </p>
      </div>
    </footer>
  );
}
