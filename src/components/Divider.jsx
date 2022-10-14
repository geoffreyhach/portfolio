import React from "react";

const Divider = ({ bgColor = "bg-primary", isVertical = false }) => {
    return (
        <div
            className={`divider ${bgColor} ${isVertical ? "vertical" : ""}`}
        ></div>
    );
};

export default Divider;
