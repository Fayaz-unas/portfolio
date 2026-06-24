import React from 'react'
import { motion } from 'framer-motion'
import { ArrowUpRight, Github, ChevronRight } from 'lucide-react'
import Magnetic from './Magnetic'

const PROJECT_LIST = [
  {
    title: "NAVIA",
    subtitle: "Assistive AI",
    desc: "An AI-powered spatial awareness engine using real-time computer vision to navigate and describe environments for visually impaired users.",
    tech: ["Python", "OpenCV", "Edge Computing"],
    link: "https://github.com/Fayaz-unas/NAVIA",
    color: "bg-primary"
  },
  {
    title: "SHINKEI",
    subtitle: "Logic Flow",
    desc: "A real-time program execution visualizer that maps call graphs and control flow, making complex debugging intuitive and visual.",
    tech: ["React", "D3.js", "TypeScript"],
    link: "https://github.com/Fayaz-unas/SHINKEI",
    color: "bg-secondary"
  },
  {
    title: "HMF-MAC",
    subtitle: "ISA Research",
    desc: "Adaptive hardware-managed cache replacement policies for RISC-V processors, improving L2 hit rates by up to 18%.",
    tech: ["C++", "gem5", "Computer Arch"],
    link: "https://github.com/Fayaz-unas/HMF-MAC",
    color: "bg-accent"
  },
  {
    title: "Hostel MS",
    subtitle: "Scalable ERP",
    desc: "A high-concurrency institutional ERP handling 5000+ daily transactions with optimized query plans and role-based access control.",
    tech: ["Node.js", "MySQL", "Architecture"],
    link: "https://github.com/Fayaz-unas/Campus-hostel-automation",
    color: "bg-success"
  }
]

const Projects = React.memo(() => {
  return (
    <div id="projects" className="flex flex-col lg:flex-row items-stretch lg:items-center gap-[6vh] lg:gap-20 h-full py-[8vh] lg:py-0 px-0">
      <div className="w-full lg:w-[520px] px-4 md:px-8 lg:px-0 flex-shrink-0 flex flex-col justify-center relative z-10 text-left">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-[clamp(2.5rem,10vw,6rem)] font-black font-heading mb-[4vh] tracking-tighter leading-[0.8] text-black">
            SELECTED <br />
            <span className="bg-primary border-[clamp(4px,0.8vw,8px)] border-black px-[4vw] lg:px-8 shadow-neo-xl inline-block rotate-1 mt-[1vh]">WORKS.</span>
          </h2>
          <p className="text-[clamp(1.1rem,2.5vw,1.75rem)] text-black font-black font-body leading-[1.3] mb-[6vh] max-w-lg">
            Handpicked engineering projects — each one a deep-dive into solving real-world problems with precision and craft.
          </p>
          <Magnetic strength={0.1}>
            <a
              href="https://github.com/Fayaz-unas"
              target="_blank"
              rel="noreferrer"
              aria-label="Explore all repositories on GitHub"
              className="neo-button h-[clamp(60px,12vw,80px)] bg-black text-white text-[clamp(10px,1.8vw,14px)] px-[8vw] lg:px-12 shadow-neo-md hover:bg-primary hover:text-black hover:shadow-neo active:translate-x-1 active:translate-y-1 flex items-center justify-center gap-4 group/repo"
            >
              <span className="font-black uppercase tracking-widest">VIEW_ALL_REPOSITORIES</span>
              <Github className="w-[clamp(18px,4vw,24px)] h-[clamp(18px,4vw,24px)] text-white group-hover/repo:text-black transition-colors" strokeWidth={3} />
              <ChevronRight className="w-[clamp(20px,4.5vw,28px)] h-[clamp(20px,4.5vw,28px)] text-white/70 group-hover/repo:text-black transition-transform group-hover/repo:translate-x-2" strokeWidth={4} />
            </a>
          </Magnetic>
        </motion.div>
      </div>

      <div className="flex flex-col lg:flex-row gap-[4vh] lg:gap-8 items-stretch px-4 md:px-8 lg:px-0 lg:py-6">
        {PROJECT_LIST.map((project, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, scale: 0.95, y: 50 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: idx * 0.1, duration: 0.5 }}
            className={`w-full lg:w-[400px] lg:h-[calc(100vh-100px)] ${project.color} border-[clamp(4px,0.8vw,6px)] border-black shadow-neo-md md:shadow-neo-lg p-[8vw] lg:p-8 flex flex-col group cursor-pointer relative overflow-hidden active:translate-x-2 active:translate-y-2 active:shadow-neo transition-all flex-shrink-0 text-left will-change-transform`}
          >
            {/* Background Texture */}
            <div className="absolute inset-0 brutal-stripes opacity-10 md:group-hover:opacity-20 transition-opacity pointer-events-none" />

            <div className="relative z-10 flex flex-col h-full justify-between">
              <div>
                <div className="flex justify-between items-start mb-4 lg:mb-6">
                  <span className="bg-black text-white font-black text-[clamp(8px,1.5vw,10px)] tracking-widest uppercase px-[3vw] lg:px-5 py-[2vw] lg:py-3 block w-fit border-[clamp(2px,0.4vw,4px)] border-white shadow-neo-sm">
                    {project.subtitle}
                  </span>
                  <div className="text-[clamp(1.5rem,5vw,3rem)] font-black text-black/10 font-mono tracking-tighter">#0{idx + 1}</div>
                </div>
                <h3 className="text-[clamp(2rem,8vw,3rem)] font-black font-heading mb-[2vh] lg:mb-4 tracking-tighter leading-[0.85] text-black group-hover:underline decoration-[clamp(4px,0.8vw,8px)] underline-offset-8 transition-all">
                  {project.title}
                </h3>
                <p className="text-black font-black font-body text-[clamp(0.9rem,2vw,1.05rem)] leading-[1.35] max-w-md bg-white/50 p-[6vw] lg:p-5 border-[clamp(3px,0.6vw,4px)] border-black shadow-neo-sm relative">
                  {project.desc}
                </p>
              </div>

              <div className="mt-auto pt-4">
                <div className="flex flex-wrap gap-[2.5vw] lg:gap-3 mb-[3vh] lg:mb-5">
                  {project.tech.map((t, i) => (
                    <span key={i} className="px-[3vw] lg:px-4 py-[1.5vw] lg:py-2 bg-black text-white text-[clamp(8px,1.5vw,10px)] font-black tracking-widest uppercase border-[clamp(2px,0.4vw,4px)] border-black shadow-neo-sm">
                      {t}
                    </span>
                  ))}
                </div>

                <div className="flex items-center">
                  <Magnetic strength={0.1} className="w-full">
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={`View source code for ${project.title} on GitHub`}
                      className="neo-button h-[clamp(50px,10vw,60px)] bg-black text-white text-[clamp(9px,1.6vw,11px)] px-[6vw] lg:px-8 shadow-neo-md hover:bg-white hover:text-black hover:shadow-neo active:translate-x-1 active:translate-y-1 flex items-center justify-center gap-3 group/btn w-full"
                    >
                      <span className="font-black uppercase tracking-[0.2em]">EXPLORE_SOURCE</span>
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

Projects.displayName = 'Projects'

export default Projects
