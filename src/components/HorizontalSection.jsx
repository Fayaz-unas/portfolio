import React, { useRef, useState, useEffect, useMemo } from 'react'
import { motion, useScroll, useSpring, useTransform } from 'framer-motion'
import Projects from './Projects'

const HorizontalSection = () => {
  const targetRef = useRef(null)
  const scrollRef = useRef(null)
  const [scrollWidth, setScrollWidth] = useState(0)
  const [screenWidth, setScreenWidth] = useState(0)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const calculateWidths = () => {
      if (scrollRef.current) {
        setScrollWidth(scrollRef.current.scrollWidth)
      }
      setScreenWidth(window.innerWidth)
      setIsMobile(window.innerWidth < 1024)
    }

    calculateWidths()
    
    // Use ResizeObserver for more efficient resize handling than window listener
    const observer = new ResizeObserver(calculateWidths)
    if (targetRef.current) observer.observe(targetRef.current)
    
    window.addEventListener('resize', calculateWidths)
    return () => {
      window.removeEventListener('resize', calculateWidths)
      observer.disconnect()
    }
  }, [])

  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end end"]
  })

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  })

  const x = useTransform(smoothProgress, [0, 1], [0, -(scrollWidth - screenWidth)])

  if (isMobile) {
    return (
      <div className="bg-white">
        <div className="px-6 py-16 border-t-[12px] border-black bg-surface overflow-hidden">
          <Projects />
        </div>
      </div>
    )
  }

  return (
    <section ref={targetRef} className="relative h-[300vh] bg-white">
      <div className="sticky top-0 h-screen flex flex-col items-start overflow-hidden border-t-[12px] border-black">
        <motion.div 
          ref={scrollRef}
          style={{ x }} 
          className="flex h-full w-max items-stretch will-change-transform"
        >
          <div className="flex-shrink-0 bg-surface flex items-center px-6 md:px-12 lg:px-24 border-l-[12px] border-black">
            <Projects />
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default HorizontalSection
