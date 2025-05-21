import { Project, Section } from '@/components'
import { projects } from '@/data/data'

const Page = () => {
  return (
    <Section
      id="projects"
      title="Criações Recentes"
      className="max-w-5xl mx-auto mt-10 mb-16 px-4"
    >
      {projects.map(({ id, ...project }) => (
        <Project key={id} {...project} />
      ))}
    </Section>
  )
}

export default Page
