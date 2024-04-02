'use client'
import { useInView, motion } from 'framer-motion'
import React, { useRef } from 'react'

type CertificateProps = {
  title: string
  time: string
  desc: string
}

const Certificate = ({ desc, time, title }: CertificateProps) => {
  const ref = useRef(null)
  const isInView = useInView(ref, { margin: '0px 100px -50px 0px' })
  return (
    <motion.div
      ref={ref}
      className="grid  border-b-[1px] border-zinc-200 pb-4"
      animate={{ scale: isInView ? 1 : 0.7 }}
    >
      <h3 className="text-[clamp(1rem,0.7778rem+1.1111vi,1.5rem)] font-bold text-zinc-900 flex gap-8 justify-between ">
        {title}
        <span className="text-sm text-sky-900 font-bold min-w-max flex items-center">
          {time}
        </span>
      </h3>
      <p className="text-[clamp(0.875rem,0.7639rem+0.5556vi,1.125rem)">
        {desc}
      </p>
    </motion.div>
  )
}

export default Certificate
