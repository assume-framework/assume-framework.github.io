import { useState } from 'react';
import { NavLink } from 'react-router-dom';

const nav = [
  { to: '/about', label: 'Background' },
  { to: '/projects', label: 'Projects' },
  { to: '/people', label: 'People' },
  { to: '/publications', label: 'Publications' },
] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="site-header">
      <div className="container header-inner">
        <NavLink className="brand" to="/" onClick={() => setOpen(false)}>
          <img src="/img/assume-logo.png" alt="ASSUME logo" width={64} height={64} />
          <span>
            <strong>ASSUME</strong>
            <span>Agent-based electricity market simulation</span>
          </span>
        </NavLink>

        <button
          type="button"
          className="nav-toggle"
          aria-expanded={open}
          aria-controls="site-nav"
          onClick={() => setOpen((v) => !v)}
        >
          Menu
        </button>

        <nav id="site-nav" className="nav" data-open={open ? 'true' : 'false'} aria-label="Primary">
          {nav.map(({ to, label }) => (
            <NavLink
              key={to}
              to={to}
              end={to === '/'}
              className={({ isActive }) => (isActive ? 'active' : undefined)}
              onClick={() => setOpen(false)}
            >
              {label}
            </NavLink>
          ))}
        </nav>
      </div>
    </header>
  );
}
