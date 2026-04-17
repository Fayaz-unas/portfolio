import React, { useEffect, useState, useCallback, useMemo } from 'react'
import { motion, useSpring, useMotionValue, useMotionTemplate } from 'framer-motion'

const CustomCursor = React.memo(() => {
  const [isHovering, setIsHovering] = useState(false)
  const [reduceMotion, setReduceMotion] = useState(false)
  const [isTouchDevice, setIsTouchDevice] = useState(false)
  
  const headX = useMotionValue(0)
  const headY = useMotionValue(0)

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)')
    setReduceMotion(mediaQuery.matches)
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

  // Balanced spring chain: 6 points is optimal for performance vs smoothness
  const springConfigs = [
    { damping: 50, stiffness: 1000, mass: 0.1 },
    { damping: 40, stiffness: 800, mass: 0.15 },
    { damping: 35, stiffness: 600, mass: 0.2 },
    { damping: 30, stiffness: 450, mass: 0.25 },
    { damping: 25, stiffness: 300, mass: 0.3 },
    { damping: 20, stiffness: 150, mass: 0.35 }
  ]

  const s1x = useSpring(headX, springConfigs[0])
  const s1y = useSpring(headY, springConfigs[0])
  const s2x = useSpring(headX, springConfigs[1])
  const s2y = useSpring(headY, springConfigs[1])
  const s3x = useSpring(headX, springConfigs[2])
  const s3y = useSpring(headY, springConfigs[2])
  const s4x = useSpring(headX, springConfigs[3])
  const s4y = useSpring(headY, springConfigs[3])
  const s5x = useSpring(headX, springConfigs[4])
  const s5y = useSpring(headY, springConfigs[4])
  const s6x = useSpring(headX, springConfigs[5])
  const s6y = useSpring(headY, springConfigs[5])

  const points = useMemo(() => [
    { x: s1x, y: s1y }, { x: s2x, y: s2y },
    { x: s3x, y: s3y }, { x: s4x, y: s4y },
    { x: s5x, y: s5y }, { x: s6x, y: s6y }
  ], [s1x, s1y, s2x, s2y, s3x, s3y, s4x, s4y, s5x, s5y, s6x, s6y])

  const trailPath = useMotionTemplate`M ${s1x} ${s1y} L ${s2x} ${s2y} L ${s3x} ${s3y} L ${s4x} ${s4y} L ${s5x} ${s5y} L ${s6x} ${s6y}`

  const [hoveredRect, setHoveredRect] = useState(null)

  const handleMouseMove = useCallback((e) => {
    if (isHovering && hoveredRect) {
      headX.set(hoveredRect.x + hoveredRect.width / 2)
      headY.set(hoveredRect.y + hoveredRect.height / 2)
    } else {
      headX.set(e.clientX)
      headY.set(e.clientY)
    }
  }, [headX, headY, isHovering, hoveredRect])

  const handleMouseOver = useCallback((e) => {
    const target = e.target.closest('a, button')
    if (target) {
      const rect = target.getBoundingClientRect()
      const style = window.getComputedStyle(target)
      setHoveredRect({
        x: rect.left,
        y: rect.top,
        width: rect.width,
        height: rect.height,
        borderRadius: parseInt(style.borderRadius) || 0,
      })
      setIsHovering(true)
    } else {
      setIsHovering(false)
      setHoveredRect(null)
    }
  }, [])

  useEffect(() => {
    if (reduceMotion || isTouchDevice) return
    window.addEventListener('mousemove', handleMouseMove, { passive: true })
    window.addEventListener('mouseover', handleMouseOver, { passive: true })
    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('mouseover', handleMouseOver)
    }
  }, [handleMouseMove, handleMouseOver, reduceMotion, isTouchDevice])

  if (reduceMotion || isTouchDevice) return null

  const size = isHovering && hoveredRect ? {
    w: hoveredRect.width + 20,
    h: hoveredRect.height + 20,
    r: hoveredRect.borderRadius + 4
  } : {
    w: 32,
    h: 32,
    r: 16
  }

  return (
    <div className="fixed inset-0 pointer-events-none z-[9999] mix-blend-difference">
      <svg className="w-full h-full overflow-visible" shapeRendering="optimizeSpeed">
        <defs>
          <filter id="goo" colorInterpolationFilters="sRGB">
            <feGaussianBlur in="SourceGraphic" stdDeviation="8" result="blur" />
            <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 25 -10" result="gooey" />
            <feComposite in="SourceGraphic" in2="gooey" operator="atop" />
          </filter>
        </defs>
        <g filter="url(#goo)">
          <motion.path
            d={trailPath}
            className="stroke-primary fill-none"
            animate={{ strokeWidth: isHovering ? 0 : 24 }}
            transition={{ duration: 0.2 }}
          />
          {points.map((p, i) => (
            <motion.rect
              key={i}
              className="fill-primary"
              style={{ x: p.x, y: p.y }}
              animate={{
                width: size.w * (1 - i * 0.1),
                height: size.h * (1 - i * 0.1),
                rx: size.r,
                translateX: -(size.w * (1 - i * 0.1)) / 2,
                translateY: -(size.h * (1 - i * 0.1)) / 2
              }}
              transition={{ type: "spring", stiffness: 250, damping: 25, mass: 0.5 }}
            />
          ))}
        </g>
      </svg>
    </div>
  )
})

export default CustomCursor
