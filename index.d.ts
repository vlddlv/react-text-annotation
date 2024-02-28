declare module 'react-text-annotation'

export interface MarkProps {
    key: string;
    content: string;
    start: number;
    end: number;
    category?: Category;
    markerClassName?: string;
    onClick: ({ start, end }: { start: number, end: number }) => void;
}

export interface SplitterProps extends MarkProps {
    mark?: boolean;
}

export interface SelectionProps {
    backgroundColor?: string;
}

export interface Split {
    start: number;
    end: number;
    content: string;
    i?: number;
    mark?: boolean;
}

export interface Annotation {
    start: number;
    end: number;
    text: string;
    category: Category;
}

export interface Category {
    id: string | number;
    color: string;
}

export type TextAnnotatorProps = {
    innerRef: React.RefObject<HTMLElement>;
    onMouseDown: (e: React.MouseEvent) => void;
    onMouseEnter: () => void;
    onMouseLeave: () => void;
    styles: React.CSSProperties;
    children: React.ReactNode;
}

export type TextWrapperProps<T> = {
    content: string;    
    value: T[];
    onChange: (value: T[]) => void;
    category: Category;
    disableSelection?: boolean;
    containerClassNames?: string;
    markerClassName?: string;
}

export { TextAnnotator } from './src/index';