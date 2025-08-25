import React, { useState } from 'react';

// Defines the expected props for this component.
// 'children' is a special prop in React that holds any child elements.
interface ExpandableSectionProps {
  children: React.ReactNode;
}

/**
 * A reusable component that wraps content and provides a "View More" / "View Less"
 * button to toggle its visibility.
 * It uses the `useState` hook to manage its open/closed state.
 */
export function ExpandableSection({ children }: ExpandableSectionProps) {
  // 'isOpen' holds the state (true/false), 'setIsOpen' is the function to update it.
  const [isOpen, setIsOpen] = useState(false);

  // Toggles the boolean value of 'isOpen'.
  const toggleOpen = () => {
    setIsOpen(prev => !prev);
  };

  return (
    <>
      {/* The 'open' class is conditionally applied based on the 'isOpen' state. */}
      <div className={`experience-dropdown ${isOpen ? 'open' : ''}`}>
        {children}
      </div>
      <button className="toggle-btn" onClick={toggleOpen}>
        {/* The button text changes based on the 'isOpen' state. */}
        {isOpen ? 'View Less' : 'View More'}
      </button>
    </>
  );
}
