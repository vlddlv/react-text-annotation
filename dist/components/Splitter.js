import { jsx as _jsx } from "react/jsx-runtime";
import Mark from './Mark';
const Splitter = (props) => {
    if (props.mark)
        return _jsx(Mark, { ...props });
    return (_jsx("span", { "data-start": props.start, "data-end": props.end, onClick: () => props.onClick({ start: props.start, end: props.end }), children: props.content }));
};
export default Splitter;
