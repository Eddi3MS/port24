'use client'
import { Button, Input, Section } from '@/components'
import { getTimePassed } from '@/utils/getTimePassed'
import React, { useEffect, useState } from 'react'

const start = new Date('07/03/2022')

export default function Timer() {
  const [time, setTime] = useState(getTimePassed(start))
  const [input, setInput] = useState('')

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(getTimePassed(start))
    }, 1000 * 60)

    return () => {
      clearInterval(interval)
    }
  })

  const showTimer = input.toLocaleLowerCase() === 'eddi3ms'

  return (
    <Section
      id="timer"
      title="Timer"
      subtitle=""
      className="max-w-5xl mx-auto mt-10 mb-16 px-4 gap-0"
    >
      {showTimer ? (
        <div className="grid gap-2 -mt-4">
          <span className="text-lg text-white font-bold bg-blue-500 max-w-fit px-4 py-2 mx-auto rounded-md">
            {time}
          </span>
          <span className="text-xs">
            Tempo decorrido desde meu primeiro emprego na área em 07/03/2022.
          </span>
        </div>
      ) : (
        <div className="grid gap-2">
          <Input
            type="password"
            label="Insira sua senha, para visualizar"
            onChange={(e) => setInput(e.target.value)}
            value={input}
          />
        </div>
      )}
    </Section>
  )
}
