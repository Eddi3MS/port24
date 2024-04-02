'use client'
import { ButtonHTMLAttributes } from 'react'
import { twMerge } from 'tailwind-merge'

const Button = ({
  className,
  disabled,
  ...rest
}: ButtonHTMLAttributes<HTMLButtonElement>) => {
  const isDisabled = disabled

  const baseStyle =
    'bg-sky-800 hover:bg-sky-600 text-white font-bold disabled:bg-zinc-400 uppercase transition-colors duration-200 ease-linear px-3 py-[0.32rem] rounded'

  return (
    <button
      aria-disabled={isDisabled}
      disabled={isDisabled}
      className={twMerge(baseStyle, className)}
      {...rest}
    />
  )
}

export default Button
