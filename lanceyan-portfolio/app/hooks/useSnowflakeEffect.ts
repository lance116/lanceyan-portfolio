"use client";

import { useEffect } from "react";

// Define the star type for TypeScript
interface Star {
  x: number;
  y: number;
  size: number;
  speed: number;
  drift: number;
  opacity: number;
}

/**
 * Custom hook for creating a snowflake/star background effect
 * Properly handles window resizing and element inspection
 */
export default function useSnowflakeEffect() {
  useEffect(() => {
    // Snowflake background effect
    const canvas = document.createElement('canvas');
    canvas.id = 'starfall-bg';
    canvas.style.position = 'fixed';
    canvas.style.top = '0';
    canvas.style.left = '0';
    canvas.style.width = '100vw';
    canvas.style.height = '100vh';
    canvas.style.pointerEvents = 'none';
    canvas.style.zIndex = '0';
    canvas.style.opacity = '0.60';
    document.body.appendChild(canvas);

    // Create stars outside so they can be recreated on resize
    let stars: Star[] = [];
    let width = 0;
    let height = 0;
    let ctx: CanvasRenderingContext2D | null = null;
    let animationFrameId: number | null = null;
    let running = true;

    // Initialize star properties
    const initializeStars = (): Star[] => {
      const isMobile = window.innerWidth <= 600;
      const STAR_COUNT = isMobile ? 40 : 75;
      
      return Array.from({ length: STAR_COUNT }).map(() => ({
        x: Math.random() * width,
        y: Math.random() * height,
        size: (isMobile ? 1.0 : 1.4) * (Math.random() * 1.5 + 0.6),
        speed: (isMobile ? 0.45 : 0.65) * (Math.random() + 0.25),
        drift: (isMobile ? 0.25 : 0.4) * (Math.random() + 0.2),
        opacity: Math.random() * 0.6 + 0.4,
      }));
    };

    // Function to handle canvas sizing and star initialization
    function setupCanvas() {
      if (!canvas) return;
      
      // Get current dimensions
      width = window.innerWidth;
      height = window.innerHeight;
      
      // Set canvas size with device pixel ratio for crispness
      const dpr = window.devicePixelRatio || 1;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = width + 'px';
      canvas.style.height = height + 'px';
      
      // Setup context
      ctx = canvas.getContext('2d');
      
      if (ctx) {
        ctx.setTransform(1, 0, 0, 1, 0, 0);
        ctx.scale(dpr, dpr);
        
        // Initialize or reinitialize stars
        stars = initializeStars();
      }
    }

    // Set up the canvas initially
    setupCanvas();

    // Animation function
    function animate() {
      if (!running || !ctx) return;
      
      ctx.clearRect(0, 0, width, height);
      
      for (const star of stars) {
        ctx.save();
        ctx.globalAlpha = star.opacity;
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.size, 0, 2 * Math.PI);
        ctx.fillStyle = '#fff';
        ctx.shadowColor = '#fff';
        ctx.shadowBlur = 8;
        ctx.fill();
        ctx.restore();
        
        star.x += star.drift;
        star.y += star.speed;
        
        // Reset stars that move off screen
        if (star.x > width + 8 || star.y > height + 8) {
          star.x = Math.random() * width * 0.7;
          star.y = -8;
          star.size = (window.innerWidth <= 600 ? 0.9 : 1.2) * (Math.random() * 1.4 + 0.5);
          star.speed = (window.innerWidth <= 600 ? 0.4 : 0.6) * (Math.random() + 0.2);
          star.drift = (window.innerWidth <= 600 ? 0.2 : 0.35) * (Math.random() + 0.15);
          star.opacity = Math.random() * 0.6 + 0.4;
        }
      }
      
      animationFrameId = requestAnimationFrame(animate);
    }

    // Handle resize - completely reconfigure canvas and stars
    function handleResize() {
      if (animationFrameId !== null) {
        cancelAnimationFrame(animationFrameId);
      }
      
      // Reset the canvas with new dimensions
      setupCanvas();
      
      // Restart animation
      animate();
    }
    
    // Add resize listener
    window.addEventListener('resize', handleResize);
    
    // Add a mutation observer to detect DOM changes (like inspect element)
    const observer = new MutationObserver(() => {
      // Small delay to ensure DOM has settled
      setTimeout(() => {
        if (width !== window.innerWidth || height !== window.innerHeight) {
          handleResize();
        }
      }, 100);
    });
    
    // Observe changes to the body element
    observer.observe(document.body, { 
      attributes: true, 
      childList: true, 
      subtree: true 
    });
    
    // Start animation
    animate();

    // Cleanup
    return () => {
      running = false;
      if (animationFrameId !== null) {
        cancelAnimationFrame(animationFrameId);
      }
      window.removeEventListener('resize', handleResize);
      observer.disconnect();
      if (canvas.parentNode) canvas.parentNode.removeChild(canvas);
    };
  }, []);
}
