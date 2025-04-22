'use client'
import { useIsInView } from '@/hooks/useIsInView'
import { motion } from 'framer-motion'
import Image, { StaticImageData } from 'next/image'
import { BadgeList } from '..'
import AnimatedSpan from '../AnimatedSpan'

type ProjectProps = {
  title: string
  desc: string
  tech: string[]
  live?: string
  git?: string
  image: StaticImageData
}

function Project({ desc, tech, title, live, git, image }: ProjectProps) {
  const { isInView, ref } = useIsInView()

  return (
    <motion.div
      ref={ref}
      animate={{ scale: isInView ? 1 : 0.7 }}
      className="flex flex-col md:flex-row gap-y-2 gap-x-4 shadow-sm bg-white p-2 rounded-md"
    >
      <div className="min-w-[250px] mx-auto md:rounded-md shadow-sm border-2 border-sky-800 p-1">
        <Image
          src={image.src}
          blurDataURL={image.blurDataURL}
          alt={title}
          width={300}
          height={200}
          className="rounded-md"
        />
      </div>
      <div className="flex flex-col gap-2 flex-1">
        <h3 className="text-lg font-bold">{title}</h3>
        <BadgeList words={tech} size="xs" />
        <p className="max-w-prose text-sm font-semibold text-zinc-700">
          {desc}
        </p>

        {live && (
          <a href={live} target="_blank" className="mt-auto ml-auto">
            <AnimatedSpan className=" text-sky-800 font-bold underline">
              ver online
            </AnimatedSpan>
          </a>
        )}

        {git && (
          <a href={git} target="_blank" className="mt-auto ml-auto">
            <AnimatedSpan className=" text-sky-800 font-bold underline">
              ver código
            </AnimatedSpan>
          </a>
        )}
      </div>
    </motion.div>
  )
}

export default Project
