import { Download_SVG, Linkedin_SVG, Whats_SVG } from '@/icons'
import { HTMLAttributes } from 'react'
import { twMerge } from 'tailwind-merge'
import AnimatedSpan from '../AnimatedSpan'

const Socials = ({ className }: HTMLAttributes<HTMLDivElement>) => {
  return (
    <div
      className={twMerge(
        'flex gap-4 mt-4 text-sky-800 font-bold text-sm',
        className
      )}
    >
      <a
        href="https://www.linkedin.com/in/eddi3ms"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-sky-500 transition-colors duration-300"
        title="navegar para o meu linkedin"
        aria-label="navegar para o meu perfil no linkedin"
      >
        <AnimatedSpan>{Linkedin_SVG}</AnimatedSpan>
      </a>
      <a
        href="https://api.whatsapp.com/send/?phone=%2B5537999853557"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-sky-500 transition-colors duration-300"
        title="me envie uma mensagem no whatsapp"
        aria-label="me envie uma mensagem no whatsapp"
      >
        <AnimatedSpan>{Whats_SVG}</AnimatedSpan>
      </a>
      <a
        href={'/edson_marcelo.pdf'}
        download="edson_marcelo_curriculum.pdf"
        className="hover:text-sky-500 transition-colors duration-300"
        role="button"
        title="baixar meu currículo em pdf"
        aria-label="baixar meu currículo em pdf"
      >
        <AnimatedSpan>{Download_SVG}</AnimatedSpan>
      </a>
    </div>
  )
}

export default Socials
