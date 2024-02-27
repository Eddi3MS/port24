import { BadgeList, Section } from '@/components'
import { ts_techs } from '@/data/data'
import React from 'react'

const Experience = () => {
  return (
    <Section id="experience" title="Experiência">
      <div className="grid gap-3 border-b-[1px] border-zinc-200 pb-8 max-w-prose">
        <h3 className="text-[clamp(1rem,0.7778rem+1.1111vi,1.5rem)] font-bold text-zinc-900 flex gap-8 justify-between">
          Desenvolvedor Frontend - Teamsoft
          <span className="text-sm text-sky-900 font-bold min-w-max">
            03/22 à 07/23
          </span>
        </h3>
        <p className="text-[clamp(0.875rem,0.7639rem+0.5556vi,1.125rem)">
          Como desenvolvedor frontend na teamsoft, minhas responsabilidades
          abrangiam desde a participação de reuniões diárias para discutir o
          progresso e metas para a sprint, passando pelo desenvolvimento de todo
          o código frontend e testes funcionais para garantir a qualidade e
          resiliência da aplicação, até a configuração e deploy da aplicação em
          diferentes ambientes.
        </p>
        <div className="grid gap-2">
          <h4 className="text-base font-semibold text-zinc-900">
            Ferramentas utilizadas:
          </h4>
          <BadgeList words={ts_techs} />
        </div>
      </div>

      <div className="grid gap-3 border-b-[1px] border-zinc-200 pb-8 max-w-prose">
        <h3 className="text-[clamp(1rem,0.7778rem+1.1111vi,1.5rem)] font-bold text-zinc-900 flex gap-8  justify-between">
          Vendedor
          <span className="text-sm text-sky-900 font-bold min-w-max">
            01/2008 à 12/2022
          </span>
        </h3>
        <p className="text-[clamp(0.875rem,0.7639rem+0.5556vi,1.125rem)">
          Trabalhei com vendas desde os meus 18 anos, onde pude desenvolver
          diversas soft skills que agregam no desenvolvimento de software, como
          comunicação, resolução de problemas, tenacidade e criatividade. Os
          últimos dois anos desse período, passei estudando desenvolvimento de
          software em paralelo ao trabalho.
        </p>
        <div className="grid gap-2">
          <h4 className="text-base font-semibold text-zinc-900">
            Soft Skills:
          </h4>
          <BadgeList
            words={[
              'comunicação',
              'tenacidade',
              'resolução de problemas',
              'criatividade',
            ]}
          />
        </div>
      </div>
    </Section>
  )
}

export default Experience
