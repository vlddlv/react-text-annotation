declare module 'react-text-annotation';

export interface MarkProps {
    key: string
    content: string
    start: number
    end: number
    highlight?: Highlight
    onClick: ({ start, end }: { start: number, end: number }) => void
}

export interface SplitterProps extends MarkProps {
    mark?: boolean
}

export interface SelectionProps {
    backgroundColor?: string
}

export interface Split {
    start: number
    end: number
    content: string
    i?: number
    mark?: boolean
}

export interface Annotation {
    start: number;
    end: number;
    text: string;
    highlight: Highlight;
}

export interface Highlight {
    id: string | number;
    color: string;
}

export type TextAnnotatorProps<T> = {
    content: string;
    value: T[];
    onChange: (value: T[]) => void;
    highlight: Highlight;
    disableSelection?: boolean
}