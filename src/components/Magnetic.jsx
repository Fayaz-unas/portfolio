import React, { useRef } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'

const Magnetic = React.memo(({ children, strength = 0.5, className = "" }) => {
  const ref = useRef(null)
  
  const x = useMotionValue(0)
  const y = useMotionValue(0)

  const springX = useSpring(x, { stiffness: 300, damping: 20, mass: 0.1 })
  const springY = useSpring(y, { stiffness: 300, damping: 20, mass: 0.1 })

  const handleMouseMove = (e) => {
    if (!ref.current) return
    const { clientX, clientY } = e
    const { left, top, width, height } = ref.current.getBoundingClientRect()
    const targetX = (clientX - (left + width / 2)) * strength
    const targetY = (clientY - (top + height / 2)) * strength
    x.set(targetX)
    y.set(targetY)
  }

  const handleMouseLeave = () => {
    x.set(0)
    y.set(0)
  }

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ x: springX, y: springY }}
      className={`magnetic-wrap ${className}`}
    >
      {children}
    </motion.div>
  )
})

export default Magnetic
