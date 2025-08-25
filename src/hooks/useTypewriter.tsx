import { useState, useEffect } from 'react';

/**
 * A custom React hook that simulates a typewriter effect.
 * It cycles through an array of texts, typing and deleting them.
 * @param texts - An array of strings to type out.
 * @param typingSpeed - Speed of typing in milliseconds.
 * @param deletingSpeed - Speed of deleting in milliseconds.
 * @param delay - Pause duration in milliseconds after a text is fully typed.
 * @returns The currently displayed text string.
 */
export function useTypewriter(texts: string[], typingSpeed = 70, deletingSpeed = 30, delay = 3000) {
  const [text, setText] = useState('');
  const [textIndex, setTextIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  // The useEffect hook runs the typing logic and re-runs whenever its dependencies change.
  useEffect(() => {
    const type = () => {
      const currentText = texts[textIndex];
      
      if (isDeleting) {
        // Handle deleting logic
        if (charIndex > 0) {
          setText(currentText.slice(0, charIndex - 1));
          setCharIndex(charIndex - 1);
        } else {
          // Finished deleting, switch to the next text
          setIsDeleting(false);
          setTextIndex((prevIndex) => (prevIndex + 1) % texts.length);
        }
      } else {
        // Handle typing logic
        if (charIndex < currentText.length) {
          setText(currentText.slice(0, charIndex + 1));
          setCharIndex(charIndex + 1);
        } else {
          // Finished typing, wait then start deleting
          setTimeout(() => setIsDeleting(true), delay);
        }
      }
    };

    // Set a timeout for the next character action
    const timeout = setTimeout(type, isDeleting ? deletingSpeed : typingSpeed);
    
    // Cleanup function: clears the timeout when the component unmounts or dependencies change
    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, textIndex, texts, typingSpeed, deletingSpeed, delay]);

  return text;
}
