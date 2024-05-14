import deliverizeIMG from '@/assets/projects/deliverize.png'
import havenIMG from '@/assets/projects/haven.png'
import numbersIMG from '@/assets/projects/number.png'
import riotIMG from '@/assets/projects/riot.png'

export const projects = [
  {
    id: '08',
    image: havenIMG.src,
    title: 'Haven - Imóveis SA',
    tech: [
      'React',
      'Next.js',
      'Typescript',
      'Next Auth',
      'React Hooks',
      'Resend',
      'Prisma',
      'Neon DB',
      'Shadcn-UI',
      'Tailwind',
      'Cloudinary',
      'Zustand',
    ],
    desc: `Um marketplace de imóveis que conecta compradores e proprietários para negociações diretas. 
    Inclui autenticação robusta com login de dois fatores, validação de e-mails e login social. 
    Além disso, possui funcionalidades de envio de e-mails para validação de cadastro e notificações de status de anúncios. 
    Utiliza as mais recentes features do Next.js, como rotas paralelas e de interceptação, SSR, loadings e permissões de rotas.`,
    live: 'https://haven.edsonmarcelo.com.br',
  },
  {
    id: '01',
    image: riotIMG.src,
    title: 'Riot - EloJob',
    tech: [
      'React',
      'Next.js Static',
      'Typescript',
      'Framer Motion',
      'React Hooks',
      'Whatsapp',
    ],
    desc: `Um marketplace para serviços de Elojob e DuoBoost para League of Legends e Valorant,
     com uma interface intuitiva, o sistema agiliza a forma que o usuário seleciona o serviço e suas opções detalhadas,
      tendo feedback instantâneo dos valores do serviço a ser contratado e um link para fechar contrato no whatsapp.`,
    live: 'https://riot.edsonmarcelo.com.br',
  },
  {
    id: '107',
    image: deliverizeIMG.src,
    title: 'Deliveryze',
    tech: ['React.Js', 'React Hooks', 'Context API', 'REST API'],
    desc: 'Página desenvolvida para o teste de habilidades técnicas da Teamsoft. Provido de um design no figma e uma api, deveria replicar a tela e consumir os dados da api para povoar as informações da tela.',
    live: 'https://www.deliveryze.edsonmarcelo.com.br',
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
  {
    id: 3,
    title: 'EF SET - Certificação Inglês C1',
    time: '',
    desc: 'Este certificado reflete meu desempenho em um teste de proficiência em inglês bastante renomado. O teste avaliou minhas habilidades de compreensão auditiva e leitura, oferecendo uma avaliação abrangente do meu conhecimento da língua inglesa.',
    url: 'https://cert.efset.org/HXjCAy',
  },
]
