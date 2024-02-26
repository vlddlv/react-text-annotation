declare module 'react-text-annotation';

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
