import { Link } from 'react-router-dom';

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div className="muted">
          © ASSUME contributors ·{' '}
          <a href="https://creativecommons.org/licenses/by/4.0/" rel="noopener noreferrer">
            CC BY 4.0
          </a>
        </div>
        <div className="footer-links">
          <a href="https://github.com/assume-framework/assume" rel="noopener noreferrer">
            GitHub
          </a>
          <a href="https://assume.readthedocs.io/en/latest/" rel="noopener noreferrer">
            Documentation
          </a>
          <Link to="/people">People</Link>
        </div>
      </div>
    </footer>
  );
}
