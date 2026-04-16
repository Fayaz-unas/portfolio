import React, { useEffect, useState, useCallback, useMemo } from 'react'
import { motion, useSpring, useMotionValue } from 'framer-motion'

const CustomCursor = React.memo(() => {
  const [isHovering, setIsHovering] = useState(false)
  const [reduceMotion, setReduceMotion] = useState(false)
  const [isTouchDevice, setIsTouchDevice] = useState(false)
  
  const headX = useMotionValue(0)
  const headY = useMotionValue(0)

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)')
    setReduceMotion(mediaQuery.matches)
    
    // Check if it's a touch device
    const touchQuery = window.matchMedia('(pointer: coarse)')
    setIsTouchDevice(touchQuery.matches)

    const handler = (e) => setReduceMotion(e.matches)
    const touchHandler = (e) => setIsTouchDevice(e.matches)
    
    mediaQuery.addEventListener('change', handler)
    touchQuery.addEventListener('change', touchHandler)
    
    return () => {
      mediaQuery.removeEventListener('change', handler)
      touchQuery.removeEventListener('change', touchHandler)
    }
  }, [])

  // Optimized spring chain for better connectivity
  const s1x = useSpring(headX, { damping: 45, stiffness: 800, mass: 0.1 })
  const s1y = useSpring(headY, { damping: 45, stiffness: 800, mass: 0.1 })
  const s2x = useSpring(headX, { damping: 40, stiffness: 600, mass: 0.2 })
  const s2y = useSpring(headY, { damping: 40, stiffness: 600, mass: 0.2 })
  const s3x = useSpring(headX, { damping: 35, stiffness: 450, mass: 0.3 })
  const s3y = useSpring(headY, { damping: 35, stiffness: 450, mass: 0.3 })
  const s4x = useSpring(headX, { damping: 30, stiffness: 300, mass: 0.4 })
  const s4y = useSpring(headY, { damping: 30, stiffness: 300, mass: 0.4 })
  const s5x = useSpring(headX, { damping: 25, stiffness: 200, mass: 0.5 })
  const s5y = useSpring(headY, { damping: 25, stiffness: 200, mass: 0.5 })

  const points = useMemo(() => [
    { x: s1x, y: s1y }, { x: s2x, y: s2y },
    { x: s3x, y: s3y }, { x: s4x, y: s4y },
    { x: s5x, y: s5y }
  ], [s1x, s1y, s2x, s2y, s3x, s3y, s4x, s4y, s5x, s5y])

  const [hoveredRect, setHoveredRect] = useState({ width: 0, height: 0, borderRadius: 0 })
  const [hoveredElement, setHoveredElement] = useState(null)

  const handleMouseMove = useCallback((e) => {
    if (isHovering && hoveredElement) {
      const rect = hoveredElement.getBoundingClientRect()
      headX.set(rect.left + rect.width / 2)
      headY.set(rect.top + rect.height / 2)
    } else {
      headX.set(e.clientX)
      headY.set(e.clientY)
    }
  }, [headX, headY, isHovering, hoveredElement])

  const handleMouseOver = useCallback((e) => {
    const target = e.target.closest('a, button')
    if (target) {
      const rect = target.getBoundingClientRect()
      const style = window.getComputedStyle(target)
      
      setHoveredRect({
        width: rect.width,
        height: rect.height,
        borderRadius: parseInt(style.borderRadius) || 0,
      })
      
      const centerX = rect.left + rect.width / 2
      const centerY = rect.top + rect.height / 2
      headX.set(centerX)
      headY.set(centerY)
      
      setHoveredElement(target)
      setIsHovering(true)
    } else {
      setIsHovering(false)
      setHoveredElement(null)
    }
  }, [headX, headY])

  useEffect(() => {
    if (reduceMotion || isTouchDevice) return
    window.addEventListener('mousemove', handleMouseMove)
    window.addEventListener('mouseover', handleMouseOver)
    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('mouseover', handleMouseOver)
    }
  }, [handleMouseMove, handleMouseOver, reduceMotion, isTouchDevice])

  if (reduceMotion || isTouchDevice) return null

  const size = isHovering ? {
    width: hoveredRect.width + 25,
    height: hoveredRect.height + 25,
    rx: hoveredRect.borderRadius + 2
  } : {
    width: 40,
    height: 40,
    rx: 20
  }

  return (
    <div className="fixed inset-0 pointer-events-none z-[9999] mix-blend-difference will-change-transform">
      <svg className="absolute inset-0 w-full h-full overflow-visible pointer-events-none">
        <defs>
          <filter id="gooey-optimized">
            <feGaussianBlur in="SourceGraphic" stdDeviation="12" result="blur" />
            <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 35 -15" result="goo" />
          </filter>
        </defs>
        <g filter="url(#gooey-optimized)" className="pointer-events-none">
          {points.map((p, i) => (
            <motion.rect
              key={i}
              className="fill-primary pointer-events-none"
              style={{
                x: p.x,
                y: p.y,
              }}
              animate={{
                width: size.width,
                height: size.height,
                rx: size.rx,
                translateX: -size.width / 2,
                translateY: -size.height / 2
              }}
              transition={{
                type: "spring",
                stiffness: 200,
                damping: 30,
                mass: 0.5
              }}
            />
          ))}
        </g>
      </svg>
    </div>
  )
})

export default CustomCursor
