import React from "react";

const Divider = ({ bgColor = "bg-primary" }) => {
    return <div className={`divider ${bgColor}`}></div>;
};

export default Divider;
