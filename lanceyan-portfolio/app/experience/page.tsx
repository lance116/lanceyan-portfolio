"use client";

import React from 'react'; // Import React for CSSProperties

interface ExperienceCSSProperties extends React.CSSProperties {
  '--glow-color-hex'?: string;
  '--glow-color-rgb'?: string;
}

export default function ExperiencePage() {
  const experiences = [
    {
      title: "ThermoGen Design Project Engineering Lead",
      org: "Toronto Metropolitan University",
      location: "Toronto, ON",
      date: "June 2024 - July 2024",      
      details: [
        "Led development of ThermoGen, an energy recovery system reducing residential bills by 60%.",
        "Integrated thermodynamic principles to generate 269,440 kWh from HVAC waste heat.",
        "Collaborated with professors from multiple universities on energy innovation design."
      ],
      color: "blue"
    },
    {
      title: "Advanced Mathematics Tutor",
      org: "Math Challengers Program",
      location: "Burnaby, BC",
      date: "September 2023 - June 2025",      
      details: [
        "Taught advanced math to gifted students across three elementary schools.",
        "Prepared students for competitive mathematics through specialized problem-solving methods."
      ],
      color: "green"
    },
    {
      title: "STEM Workshop Facilitator & Youth Mentor",
      org: "Simon Fraser University",
      location: "Vancouver, BC",
      date: "July 2023 - August 2023",      
      details: [
        "Simplified complex scientific concepts for engaging children's workshops.",
        "Dedicated 82 volunteer hours to boost youth interest in STEM fields."
      ],
      color: "purple"
    }
  ];

  return (    <div className="flex flex-col items-center w-full min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-bold mb-10 text-white">Experience</h1>
      
      {/* Timeline container */}      <div className="relative w-full max-w-3xl">
        {/* Vertical line */}
        <div className="absolute left-6 sm:left-1/2 top-6 bottom-0 w-1 bg-gray-700 transform -translate-x-1/2" />
        
        {/* Experience items */}
        <div className="space-y-16">
          {experiences.map((exp, index) => (
            <div key={index} className="relative">
              {/* Timeline dot */}              <div 
                className={`absolute left-6 sm:left-1/2 w-6 h-6 rounded-full bg-[#121212] shadow-md border-4 border-${exp.color}-500 transform -translate-x-1/2`}
                style={{ top: "6px" }}
              />
              
              {/* Content card */}
              <div 
                className={`relative ml-12 sm:ml-0 sm:w-5/6 ${
                  index % 2 === 0 ? 'sm:ml-auto sm:pl-8' : 'sm:mr-auto sm:pr-8'
                }`}
              >                <div 
                  className={`bg-[#121212] rounded-lg p-6 shadow-md border-2 border-neutral-700 group experience-card`}
                  style={{
                    '--glow-color-hex': exp.color === 'blue' ? '#3B82F6' : exp.color === 'green' ? '#10B981' : '#8B5CF6',
                    '--glow-color-rgb': exp.color === 'blue' ? '59, 130, 246' : exp.color === 'green' ? '16, 185, 129' : '139, 92, 246'
                  } as ExperienceCSSProperties}
                >                  <div className="flex flex-col sm:flex-row sm:justify-between mb-2">
                    <h3 className={`text-xl font-bold text-white experience-title`}>{exp.title}</h3>
                    <span className="text-gray-300 text-sm mt-1 sm:mt-0">{exp.date}</span>
                  </div>
                  
                  <div className="flex flex-col sm:flex-row justify-between text-sm mb-4">
                    <p className="font-medium text-gray-200">{exp.org}</p>
                    <span className="text-gray-400 mt-1 sm:mt-0">{exp.location}</span>
                  </div>
                  
                  <ul className="list-disc pl-5 space-y-2">
                    {exp.details.map((detail, idx) => (
                      <li key={idx} className="text-gray-300 text-sm">{detail}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <style jsx>{`
        .experience-card {
          /* Initial border color is set by Tailwind's border-neutral-700 */
          transition: border-color 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
        }
        .experience-title {
          transition: color 0.3s ease-in-out, text-shadow 0.3s ease-in-out;
        }

        .experience-card:hover {
          border-color: var(--glow-color-hex);
          box-shadow: 0 0 12px 2px rgba(var(--glow-color-rgb), 0.4),  /* Outer softer glow */
                      0 0 5px 1px rgba(var(--glow-color-rgb), 0.6);  /* Inner sharper glow */
        }

        .experience-card:hover .experience-title {
          color: var(--glow-color-hex);
          text-shadow: 0 0 8px rgba(var(--glow-color-rgb), 0.6),   /* Primary text glow */
                       0 0 16px rgba(var(--glow-color-rgb), 0.4); /* Secondary, more diffuse glow */
        }
      `}</style>
    </div>
  );
}
