import { NavLink, Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import './layout.css';

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
        <nav className="desktop-nav">
          <NavLink to="/toolbox" className={({isActive}) => isActive ? "nav-link active" : "nav-link"}>Toolbox</NavLink>
          <NavLink to="/research" className={({isActive}) => isActive ? "nav-link active" : "nav-link"}>Research</NavLink>
          <NavLink to="/roadmap" className={({isActive}) => isActive ? "nav-link active" : "nav-link"}>Roadmap</NavLink>
          <NavLink to="/faq" className={({isActive}) => isActive ? "nav-link active" : "nav-link"}>FAQ</NavLink>
          <NavLink to="/community" className={({isActive}) => isActive ? "nav-link active" : "nav-link"}>Community</NavLink>
        </nav>

        {/* Mobile Nav Toggle */}
        <button className="mobile-toggle" onClick={toggleMenu} aria-label="Toggle Menu">
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Mobile Nav */}
        {isOpen && (
          <nav className="mobile-nav">
            <NavLink to="/toolbox" onClick={toggleMenu}>Toolbox</NavLink>
            <NavLink to="/research" onClick={toggleMenu}>Research</NavLink>
            <NavLink to="/roadmap" onClick={toggleMenu}>Roadmap</NavLink>
            <NavLink to="/community" onClick={toggleMenu}>Community</NavLink>
          </nav>
        )}
      </div>
    </header>
  );
}
