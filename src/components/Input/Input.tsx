import React, { InputHTMLAttributes, forwardRef } from 'react'
import { twMerge } from 'tailwind-merge'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string
  error?: string
}

const Input = (
  { label, error, className, ...rest }: InputProps,
  ref: React.LegacyRef<HTMLInputElement> | undefined
) => {
  return (
    <div className="relative">
      <label className="grid gap-1">
        {label}
        <input
          ref={ref}
          placeholder=" "
          className={twMerge(
            'min-h-[auto] w-full rounded px-3 py-[0.32rem] leading-[1.6] outline-none transition-colors duration-200 ease-linear  border-2',
            error
              ? 'border-red-500 focus:border-red-400 placeholder-shown:border-red-300'
              : 'border-sky-800 focus:border-sky-500 placeholder-shown:border-zinc-300',
            className
          )}
          {...rest}
        />
      </label>
      {error ? (
        <p className="absolute bottom-[-20px] text-sm text-red-500 font-semibold">
          *{error}
        </p>
      ) : null}
    </div>
  )
}

export default forwardRef(Input)
