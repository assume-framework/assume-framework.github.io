import { NavLink, Link } from 'react-router-dom';
import { Menu, X, BookOpen } from 'lucide-react';
import { useState } from 'react';
import './layout.css';

// Single source of truth so the desktop and mobile menus can never drift apart.
const navItems = [
  { to: '/', label: 'Home', end: true },
  { to: '/toolbox', label: 'Toolbox' },
  { to: '/community', label: 'Community' },
  { to: '/research', label: 'Research' },
  { to: '/roadmap', label: 'Roadmap' }
];

function GithubIcon({ size = 20 }: { size?: number }) {
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} fill="currentColor" aria-hidden="true">
      <path d="M12 .5C5.73.5.5 5.73.5 12c0 5.09 3.29 9.4 7.86 10.93.57.1.78-.25.78-.55 0-.27-.01-1.15-.02-2.09-3.2.7-3.88-1.35-3.88-1.35-.53-1.34-1.29-1.7-1.29-1.7-1.05-.72.08-.71.08-.71 1.16.08 1.77 1.19 1.77 1.19 1.03 1.77 2.71 1.26 3.37.96.1-.75.4-1.26.73-1.55-2.55-.29-5.23-1.28-5.23-5.68 0-1.25.45-2.28 1.19-3.08-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.18 1.18a11.1 11.1 0 0 1 2.9-.39c.98 0 1.97.13 2.9.39 2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.24 2.76.12 3.05.74.8 1.19 1.83 1.19 3.08 0 4.41-2.69 5.38-5.25 5.67.41.36.78 1.08.78 2.17 0 1.57-.01 2.83-.01 3.22 0 .3.2.66.79.55A10.53 10.53 0 0 0 23.5 12C23.5 5.73 18.27.5 12 .5Z" />
    </svg>
  );
}

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header className="site-header">
      <div className="container header-inner">
        <Link to="/" className="brand">
          <img src="/assume-logo.png" alt="ASSUME Logo" className="brand-logo" />
        </Link>

        {/* Desktop Nav */}
        <div className="nav-right">
          <nav className="desktop-nav" aria-label="Main navigation">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                end={item.end}
                className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}
              >
                {item.label}
              </NavLink>
            ))}
          </nav>

          <div className="nav-icon-links">
            <a
              href="https://github.com/assume-framework/assume"
              target="_blank"
              rel="noopener noreferrer"
              className="nav-icon-link"
              aria-label="GitHub"
              title="GitHub"
            >
              <GithubIcon size={19} />
            </a>
            <a
              href="https://assume.readthedocs.io/en/latest/"
              target="_blank"
              rel="noopener noreferrer"
              className="nav-icon-link"
              aria-label="Read the Docs"
              title="Read the Docs"
            >
              <BookOpen size={19} />
            </a>
          </div>
        </div>

        {/* Mobile Nav Toggle */}
        <button
          className="mobile-toggle"
          onClick={toggleMenu}
          aria-label={isOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={isOpen}
          aria-controls="mobile-nav"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Mobile Nav */}
        {isOpen && (
          <nav id="mobile-nav" className="mobile-nav" aria-label="Main navigation">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                end={item.end}
                onClick={toggleMenu}
                className={({ isActive }) => (isActive ? 'active' : undefined)}
              >
                {item.label}
              </NavLink>
            ))}
            <div className="mobile-nav-icon-links">
              <a
                href="https://github.com/assume-framework/assume"
                target="_blank"
                rel="noopener noreferrer"
                className="nav-icon-link"
                aria-label="GitHub"
              >
                <GithubIcon size={20} /> GitHub
              </a>
              <a
                href="https://assume.readthedocs.io/en/latest/"
                target="_blank"
                rel="noopener noreferrer"
                className="nav-icon-link"
                aria-label="Read the Docs"
              >
                <BookOpen size={20} /> Read the Docs
              </a>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
