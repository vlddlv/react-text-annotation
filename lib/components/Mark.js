import { jsx as _jsx } from "react/jsx-runtime";
const Mark = (props) => {
    const { highlight, start, end, content, onClick } = props;
    return (_jsx("mark", { style: { backgroundColor: highlight?.color || '#84d2ff' }, "data-start": start, "data-end": end, onClick: () => onClick({ start, end }), children: content }));
};
export default Mark;
