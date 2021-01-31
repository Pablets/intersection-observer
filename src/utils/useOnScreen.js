import { useState, useEffect } from 'react';
export default function useOnScreen(options) {
    // State and setter for storing whether element is visible
    const [ref, setRef] = useState(null);
    const [isVisible, setIsVisible] = useState(false);
  
    useEffect(() => {
      const observer = new IntersectionObserver(([entry]) => {
        // Update our state when observer callback fires
        setIsVisible(entry.isIntersecting);
      }, options);
  
      if (ref) {
        observer.observe(ref);
      }
  
      return () => {
        if (ref) {
          observer.unobserve(ref);
        }
      };
    }, [ref, options]); // Empty array ensures that effect is only run on mount and unmount
  
    return [setRef, isVisible];
  }