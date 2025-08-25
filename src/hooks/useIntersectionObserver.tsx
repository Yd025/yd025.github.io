import { useEffect, useRef, useState } from 'react';

/**
 * A custom React hook that uses the IntersectionObserver API to detect
 * when an element is visible in the viewport.
 * @param options - Configuration options for the IntersectionObserver.
 * @returns An object containing a `ref` to attach to the target element and
 * an `isIntersecting` boolean state.
 */
export function useIntersectionObserver(options: IntersectionObserverInit = { threshold: 0.1 }) {
  const [isIntersecting, setIsIntersecting] = useState(false);
  // useRef is used to get a reference to a DOM element.
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      // When the element intersects with the viewport
      if (entry.isIntersecting) {
        setIsIntersecting(true);
        // Once visible, we can stop observing it to save resources.
        if (ref.current) {
          observer.unobserve(ref.current);
        }
      }
    }, options);

    // Start observing the element if the ref is attached.
    if (ref.current) {
      observer.observe(ref.current);
    }

    // Cleanup function: disconnect the observer when the component unmounts.
    return () => {
      if (ref.current) {
        // eslint-disable-next-line react-hooks/exhaustive-deps
        observer.unobserve(ref.current);
      }
    };
  }, [options]);

  return { ref, isIntersecting };
}
