import React from 'react'
import { MarkProps } from '../types'

const Mark: React.FC<MarkProps> = (props) => {
  const { category, start, end, content, onClick, markerClassName } = props

  return (
    <mark
      className={markerClassName}
      style={{ backgroundColor: category?.color || '#84d2ff' }}
      data-start={start}
      data-end={end}
      onClick={() => onClick({ start, end })}
    >
      {content}

    </mark>
  )
}

export default Mark
