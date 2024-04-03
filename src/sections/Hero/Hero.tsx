import { Socials } from '@/components'
import { fetchGithub } from '@/utils/fetchGithub'
import Image from 'next/image'

const Hero = async () => {
  const { avatar, name } = await fetchGithub()
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8 md:min-h-[calc(100dvh-48px)] py-8 bg-slate-200 relative">
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
        <h1 className="text-4xl font-extrabold text-zinc-900">{name}</h1>
        <p className="text-sm font-semibold text-zinc-800 underline-offset-2 underline">
          Desenvolvedor React & Next.js
        </p>
        <Socials />
      </div>
      <div className="absolute bottom-0 left-0 w-full overflow-hidden [line-height:0] rotate-180">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="relative block w-[calc(100%+1.3px)] h-[33px]"
        >
          <path
            d="M0,0V7.23C0,65.52,268.63,112.77,600,112.77S1200,65.52,1200,7.23V0Z"
            className="fill-slate-100"
          ></path>
        </svg>
      </div>
    </div>
  )
}

export default Hero
