import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import TextWrapper from './TextWrapper';

describe('TextWrapper', () => {

  let mockProps: {
    content: string;
    value: any[];
    onChange: jest.Mock<{}, []>;
    category: { id: number; color: string };
    markerClassName: string;
  };
  let mockSelection: Partial<Selection>;

  beforeEach(() => {
    mockProps = {
      content: 'Test content',
      value: [],
      onChange: jest.fn(),
      category: { id: 0, color: 'red' },
      markerClassName: 'marker',
    };

    mockSelection = {
      anchorNode: {
        parentElement: { getAttribute: () => '0' },
        compareDocumentPosition: () => 0,
      } as unknown as Node,
      focusNode: { parentElement: { getAttribute: () => '4' } } as unknown as Node,
      anchorOffset: 0,
      focusOffset: 4,
      isCollapsed: false,
      empty: jest.fn(),
    };

    window.getSelection = jest.fn(() => mockSelection as Selection);
  });

  it('renders without crashing', () => {
    const mockProps = {
      content: 'Test content',
      value: [],
      onChange: jest.fn(),
      category: { id: 0, color: 'red' },
      markerClassName: 'marker',
    };

    render(<TextWrapper {...mockProps} />);
  });

  it('calls onChange when text is selected', () => {
    const { getByText } = render(<TextWrapper {...mockProps} />);

    const text = getByText('Test content');
    fireEvent.mouseUp(text);

    expect(mockProps.onChange).toHaveBeenCalled();
  });

  it('calls onChange when a split is clicked', () => {
    mockProps.value = [{ start: 0, end: 4, text: 'Test', category: { id: 0, color: 'red' } }]
    const { getByText } = render(<TextWrapper {...mockProps} />);

    const split = getByText('Test');
    fireEvent.click(split);

    expect(mockProps.onChange).toHaveBeenCalled();
  });

  it('handles backwards selection', () => {
    mockSelection.anchorNode!.compareDocumentPosition = () => 1;
    const { getByText } = render(<TextWrapper {...mockProps} />);

    window.getSelection = jest.fn(() => mockSelection as Selection);

    const text = getByText('Test content');
    fireEvent.mouseUp(text);

    expect(mockSelection.empty).toHaveBeenCalled();
  });

  it('adds a new annotation when text is selected', () => {
    const { getByText } = render(<TextWrapper {...mockProps} />);

    const mockSelection: Partial<Selection> = {
      anchorNode: {
        parentElement: { getAttribute: () => '0' },
        compareDocumentPosition: () => 0,
      } as any,
      focusNode: { parentElement: { getAttribute: () => '4' } } as unknown as Node,
      anchorOffset: 8,
      focusOffset: 0,
      isCollapsed: false,
      empty: jest.fn(),
    };

    window.getSelection = jest.fn(() => mockSelection as Selection);

    const text = getByText('Test content');
    fireEvent.mouseUp(text);

    expect(mockProps.onChange).toHaveBeenCalledWith(
      expect.arrayContaining([
        expect.objectContaining({
          start: 4,
          end: 8,
          text: ' con',
          category: mockProps.category,
        }),
      ])
    );
  });
});
