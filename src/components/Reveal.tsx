import React from 'react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

interface RevealProps {
  children: React.ReactNode;
}

/**
 * A component that wraps its children in a div and applies a 'visible' class
 * when the component scrolls into the viewport.
 * This is used to trigger CSS animations for a "reveal on scroll" effect.
 * It leverages the custom `useIntersectionObserver` hook for the core logic.
 */
export function Reveal({ children }: RevealProps) {
  // The custom hook returns a ref to attach to the element and a boolean state.
  const { ref, isIntersecting } = useIntersectionObserver();

  return (
    // The ref is attached here. The 'visible' class is added when isIntersecting becomes true.
    <div ref={ref} className={`reveal ${isIntersecting ? 'visible' : ''}`}>
      {children}
    </div>
  );
}
