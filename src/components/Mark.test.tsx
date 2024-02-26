import '@testing-library/jest-dom'
import { render, fireEvent } from '@testing-library/react';
import Mark from './Mark';

describe('Mark', () => {
    it('renders the correct content', () => {
        const { getByText } = render(
            <Mark
                key="test"
                category={{ id: 0, color: '#84d2ff' }}
                start={0}
                end={1}
                content="Test content"
                onClick={() => { }}
            />
        );

        expect(getByText('Test content')).toBeInTheDocument();
    });

    it('renders different content', () => {
        const { getByText } = render(
            <Mark
                key="test"
                category={{ id: 0, color: '#84d2ff' }}
                start={0}
                end={1}
                content="Different content"
                onClick={() => { }}
                markerClassName="marker"
            />
        );

        expect(getByText('Different content')).toBeInTheDocument();
    });

    it('renders even with no content', () => {
        const { container } = render(
          <Mark
            key="test"
            category={{ id: 0, color: '#84d2ff' }}
            start={0}
            end={1}
            content=""
            onClick={() => {}}
            markerClassName="no-content"
          />
        );

        expect(container.querySelector('.no-content')).toBeInTheDocument();
    });

    it('applies the correct background color', () => {
        const { getByText } = render(
            <Mark
                key="test"
                category={{ id: 0, color: '#c8c8c8' }}
                start={0}
                end={1}
                content="Test content"
                onClick={() => { }}
                markerClassName="marker"
            />
        );

        expect(getByText('Test content')).toHaveStyle('background-color: #c8c8c8');
    });

    it('applies the default background if no category color is present', () => {
        const { getByText } = render(
            <Mark
                key="test"
                start={0}
                end={1}
                content="Test content"
                onClick={() => { }}
                markerClassName="marker"
            />
        );

        expect(getByText('Test content')).toHaveStyle('background-color: #84d2ff');
    });

    it('calls onClick when clicked', () => {
        const handleClick = jest.fn();
        const { getByText } = render(
            <Mark
                key="test"
                category={{ id: 0, color: '#84d2ff' }}
                start={0}
                end={1}
                content="Test content"
                onClick={handleClick}
                markerClassName="marker"
            />
        );

        fireEvent.click(getByText('Test content'));
        expect(handleClick).toHaveBeenCalledWith({ start: 0, end: 1 });
    });

    it('renders with different start and end', () => {
        const handleClick = jest.fn();
        const { getByText } = render(
            <Mark
                key="test"
                category={{ id: 0, color: '#84d2ff' }}
                start={1}
                end={2}
                content="Test content"
                onClick={handleClick}
                markerClassName="marker"
            />
        );

        fireEvent.click(getByText('Test content'));
        expect(handleClick).toHaveBeenCalledWith({ start: 1, end: 2 });
    });
});