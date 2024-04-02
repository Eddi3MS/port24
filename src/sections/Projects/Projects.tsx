import { Project, Section } from '@/components'
import { projects } from '@/data/data'

const Projects = () => {
  return (
    <Section id="projects" title="Projetos">
      {projects.map(({ id, ...project }) => (
        <Project key={id} {...project} />
      ))}
    </Section>
  )
}

export default Projects
