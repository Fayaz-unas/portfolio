import React from 'react'
import { motion } from 'framer-motion'
import { ExternalLink, Github } from 'lucide-react'

const Projects = () => {
  const projects = [
    {
      title: "NAVIA",
      subtitle: "Navigation Beyond Sight",
      desc: "Smart navigation for visually impaired users with real-time obstacle detection.",
      tech: ["Python", "OpenCV", "Raspberry Pi"],
      link: "https://github.com/Fayaz-unas/NAVIA"
    },
    {
      title: "SHINKEI",
      subtitle: "Execution Flow Visualizer",
      desc: "Tool to visualize program execution flow for debugging complex code.",
      tech: ["React", "Typescript", "D3.js"],
      link: "https://github.com/Fayaz-unas/SHINKEI"
    },
    {
      title: "HMF-MAC",
      subtitle: "Adaptive Cache Architecture",
      desc: "Real-time adaptive cache architecture using the gem5 simulator.",
      tech: ["C++", "Python", "gem5", "RISC-V"],
      link: "https://github.com/Fayaz-unas/HMF-MAC"
    },
    {
      title: "Hostel Mgmt",
      subtitle: "End-to-End Solution",
      desc: "Streamlined hostel operations including room allocation and records.",
      tech: ["React", "Node.js", "Express", "MySQL"],
      link: "https://github.com/Fayaz-unas"
    }
  ]

  return (
    <section id="projects" className="h-full flex items-center px-12 py-12 gap-12">
      <div className="w-[300px] flex-shrink-0">
        <motion.h2 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-8xl font-bold font-heading opacity-10 rotate-90 origin-left translate-y-full whitespace-nowrap"
        >
          SELECTED WORK
        </motion.h2>
      </div>
      
      <div className="flex gap-12">
        {projects.map((project, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: idx * 0.1 }}
            className="w-[500px] h-[600px] glass-card rounded-3xl overflow-hidden group cursor-pointer relative"
          >
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />
            
            <div className="absolute top-0 right-0 p-8 flex gap-4">
              <a href={project.link} target="_blank" rel="noreferrer" className="p-3 glass rounded-full hover:bg-primary hover:text-black transition-all">
                <Github size={20} />
              </a>
              <div className="p-3 glass rounded-full hover:bg-primary hover:text-black transition-all">
                <ExternalLink size={20} />
              </div>
            </div>

            <div className="absolute bottom-0 left-0 p-12 w-full">
              <span className="text-primary font-bold text-xs tracking-widest uppercase mb-2 block">{project.subtitle}</span>
              <h3 className="text-4xl font-bold font-heading mb-4 group-hover:text-primary transition-colors">{project.title}</h3>
              <p className="text-gray-400 font-body mb-8 line-clamp-2">{project.desc}</p>
              
              <div className="flex flex-wrap gap-2">
                {project.tech.map((t, i) => (
                  <span key={i} className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-[10px] uppercase font-bold tracking-wider text-gray-500">
                    {t}
                  </span>
                ))}
              </div>
            </div>
            
            {/* Hover visual effect */}
            <div className="absolute -bottom-12 -right-12 w-48 h-48 bg-primary/20 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity" />
          </motion.div>
        ))}
      </div>
    </section>
  )
}

export default Projects
