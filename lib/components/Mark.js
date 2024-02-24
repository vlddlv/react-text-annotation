import { jsx as _jsx } from "react/jsx-runtime";
const Mark = (props) => {
    const { category, start, end, content, onClick, markerClassName } = props;
    return (_jsx("mark", { className: markerClassName, style: { backgroundColor: category?.color || '#84d2ff' }, "data-start": start, "data-end": end, onClick: () => onClick({ start, end }), children: content }));
};
export default Mark;
