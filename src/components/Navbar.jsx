import React from 'react'
import { motion } from 'framer-motion'
import { Github, Linkedin, Instagram } from 'lucide-react'

const Navbar = () => {
  return (
    <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-[90%] max-w-5xl">
      <div className="glass h-16 px-8 flex items-center justify-between rounded-full border border-white/10 shadow-2xl">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="text-xl font-bold font-heading tracking-tighter"
        >
          <span className="text-white">FAYAZ</span>
          <span className="text-primary">UNAS</span>
        </motion.div>

        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-400">
          <a href="#about" className="hover:text-primary transition-colors">About</a>
          <a href="#projects" className="hover:text-primary transition-colors">Projects</a>
          <a href="#contact" className="hover:text-primary transition-colors">Contact</a>
        </div>

        <div className="flex items-center gap-4">
          <a href="https://github.com/Fayaz-unas" target="_blank" rel="noreferrer" className="p-2 glass rounded-full hover:text-primary hover:border-primary/50 transition-all cursor-pointer">
            <Github size={18} />
          </a>
          <a href="https://linkedin.com/in/fayaz-unas" target="_blank" rel="noreferrer" className="p-2 glass rounded-full hover:text-primary hover:border-primary/50 transition-all cursor-pointer">
            <Linkedin size={18} />
          </a>
          <a href="https://instagram.com/fayaz_unas" target="_blank" rel="noreferrer" className="p-2 glass rounded-full hover:text-primary hover:border-primary/50 transition-all cursor-pointer">
            <Instagram size={18} />
          </a>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
