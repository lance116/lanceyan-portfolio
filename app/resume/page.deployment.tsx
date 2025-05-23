"use client";
import { useEffect } from 'react';

export default function ResumePage() {
  // This function runs after page mount to modify the DOM directly
  useEffect(() => {
    // Remove any potential elements from the root layout
    const nav = document.querySelector('nav');
    if (nav) nav.style.display = 'none';
    
    const footer = document.querySelector('footer');
    if (footer) footer.style.display = 'none';
    
    // Set background and body styles
    document.body.style.margin = '0';
    document.body.style.padding = '0';
    document.body.style.backgroundColor = 'black';
    document.body.style.overflow = 'hidden';
    
    // Cleanup function
    return () => {
      if (nav) nav.style.display = '';
      if (footer) footer.style.display = '';
      document.body.style.overflow = '';
    };
  }, []);  return (
    <object
      data="/ResumeV2.pdf"
      type="application/pdf"
      className="w-full h-screen"
      style={{ 
        margin: 0, 
        padding: 0,
        border: 'none',
        position: 'absolute',
        top: 0,
        left: 0
      }}
    />
  );
}
