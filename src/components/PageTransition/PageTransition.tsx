'use client'

import { AnimatePresence, motion } from 'framer-motion'
import { usePathname } from 'next/navigation'
import { PropsWithChildren } from 'react'
import FrozenRoute from './FrozenRoute'

const transitionVariants = {
  initial: {
    x: '100%',
    width: '100%',
  },
  animate: {
    x: '0%',
    width: '0%',
  },
  exit: {
    x: ['0%', '100%'],
    width: ['0%', '100%'],
  },
}

const PageTransition = ({ children }: PropsWithChildren) => {
  const pathname = usePathname()
  return (
    <AnimatePresence mode="wait">
      <motion.div key={pathname} className="max-h-dvh h-dvh">
        <motion.div
          className="fixed top-0 bottom-0 right-full w-screen h-screen z-30 bg-gradient-to-b from-sky-600 to-sky-200"
          variants={transitionVariants}
          initial="initial"
          animate="animate"
          exit="exit"
          transition={{ delay: 0.1, duration: 0.3, ease: 'easeInOut' }}
        ></motion.div>
        <motion.div
          className="fixed top-0 bottom-0 right-full w-screen h-screen z-20 bg-gradient-to-b from-sky-400 to-sky-600"
          variants={transitionVariants}
          initial="initial"
          animate="animate"
          exit="exit"
          transition={{ delay: 0.2, duration: 0.3, ease: 'easeInOut' }}
        ></motion.div>
        <motion.div
          className="fixed top-0 bottom-0 right-full w-screen h-screen z-10 bg-gradient-to-b from-sky-200 to-sky-400"
          variants={transitionVariants}
          initial="initial"
          animate="animate"
          exit="exit"
          transition={{ delay: 0.3, duration: 0.3, ease: 'easeInOut' }}
        ></motion.div>

        <FrozenRoute>{children}</FrozenRoute>
      </motion.div>
    </AnimatePresence>
  )
}

export default PageTransition
