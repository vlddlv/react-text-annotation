import React, { useCallback } from 'react'
import { MarkProps } from '../types'

const Mark: React.FC<MarkProps> = (props) => {
  const { category, start, end, content, onClick, markerClassName } = props

  const handleClick = useCallback(() => {
    onClick({ start, end })
  }, [onClick, start, end])

  return (
    <mark
      className={markerClassName}
      style={{ backgroundColor: category?.color || '#84d2ff' }}
      data-start={start}
      data-end={end}
      onClick={handleClick}
    >
      {content}
    </mark>
  )
}

export default React.memo(Mark)