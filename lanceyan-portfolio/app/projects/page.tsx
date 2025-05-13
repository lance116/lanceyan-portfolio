"use client";
import Image from "next/image";
import usePageTransitions from "../hooks/usePageTransitions";

export default function ProjectsPage() {
  usePageTransitions();
    const projects = [
    {      id: 1,
      title: "This Website!",
      description: "My personal portfolio website built with Next.js 14, featuring sleek design, interactive elements, and animated transitions. The site showcases responsive layouts, snowflake particle animations, and dynamic content loading. It features clean, modern UI with hover effects and a carefully designed color scheme for optimal user experience.",
      image: "/website.png", // Screenshot of the home page
      githubUrl: "https://github.com/lance116/lanceyan-portfolio",
      skills: [
        { name: "Next.js", imgSrc: "/nextjs.png" },
        { name: "React", imgSrc: "/react.png" },
        { name: "TypeScript", imgSrc: "/typescript.png" },
        { name: "Tailwind CSS", imgSrc: "/tailwindcss.png" },
        { name: "JavaScript", imgSrc: "/javascript.png" }
      ]
    },    {
      id: 2,
      title: "Chess Neural Network",
      description: "Under development. A neural network model designed to analyze and predict chess moves using deep learning techniques. The project incorporates advanced TensorFlow functionality with Python and visualization through Matplotlib.",
      image: "/pytorch.png", // Using PyTorch logo as a temporary placeholder
      githubUrl: "https://github.com/lance116/",
      skills: [
        { name: "Python", imgSrc: "/python.png" },
        { name: "TensorFlow", imgSrc: "/tensorflow.png" },
        { name: "NumPy", imgSrc: "/numpy.png" },
        { name: "Matplotlib", imgSrc: "/matplotlib.png" }
      ]
    }
    // You can add more projects here in the future
  ];

  const needsWhiteBg = (name: string) => {
    return name === "HTML" || name === "CSS";
  };
  
  const needsCircularWhiteBg = (name: string) => {
    return name === "Next.js";
  };

  return (
    <div className="min-h-screen relative z-10 pt-14 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-center sm:text-left mb-12 relative inline-block">
          Projects
          <span className="absolute bottom-0 left-0 w-full h-1.5 bg-purple-500 rounded-full" 
                style={{ transform: 'translateY(8px)' }}></span>
        </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project) => (            <div 
              key={project.id}
              className="rounded-xl overflow-hidden shadow-lg border border-gray-800/40 bg-black/40 transition-all duration-300 hover:shadow-2xl transform hover:-translate-y-1 flex flex-col"
            >{/* Project Header */}              <div className="bg-black/80 p-6 flex-1">
                <div className="flex flex-col h-full">
                  <div className="flex-1 min-h-[100px]">
                    <h2 className="text-2xl font-bold text-white drop-shadow-lg mb-3">
                      {project.title}
                    </h2>
                    <p className="text-white/90 text-sm leading-relaxed mb-5">
                      {project.description}
                    </p>
                  </div>
                  <div className="w-full h-[180px] relative overflow-hidden rounded-lg bg-black/20 border border-white/10">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>
                {/* Project Technologies */}              <div className="relative bg-gradient-to-b from-black to-black/80 py-4 px-6 z-10 flex flex-col">                <h3 className="text-base font-medium text-white mb-4">Built with:</h3>                <div className="flex flex-wrap gap-8 mb-6 justify-center sm:justify-start">
                  {project.skills.map((skill, index) => (
                    <div key={index} className="flex flex-col items-center group">
                      <div className="flex justify-center items-center h-[50px]">
                        <div className={`
                          ${needsWhiteBg(skill.name) ? "bg-white p-1 rounded-md" : 
                            needsCircularWhiteBg(skill.name) ? "bg-white p-1 rounded-full flex items-center justify-center" : 
                            ""}
                        `} style={needsCircularWhiteBg(skill.name) ? { width: "32px", height: "32px" } : undefined}>
                          <Image
                            src={skill.imgSrc}
                            alt={skill.name}
                            width={skill.name === "Next.js" ? 36 : 30}
                            height={skill.name === "Next.js" ? 36 : 30}
                            className="transition-transform duration-200 group-hover:scale-125"
                            style={skill.name === "Next.js" ? { marginTop: '0.25px' } : undefined}
                          />
                        </div>
                      </div>
                      <span className="text-xs text-white mt-2">{skill.name}</span>
                    </div>
                  ))}
                </div>
                
                {/* GitHub Repository Button */}                <div className="flex justify-center sm:justify-start">
                  <a 
                    href={project.githubUrl} 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-all duration-300 rounded-md text-white text-sm"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0C5.371 0 0 5.373 0 12c0 5.303 3.438 9.8 8.207 11.387.6.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.84 1.237 1.84 1.237 1.07 1.834 2.807 1.304 3.492.997.108-.775.418-1.305.762-1.605-2.665-.305-5.466-1.334-5.466-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.523.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.984-.399 3.003-.404 1.018.005 2.047.138 3.006.404 2.291-1.553 3.297-1.23 3.297-1.23.653 1.653.242 2.873.119 3.176.77.84 1.235 1.91 1.235 3.221 0 4.609-2.803 5.624-5.475 5.921.43.371.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.565 21.796 24 17.299 24 12c0-6.627-5.373-12-12-12z"/>
                    </svg>
                    View GitHub Repository
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
