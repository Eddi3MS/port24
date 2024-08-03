'use client'
import { useIsInView } from '@/hooks/useIsInView'
import { motion } from 'framer-motion'
import { BadgeList } from '..'

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
  const { isInView, ref } = useIsInView()

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
      <ul>
        {desc.split('/').map((l, i) => (
          <li key={i} className="text-[clamp(0.65rem,0.7639rem+0.5556vi,1rem)">
            {l}
          </li>
        ))}
      </ul>

      <div className="grid gap-2">
        <h4 className="text-base font-semibold text-zinc-900">{listTitle}</h4>
        <BadgeList words={badges} />
      </div>
    </motion.div>
  )
}

export default ExperienceCard
