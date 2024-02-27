import Link from 'next/link'
import React from 'react'

const Header = () => {
  return (
    <header className="h-[48px] flex justify-center items-center uppercase text-bold  gap-4 bg-sky-800 text-white sticky top-0 z-20">
      <Link
        href="#experience"
        className="hover:text-sky-500 transition-colors duration-300"
      >
        Experiência
      </Link>
      <Link
        href="#projects"
        className="hover:text-sky-500 transition-colors duration-300"
      >
        Projetos
      </Link>
      <Link
        href="#contact-me"
        className="hover:text-sky-500 transition-colors duration-300"
      >
        Contato
      </Link>
    </header>
  )
}

export default Header
