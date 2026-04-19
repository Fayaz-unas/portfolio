import React, { useRef, useState, useEffect, useCallback } from 'react'
import { motion, useScroll, useSpring, useTransform } from 'framer-motion'
import Projects from './Projects'

const HorizontalSection = React.memo(() => {
  const targetRef = useRef(null)
  const scrollRef = useRef(null)
  const [scrollWidth, setScrollWidth] = useState(0)
  const [screenWidth, setScreenWidth] = useState(0)
  const [isMobile, setIsMobile] = useState(false)

  const calculateWidths = useCallback(() => {
    if (scrollRef.current) {
      setScrollWidth(scrollRef.current.scrollWidth)
    }
    setScreenWidth(window.innerWidth)
    setIsMobile(window.innerWidth < 1024)
  }, [])

  useEffect(() => {
    calculateWidths()
    
    // Add a small delay to ensure content is fully rendered
    const timer = setTimeout(calculateWidths, 100)

    const observer = new ResizeObserver(() => {
      calculateWidths()
    })
    
    if (scrollRef.current) observer.observe(scrollRef.current)
    
    window.addEventListener('resize', calculateWidths)
    
    return () => {
      observer.disconnect()
      clearTimeout(timer)
      window.removeEventListener('resize', calculateWidths)
    }
  }, [calculateWidths])

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
        <div className="border-t-[12px] border-black bg-surface overflow-hidden">
          <Projects />
        </div>
      </div>
    )
  }

  return (
    <section ref={targetRef} className="relative h-[300vh] bg-white">
      <div className="sticky top-0 h-screen w-full flex flex-col items-start overflow-hidden border-t-[12px] border-black">
        <motion.div 
          ref={scrollRef}
          style={{ x }} 
          className="flex h-full w-max items-stretch will-change-transform"
        >
          <div className="flex-shrink-0 bg-surface flex items-center px-4 md:px-8 lg:px-12">
            <Projects />
          </div>
        </motion.div>
      </div>
    </section>
  )
})

HorizontalSection.displayName = 'HorizontalSection'

export default HorizontalSection
