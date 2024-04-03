import React, { ReactNode, HTMLAttributes } from 'react'
import { twMerge } from 'tailwind-merge'

type Section = {
  id: string
  title: string
  children: ReactNode
}

const Section = ({
  children,
  id,
  title,
  className,
}: Section & HTMLAttributes<HTMLElement>) => {
  return (
    <section
      id={id}
      className={twMerge('flex flex-col gap-6 justify-center pt-4', className)}
    >
      <h2 className="text-[clamp(1.5rem,1.1667rem+1.6667vi,2.25rem)] font-semibold mb-8">
        {title}:
      </h2>
      {children}
    </section>
  )
}

export default Section
