'use client'
import React from 'react'
import { Variants, motion } from 'framer-motion'

let hasHydratedOnce = false

const pageVariants: Variants = {
  initial: { opacity: 0, y: -20 },
  enter: { opacity: 1, y: 0 },
  exit: {
    opacity: 0,
    y: -20,
  },
}

export default function Template({
  children,
}: {
  children: React.ReactNode
}): React.ReactNode {
  const shouldRunInitialAnimation = hasHydratedOnce

  React.useEffect(() => {
    hasHydratedOnce = true
  }, [])

  return (
    <motion.main
      variants={pageVariants}
      initial={shouldRunInitialAnimation ? 'initial' : false}
      animate="enter"
      exit="exit"
      transition={{ type: 'linear', duration: 0.25 }}
      key="page"
    >
      {children}
    </motion.main>
  )
}
