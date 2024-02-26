import { jsx as _jsx } from "react/jsx-runtime";
import React, { useCallback } from 'react';
const Mark = (props) => {
    const { category, start, end, content, onClick, markerClassName } = props;
    const handleClick = useCallback(() => {
        onClick({ start, end });
        console.log("lala");
    }, [onClick, start, end]);
    return (_jsx("mark", { className: markerClassName, style: { backgroundColor: category?.color || '#84d2ff' }, "data-start": start, "data-end": end, onClick: handleClick, children: content }));
};
export default React.memo(Mark);
