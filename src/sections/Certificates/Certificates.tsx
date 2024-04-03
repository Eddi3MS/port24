import { Certificate, Section } from '@/components'
import { es_certificates } from '@/data/data'

const Certificates = () => {
  return (
    <div className="bg-sky-800 relative">
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
          title="Never stop learning"
          desc="Estou sempre me mantendo atualizado na stack através de documentações,
          videos específicos no Youtube e posts relacionados à area."
          time="infinity"
          className="border-none"
        />
      </Section>

      <div className="absolute bottom-0 left-0 w-full overflow-hidden [line-height:0] rotate-180">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="relative block w-[calc(100%+1.3px)] h-[33px]"
        >
          <path
            d="M0,0V7.23C0,65.52,268.63,112.77,600,112.77S1200,65.52,1200,7.23V0Z"
            className="fill-slate-100"
          ></path>
        </svg>
      </div>
    </div>
  )
}

export default Certificates
