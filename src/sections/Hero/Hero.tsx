import { HeroInfo, Socials } from '@/components'
import { fetchGithub } from '@/utils/fetchGithub'
import Image from 'next/image'

const Hero = async () => {
  const { avatar, name } = await fetchGithub()
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-12 md:min-h-[calc(100dvh-48px)] py-12 bg-slate-200 relative">
      <HeroInfo name={name} avatar={avatar} />
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
