'use client'
import { useIsInView } from '@/hooks/useIsInView'
import { motion } from 'framer-motion'

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
  const { isInView, ref } = useIsInView()

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
