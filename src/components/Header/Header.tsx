import Link from 'next/link'
import AnimatedSpan from '../AnimatedSpan'

const Header = () => {
  return (
    <header className="py-4 px-4 md:h-[56px] flex justify-center flex-wrap items-center uppercase text-bold gap-4 bg-sky-800 text-white sticky top-0 z-20">
      <Link href="/">
        <AnimatedSpan>Inicio</AnimatedSpan>
      </Link>
      <Link href="/experience">
        <AnimatedSpan>Experiência</AnimatedSpan>
      </Link>
      <Link href="/projects">
        <AnimatedSpan>Projetos</AnimatedSpan>
      </Link>
      <Link href="/contact">
        <AnimatedSpan>Contato</AnimatedSpan>
      </Link>
    </header>
  )
}

export default Header
