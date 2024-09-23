'use client'
import { Section } from '@/components'
import { getTimePassed } from '@/utils/getTimePassed'
import React, { useEffect, useState } from 'react'

const start = '07/03/2022'

export default function Timer() {
  const [time, setTime] = useState('')

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(getTimePassed(new Date(start)))
    }, 1000)

    return () => {
      clearInterval(interval)
    }
  })

  return (
    <Section
      id="timer"
      title="Temporizador"
      subtitle="Tempo decorrido desde meu primeiro emprego na área em 07/03/2022."
      className="max-w-5xl mx-auto mt-10 mb-16 px-4"
    >
      <span className="text-lg font-semibold text-blue-500">{time}</span>
    </Section>
  )
}
