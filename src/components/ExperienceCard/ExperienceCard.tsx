'use client'
import React, { useRef } from 'react'
import { BadgeList } from '..'
import { useInView, motion } from 'framer-motion'

type ExperienceCardProps = {
  title: string
  time: string
  desc: string
  listTitle: string
  badges: string[]
}

function ExperienceCard({
  badges,
  desc,
  listTitle,
  time,
  title,
}: ExperienceCardProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { margin: '0px 100px -50px 0px' })

  return (
    <motion.div
      className="grid gap-3 pb-8"
      ref={ref}
      animate={{ scale: isInView ? 1 : 0.7 }}
    >
      <h3 className="text-[clamp(1rem,0.7778rem+1.1111vi,1.5rem)] font-bold text-zinc-900 flex gap-8 justify-between">
        {title}
        <span className="text-sm text-sky-900 font-bold min-w-max">{time}</span>
      </h3>
      <p className="text-[clamp(0.875rem,0.7639rem+0.5556vi,1.125rem)">
        {desc}
      </p>
      <div className="grid gap-2">
        <h4 className="text-base font-semibold text-zinc-900">{listTitle}</h4>
        <BadgeList words={badges} />
      </div>
    </motion.div>
  )
}

export default ExperienceCard
