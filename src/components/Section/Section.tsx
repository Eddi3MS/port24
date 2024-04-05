import React, { ReactNode, HTMLAttributes } from 'react'
import { twMerge } from 'tailwind-merge'
import AnimatedTitle from '../AnimatedTitle'

type Section = {
  id: string
  title: string
  subtitle?: string
  children: ReactNode
}

const Section = ({
  children,
  id,
  title,
  subtitle,
  className,
}: Section & HTMLAttributes<HTMLElement>) => {
  return (
    <section
      id={id}
      className={twMerge('flex flex-col gap-6 justify-center pt-4', className)}
    >
      <div>
        <h2
          className={twMerge(
            'text-[clamp(1.5rem,1.1667rem+1.6667vi,2.25rem)] font-semibold',
            !subtitle && 'mb-8'
          )}
        >
          <AnimatedTitle text={`${title}:`} />
        </h2>
        {subtitle && (
          <h3 className="mb-8 text-slate-600">
            <AnimatedTitle text={subtitle} />
          </h3>
        )}
      </div>
      {children}
    </section>
  )
}

export default Section
