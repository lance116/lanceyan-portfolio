"use client";
// filepath: a:\Website\lanceyan-portfolio\app\page.tsx
import Image from "next/image";
import { useEffect } from "react";
import usePageTransitions from "./hooks/usePageTransitions";

export default function Home() {
  // Use our custom hook to handle page transitions
  usePageTransitions();
  
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
    canvas.style.opacity = '0.18';
    document.body.appendChild(canvas);

    let width = window.innerWidth;
    let height = window.innerHeight;
    function setCanvasSize() {
      width = window.innerWidth;
      height = window.innerHeight;
      // On mobile, use devicePixelRatio for crispness
      const dpr = window.devicePixelRatio || 1;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = width + 'px';
      canvas.style.height = height + 'px';
      // ctx is not available until after initialization, so skip transform here
    }
    setCanvasSize();

    function resize() {
      setCanvasSize();
    }
    window.addEventListener('resize', resize);

    const ctx = canvas.getContext('2d');
    // Now that ctx is available, set transform for crispness
    if (ctx) {
      const dpr = window.devicePixelRatio || 1;
      ctx.setTransform(1, 0, 0, 1, 0, 0);
      ctx.scale(dpr, dpr);
    }
    if (!ctx) {
      window.removeEventListener('resize', resize);
      if (canvas.parentNode) canvas.parentNode.removeChild(canvas);
      return;
    }
    // Adjust star count and size for mobile
    const isMobile = typeof window !== 'undefined' && window.innerWidth <= 600;
    const STAR_COUNT = isMobile ? 24 : 48;
    const stars = Array.from({ length: STAR_COUNT }).map(() => ({
      x: Math.random() * width,
      y: Math.random() * height,
      size: (isMobile ? 0.7 : 1) * (Math.random() * 1.2 + 0.4),
      speed: (isMobile ? 0.3 : 0.5) * (Math.random() + 0.15),
      drift: (isMobile ? 0.15 : 0.3) * (Math.random() + 0.1),
      opacity: Math.random() * 0.5 + 0.2,
    }));

    let running = true;
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
        ctx.shadowBlur = 4;
        ctx.fill();
        ctx.restore();
        star.x += star.drift;
        star.y += star.speed;
        if (star.x > width + 8 || star.y > height + 8) {
          star.x = Math.random() * width * 0.7;
          star.y = -8;
          star.size = (isMobile ? 0.7 : 1) * (Math.random() * 1.2 + 0.4);
          star.speed = (isMobile ? 0.3 : 0.5) * (Math.random() + 0.15);
          star.drift = (isMobile ? 0.15 : 0.3) * (Math.random() + 0.1);
          star.opacity = Math.random() * 0.5 + 0.2;
        }
      }
      requestAnimationFrame(animate);
    }
    animate();

    return () => {
      running = false;
      window.removeEventListener('resize', resize);
      if (canvas.parentNode) canvas.parentNode.removeChild(canvas);
    };
  }, []);

  return (
    <div className="grid grid-rows-[56px_1fr_20px] items-center justify-items-center min-h-screen p-0 sm:p-0 font-[family-name:var(--font-geist-sans)]" style={{ position: 'relative', zIndex: 1 }}>


      <main className="flex flex-col gap-2 row-start-2 items-center sm:items-start w-full max-w-4.5xl pt-[56px] px-8 pb-32 sm:px-8">
        <div className="w-full flex flex-row items-center min-h-[200px] px-4 sm:px-8">
          <div className="flex flex-col justify-center items-start flex-1 pl-0">
            <span className="text-2xl font-bold text-left mb-4">Hi! My name is Lance, and I am an incoming Computer Science student at the University of Waterloo.</span>
            <span className="text-base text-left mb-2">I love coding and programming, and I&apos;m currently working on creating a chess neural network with PyTorch.</span>
            <span className="text-base text-left">I&apos;m particularly interested in pursuing a career in Software Engineering and AI.</span>
          </div>
          <div className="flex justify-end items-center min-w-[320px] ml-8">
            <div className="bg-white rounded-xl shadow-lg p-8 w-full max-w-[320px] flex justify-center items-center">
              <Image src="/waterloo.png" alt="University of Waterloo" width={300} height={300} className="object-contain" priority />
            </div>
          </div>
        </div>

        {/* Contacts Section */}
        <section
          className="w-full mt-0.5 mb-8 px-4 sm:px-8 section-hidden"
          id="contact-section"
        >
          <h2 className="text-2xl font-semibold mb-4 text-center sm:text-left">Contact</h2>
          <div className="flex flex-col sm:flex-row gap-5 justify-center sm:justify-start items-center sm:items-baseline">
            <a href="mailto:lance.yan.business@gmail.com" className="text-base text-blue-600 hover:underline flex items-center gap-2" target="_blank" rel="noopener noreferrer">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 12H8m8 0a4 4 0 11-8 0 4 4 0 018 0zm0 0v4a4 4 0 01-8 0v-4" /></svg>
              lance.yan.business@gmail.com
            </a>
            <a href="https://www.linkedin.com/in/lance-yan-71a33a24b/" className="text-base text-blue-600 hover:underline flex items-center gap-2" target="_blank" rel="noopener noreferrer">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.268c-.966 0-1.75-.784-1.75-1.75s.784-1.75 1.75-1.75 1.75.784 1.75 1.75-.784 1.75-1.75 1.75zm13.5 11.268h-3v-5.604c0-1.337-.025-3.063-1.868-3.063-1.868 0-2.154 1.459-2.154 2.967v5.7h-3v-10h2.881v1.367h.041c.401-.761 1.379-1.563 2.838-1.563 3.036 0 3.6 2 3.6 4.59v5.606z"/></svg>
              LinkedIn
            </a>
            <a href="https://github.com/lance116" className="text-base text-blue-600 hover:underline flex items-center gap-2" target="_blank" rel="noopener noreferrer">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0C5.371 0 0 5.373 0 12c0 5.303 3.438 9.8 8.207 11.387.6.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.84 1.237 1.84 1.237 1.07 1.834 2.807 1.304 3.492.997.108-.775.418-1.305.762-1.605-2.665-.305-5.466-1.334-5.466-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.523.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.984-.399 3.003-.404 1.018.005 2.047.138 3.006.404 2.291-1.553 3.297-1.23 3.297-1.23.653 1.653.242 2.873.119 3.176.77.84 1.235 1.91 1.235 3.221 0 4.609-2.803 5.624-5.475 5.921.43.371.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.565 21.796 24 17.299 24 12c0-6.627-5.373-12-12-12z"/></svg>
              GitHub
            </a>
          </div>
        </section>
        {/* Transition logic has been moved to a custom hook */}

        {/* Skills Section */}
        <section
          className="w-full mt-1 section-hidden px-4 sm:px-8"
          id="skills-section"
        >
          <h2 className="text-2xl font-semibold mb-4 text-center sm:text-left">Skills</h2>
          {/* Languages Row */}
          <div className="mb-6">
            <h3 className="text-lg font-medium mb-2 text-center sm:text-left">Languages</h3>
            <div className="flex flex-wrap gap-4 justify-center sm:justify-start">
              {[
                { src: "/python.png", label: "Python", url: "https://www.python.org/" },
                { src: "/java.png", label: "Java", url: "https://www.java.com/", bigger: true },
                { src: "/typescript.png", label: "TypeScript", url: "https://www.typescriptlang.org/" },
                { src: "/javascript.png", label: "JavaScript", url: "https://www.javascript.com/" },
              ].map(({ src, label, url, bigger }) => (
                label === "CSS" || label === "HTML" ? (
                  <div key={label} className="flex flex-col items-center min-w-[96px]">
                    <div className="flex flex-col items-center justify-end h-[64px]">
                      <Image src={src} alt={label} width={label === "HTML" ? 56 : 40} height={label === "HTML" ? 56 : 40} className="mb-0" />
                    </div>
                    <span className="text-sm text-center mt-0 min-h-[20px]">{label}</span>
                  </div>
                ) : (
                  <a
                    key={label}
                    href={url}
                    className="flex flex-col items-center min-w-[96px] group"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <div className="flex flex-col items-center justify-end h-[64px]">
                      <Image
                        src={src}
                        alt={label}
                        width={bigger ? 48 : 40}
                        height={bigger ? 48 : 40}
                        className={
                          "mb-0 transition-transform duration-200 group-hover:scale-125" +
                          (bigger ? "" : "")
                        }
                        style={bigger ? { marginLeft: "8px" } : undefined}
                      />
                    </div>
                    <span className="text-sm text-center mt-0 min-h-[20px]">{label}</span>
                  </a>
                )
              ))}
            </div>
          </div>
          {/* Frameworks Row */}
          <div>
            <h3 className="text-lg font-medium mb-2 text-center sm:text-left">Frameworks & Libraries</h3>
            <div className="flex flex-wrap gap-4 justify-center sm:justify-start">
              {[
                { src: "/react.png", label: "React", url: "https://react.dev/" },
                { src: "/nextjs.png", label: "Next.js", url: "https://nextjs.org/" },
                { src: "/tailwindcss.png", label: "Tailwind CSS", url: "https://tailwindcss.com/", moveUp: true, moveUpMore: true, moveUpMost: true },
                { src: "/pytorch.png", label: "PyTorch", url: "https://pytorch.org/" },
                { src: "/tensorflow.png", label: "TensorFlow", url: "https://www.tensorflow.org/" },
                { src: "/numpy.png", label: "NumPy", url: "https://numpy.org/" },
                { src: "/css.png", label: "CSS" },
                { src: "/html.png", label: "HTML", bigger: true, moveUp: true },
              ].map(({ src, label, url, moveUp, bigger, moveUpMore, moveUpMost }) => (
                label === "CSS" || label === "HTML" ? (
                  <div key={label} className="flex flex-col items-center min-w-[96px]">
                    <div className="flex flex-col items-center justify-end h-[80px]">
                      <Image
                        src={src}
                        alt={label}
                        width={label === "HTML" && bigger ? 74 : label === "HTML" ? 64 : 48}
                        height={label === "HTML" && bigger ? 74 : label === "HTML" ? 64 : 48}
                        className="mb-1"
                        style={moveUp ? { marginTop: '-12px' } : undefined}
                      />
                    </div>
                    <span className="text-sm text-center mt-1 min-h-[20px]">{label}</span>
                  </div>
                ) : (
                  <a
                    key={label}
                    href={url}
                    className="flex flex-col items-center min-w-[96px] group"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <div className="flex flex-col items-center justify-end h-[80px]">
                      <Image
                        src={src}
                        alt={label}
                        width={label === "Tailwind CSS" && moveUp ? 48 : 48}
                        height={label === "Tailwind CSS" && moveUp ? 48 : 48}
                        className="mb-1 transition-transform duration-200 group-hover:scale-125"
                        style={label === "Tailwind CSS" && moveUpMost ? { marginTop: '-32px' } : label === "Tailwind CSS" && moveUpMore ? { marginTop: '-24px' } : label === "Tailwind CSS" && moveUp ? { marginTop: '-12px' } : undefined}
                      />
                    </div>
                    <span className="text-sm text-center mt-1 min-h-[20px]">{label}</span>
                  </a>
                )
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
