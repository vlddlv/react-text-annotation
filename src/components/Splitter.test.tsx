import '@testing-library/jest-dom'
import { render, fireEvent } from '@testing-library/react';
import Splitter from './Splitter';

jest.mock('./Mark', () => () => <div>Mocked Mark</div>);

describe('Splitter', () => {
  it('renders Mark component when mark prop is true', () => {
    const { getByText } = render(
      <Splitter
        key="test"
        mark={true}
        start={0}
        end={1}
        content="Test content"
        onClick={() => {}}
      />
    );

    expect(getByText('Mocked Mark')).toBeInTheDocument();
  });

  it('renders a span with the correct content when mark prop is false', () => {
    const { getByText } = render(
      <Splitter
        key="test"
        mark={false}
        start={0}
        end={1}
        content="Test content"
        onClick={() => {}}
      />
    );

    expect(getByText('Test content')).toBeInTheDocument();
  });

  it('calls onClick with the correct parameters when the span is clicked', () => {
    const handleClick = jest.fn();
    const { getByText } = render(
      <Splitter
        key="test"
        mark={false}
        start={0}
        end={1}
        content="Test content"
        onClick={handleClick}
      />
    );

    fireEvent.click(getByText('Test content'));
    expect(handleClick).toHaveBeenCalledWith({ start: 0, end: 1 });
  });
});