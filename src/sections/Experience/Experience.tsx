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

      <ExperienceCard
        badges={[
          'comunicação',
          'tenacidade',
          'resolução de problemas',
          'criatividade',
        ]}
        desc="Trabalhei com vendas desde os meus 18 anos, onde pude desenvolver
        diversas soft skills que agregam no desenvolvimento de software, como
        comunicação, resolução de problemas, tenacidade e criatividade. Os
        últimos dois anos desse período, passei estudando desenvolvimento de
        software em paralelo ao trabalho."
        listTitle="Soft Skills:"
        time="01/08 à 12/21"
        title="Vendedor"
      />
    </Section>
  )
}

export default Experience
