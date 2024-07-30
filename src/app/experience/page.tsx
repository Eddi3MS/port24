import { Certificate, ExperienceCard, Section } from '@/components'
import { es_certificates, ts_techs } from '@/data/data'
import React from 'react'

const Page = () => {
  return (
    <>
      <Section
        id="experience"
        title="Experiência"
        className="max-w-5xl mx-auto mt-10 mb-16 px-4"
      >
        <ExperienceCard
          badges={ts_techs}
          desc="Como desenvolvedor frontend na teamsoft, minhas responsabilidades
          abrangiam desde o desenvolvimento da interface, lógica de interações e
          integrações, testes funcionais, até a configuração e deploy da
          aplicação. Além disso, participação de reuniões diárias e semanais
          para discutir o progresso e metas para a sprint (SCRUM)."
          listTitle="Ferramentas utilizadas:"
          time="03/22 à 07/23"
          title="Desenvolvedor Frontend - Teamsoft"
        />
      </Section>

      <div className="bg-sky-700 relative">
        <div className="absolute top-0 left-0 w-full overflow-hidden [line-height:0]">
          <svg
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 200"
            preserveAspectRatio="none"
            className="relative block w-[calc(100%+1.3px)] h-[33px]"
          >
            <path
              d="M0,0V7.23C0,65.52,268.63,112.77,600,112.77S1200,65.52,1200,7.23V0Z"
              className="fill-slate-100"
            ></path>
          </svg>
        </div>
        <Section
          id="certificates"
          title="Certificados"
          className="max-w-5xl mx-auto mt-20 mb-16 text-slate-200 px-4"
        >
          {es_certificates.map(({ id, url, ...certificate }) => (
            <a href={url} target="_blank" rel="noopener noreferrer" key={id}>
              <Certificate {...certificate} />
            </a>
          ))}

          <Certificate
            title="Never Stop Learning"
            desc="Estou sempre me mantendo atualizado com os últimos updates da stack frontend e também sempre buscando conhecimento de novas tecnologias."
            time=""
            className="border-none"
          />
        </Section>
      </div>
    </>
  )
}

export default Page
