'use client'
import { useInView, motion } from 'framer-motion'
import React, { useRef } from 'react'
import { twMerge } from 'tailwind-merge'

type CertificateProps = {
  title: string
  time: string
  desc: string
  className?: string
}

const Certificate = ({ desc, time, title, className }: CertificateProps) => {
  const ref = useRef(null)
  const isInView = useInView(ref, { margin: '0px 100px -50px 0px' })
  return (
    <motion.div
      ref={ref}
      className={twMerge(
        'grid border-b-[1px] border-sky-300 pb-6 text-sky-50',
        className
      )}
      animate={{ scale: isInView ? 1 : 0.7 }}
    >
      <h3 className="text-[clamp(1rem,0.7778rem+1.1111vi,1.5rem)] font-bold  flex gap-8 justify-between ">
        {title}
        <span className="text-sm  font-bold min-w-max flex items-center">
          {time}
        </span>
      </h3>
      <p className="text-[clamp(0.875rem,0.7639rem+0.5556vi,1.125rem) mt-2">
        {desc}
      </p>
    </motion.div>
  )
}

export default Certificate
