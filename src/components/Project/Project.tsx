'use client'
import { motion, useInView } from 'framer-motion'
import Image from 'next/image'
import { useRef } from 'react'
import { BadgeList } from '..'

type ProjectProps = {
  title: string
  desc: string
  tech: string[]
  live?: string
  git?: string
  image: string
}

function Project({ desc, tech, title, live, git, image }: ProjectProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { margin: '0px 100px -50px 0px' })

  return (
    <motion.div
      ref={ref}
      animate={{ scale: isInView ? 1 : 0.7 }}
      className="flex flex-col md:flex-row gap-y-2 gap-x-4 shadow-sm bg-white p-2 rounded-md"
    >
      <div className="min-w-[250px] mx-auto">
        <Image
          src={image}
          alt={title}
          width={300}
          height={200}
          className="md:rounded-l-md shadow-sm"
        />
      </div>
      <div className="flex flex-col gap-2 flex-1">
        <h3 className="text-lg font-bold">{title}</h3>
        <BadgeList words={tech} size="xs" />
        <p className="max-w-prose text-sm text-zinc-700">{desc}</p>

        {live && (
          <a
            href={live}
            target="_blank"
            className="mt-auto ml-auto text-sky-800 font-bold underline"
          >
            ver online
          </a>
        )}

        {git && (
          <a
            href={git}
            target="_blank"
            className="mt-auto ml-auto text-sky-800 font-bold underline"
          >
            ver código
          </a>
        )}
      </div>
    </motion.div>
  )
}

export default Project
