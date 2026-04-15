import React, { useRef, useEffect } from 'react'
import { motion, useScroll, useSpring, useTransform } from 'framer-motion'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Contact from './components/Contact'
import CustomCursor from './components/CustomCursor'
import ScrollProgress from './components/ScrollProgress'

function App() {
  const containerRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  })

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  })

  return (
    <div ref={containerRef} className="relative bg-background overflow-hidden">
      <CustomCursor />
      <ScrollProgress scaleX={scaleX} />
      <Navbar />
      
      <main>
        <Hero />
        
        {/* Horizontal Scroll Journey */}
        <section className="relative h-[300vh]">
          <div className="sticky top-0 h-screen flex items-center overflow-hidden">
             <motion.div 
               style={{ x: useTransform(scrollYProgress, [0.3, 0.9], ["0%", "-66.6%"]) }}
               className="flex h-full w-[300vw]"
             >
                <div className="w-screen h-full flex-shrink-0">
                  <About />
                </div>
                <div className="w-[200vw] h-full flex-shrink-0">
                  <Projects />
                </div>
             </motion.div>
          </div>
        </section>

        <Contact />
      </main>
      
      <footer className="py-12 px-6 text-center text-gray-500 border-t border-white/5">
        <p>© {new Date().getFullYear()} Fayaz Unas. Built with React & Framer Motion.</p>
      </footer>
    </div>
  )
}

export default App
