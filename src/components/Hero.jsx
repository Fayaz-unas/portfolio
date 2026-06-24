import React, { useEffect, useCallback } from 'react'
import { motion, useScroll, useTransform, useSpring, useMotionValue } from 'framer-motion'
import { FileText, Github, Linkedin, Instagram } from 'lucide-react'
import Magnetic from './Magnetic'

const RESUME_DRIVE_URL = import.meta.env.VITE_RESUME_DRIVE_URL || ""

const XIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
)

const SOCIAL_LINKS = [
  { icon: <Github />, href: "https://github.com/Fayaz-unas", color: "bg-white", hover: "hover:bg-black", label: "Visit Github Profile" },
  { icon: <Linkedin />, href: "https://linkedin.com/in/fayaz-unas", color: "bg-accent", hover: "hover:bg-white", label: "Visit Linkedin Profile" },
  { icon: <Instagram />, href: "https://www.instagram.com/fayaz_unas", color: "bg-secondary", hover: "hover:bg-black", label: "Visit Instagram Profile" },
  { icon: <XIcon />, href: "https://x.com/fayaz_unas", color: "bg-black", hover: "hover:bg-white", label: "Visit X Profile" },
]

const HERO_SKILLS = [
  { name: "C", category: "SYS", color: "bg-secondary", rotate: "-rotate-1", iconUrl: "https://skillicons.dev/icons?i=c" },
  { name: "C++", category: "SYS", color: "bg-primary", rotate: "rotate-2", iconUrl: "https://skillicons.dev/icons?i=cpp" },
  { name: "Java", category: "LANG", color: "bg-success", rotate: "-rotate-2", iconUrl: "https://skillicons.dev/icons?i=java" },
  { name: "JavaScript", category: "LANG", color: "bg-purple", rotate: "rotate-1", iconUrl: "https://skillicons.dev/icons?i=js" },
  { name: "TypeScript", category: "LANG", color: "bg-warning", rotate: "-rotate-1", iconUrl: "https://skillicons.dev/icons?i=ts" },
  { name: "Python", category: "LANG", color: "bg-success", rotate: "rotate-2", iconUrl: "https://skillicons.dev/icons?i=python" },
  { name: "React", category: "WEB", color: "bg-secondary", rotate: "-rotate-2", iconUrl: "https://skillicons.dev/icons?i=react" },
  { name: "Vite", category: "DEV", color: "bg-success", rotate: "rotate-1", iconUrl: "https://skillicons.dev/icons?i=vite" },
  { name: "HTML", category: "WEB", color: "bg-accent", rotate: "-rotate-1", iconUrl: "https://skillicons.dev/icons?i=html" },
  { name: "CSS", category: "WEB", color: "bg-primary", rotate: "rotate-2", iconUrl: "https://skillicons.dev/icons?i=css" },
  { name: "Git", category: "DEV", color: "bg-accent", rotate: "-rotate-2", iconUrl: "https://skillicons.dev/icons?i=git" },
  { name: "Linux", category: "OPS", color: "bg-purple", rotate: "rotate-1", iconUrl: "https://skillicons.dev/icons?i=linux" },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.04,
      delayChildren: 0.15
    }
  }
}

const letterVariants = {
  hidden: { y: 60, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      damping: 14,
      stiffness: 120
    }
  }
}

const Hero = React.memo(({ setNotification }) => {
  const { scrollY } = useScroll()
  const opacity = useTransform(scrollY, [0, 500], [1, 0])
  const scale = useTransform(scrollY, [0, 500], [1, 0.95])
  const rotateHero = useTransform(scrollY, [0, 500], [0, -3])

  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  const springX = useSpring(mouseX, { damping: 50, stiffness: 300 })
  const springY = useSpring(mouseY, { damping: 50, stiffness: 300 })

  const [hoveredSkill, setHoveredSkill] = React.useState(null)

  const handleResumeClick = useCallback((e) => {
    e.preventDefault()

    if (RESUME_DRIVE_URL && RESUME_DRIVE_URL.startsWith('http')) {
      window.open(RESUME_DRIVE_URL, '_blank', 'noopener,noreferrer')
    } else {
      setNotification({
        type: 'error',
        message: 'LINK_NOT_FOUND: Please configure the RESUME_DRIVE_URL.'
      })
    }
  }, [setNotification])

  const handleMouseMove = useCallback((e) => {
    const { clientX, clientY } = e
    const { innerWidth, innerHeight } = window
    mouseX.set((clientX / innerWidth - 0.5) * 40)
    mouseY.set((clientY / innerHeight - 0.5) * 40)
  }, [mouseX, mouseY])

  useEffect(() => {
    window.addEventListener('mousemove', handleMouseMove, { passive: true })
    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
    }
  }, [handleMouseMove])

  return (
    <section className="relative min-h-[100svh] flex flex-col justify-between overflow-x-clip bg-white brutal-grid pt-0 pb-0 select-none">

      {/* Main Content Integration */}
      <motion.div
        style={{ scale, opacity, rotate: rotateHero }}
        className="w-full relative z-10 flex-grow flex items-center py-[4vh] lg:py-[6vh] px-4 md:px-8 lg:px-12 will-change-transform"
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center w-full">
          {/* Left: Main Details */}
          <div className="lg:col-span-7 text-left flex flex-col items-start relative z-20">
            {/* Main Name Attraction */}
            <motion.h1
              initial="hidden"
              animate="visible"
              variants={containerVariants}
              className="text-[clamp(3.5rem,10vw,8.5rem)] font-heading font-black text-black tracking-tighter leading-[0.9] uppercase flex flex-wrap gap-x-[0.3em] py-2 select-none relative z-20 w-full"
            >
              {["FAYAZ", "UNAS"].map((word, wordIndex) => (
                <span key={wordIndex} className="inline-block whitespace-nowrap">
                  {word.split("").map((char, charIndex) => (
                    <motion.span
                      key={charIndex}
                      variants={letterVariants}
                      className="inline-block cursor-default select-none"
                    >
                      {char}
                    </motion.span>
                  ))}
                </span>
              ))}
            </motion.h1>

            {/* Description Box (Clean, Left-aligned, Neobrutalist Styled) */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8, type: 'spring' }}
              className="relative max-w-2xl mt-6 z-20 w-full"
            >
              <div className="bg-white border-4 border-black p-5 md:p-6 shadow-neo relative overflow-hidden">
                {/* Small top-left accents */}
                <div className="absolute top-0 left-0 w-full h-[5px] bg-gradient-to-r from-primary via-secondary to-accent" />
                <p className="text-[clamp(1rem,1.8vw,1.25rem)] text-black font-black font-body leading-relaxed">
                  Computer Science Engineer at <span className="bg-secondary/20 px-[0.5ch] mx-[0.2ch] border-b-2 border-secondary font-bold">Model Engineering College, Kochi</span>.
                  I architect systems from the silicon up — optimizing hardware pipelines, building resilient distributed backends, and shipping polished user-facing applications.
                </p>
              </div>
            </motion.div>

            {/* Action Buttons (CTAs) & Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8, type: 'spring' }}
              className="flex flex-col sm:flex-row gap-8 justify-start items-center mt-8 z-20 w-full sm:w-auto"
            >
              <Magnetic strength={0.2}>
                <button
                  onClick={handleResumeClick}
                  aria-label="Download or view Resume"
                  className="neo-button bg-black text-white hover:bg-primary hover:text-black inline-flex items-center gap-4 py-5 px-10 shadow-neo-md hover:shadow-neo-lg transition-all w-full sm:w-auto text-center justify-center group"
                >
                  <span className="font-black text-lg uppercase tracking-widest">RESUME</span>
                  <FileText className="w-6 h-6 group-hover:rotate-12 transition-transform" />
                </button>
              </Magnetic>

              <div className="flex gap-5 items-center">
                {SOCIAL_LINKS.map((social, i) => (
                  <Magnetic key={i} strength={0.3}>
                    <a
                      href={social.href}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={social.label}
                      className={`${social.color} ${social.hover} border-4 border-black p-5 shadow-neo-md hover:shadow-neo-lg hover:-translate-y-1 transition-all flex items-center justify-center group/social`}
                    >
                      {React.cloneElement(social.icon, {
                        className: `w-6 h-6 ${social.color === "bg-accent" || social.color === "bg-black" ? "text-white group-hover/social:text-black" : "text-black group-hover/social:text-white"} transition-colors`,
                        strokeWidth: 3
                      })}
                    </a>
                  </Magnetic>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Right: Skills Grid */}
          <div className="lg:col-span-5 w-full relative z-20 mt-10 lg:mt-0 flex justify-center">
            <div className="flex flex-col items-start max-w-fit">
              {/* Hovered Skill Name */}
              <div className="h-16 flex items-center mb-4">
                <motion.span
                  key={hoveredSkill || "default"}
                  initial={{ opacity: 0, x: -15, scale: 0.95 }}
                  animate={{ opacity: 1, x: 0, scale: 1 }}
                  transition={{ type: "spring", stiffness: 300, damping: 15 }}
                  className="text-[clamp(1.75rem,4vw,2.75rem)] font-heading font-black text-black uppercase tracking-widest text-left select-none"
                >
                  {hoveredSkill || ""}
                </motion.span>
              </div>

              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 30 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ delay: 1.0, duration: 0.8, type: 'spring' }}
                className="grid grid-cols-4 gap-3 sm:gap-4 max-w-fit"
              >
                {HERO_SKILLS.map((skill, index) => {
                  return (
                    <Magnetic key={index} strength={0.2}>
                      <motion.div
                        whileHover={{ scale: 1.15, rotate: index % 2 === 0 ? 5 : -5 }}
                        onMouseEnter={() => setHoveredSkill(skill.name)}
                        onMouseLeave={() => setHoveredSkill(null)}
                        transition={{ type: "spring", stiffness: 400, damping: 15 }}
                        className={`cursor-pointer flex items-center justify-center w-[clamp(60px,15vw,72px)] h-[clamp(60px,15vw,72px)] sm:w-[94px] sm:h-[94px] ${skill.rotate}`}
                        title={skill.name}
                        aria-label={skill.name}
                      >
                        <img src={skill.iconUrl} alt={skill.name} className="w-[88%] h-[88%] object-contain filter drop-shadow-[6px_6px_0px_#000000] hover:drop-shadow-[8px_8px_0px_#000000] transition-all duration-200" />
                      </motion.div>
                    </Magnetic>
                  )
                })}
              </motion.div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Decorative Floating Elements (Enhanced & Subtle) */}
      <motion.div
        style={{ opacity, x: springX, y: springY }}
        className="absolute top-[15%] left-[8%] w-[5vw] h-[5vw] min-w-[40px] min-h-[40px] bg-primary/10 border-4 border-black/10 -z-10 -rotate-12 hidden lg:block pointer-events-none will-change-transform"
      />
      <motion.div
        style={{ opacity, x: useTransform(springX, (v) => -v), y: useTransform(springY, (v) => -v) }}
        className="absolute bottom-[25%] right-[10%] w-[6vw] h-[6vw] min-w-[50px] min-h-[50px] bg-secondary/10 border-4 border-black/10 -z-10 rotate-45 hidden lg:block pointer-events-none will-change-transform"
      />
      <motion.div
        style={{ opacity, x: useTransform(springX, (v) => v * 0.5), y: useTransform(springY, (v) => -v * 0.8) }}
        className="absolute top-[20%] right-[15%] w-[4vw] h-[4vw] min-w-[30px] min-h-[30px] bg-accent/10 border-4 border-black/10 -z-10 -rotate-6 hidden lg:block pointer-events-none will-change-transform"
      />

      {/* Background Marquee Integration */}
      <div className="w-full relative z-30 pointer-events-none mb-8">
        <div className="marquee-container rotate-[-1deg] border-y-[1px] border-black scale-105 origin-center">
          <div className="marquee-content py-1 lg:py-1.5 text-[clamp(0.6rem,1.2vw,0.85rem)] opacity-80">
            SYSTEMS ARCHITECTURE • RISC-V ENGINEERING • FULL-STACK DEVELOPMENT • PERFORMANCE OPTIMIZATION • DISTRIBUTED SYSTEMS • HARDWARE CO-DESIGN • CACHE HIERARCHIES • LOW-LATENCY COMPUTING • SYSTEMS ARCHITECTURE • RISC-V ENGINEERING • FULL-STACK DEVELOPMENT • PERFORMANCE OPTIMIZATION •
          </div>
        </div>
      </div>
    </section>
  )
})

Hero.displayName = 'Hero'

export default Hero
