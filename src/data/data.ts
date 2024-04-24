import havenIMG from '@/assets/projects/haven.png'
import deliverizeIMG from '@/assets/projects/deliverize.png'
import numbersIMG from '@/assets/projects/number.png'
import BlogIMG from '@/assets/projects/blog.png'

export const projects = [
  {
    id: '08',
    image: havenIMG.src,
    title: 'Haven - Imóveis SA',
    tech: [
      'Next.js',
      'Next Auth',
      'Resend',
      'Prisma',
      'Neon DB',
      'Shadcn-UI',
      'Tailwind',
      'Cloudinary',
    ],
    desc: `Este é um Sistema autoral desenvolvido com Next14,
     e suas mais recentes features, NextAuth para autenticação e
      autorização, Resend e React-Emails, Shadcn-UI, Neon DB, Prisma e Cloudinary.
    `,
    git: 'https://github.com/Eddi3MS/haven',
  },
  {
    id: '107',
    image: deliverizeIMG.src,
    title: 'Deliveryze',
    tech: ['React.Js', 'React Hooks', 'Context API', 'REST API'],
    desc: 'Página desenvolvida para o teste de habilidades técnicas da Teamsoft. Provido de um design no figma e uma api, deveria replicar a tela e consumir os dados da api para povoar as informações da tela.',
    live: 'https://www.deliveryze.edsonmarcelo.com.br',
  },
  {
    id: '02',
    image: numbersIMG.src,
    title: 'Adivinhe o Número',
    tech: ['Javascript', 'Manipulação da DOM', 'Rest API'],
    desc: 'Teste de habilidades básicas para uma vaga de desenvolvedor web, onde pude aprender e executar requisições http (para receber o número), e também manipular a DOM sem utilizar nenhum framework para exibir os números e feedbacks visuais ao usuário.',
    live: 'https://guess1to300.netlify.app/',
  },
]

export const ts_techs = [
  'react',
  'next.js',
  'react hooks',
  'typescript',
  'redux',
  'zod',
  'context api',
  'react query',
  'yup',
  'react-hook-forms',
  'git',
  'styled-components',
  'sass',
  'react-bootstrap',
  'storybook',
  'radix ui',
]

export const es_certificates = [
  {
    id: 5,
    title: 'React - Complete Guide - Academind',
    time: '48 horas',
    desc: 'Curso prático focado na lib React. Embora a data de emissão esteja datada à 07 set. 2022, o curso esta sempre sendo atualizado de acordo com as novas versões e mudanças importantes do React.',
    url: 'https://www.udemy.com/certificate/UC-e19819b2-fa20-4abf-bc5b-29c1c72a7c26/',
  },
  {
    id: 4,
    title: 'Next.js - Complete Guide - Academind',
    time: '25 horas',
    desc: 'Curso prático focado no framework Next.js. Embora a data de emissão esteja datada à 15 out. 2021, o curso esta sempre sendo atualizado de acordo com as novas versões do Next.',
    url: 'https://www.udemy.com/certificate/UC-8f23d51a-48a8-4c8f-9200-c9902ffaf6be/',
  },
  {
    id: 4,
    title: 'Next.js - Complete Guide - Academind',
    time: '25 horas',
    desc: 'Curso prático focado no framework Next.js. Embora a data de emissão esteja datada à 15 out. 2021, o curso esta sempre sendo atualizado de acordo com as novas versões do Next.',
    url: 'https://www.udemy.com/certificate/UC-8f23d51a-48a8-4c8f-9200-c9902ffaf6be/',
  },
  {
    id: 3,
    title: 'EF SET - Certificação Inglês C1',
    time: '1 hora',
    desc: 'Este certificado reflete meu desempenho em um teste de proficiência em inglês bastante renomado. O teste avaliou minhas habilidades de compreensão auditiva e leitura, oferecendo uma avaliação abrangente do meu conhecimento da língua inglesa.',
    url: 'https://cert.efset.org/HXjCAy',
  },
  {
    id: 2,
    title: 'CSS com SASS - Origamid',
    time: '12 horas',
    desc: 'Curso prático que demonstra o uso do pré processador SASS, que embora venha tendo muitas de suas funcionalidades incorporadas pelo CSS, ainda é muito utilizado pela industria.',
    url: 'https://www.origamid.com/certificate/58cdcd3a/',
  },
  {
    id: 1,
    title: 'React - Origamid',
    time: '36 horas',
    desc: 'Curso prático de react, onde explorando todas as key features do próprio, é desenvolvida uma rede social para doguinhos.',
    url: 'https://www.origamid.com/certificate/614a630c/',
  },
]
