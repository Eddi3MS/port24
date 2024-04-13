import { useInView } from 'framer-motion'
import { useRef } from 'react'

export const useIsInView = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { margin: '0px 0px -80px 0px', once: true })

  return { ref, isInView }
}
