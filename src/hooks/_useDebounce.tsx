import { useRef, useState } from 'react'

export const useDebounce = (timer: number = 500) => {
  const lastChange = useRef<ReturnType<typeof setTimeout> | null>(null)
  const [innerString, setInnerString] = useState('')

  function handleChange(str: string) {
    if (lastChange.current) {
      clearTimeout(lastChange.current)
    }

    lastChange.current = setTimeout(() => {
      lastChange.current = null
      setInnerString(str)
    }, timer)
  }

  return { debouncedValue: innerString, setDebouncedValue: handleChange }
}
