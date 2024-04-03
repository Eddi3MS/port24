'use client'
import React, { useRef } from 'react'
import { useInView, motion } from 'framer-motion'

const variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
      type: 'spring',
    },
  },
}

const AnimatedTitle = ({ text }: { text: string }) => {
  const ref = useRef(null)
  const isInView = useInView(ref, { margin: '0px 100px -50px 0px', once: true })

  const splitText = text.split('')

  return (
    <>
      <span className="sr-only">{text}</span>
      <motion.span
        variants={variants}
        initial="hidden"
        animate={isInView && 'visible'}
        ref={ref}
        aria-hidden
      >
        {splitText.map((char, i) => (
          <motion.span key={i} variants={variants}>
            {char}
          </motion.span>
        ))}
      </motion.span>
    </>
  )
}

export default AnimatedTitle
