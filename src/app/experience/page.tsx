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
          badges={[
            'Salesforce Marketing Cloud',
            'Ampscript',
            'HTML',
            'CSS',
            'Javascript',
          ]}
          desc="- Desenvolvimento de e-mails dinâmicos e interativos na SF/
          - Extração de e-mails da SF e adaptação para outros disparadores/
          - Criação de CloudPages na SF com HTML, CSS, Javascript e Ampscript"
          listTitle="Ferramentas utilizadas:"
          time="15/07/24 à 02/08/24"
          title="Desenvolvedor Salesforce - Freelancer"
        />

        <ExperienceCard
          badges={ts_techs}
          desc="- Desenvolvimento das interfaces elaboradas pela equipe de UI-UX/
          - Implementação da lógica e integração com API's REST/
          - Utilização extensiva de React com Typescript/
          - Controle de estados globais com Redux/
          - Controle de cache com React-Query /
          - Validações com Zod e React-Hood-Forms/
          - Versionamento de código com GIT - Git Flow /
          - Gerenciamento de tasks com Azure e Jira /
          - Rotinas baseadas em SCRUM - daily, sprints, reviews.. -  
          "
          listTitle="Ferramentas utilizadas:"
          time="07/03/22 à 31/07/23"
          title="Desenvolvedor React & Next.js - Teamsoft"
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
