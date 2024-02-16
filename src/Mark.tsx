import React from 'react'
import { MarkProps } from './Types'

const Mark: React.FC<MarkProps> = (props) => {
  const { highlight, start, end, content, onClick } = props

  return (
    <mark
      style={{ backgroundColor: highlight?.color || '#84d2ff' }}
      data-start={start}
      data-end={end}
      onClick={() => onClick({ start, end })}
    >
      {content}

    </mark>
  )
}

export default Mark
