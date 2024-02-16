import React, { useEffect, useRef, useState } from 'react';
import TextWrapper from './TextWrapper';
import { TextAnnotatorProps } from './Types'
import styled from '@emotion/styled'

const Container = styled.div<{ disableSelection: any, highlight: any }>`
  cursor: auto;
  flex-grow: 1;
  padding: 10px;
  word-spacing: 2px;
  line-height: 30px;
  margin-left: -10px;
  white-space: pre-wrap;
  height: 100%;
  userSelect: ${props => props.disableSelection ? 'none' : 'auto'};
  & mark {
    padding: 4px;
    position: relative;
    cursor: pointer;
    &:hover:after {
      font-size: 8px;
      color: #000;
      white-space:nowrap;
      top: 0;
      line-height: 11px;
      left: 0;
      position: absolute;
      content: 'x';
      font-weight: bold;
      z-index: 11;
      width: 11px;
      background: white;
      text-align: center;
      opacity: 0.5;
    }
  }
  & span {
    &::selection {
      background: ${props => props.highlight.color};
    }
  }
`;

const TextAnnotator: React.FC<any> = (props: TextAnnotatorProps<any>) => {

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
        <Container
            ref={boxRef}
            onMouseDown={(e) => {
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
            highlight={props.highlight}
            disableSelection={disableSelection}
        >
            <TextWrapper
                {...props}
            />
        </Container>
    )
}

export type { Annotation, Highlight } from './Types';
export { TextAnnotator }