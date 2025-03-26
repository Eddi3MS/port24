'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import AnimatedSpan from '../AnimatedSpan'
import Socials from '../Socials'
import Link from 'next/link'
import Modal from '../Modal'
import { useState } from 'react'
import Button from '../Button'

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
  },
}

const HeroInfo = () => {
  const [showDetails, setShowDetails] = useState(false)

  const toggleDetails = () => {
    setShowDetails((curr) => !curr)
  }
  return (
    <section className="max-w-screen-lg mx-auto flex flex-col justify-center items-center py-12 gap-8">
      <AnimatedSpan>
        <Image
          src="https://avatars.githubusercontent.com/u/75024157?v=4"
          width={300}
          height={300}
          alt="Edson Marcelo"
          className="max-w-[300px] drop-shadow-sm rounded-full overflow-hidden"
          placeholder="blur"
          priority
          blurDataURL={'/blur.jpg'}
        />
      </AnimatedSpan>
      <motion.div
        className="text-center md:text-left md:justify-self-start"
        variants={container}
        initial="hidden"
        animate="show"
      >
        <h2 className="text-lg font-semibold text-zinc-800">Olá! Meu nome é</h2>
        <h1 className="text-3xl lg:text-5xl font-extrabold text-zinc-900">
          Edson Marcelo
        </h1>
        <p className="text-lg font-semibold text-zinc-800">
          Desenvolvedor de Software{' '}
          <Link
            href="/time"
            className="text-transparent focus:text-blue-500 px-1"
          >
            timer
          </Link>
        </p>
        <p className="text-xs font-semibold text-zinc-600">
          Especializado em{' '}
          <span className="text-blue-600 font-bold">Javascript</span>,{' '}
          <span className="text-blue-600 font-bold">Typescript</span>,{' '}
          <span className="text-blue-600 font-bold">React</span> &{' '}
          <span className="text-blue-600 font-bold">Next.js</span>.{' '}
        </p>

        <Socials className="justify-center sm:justify-start mb-8" />
      </motion.div>
      <Button onClick={toggleDetails}>Apresentação completa</Button>

      {showDetails && (
        <Modal title="Cover Letter" closeModal={toggleDetails} isDetails>
          <div className="flex-1 flex p-4 items-center justify-center">
            <p>
              Olá, me chamo <b>Edson Marcelo</b>, sou desenvolvedor frontend com
              foco em <b>react</b> e <b>next.js</b>.
              <br />
              <br /> Tenho aproximadamente{' '}
              <b>
                três anos de experiência profissional utilizando react e next.js
              </b>
              , trabalhando em ambiente ágil, com foco em resultado, sempre
              utilizando GIT para versionamento do código com git flow
              (features, hotfix, dev, main, homolog, release candidate, release,
              etc..) e fazendo integração com api&apos;s e deploy na AWS.
              <br />
              <br /> Além disso, já <b>estudo o ecossistema frontend</b>, mais
              precisamente react/next, <b>há quase 5 anos</b>, estando a par dos
              novos paradigmas com server componentes, actions, etc..
              <br />
              <br /> Meus conhecimentos no <b>backend</b> não são tão profundos
              quanto no front, mas já implementei backends usando{' '}
              <b>next e prisma</b>, <b>node com express</b>, utilizando bancos
              de dados SQL e NO SQL. <br />
              <br /> Também tenho conhecimentos em <b>react-native</b>, caso
              haja a oportunidade, tenho interesse em me aprofundar. <br />
              <br /> Saindo da stack: Tenho experiência trabalhando com
              <b>Salesforce marketing cloud</b>, desenvolvendo e-mails dinâmicos
              e interativos consistentes cross-providers e cloud pages dentro da
              plataforma.
            </p>
          </div>
        </Modal>
      )}
    </section>
  )
}

export default HeroInfo
