import React from "react";

const ToggleButton = ({ isHidden, setIsHidden }) => {
    const handleClick = () => {
        setIsHidden(!isHidden);
    };

    return (
        <div className="toggle-btn" onClick={handleClick}>
            {isHidden ? (
                <svg width="32" height="32" viewBox="0 0 11 11">
                    <path
                        d="M2.2 1.19l3.3 3.3L8.8 1.2a.67.67 0 0 1 .5-.2a.75.75 0 0 1 .7.7a.66.66 0 0 1-.2.48L6.49 5.5L9.8 8.82c.13.126.202.3.2.48a.75.75 0 0 1-.7.7a.67.67 0 0 1-.5-.2L5.5 6.51L2.21 9.8a.67.67 0 0 1-.5.2a.75.75 0 0 1-.71-.71a.66.66 0 0 1 .2-.48L4.51 5.5L1.19 2.18A.66.66 0 0 1 1 1.7a.75.75 0 0 1 .7-.7a.67.67 0 0 1 .5.19z"
                        fill="#888888"
                    />
                </svg>
            ) : (
                <svg width="32" height="32" viewBox="0 0 16 16">
                    <path
                        fill="none"
                        stroke="#888888"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="1.5"
                        d="M2.75 12.25h10.5m-10.5-4h10.5m-10.5-4h10.5"
                    />
                </svg>
            )}
        </div>
    );
};

export default ToggleButton;
