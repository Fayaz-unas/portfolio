import { useEffect, useState } from 'react'
import { motion, useSpring, useMotionValue } from 'framer-motion'

const CustomCursor = () => {
  const [isHovering, setIsHovering] = useState(false)

  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  const springConfig = { damping: 15, stiffness: 300, mass: 0.1 }
  const springX = useSpring(mouseX, springConfig)
  const springY = useSpring(mouseY, springConfig)

  useEffect(() => {
    const handleMouseMove = (e) => {
      mouseX.set(e.clientX)
      mouseY.set(e.clientY)
    }

    const handleMouseOver = (e) => {
      const target = e.target.closest('a, button, .cursor-pointer, .project-card, .magnetic-wrap')
      if (target) {
        setIsHovering(true)
      } else {
        setIsHovering(false)
      }
    }

    window.addEventListener('mousemove', handleMouseMove)
    window.addEventListener('mouseover', handleMouseOver)

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('mouseover', handleMouseOver)
    }
  }, [mouseX, mouseY])

  return (
    <motion.div
      className="fixed top-0 left-0 pointer-events-none z-[9999] w-6 h-6 bg-black border-2 border-white shadow-neo-hover"
      style={{
        x: springX,
        y: springY,
        translateX: "-50%",
        translateY: "-50%",
        scale: isHovering ? 2 : 1,
        rotate: isHovering ? 45 : 0
      }}
    />
  )
}

export default CustomCursor
