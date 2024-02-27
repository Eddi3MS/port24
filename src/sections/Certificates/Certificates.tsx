import { Section } from '@/components'
import { es_certificates } from '@/data/data'

const Certificates = () => {
  return (
    <Section id="certificates" title="Certificados">
      {es_certificates.map(({ id, url, title, desc, time }) => (
        <a href={url} key={id} target="_blank" rel="noopener noreferrer">
          <div className="grid  border-b-[1px] border-zinc-200 pb-4 max-w-3xl">
            <h3 className="text-[clamp(1rem,0.7778rem+1.1111vi,1.5rem)] font-bold text-zinc-900 flex gap-8 justify-between ">
              {title}
              <span className="text-sm text-sky-900 font-bold min-w-max flex items-center">
                {time}
              </span>
            </h3>
            <p className="max-w-prose text-[clamp(0.875rem,0.7639rem+0.5556vi,1.125rem)">
              {desc}
            </p>
          </div>
        </a>
      ))}

      <div className="grid  border-b-[1px] border-zinc-200 pb-4 max-w-3xl">
        <h3 className="text-[clamp(1rem,0.7778rem+1.1111vi,1.5rem)] font-bold text-zinc-900 flex gap-8 justify-between ">
          Never stop learning
          <span className="text-sm text-sky-900 font-bold min-w-max flex items-center">
            infinity
          </span>
        </h3>
        <p className="max-w-prose  text-[clamp(0.875rem,0.7639rem+0.5556vi,1.125rem)">
          Estou sempre me mantendo atualizado na stack através de documentações,
          videos específicos no Youtube e posts relacionados à area.
        </p>
      </div>
    </Section>
  )
}

export default Certificates
