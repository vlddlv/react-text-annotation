import React from 'react'
import { selectionIsEmpty, selectionIsBackwards, splitWithOffsets } from '../functions'
import { Annotation, TextWrapperProps } from '../../index'
import Splitter from './Splitter'

const TextWrapper: React.FC<TextWrapperProps<Annotation>> = (props: TextWrapperProps<Annotation>) => {

  const handleMouseUp = () => {
    if (!props.onChange) return

    const selection = window.getSelection()
    if (!selection) return

    if (!selection.anchorNode || !selection.focusNode || selectionIsEmpty(selection)) return

    let start =
      parseInt(selection.anchorNode.parentElement?.getAttribute('data-start') ?? '', 10) +
      selection.anchorOffset
    let end =
      parseInt(selection.focusNode.parentElement?.getAttribute('data-start') ?? '', 10) +
      selection.focusOffset

    if (
      !Number.isInteger(start) ||
      !Number.isInteger(end) ||
      selection.anchorNode.compareDocumentPosition(selection.focusNode) !== 0
    ) {
      const sel = window.getSelection();
      if (sel) {
        sel.empty();
      }
      return
    }

    if (selectionIsBackwards(selection)) {
      [start, end] = [end, start]
    }
    
    const annotations = [...props.value, { start, end, text: content.slice(start, end), category: props.category } as Annotation]
    const uniqueAnnnotation = annotations.filter((a: Annotation, i: number) => annotations.findIndex((s: Annotation) => a.start === s.start) === i)
    props.onChange(uniqueAnnnotation)

    const sel = window.getSelection();
    if (sel) {
      sel.empty();
    }
  }

  const handleSplitClick = ({ start, end }: { start: number, end: number }) => {
    const splitIndex = props.value.findIndex((s) => s.start === start && s.end === end)
    if (splitIndex >= 0) {
      props.onChange([...props.value.slice(0, splitIndex), ...props.value.slice(splitIndex + 1)])
    }
  }

  const { content, value, markerClassName } = props
  const splits = splitWithOffsets(content, value)

  const color = props.category?.color;
  const className = `sel-${Math.floor(Math.random() * (999999 - 100000 + 1)) + 100000}`
  let styleElement;
  if (typeof document !== 'undefined') {
    styleElement = document.head.appendChild(document.createElement("style"));
    styleElement.innerHTML = `.${className} span::selection { background-color: ${color}; }`;
  }

  return (
    <div onMouseUp={handleMouseUp} className={`${props.containerClassNames} ${className}`}>
      {splits.map((split) => (
        <Splitter key={`${split.start}-${split.end}`} {...split} onClick={handleSplitClick} markerClassName={markerClassName}/>
      ))}
    </div>
  )
}

export default TextWrapper
