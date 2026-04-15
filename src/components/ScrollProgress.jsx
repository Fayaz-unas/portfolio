import React from 'react'
import { motion } from 'framer-motion'

const ScrollProgress = ({ scaleX }) => {
  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-1.5 bg-primary origin-left z-[60]"
      style={{ scaleX }}
    />
  )
}

export default ScrollProgress
