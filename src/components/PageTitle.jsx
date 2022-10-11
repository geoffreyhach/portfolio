import React from "react";
import { useInView } from "react-intersection-observer";

const PageTitle = ({ text, classes }) => {
    const { ref, inView } = useInView();

    return (
        <>
            <h2 ref={ref} className={`${classes} ${inView ? "appear" : ""}`}>
                {text}
            </h2>
        </>
    );
};

export default PageTitle;
