import React, { useEffect, useRef, useState } from 'react';
import TextWrapper from './components/TextWrapper';
import { TextAnnotatorProps, Annotation } from './types'

const TextAnnotator: React.FC<TextAnnotatorProps<Annotation>> = (props: TextAnnotatorProps<Annotation>) => {

    const [disableSelection, setDisableSelection] = useState(true)
    const boxRef = useRef<HTMLInputElement | null>(null)

    useEffect(() => {
        const box = boxRef.current;
        if (box) {
            const handleMouseUp = (e: MouseEvent) => {
                if (e.detail >= 3) {
                    e.preventDefault()
                }
            };

            box.addEventListener('mouseup', handleMouseUp)

            return () => {
                box.removeEventListener('mouseup', handleMouseUp)
            };
        }
    }, [])

    return (
        <TextWrapper
            innerRef={boxRef}
            onMouseDown={(e: React.MouseEvent) => {
                e.stopPropagation()
            }}
            onMouseEnter={() => {
                setDisableSelection(false)
            }}
            onMouseLeave={() => {
                setDisableSelection(true)
                const selection = window.getSelection();
                if (selection !== null) {
                    selection.empty();
                }
            }}
            styles={{userSelect: disableSelection ? 'none' : 'auto'}}
            {...props}
        />
    )
}

export type { Annotation, Highlight } from './types';
export { TextAnnotator }