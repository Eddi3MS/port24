import Link from 'next/link'
import AnimatedSpan from '../AnimatedSpan'

const Header = () => {
  return (
    <header className="py-4 min-h-[48px] flex justify-center flex-wrap items-center uppercase text-bold  gap-4 bg-sky-800 text-white sticky top-0 z-20">
      <Link href="#experience">
        <AnimatedSpan>Experiência</AnimatedSpan>
      </Link>
      <Link href="#certificados">
        <AnimatedSpan>Certificados</AnimatedSpan>
      </Link>
      <Link href="#projects">
        <AnimatedSpan>Projetos</AnimatedSpan>
      </Link>
      <Link href="#contact-me">
        <AnimatedSpan>Contato</AnimatedSpan>
      </Link>
    </header>
  )
}

export default Header
