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
        <Modal title="Apresentação" closeModal={toggleDetails} isDetails>
          <div className="flex-1 flex p-4 items-center justify-center">
            <p>
              <b>
                Olá, meu nome é Edson Marcelo, sou desenvolvedor frontend
                especializado em React e Next.js.
              </b>
              <br />
              <br />
              Tenho cerca de <b>três anos de experiência profissional</b>,
              atuando em <b>ambientes ágeis</b> e colaborativos, sempre com foco
              na <b>entrega de valor e resultados concretos</b>. Domino o
              ecossistema React/Next — incluindo conceitos modernos como{' '}
              <b>server components</b> e <b>actions</b> — e sigo as melhores
              práticas de versionamento com <b>Git e Git Flow</b>, integração
              com <b>APIs REST</b>, <b>Websockets</b> e{' '}
              <b>deploys em ambientes como AWS / VPS Hostinger</b>.<br />
              <br />
              Durante minha trajetória, tive a oportunidade de atuar também com{' '}
              <b>Salesforce Marketing Cloud</b>, desenvolvendo{' '}
              <b>e-mails marketing dinâmicos e interativos (AMPscript)</b> e{' '}
              <b>landing pages responsivas</b>, com forte atenção à{' '}
              <b>
                acessibilidade, responsividade e compatibilidade cross-client
              </b>
              . Essa vivência fortaleceu minha capacidade de{' '}
              <b>adaptação a diferentes contextos e tecnologias</b>, sempre com
              foco em <b>excelência na entrega</b>.<br />
              <br />
              No backend, já implementei soluções com{' '}
              <b>Next.js, Prisma, Node e Express</b>, utilizando bancos{' '}
              <b>SQL e NoSQL</b>. Embora minha especialidade esteja no frontend,
              mantenho uma visão integrada entre as camadas do sistema, o que
              contribui para{' '}
              <b>uma comunicação fluida com times fullstack e backend</b>.<br />
              <br />
              Além disso, tenho interesse em <b>React Native</b> e estou aberto
              a oportunidades que ampliem minha atuação nessa área.
              <br />
              <br />
              Estou à disposição para contribuir com meu{' '}
              <b>comprometimento, proatividade e capacidade de adaptação</b>,
              sempre buscando evoluir junto com o time e os desafios propostos.
              <br />
              <br />
              <b>Atenciosamente,</b>
              <br />
              <b>Edson Marcelo</b>
            </p>
          </div>
        </Modal>
      )}
    </section>
  )
}

export default HeroInfo
