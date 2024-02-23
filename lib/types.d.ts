declare module 'react-text-annotation';


interface Annotation {
    start: number;
    end: number;
    text: string;
    highlight: Highlight;
}

interface Highlight {
    id: string | number;
    color: string;
}
