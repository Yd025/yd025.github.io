import { Outlet } from 'react-router-dom';
import { Navbar } from './Navbar';
import { SocialsSidebar } from './SocialsSidebar';

/**
 * The main layout component for the application.
 * It renders the common elements like the Navbar, SocialsSidebar, and Footer.
 * The <Outlet /> component from react-router-dom is a placeholder that renders
 * the specific page component that matches the current URL (e.g., Home, Work, Projects).
 */
export function Layout() {
  return (
    <>
      <Navbar />
      <SocialsSidebar />
      <main>
        {/* Page-specific content will be rendered here */}
        <Outlet />
      </main>
      <footer>
        <p>Last updated: February 2026.</p>
        <p>© 2026 Yidan (Adelin) Ma. All rights reserved. </p>
      </footer>
    </>
  );
}
