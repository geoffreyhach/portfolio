import React from "react";

const Divider = ({ bgColor = "bg-primary" }) => {
    return <span className={`divider ${bgColor}`}></span>;
};

export default Divider;
