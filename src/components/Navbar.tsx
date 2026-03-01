import { NavLink, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === '/';

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const classes = [
    scrolled ? 'scrolled' : '',
    isHome && !scrolled ? 'header-home' : '',
  ].filter(Boolean).join(' ');

  return (
    <header className={classes}>
      <div className="container">
        <div className="header-content">
          <NavLink to="/" className="logo">Yidan Ma</NavLink>
          <nav>
            <NavLink to="/">HOME</NavLink>
            <NavLink to="/work">WORK</NavLink>
            <NavLink to="/projects">PROJECTS</NavLink>
            <NavLink to="/academic">ACADEMIC</NavLink>
            <NavLink to="/activities">ACTIVITIES</NavLink>
          </nav>
        </div>
      </div>
    </header>
  );
}
