import { Certificate, Section } from '@/components'
import { es_certificates } from '@/data/data'

const Certificates = () => {
  return (
    <Section id="certificates" title="Certificados">
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
      />
    </Section>
  )
}

export default Certificates
