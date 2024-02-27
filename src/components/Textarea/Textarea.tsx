import { TextareaHTMLAttributes, forwardRef } from 'react'
import { twMerge } from 'tailwind-merge'

interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: string
  error?: string
}

const Textarea = (
  { label, error, className, ...rest }: TextareaProps,
  ref: React.LegacyRef<HTMLTextAreaElement> | undefined
) => {
  return (
    <div className="relative">
      <label className="grid gap-1">
        {label}
        <textarea
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

export default forwardRef(Textarea)
