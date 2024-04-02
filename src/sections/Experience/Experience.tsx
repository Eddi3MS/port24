import { BadgeList, ExperienceCard, Section } from '@/components'
import { ts_techs } from '@/data/data'
import React from 'react'

const Experience = () => {
  return (
    <Section id="experience" title="Experiência">
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
  )
}

export default Experience
