import React, { ReactNode } from 'react'

type Section = {
  id: string
  title: string
  children: ReactNode
}

const Section = ({ children, id, title }: Section) => {
  return (
    <section id={id} className="flex flex-col gap-6 justify-center pt-4">
      <h2 className="text-[clamp(1.5rem,1.1667rem+1.6667vi,2.25rem)] font-semibold mb-8">
        {title}:
      </h2>
      {children}
    </section>
  )
}

export default Section
