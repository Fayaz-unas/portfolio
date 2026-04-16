import React, { useEffect } from 'react'
import { motion, useScroll, useTransform, useSpring, useMotionValue } from 'framer-motion'
import { FileText, Cpu, Code2, Github, Linkedin, Instagram } from 'lucide-react'
import Magnetic from './Magnetic'

const Hero = React.memo(({ setNotification }) => {
  // CONFIGURATION: Add your Google Drive resume link here as a fallback
  const RESUME_DRIVE_URL = "" 

  const { scrollY } = useScroll()
  const opacity = useTransform(scrollY, [0, 500], [1, 0])
  const scale = useTransform(scrollY, [0, 500], [1, 0.9])
  const rotateHero = useTransform(scrollY, [0, 500], [0, -5])

  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  const springX = useSpring(mouseX, { damping: 50, stiffness: 400 })
  const springY = useSpring(mouseY, { damping: 50, stiffness: 400 })

  const handleResumeClick = (e) => {
    e.preventDefault()
    
    // Check for a valid URL in the configuration constant
    if (RESUME_DRIVE_URL && RESUME_DRIVE_URL.startsWith('http')) {
      window.open(RESUME_DRIVE_URL, '_blank')
    } else {
      // Display popup if URL is not configured
      setNotification({
        type: 'error',
        message: 'RESUME_UPLINK_OFFLINE: Please configure the RESUME_DRIVE_URL in Hero.jsx.'
      })
    }
  }

  useEffect(() => {
    const handleMouseMove = (e) => {
      const { clientX, clientY } = e
      const { innerWidth, innerHeight } = window
      mouseX.set((clientX / innerWidth - 0.5) * 50)
      mouseY.set((clientY / innerHeight - 0.5) * 50)
    }
    window.addEventListener('mousemove', handleMouseMove)
    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
    }
  }, [mouseX, mouseY])

  return (
    <section className="relative min-h-[100svh] flex flex-col px-4 md:px-8 lg:px-12 overflow-x-clip bg-white brutal-grid pt-0 pb-0">

      {/* Main Content Integration */}
      <motion.div 
        style={{ scale, opacity, rotate: rotateHero }}
        className="w-full relative z-10 flex-grow flex items-center justify-center py-[4vh] lg:py-[2vh]"
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-[6vh] lg:gap-[4vw] items-center w-full">
          <div className="lg:col-span-8 text-left relative z-20">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, type: 'spring' }}
            >
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="mb-2 lg:mb-4"
              >
                <h2 className="text-[clamp(3rem,8vw,6rem)] font-black text-black tracking-[calc(-0.05em)] uppercase leading-none block border-b-[clamp(6px,1vw,12px)] border-primary w-fit pb-1">
                  FAYAZ UNAS
                </h2>
              </motion.div>

              <h1 className="text-[clamp(2rem,7vw,5.5rem)] font-black font-heading mb-[2vh] lg:mb-[3vh] tracking-tighter leading-[0.85] text-black/90">
                <motion.span 
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="block"
                >
                  ARCHITECTING
                </motion.span>
                <motion.span 
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.4 }}
                  className="inline-block bg-primary border-[clamp(4px,0.5vw,8px)] border-black px-[3vw] md:px-[2vw] shadow-neo-md md:shadow-neo-lg -rotate-1 mt-[0.5vh]"
                >
                  ROBUST SYSTEMS.
                </motion.span>
              </h1>

              <div className="flex flex-col md:flex-row gap-6 lg:gap-10 items-start md:items-center">
                <motion.div 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.6 }}
                  className="relative max-w-[min(100%,550px)]"
                >
                  <p className="text-[clamp(1rem,1.8vw,1.25rem)] text-black font-black font-body leading-[1.1] bg-white border-[clamp(3px,0.4vw,6px)] border-black p-[4vw] md:p-[1.5vw] shadow-neo-sm md:shadow-neo-md relative z-20">
                    Software Engineer specializing in 
                    <span className="bg-secondary px-[0.5ch] mx-[0.2ch]">Computer Architecture</span> and 
                    <span className="underline decoration-[clamp(3px,0.4vw,6px)] underline-offset-[0.2em] px-[0.2ch]">scalable</span> full-stack systems.
                  </p>
                  <div className="absolute -inset-[clamp(4px,0.6vw,8px)] bg-black -z-10 translate-x-[1.5vw] translate-y-[1.5vw] md:translate-x-[0.8vw] md:translate-y-[0.8vw]" />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.7 }}
                >
                  <Magnetic strength={0.2}>
                    <button 
                      onClick={handleResumeClick}
                      className="neo-button bg-black text-white hover:bg-primary hover:text-black transition-all inline-flex items-center gap-4 group py-3 px-6 lg:py-4 lg:px-8 shadow-neo-md"
                    >
                      <span className="font-black text-base lg:text-lg uppercase tracking-widest">RESUME_UPLINK</span>
                      <FileText className="w-5 h-5 lg:w-6 lg:h-6 group-hover:rotate-12 transition-transform" />
                    </button>
                  </Magnetic>
                </motion.div>
              </div>
            </motion.div>
          </div>

          {/* Right: Technical Stats & Socials */}
          <div className="lg:col-span-4 flex flex-col gap-[1.5vh] lg:gap-[2vh] relative z-10 w-full max-w-[400px] lg:max-w-none mx-auto lg:mx-0">
            <div className="flex gap-[2vw] lg:gap-[1vw]">
              {[
                { icon: <Github />, href: "https://github.com/Fayaz-unas", color: "bg-white", hover: "hover:bg-black", label: "Github Profile" },
                { icon: <Linkedin />, href: "https://linkedin.com/in/fayaz-unas", color: "bg-accent", hover: "hover:bg-white", label: "Linkedin Profile" },
                { icon: <Instagram />, href: "https://www.instagram.com/fayaz_unas", color: "bg-secondary", hover: "hover:bg-black", label: "Instagram Profile" },
              ].map((social, i) => (
                <Magnetic key={i} strength={0.3}>
                  <a 
                    href={social.href} 
                    target="_blank" 
                    rel="noreferrer" 
                    aria-label={social.label}
                    className={`${social.color} ${social.hover} border-[clamp(2px,0.3vw,4px)] border-black p-[4vw] lg:p-[1vw] shadow-neo-sm hover:translate-y-[-0.3vh] hover:shadow-neo active:translate-y-0 transition-all flex-1 flex items-center justify-center group/social`}
                  >
                    {React.cloneElement(social.icon, { className: `w-[clamp(1.2rem,3vw,1.5rem)] h-[clamp(1.2rem,3vw,1.5rem)] ${social.color === "bg-accent" ? "text-white group-hover/social:text-accent" : "text-black group-hover/social:text-white"} transition-colors`, strokeWidth: 3 })}
                  </a>
                </Magnetic>
              ))}
            </div>

            {[
              { icon: <Cpu />, label: "Technical Core", value: "Systems Architecture", color: "bg-primary" },
              { icon: <Code2 />, label: "Principal Stack", value: "Full-Stack Engineering", color: "bg-secondary" }
            ].map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 + i * 0.1 }}
                className="neo-card p-[3.5vw] lg:p-[1vw] flex items-center justify-between group hover:bg-black hover:text-white transition-all border-[clamp(2px,0.3vw,4px)] shadow-neo-sm"
              >
                <div className="flex items-center gap-[3vw] lg:gap-[1vw]">
                  <div className={`p-[2vw] lg:p-[0.6vw] ${stat.color} border-[clamp(2px,0.3vw,4px)] border-black shadow-neo-sm group-hover:bg-white transition-colors`}>
                    {React.cloneElement(stat.icon, { className: "w-[clamp(1rem,2.5vw,1.25rem)] h-[clamp(1rem,2.5vw,1.25rem)] text-black", strokeWidth: 3 })}
                  </div>
                  <div className="text-left">
                    <p className="text-[clamp(0.45rem,1.2vw,0.6rem)] uppercase font-black tracking-widest text-black/40 group-hover:text-white/40 mb-0 transition-colors">{stat.label}</p>
                    <p className="text-[clamp(0.8rem,2vw,1rem)] font-black text-black group-hover:text-white transition-colors leading-none">{stat.value}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Decorative Floating Elements */}
      <motion.div 
        style={{ opacity, x: springX, y: springY }}
        className="absolute top-[5%] left-[5%] w-[6vw] h-[6vw] min-w-[30px] min-h-[30px] bg-primary/10 border-[clamp(1px,0.2vw,3px)] border-black/5 -z-10 -rotate-12 hidden lg:block" 
      />
      
      {/* Background Marquee Integration */}
      <div className="mt-auto w-full relative z-30 overflow-hidden">
        <div className="marquee-container rotate-[-1deg] border-y-[1px] border-black scale-105 origin-center">
          <div className="marquee-content py-1 lg:py-1.5 text-[clamp(0.6rem,1.2vw,0.85rem)] opacity-80">
            SCALABLE ARCHITECTURE • PERFORMANCE OPTIMIZATION • SYSTEM INTEGRITY • PRECISION ENGINEERING • FULL-STACK EXCELLENCE • SCALABLE ARCHITECTURE • PERFORMANCE OPTIMIZATION • SYSTEM INTEGRITY • PRECISION ENGINEERING • FULL-STACK EXCELLENCE •
          </div>
        </div>
      </div>
    </section>
  )
})

export default Hero
