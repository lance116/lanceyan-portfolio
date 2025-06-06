"use client";
import Image from "next/image";
import usePageTransitions from "./hooks/usePageTransitions";
import useSnowflakeEffect from "./hooks/useSnowflakeEffect";
import { useEffect, useState } from "react";

export default function Home() {
  // State to track if device is mobile
  const [isMobile, setIsMobile] = useState(false);
  
  // Use our custom hook to handle page transitions
  usePageTransitions();
  
  // Use snowflake effect hook for the background
  useSnowflakeEffect();
  
  // Detect mobile devices
  useEffect(() => {
    const checkDevice = () => {
      const userAgent = navigator.userAgent;
      const isMobileDevice = /iPhone|iPad|iPod|Android/i.test(userAgent);
      setIsMobile(isMobileDevice);
    };
    
    checkDevice();
    window.addEventListener('resize', checkDevice);
    
    return () => window.removeEventListener('resize', checkDevice);
  }, []);
  
  // Helper function to determine if logo needs white background
  const needsWhiteBg = (label: string) => {
    return label === "HTML" || label === "CSS";
  };
  
  // Helper function to determine if logo needs circular white background
  const needsCircularWhiteBg = (label: string) => {
    return label === "Next.js";
  };
  
  return (
    <div className="grid grid-rows-[56px_1fr_20px] items-center justify-items-center min-h-screen p-0 sm:p-0 font-[family-name:var(--font-geist-sans)]" style={{ position: 'relative', zIndex: 1 }}>


      <main className="flex flex-col gap-2 row-start-2 items-center sm:items-start w-full max-w-4.5xl pt-[56px] px-8 pb-32 sm:px-8">
        <div className={`w-full flex ${isMobile ? 'flex-col' : 'flex-row'} items-center min-h-[200px] px-4 sm:px-8`}>
          <div className={`flex flex-col justify-center items-start flex-1 pl-0 ${isMobile ? 'mb-6' : ''}`}>
            <span className={`${isMobile ? 'text-xl' : 'text-2xl'} font-bold text-left mb-4`}>
              Hi! My name is Lance, and I am an incoming Computer Science student at the University of Waterloo.
            </span>
            <span className="text-base text-left mb-2">
              I love coding and programming, and I&apos;m currently working on creating a chess neural network with TensorFlow/Keras.
            </span>
            <span className="text-base text-left">
              I&apos;m particularly interested in pursuing a career in Software Engineering, Quantitative Development or Artificial Intelligence.
            </span>
          </div>          <div className={`flex ${isMobile ? 'justify-center' : 'justify-end'} items-center ${isMobile ? 'w-full' : 'min-w-[320px] ml-8'}`}>
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
          <h2 className="text-2xl font-semibold mb-4 text-center sm:text-left relative inline-block">
            Contact
            <span className="absolute bottom-0 left-0 w-full h-1.5 bg-blue-500 rounded-full" style={{ transform: 'translateY(4px)' }}></span>
          </h2>
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
        
        {/* Skills Section */}        
        <section
          className="w-full mt-1 section-hidden px-4 sm:px-8"
          id="skills-section"
        >          
          <h2 className="text-2xl font-semibold mb-4 text-center sm:text-left relative inline-block">
            Skills
            <span className="absolute bottom-0 left-0 w-full h-1.5 bg-red-500 rounded-full" style={{ transform: 'translateY(4px)' }}></span>
          </h2>
          
          {/* Languages Row */}          
          <div className="mb-6">
            <h3 className="text-lg font-medium mb-2 text-center sm:text-left">Languages</h3>
            <div className="flex flex-wrap gap-6 justify-center sm:justify-start">
              {[
                { src: "/python.png", label: "Python", url: "https://www.python.org/" },
                { src: "/java.png", label: "Java", url: "https://www.java.com/", bigger: true },
                { src: "/typescript.png", label: "TypeScript", url: "https://www.typescriptlang.org/" },
                { src: "/javascript.png", label: "JavaScript", url: "https://www.javascript.com/" },
                { src: "/css.png", label: "CSS", url: "https://developer.mozilla.org/en-US/docs/Web/CSS" },
                { src: "/html.png", label: "HTML", url: "https://developer.mozilla.org/en-US/docs/Web/HTML", bigger: true, moveUp: true, htmlAdjust: true },
              ].map(({ src, label, url, bigger, htmlAdjust }) => (
                (
                  <a
                    key={label}
                    href={url}
                    className="flex flex-col items-center min-w-[110px] group"
                    target="_blank"
                    rel="noopener noreferrer"                  >                    <div className="flex flex-col items-center justify-end h-[64px]">                      <div className={needsWhiteBg(label) ? label === "HTML" ? "bg-white p-[0.243rem] rounded-md" : "bg-white p-1 rounded-md" : ""} 
                         style={label === "HTML" ? { transform: "scale(0.918)", marginTop: "2px" } : undefined}>
                        <Image
                          src={src}
                          alt={label}
                          width={label === "HTML" && htmlAdjust ? 43.03 : bigger ? 48 : 40}
                          height={label === "HTML" && htmlAdjust ? 43.03 : bigger ? 48 : 40}
                          className="mb-0 transition-transform duration-200 group-hover:scale-125"
                          style={label === "HTML" && htmlAdjust ? { marginLeft: "1px" } : bigger ? { marginLeft: "8px" } : undefined}
                        />
                      </div>
                    </div>
                    <span className="text-sm text-center mt-2 min-h-[20px]">{label}</span>
                  </a>
                )
              ))}
            </div>
          </div>
          
          {/* Frameworks Row */}          
          <div>
            <h3 className="text-lg font-medium mb-2 text-center sm:text-left">Frameworks & Libraries</h3>
            <div className="flex flex-wrap gap-6 justify-center sm:justify-start">              {[
                { src: "/react.png", label: "React", url: "https://react.dev/", bigger: false },
                { src: "/nextjs.png", label: "Next.js", url: "https://nextjs.org/", bigger: false },
                { src: "/tailwindcss.png", label: "Tailwind CSS", url: "https://tailwindcss.com/", moveUp: true, moveUpMore: true, moveUpMost: true, bigger: false },
                { src: "/pytorch.png", label: "PyTorch", url: "https://pytorch.org/", bigger: false },
                { src: "/tensorflow.png", label: "TensorFlow", url: "https://www.tensorflow.org/", bigger: false },
                { src: "/numpy.png", label: "NumPy", url: "https://numpy.org/", bigger: false },
                { src: "/matplotlib.png", label: "Matplotlib", url: "https://matplotlib.org/", bigger: false },
              ].map(({ src, label, url, moveUp, moveUpMore, moveUpMost }) => (
                <a
                  key={label}
                  href={url}
                  className="flex flex-col items-center min-w-[110px] group"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="flex flex-col items-center justify-end h-[80px] relative">
                    <div
                      className={
                        `${needsWhiteBg(label) ? 'bg-white p-1 rounded-md' : needsCircularWhiteBg(label) ? 'bg-white p-1 rounded-full flex items-center justify-center' : ''}`
                      }
                      style={needsCircularWhiteBg(label) ? { width: '44px', height: '44px', marginTop: '5px' } : undefined}
                    >
                      <Image
                        src={src}
                        alt={label}
                        width={label === 'Tailwind CSS' && moveUp ? 48 : label === 'Next.js' ? 52 : 48}
                        height={label === 'Tailwind CSS' && moveUp ? 48 : label === 'Next.js' ? 52 : 48}
                        className="mb-1 transition-transform duration-200 group-hover:scale-125"
                        style={
                          label === 'Next.js' ? { marginTop: '3.5px' } :
                          label === 'Tailwind CSS' && moveUpMost ? { marginTop: '-32px' } :
                          label === 'Tailwind CSS' && moveUpMore ? { marginTop: '-24px' } :
                          label === 'Tailwind CSS' && moveUp ? { marginTop: '-12px' } :
                          undefined
                        }
                      />
                    </div>
                  </div>
                  <span className="text-sm text-center mt-2 min-h-[20px] transition-colors duration-300">{label}</span>
                </a>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
