import React from 'react'
import Mark from './Mark'
import { SplitterProps } from './Types'

const Splitter: React.FC<SplitterProps> = (props: SplitterProps) => {
    if (props.mark) return <Mark {...props} />

    return (
        <span
            data-start={props.start}
            data-end={props.end}
            onClick={() => props.onClick({ start: props.start, end: props.end })}
        >
            {props.content}
        </span>
    )
}

export default Splitter