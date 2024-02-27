
import { splitTokensWithOffsets, selectionIsBackwards, splitWithOffsets } from './functions';



describe('splitTokensWithOffsets', () => {
    it('splits tokens with offsets', () => {
        const text = ['Hello', 'world'];
        const offsets = [{ start: 1, end: 2 }, { start: 2, end: 3 }];
        const result = splitTokensWithOffsets(text, offsets);
        expect(result).toEqual([
            { start: 0, end: 0, i: 0, content: 'Hello' },
            { start: 1, end: 2, mark: true, content: 'world' },
            { start: 2, end: 3, mark: true, content: '' },
        ]);
    });

    it('splits tokens with backwards offsets', () => {
        const text = ['Hello'];
        const offsets = [{ start: 1, end: 0 }];
        const result = splitTokensWithOffsets(text, offsets);
        expect(result).toEqual([
            { start: 0, end: 0, i: 0, content: 'Hello' },
            { start: 1, end: 0, mark: true, content: '' },
            { start: 0, end: 0, i: 0, content: 'Hello' },
        ]);
    });
});

describe('selectionIsBackwards', () => {
    it('returns false for an empty selection', () => {
        const selection = {
            anchorNode: null,
            focusNode: null,
            anchorOffset: 0,
            focusOffset: 0,
        } as Selection;
        expect(selectionIsBackwards(selection)).toBe(false);
    });

    it('returns true for a backwards selection', () => {
        const selection = {
            anchorNode: {
                parentElement: { getAttribute: () => '0' },
                compareDocumentPosition: () => 0,
            } as unknown as Node,
            focusNode: document.createTextNode(''),
            anchorOffset: 2,
            focusOffset: 1,
        } as unknown as Selection;
        expect(selectionIsBackwards(selection)).toBe(true);
    });

    it('returns false for a forwards selection', () => {
        const selection = {
            anchorNode: document.createTextNode(''),
            focusNode: document.createTextNode(''),
            anchorOffset: 0,
            focusOffset: 1,
        } as unknown as Selection;
        expect(selectionIsBackwards(selection)).toBe(false);
    });
});

describe('splitWithOffsets', () => {
    it('splits with offsets correctly', () => {
        const text = 'Hello, world!';
        const offsets = [{ start: 0, end: 5 }, { start: 7, end: 12 }];
        const result = splitWithOffsets(text, offsets);
        expect(result).toEqual([
            { start: 0, end: 5, mark: true, content: 'Hello' },
            { start: 5, end: 7, content: ', ' },
            { start: 7, end: 12, mark: true, content: 'world' },
            { start: 12, end: 13, content: '!' },
        ]);
    });
});
