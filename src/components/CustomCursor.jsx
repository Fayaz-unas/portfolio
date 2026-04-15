import { useEffect, useState, useCallback, useMemo } from 'react'
import { motion, useSpring, useMotionValue } from 'framer-motion'

const CustomCursor = () => {
  const [isHovering, setIsHovering] = useState(false)
  const [reduceMotion, setReduceMotion] = useState(false)
  
  // Head position (fastest)
  const headX = useMotionValue(0)
  const headY = useMotionValue(0)

  // Respect system accessibility settings
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)')
    setReduceMotion(mediaQuery.matches)
    const handler = (e) => setReduceMotion(e.matches)
    mediaQuery.addEventListener('change', handler)
    return () => mediaQuery.removeEventListener('change', handler)
  }, [])

  // Explicitly defined springs for maximum performance and React Hook compliance
  // Each point has slightly more lag than the one before it
  const s1x = useSpring(headX, { damping: 40, stiffness: 600, mass: 0.1 })
  const s1y = useSpring(headY, { damping: 40, stiffness: 600, mass: 0.1 })
  const s2x = useSpring(headX, { damping: 38, stiffness: 500, mass: 0.2 })
  const s2y = useSpring(headY, { damping: 38, stiffness: 500, mass: 0.2 })
  const s3x = useSpring(headX, { damping: 36, stiffness: 400, mass: 0.3 })
  const s3y = useSpring(headY, { damping: 36, stiffness: 400, mass: 0.3 })
  const s4x = useSpring(headX, { damping: 34, stiffness: 300, mass: 0.4 })
  const s4y = useSpring(headY, { damping: 34, stiffness: 300, mass: 0.4 })
  const s5x = useSpring(headX, { damping: 32, stiffness: 250, mass: 0.5 })
  const s5y = useSpring(headY, { damping: 32, stiffness: 250, mass: 0.5 })
  const s6x = useSpring(headX, { damping: 30, stiffness: 200, mass: 0.6 })
  const s6y = useSpring(headY, { damping: 30, stiffness: 200, mass: 0.6 })
  const s7x = useSpring(headX, { damping: 28, stiffness: 150, mass: 0.7 })
  const s7y = useSpring(headY, { damping: 28, stiffness: 150, mass: 0.7 })

  // Memoize points array to prevent re-allocation on every render
  const points = useMemo(() => [
    { x: s1x, y: s1y }, { x: s2x, y: s2y },
    { x: s3x, y: s3y }, { x: s4x, y: s4y },
    { x: s5x, y: s5y }, { x: s6x, y: s6y },
    { x: s7x, y: s7y }
  ], [s1x, s1y, s2x, s2y, s3x, s3y, s4x, s4y, s5x, s5y, s6x, s6y, s7x, s7y])

  const handleMouseMove = useCallback((e) => {
    headX.set(e.clientX)
    headY.set(e.clientY)
  }, [headX, headY])

  const handleMouseOver = useCallback((e) => {
    const target = e.target.closest('a, button, .cursor-pointer, .project-card, .magnetic-wrap, input, textarea')
    setIsHovering(!!target)
  }, [])

  useEffect(() => {
    if (reduceMotion) return
    window.addEventListener('mousemove', handleMouseMove)
    window.addEventListener('mouseover', handleMouseOver)
    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('mouseover', handleMouseOver)
    }
  }, [handleMouseMove, handleMouseOver, reduceMotion])

  if (reduceMotion) return null

  return (
    <div className="fixed inset-0 pointer-events-none z-[9999] mix-blend-difference will-change-transform">
      <svg className="absolute inset-0 w-full h-full overflow-visible">
        <defs>
          <filter id="gooey-optimized">
            <feGaussianBlur in="SourceGraphic" stdDeviation="15" result="blur" />
            <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 35 -15" result="goo" />
          </filter>
        </defs>
        <g filter="url(#gooey-optimized)">
          {/* Composite gooey trail */}
          {points.map((p, i) => (
            <motion.circle
              key={i}
              cx={p.x}
              cy={p.y}
              r={isHovering ? 36 : 24}
              className="fill-primary"
            />
          ))}
        </g>
      </svg>
    </div>
  )
}

export default CustomCursor
