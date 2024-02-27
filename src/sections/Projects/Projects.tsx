import { BadgeList, Section } from '@/components'
import { projects } from '@/data/data'
import Image from 'next/image'

const Projects = () => {
  return (
    <Section id="projects" title="Projetos">
      {projects.map((project) => (
        <div
          key={project.id}
          className="flex flex-col md:flex-row gap-y-2 gap-x-4 shadow-sm bg-white p-2 rounded-md"
        >
          <div className="min-w-[250px] mx-auto">
            <Image
              src={project.image}
              alt={project.title}
              width={300}
              height={200}
              className="md:rounded-l-md shadow-sm"
            />
          </div>
          <div className="flex flex-col gap-2 flex-1">
            <h3 className="text-lg font-bold">{project.title}</h3>
            <BadgeList words={project.tech} size="xs" />
            <p className="max-w-prose text-sm text-zinc-700">{project.desc}</p>

            <a
              href={project.git}
              target="_blank"
              className="mt-auto ml-auto text-sky-800 font-bold underline"
            >
              ver o código
            </a>
          </div>
        </div>
      ))}
    </Section>
  )
}

export default Projects
