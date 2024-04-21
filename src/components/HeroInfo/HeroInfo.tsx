'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import AnimatedSpan from '../AnimatedSpan'
import Socials from '../Socials'

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
  },
}

const HeroInfo = () => {
  return (
    <>
      <AnimatedSpan className="drop-shadow-sm rounded-full justify-self-center md:justify-self-end overflow-hidden">
        <Image
          src="https://avatars.githubusercontent.com/u/75024157?v=4"
          width={300}
          height={300}
          alt="Edson Marcelo"
          className="w-full"
          placeholder="blur"
          priority
          blurDataURL={'/blur.jpg'}
        />
      </AnimatedSpan>
      <motion.div
        className="justify-self-center text-center md:text-left md:justify-self-start"
        variants={container}
        initial="hidden"
        animate="show"
      >
        <h2 className="text-lg font-semibold text-zinc-800">Olá! Meu nome é</h2>
        <h1 className="text-5xl font-extrabold text-zinc-900">Edson Marcelo</h1>
        <p className="text-lg font-semibold text-zinc-800">
          Software Developer
        </p>
        <p className="text-xs font-semibold text-zinc-600">
          Javascript, Typescript, React & Next.js..
        </p>

        <Socials className="justify-center sm:justify-start mb-8" />
      </motion.div>
    </>
  )
}

export default HeroInfo
