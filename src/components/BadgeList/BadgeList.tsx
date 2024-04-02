'use client'

import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

type BadgeListProps = {
  words: string[]
  size?: 'xs' | 'sm'
}

const variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
      type: 'spring',
    },
  },
}

const BadgeList = ({ words, size = 'sm' }: BadgeListProps) => {
  const ref = useRef(null)
  const isInView = useInView(ref, { margin: '0px 100px -50px 0px', once: true })
  let sizes =
    size === 'sm' ? 'rounded-2xl font-semibold text-sm' : 'rounded-xl text-xs'

  return (
    <motion.ul
      className="flex flex-wrap gap-1"
      variants={variants}
      initial="hidden"
      animate={isInView && 'visible'}
      ref={ref}
    >
      {words.map((word) => (
        <motion.li
          key={word.trim()}
          className={`bg-sky-800 text-white px-3 py-1 capitalize ${sizes}`}
          variants={variants}
        >
          {word}
        </motion.li>
      ))}
    </motion.ul>
  )
}

export default BadgeList
