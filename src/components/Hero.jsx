import React, { useEffect } from 'react'
import { motion, useScroll, useTransform, useSpring, useMotionValue } from 'framer-motion'
import { Shield, Cpu, Code2, Github, Linkedin, Instagram } from 'lucide-react'
import Magnetic from './Magnetic'

const Hero = () => {
  const { scrollY } = useScroll()
  const opacity = useTransform(scrollY, [0, 500], [1, 0])
  const scale = useTransform(scrollY, [0, 500], [1, 0.9])
  const rotateHero = useTransform(scrollY, [0, 500], [0, -5])

  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  const springX = useSpring(mouseX, { damping: 50, stiffness: 400 })
  const springY = useSpring(mouseY, { damping: 50, stiffness: 400 })

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
    <section className="relative min-h-[100svh] flex flex-col px-[5vw] md:px-[8vw] lg:px-[10vw] overflow-x-clip bg-white brutal-grid pb-[2vh] pt-0">

      {/* Main Content Integration */}
      <motion.div 
        style={{ scale, opacity, rotate: rotateHero }}
        className="max-w-[1600px] w-full mx-auto relative z-10 flex-grow flex items-start lg:items-center justify-center pt-[10vh] lg:pt-[5vh] pb-[6vh]"
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-[12vh] lg:gap-[4vw] items-start lg:items-center w-full">
          <div className="lg:col-span-7 text-left relative z-20">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, type: 'spring' }}
            >
              <h1 className="text-[clamp(2rem,8.5vw,8rem)] font-black font-heading mb-[4vh] lg:mb-[4vh] tracking-tighter leading-[0.9] text-black">
                <motion.span 
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="block"
                >
                  ENGINEERING
                </motion.span>
                <motion.span 
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.4 }}
                  className="inline-block bg-primary border-[clamp(3px,0.5vw,6px)] border-black px-[4vw] md:px-[3vw] shadow-neo-md md:shadow-neo-lg -rotate-1 mt-[1vh]"
                >
                  PURE LOGIC.
                </motion.span>
              </h1>

              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
                className="relative max-w-[min(90%,700px)]"
              >
                <p className="text-[clamp(0.95rem,2vw,1.5rem)] text-black font-black font-body leading-[1.1] bg-white border-[clamp(3px,0.5vw,6px)] border-black p-[5vw] md:p-[2.5vw] shadow-neo-sm md:shadow-neo-lg relative z-20">
                  Fayaz Unas — Computer Science student at MEC, specializing in 
                  <span className="bg-secondary px-[0.5ch] mx-[0.2ch]">Computer Architecture</span>, low-level systems, and 
                  <span className="underline decoration-[clamp(4px,0.6vw,8px)] underline-offset-[0.2em] px-[0.2ch]">high-performance</span> digital environments.
                </p>
                <div className="absolute -inset-[clamp(6px,0.8vw,12px)] bg-black -z-10 translate-x-[1.5vw] translate-y-[1.5vw]" />
              </motion.div>
            </motion.div>
          </div>

          {/* Right: Technical Stats & Socials */}
          <div className="lg:col-span-5 flex flex-col gap-[2.5vh] relative z-10 w-full max-w-[450px] lg:max-w-none mx-auto lg:mx-0 pt-[5vh] lg:pt-0 lg:mt-[20vh]">
            <div className="flex gap-[2.5vw] lg:gap-[1.5vw]">
              {[
                { icon: <Github />, href: "https://github.com/Fayaz-unas", color: "bg-white", hover: "hover:bg-black" },
                { icon: <Linkedin />, href: "https://linkedin.com/in/fayaz-unas", color: "bg-accent", hover: "hover:bg-white" },
                { icon: <Instagram />, href: "https://www.instagram.com/fayaz_unas", color: "bg-secondary", hover: "hover:bg-black" },
              ].map((social, i) => (
                <Magnetic key={i} strength={0.3}>
                  <a 
                    href={social.href} 
                    target="_blank" 
                    rel="noreferrer" 
                    className={`${social.color} ${social.hover} border-[clamp(2px,0.3vw,4px)] border-black p-[3.5vw] lg:p-[1.2vw] shadow-neo hover:translate-y-[-0.5vh] hover:shadow-neo-md active:translate-y-0 active:shadow-neo transition-all flex-1 flex items-center justify-center group/social`}
                  >
                    {React.cloneElement(social.icon, { className: `w-[clamp(1.2rem,3.5vw,2rem)] h-[clamp(1.2rem,3.5vw,2rem)] ${social.color === "bg-accent" ? "text-white group-hover/social:text-accent" : "text-black group-hover/social:text-white"} transition-colors`, strokeWidth: 3 })}
                  </a>
                </Magnetic>
              ))}
            </div>

            {[
              { icon: <Cpu />, label: "Core Expertise", value: "Computer Architecture", color: "bg-primary" },
              { icon: <Code2 />, label: "Main Stack", value: "Full-Stack Engineer", color: "bg-secondary" },
              { icon: <Shield />, label: "Security", value: "System Hardening", color: "bg-accent" }
            ].map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 + i * 0.1 }}
                className="neo-card p-[3.5vw] lg:p-[1.2vw] flex items-center justify-between group hover:bg-black hover:text-white transition-all border-[clamp(2px,0.3vw,4px)] shadow-neo-sm md:shadow-neo-md"
              >
                <div className="flex items-center gap-[3.5vw] lg:gap-[1.2vw]">
                  <div className={`p-[2vw] lg:p-[0.8vw] ${stat.color} border-[clamp(2px,0.3vw,4px)] border-black shadow-neo-sm group-hover:bg-white transition-colors`}>
                    {React.cloneElement(stat.icon, { className: "w-[clamp(1rem,2.8vw,1.8rem)] h-[clamp(1rem,2.8vw,1.8rem)] text-black", strokeWidth: 3 })}
                  </div>
                  <div className="text-left">
                    <p className="text-[clamp(0.45rem,1.1vw,0.65rem)] uppercase font-black tracking-widest text-black/40 group-hover:text-white/40 mb-[0.1vh] transition-colors">{stat.label}</p>
                    <p className="text-[clamp(0.8rem,1.8vw,1.15rem)] font-black text-black group-hover:text-white transition-colors leading-none">{stat.value}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Decorative Floating Elements - Repositioned to avoid overlap */}
      <motion.div 
        style={{ opacity, x: springX, y: springY }}
        className="absolute top-[10%] left-[5%] w-[8vw] h-[8vw] min-w-[40px] min-h-[40px] bg-primary/10 border-[clamp(2px,0.3vw,4px)] border-black/5 -z-10 -rotate-12 hidden lg:block" 
      />
      
      {/* Background Marquee Integration */}
      <div className="mt-auto pt-[2vh] w-full max-w-[100vw] relative z-30">
        <div className="marquee-container rotate-[-1deg] border-y-[clamp(2px,0.5vw,6px)] scale-105 origin-center">
          <div className="marquee-content py-[1.5vh] text-[clamp(1rem,4vw,2.5rem)]">
            BUILDING SYSTEMS • OPTIMIZING CORE • ARCHITECTING FUTURE • PRECISION CODE • LOW LEVEL MASTERY • FULL STACK EXCELLENCE • BUILDING SYSTEMS • OPTIMIZING CORE • ARCHITECTING FUTURE • PRECISION CODE • LOW LEVEL MASTERY • FULL STACK EXCELLENCE •
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero