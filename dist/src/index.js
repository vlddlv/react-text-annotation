import { Fragment as _Fragment, jsx as _jsx } from "react/jsx-runtime";
import { useEffect, useRef, useState } from 'react';
import TextWrapper from './components/TextWrapper';
const TextAnnotator = (props) => {
    const [disableSelection, setDisableSelection] = useState(true);
    const boxRef = useRef(null);
    useEffect(() => {
        const box = boxRef.current;
        if (box) {
            const handleMouseUp = (e) => {
                if (e.detail >= 3) {
                    e.preventDefault();
                }
            };
            box.addEventListener('mouseup', handleMouseUp);
            return () => {
                box.removeEventListener('mouseup', handleMouseUp);
            };
        }
    }, []);
    const Container = (props) => {
        return _jsx(_Fragment, { children: props.children });
    };
    return (_jsx(Container, { innerRef: boxRef, onMouseDown: (e) => {
            e.stopPropagation();
        }, onMouseEnter: () => {
            setDisableSelection(false);
        }, onMouseLeave: () => {
            setDisableSelection(true);
            const selection = window.getSelection();
            if (selection !== null) {
                selection.empty();
            }
        }, styles: { userSelect: disableSelection ? 'none' : 'auto' }, children: _jsx(TextWrapper, { ...props }) }));
};
export { TextAnnotator };
