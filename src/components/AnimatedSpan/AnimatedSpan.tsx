'use client'
import React, { ReactNode } from 'react'
import { motion } from 'framer-motion'
import { twMerge } from 'tailwind-merge'

const AnimatedSpan = ({
  children,
  className,
  scale = 1.05,
}: {
  children: ReactNode
  className?: string
  scale?: number
}) => {
  return (
    <motion.span
      className={twMerge(
        'hover:text-sky-500 transition-colors block duration-300',
        className
      )}
      whileHover={{ scale }}
      transition={{ type: 'spring', stiffness: 500 }}
    >
      {children}
    </motion.span>
  )
}

export default AnimatedSpan
