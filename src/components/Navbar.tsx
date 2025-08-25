import { NavLink } from 'react-router-dom';

/**
 * Renders the main navigation bar for the portfolio.
 * It uses NavLink from react-router-dom to automatically apply an 'active' class
 * to the link corresponding to the current page, which helps in styling the active link.
 */
export function Navbar() {
  return (
    <header>
      <div className="container">
        <div className="header-content">
          {/* Logo links to the homepage */}
          <NavLink to="/" className="logo">Adelin Ma</NavLink>
          {/* Navigation links */}
          <nav>
            <NavLink to="/">HOME</NavLink>
            <NavLink to="/work">WORK</NavLink>
            <NavLink to="/academic">ACADEMIC</NavLink>
            <NavLink to="/activities">ACTIVITIES</NavLink>
            <NavLink to="/projects">PROJECTS</NavLink>
          </nav>
        </div>
      </div>
    </header>
  );
}
