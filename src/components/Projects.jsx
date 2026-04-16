import React from 'react'
import { motion } from 'framer-motion'
import { ArrowUpRight, Github, ChevronRight, Zap } from 'lucide-react'
import Magnetic from './Magnetic'

const Projects = React.memo(() => {
  const projects = [
    {
      title: "NAVIA",
      subtitle: "Assistive AI",
      desc: "Real-time obstacle detection and spatial awareness system for visually impaired users using computer vision.",
      tech: ["Python", "OpenCV", "Edge Computing"],
      link: "https://github.com/Fayaz-unas/NAVIA",
      color: "bg-primary"
    },
    {
      title: "SHINKEI",
      subtitle: "Logic Flow",
      desc: "Interactive D3.js visualizer for program execution flow, designed to simplify complex debugging processes.",
      tech: ["React", "D3.js", "TypeScript"],
      link: "https://github.com/Fayaz-unas/SHINKEI",
      color: "bg-secondary"
    },
    {
      title: "HMF-MAC",
      subtitle: "ISA Research",
      desc: "Advanced cache architecture simulation for RISC-V processors, focusing on adaptive memory management.",
      tech: ["C++", "gem5", "Computer Arch"],
      link: "https://github.com/Fayaz-unas/HMF-MAC",
      color: "bg-accent"
    },
    {
      title: "Hostel MS",
      subtitle: "Scalable ERP",
      desc: "Comprehensive management solution for institutional housing, handling high-concurrency record operations.",
      tech: ["Node.js", "MySQL", "Architecture"],
      link: "https://github.com/Fayaz-unas",
      color: "bg-success"
    }
  ]

  return (
    <div id="projects" className="flex flex-col lg:flex-row items-stretch lg:items-center gap-[6vh] lg:gap-32 h-full py-[8vh] lg:py-24 px-0">
      <div className="w-full lg:w-[600px] px-[5vw] lg:px-0 flex-shrink-0 flex flex-col justify-center relative z-10 text-left">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex items-center gap-4 md:gap-6 mb-[4vh]">
            <div className="w-[clamp(60px,15vw,80px)] h-[clamp(30px,8vw,40px)] bg-black flex items-center justify-center -rotate-3 shadow-neo-md">
              <Zap className="text-white fill-white w-[clamp(18px,4vw,24px)]" />
            </div>
            <span className="text-black font-black tracking-[0.3em] text-[clamp(8px,1.5vw,12px)] uppercase underline decoration-[clamp(2px,0.4vw,4px)] underline-offset-[clamp(4px,0.8vw,8px)]">Artifacts.lib</span>
          </div>
          <h2 className="text-[clamp(2.5rem,10vw,6rem)] font-black font-heading mb-[4vh] tracking-tighter leading-[0.8] text-black">
            ENGINEERED <br />
            <span className="bg-primary border-[clamp(4px,0.8vw,8px)] border-black px-[4vw] lg:px-8 shadow-neo-xl inline-block rotate-1 mt-[1vh]">FOR USE.</span>
          </h2>
          <p className="text-[clamp(1.1rem,2.5vw,1.75rem)] text-black font-black font-body leading-tight mb-[6vh] max-w-lg border-l-[clamp(8px,1.5vw,12px)] border-black pl-[4vw] lg:pl-10">
            A selection of technical artifacts where performance and precision are non-negotiable.
          </p>
          <Magnetic strength={0.1}>
            <a 
              href="https://github.com/Fayaz-unas" 
              target="_blank" 
              rel="noreferrer" 
              aria-label="Explore all repositories on GitHub"
              className="neo-button h-[clamp(50px,12vw,80px)] bg-black text-white text-[clamp(9px,1.8vw,14px)] px-[6vw] lg:px-12 shadow-neo-md hover:bg-primary hover:text-black hover:shadow-neo active:translate-x-1 active:translate-y-1 flex items-center justify-center gap-4 group/repo"
            >
              <span className="font-black uppercase tracking-widest">EXPLORE_REPOSITORIES</span>
              <Github className="w-[clamp(18px,4vw,24px)] h-[clamp(18px,4vw,24px)] text-white group-hover/repo:text-black transition-colors" strokeWidth={3} />
              <ChevronRight className="w-[clamp(20px,4.5vw,28px)] h-[clamp(20px,4.5vw,28px)] text-white/70 group-hover/repo:text-black transition-transform group-hover/repo:translate-x-2" strokeWidth={4} />
            </a>
          </Magnetic>
        </motion.div>
      </div>
      
      <div className="flex flex-col lg:flex-row gap-[4vh] lg:gap-16 items-center px-[5vw] lg:px-0">
        {projects.map((project, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, scale: 0.95, y: 50 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: idx * 0.1, duration: 0.5 }}
            className={`w-full lg:w-[480px] min-h-[clamp(400px,60vh,580px)] ${project.color} border-[clamp(4px,0.8vw,6px)] border-black shadow-neo-md md:shadow-neo-lg p-[8vw] lg:p-12 flex flex-col justify-between group cursor-pointer relative overflow-hidden active:translate-x-2 active:translate-y-2 active:shadow-neo transition-all flex-shrink-0 text-left`}
          >
            {/* Background Texture */}
            <div className="absolute inset-0 brutal-stripes opacity-10 group-hover:opacity-20 transition-opacity" />

            <div className="relative z-10 flex flex-col h-full justify-between">
              <div>
                <div className="flex justify-between items-start mb-[4vh] lg:mb-10">
                  <span className="bg-black text-white font-black text-[clamp(8px,1.5vw,10px)] tracking-widest uppercase px-[3vw] lg:px-5 py-[2vw] lg:py-3 block w-fit border-[clamp(2px,0.4vw,4px)] border-white shadow-neo-sm">
                    {project.subtitle}
                  </span>
                  <div className="text-[clamp(2rem,6vw,3rem)] font-black text-black/10 font-mono tracking-tighter">#0{idx + 1}</div>
                </div>
                <h3 className="text-[clamp(2.5rem,8vw,4.5rem)] font-black font-heading mb-[2vh] lg:mb-8 tracking-tighter leading-[0.85] text-black group-hover:underline decoration-[clamp(4px,0.8vw,8px)] underline-offset-8 transition-all">
                  {project.title}
                </h3>
                <p className="text-black font-black font-body text-[clamp(1rem,2vw,1.25rem)] leading-tight max-w-md bg-white/50 p-[5vw] lg:p-8 border-[clamp(4px,0.8vw,6px)] border-black shadow-neo-sm relative">
                  {project.desc}
                </p>
              </div>

              <div className="mt-[4vh]">
                <div className="flex flex-wrap gap-[2vw] lg:gap-4 mb-[4vh] lg:mb-10">
                  {project.tech.map((t, i) => (
                    <span key={i} className="px-[3vw] lg:px-4 py-[1.5vw] lg:py-2 bg-black text-white text-[clamp(7px,1.5vw,10px)] font-black tracking-widest uppercase border-[clamp(2px,0.4vw,4px)] border-black shadow-neo-sm">
                      {t}
                    </span>
                  ))}
                </div>

                <div className="flex items-center">
                  <Magnetic strength={0.1}>
                    <a 
                      href={project.link} 
                      target="_blank" 
                      rel="noreferrer" 
                      aria-label={`View source code for ${project.title} on GitHub`}
                      className="neo-button h-[clamp(50px,12vw,80px)] bg-black text-white text-[clamp(9px,1.8vw,13px)] px-[6vw] lg:px-16 shadow-neo-md hover:bg-white hover:text-black hover:shadow-neo active:translate-x-1 active:translate-y-1 flex items-center justify-center gap-4 group/btn"
                    >
                      <span className="font-black uppercase tracking-[0.2em]">VIEW_SOURCE_CODE</span>
                      <Github className="w-[clamp(20px,4.5vw,28px)] h-[clamp(20px,4.5vw,28px)] text-white group-hover/btn:text-black transition-colors" strokeWidth={3} />
                      <ArrowUpRight className="w-[clamp(20px,4.5vw,28px)] h-[clamp(20px,4.5vw,28px)] text-white/70 group-hover/btn:text-black transition-colors" strokeWidth={3} />
                    </a>
                  </Magnetic>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
})

export default Projects
