import React from "react";
import { useInView } from "react-intersection-observer";
import PageTitle from "../components/PageTitle";
import Divider from "../components/Divider";

const About = () => {
    const { ref, inView } = useInView();

    return (
        <section
            id="about"
            className="full-page about flex flex-col bg-secondary"
        >
            <PageTitle text="about" classes="color-primary" />
            <p
                ref={ref}
                className={`about-p color-white ${inView ? "from-right" : ""}`}
            >
                I'm a passionated junior front-end developper who mostly work
                with React and node.js
            </p>
            <Divider />
        </section>
    );
};

export default About;
