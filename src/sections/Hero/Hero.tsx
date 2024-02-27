import { Socials } from '@/components'
import { fetchGithub } from '@/utils/fetchGithub'
import Image from 'next/image'

const Hero = async () => {
  const { avatar, name } = await fetchGithub()
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8 md:min-h-[calc(100dvh-48px)]">
      <Image
        src={avatar}
        width={300}
        height={300}
        alt="Edson Marcelo"
        className="drop-shadow-sm rounded-full justify-self-center md:justify-self-end"
        placeholder="blur"
        priority
        blurDataURL={'/blur.jpg'}
      />

      <div className="justify-self-center md:justify-self-start">
        <h2 className="text-lg">Olá! Meu nome é</h2>
        <h1 className="text-4xl font-bold text-zinc-900">{name}</h1>
        <p className="text-base font-semibold text-zinc-800 underline-offset-2 underline">
          Desenvolvedor React & Next.js
        </p>
        <Socials />
      </div>
    </div>
  )
}

export default Hero
