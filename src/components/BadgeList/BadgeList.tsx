import React from 'react'

type BadgeListProps = {
  words: string[]
  size?: 'xs' | 'sm'
}

const BadgeList = ({ words, size = 'sm' }: BadgeListProps) => {
  let sizes =
    size === 'sm' ? 'rounded-2xl font-semibold text-sm' : 'rounded-xl text-xs'

  return (
    <ul className="flex flex-wrap gap-1 max-w-prose ">
      {words.map((word) => (
        <li
          key={word.trim()}
          className={`bg-sky-800 text-white px-3 py-1 capitalize ${sizes}`}
        >
          {word}
        </li>
      ))}
    </ul>
  )
}

export default BadgeList
