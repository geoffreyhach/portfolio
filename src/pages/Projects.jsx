import React from "react";
import PageTitle from "../components/PageTitle";
import Project from "../components/Project";
import Divider from "../components/Divider";

const projects = [
    {
        name: "Space Agency Website",
        tools: ["React", "CSS"],
        desc: "Full responsive showcase site based on a front-end mentor challenge. With this project I learned how to work with Utility Classes and it was also my first large scale app with React",
        live: "https://geoffreyhach.github.io/react-spacetourism/",
        repo: "https://github.com/geoffreyhach/react-spacetourism",
        img: "mockupspace",
        direction: "from-left",
    },
    {
        name: "Rock, paper, scissors",
        tools: ["React", "CSS", "Local-storage"],
        desc: "Rock, paper, scissors game based on a front-end mentor challenge. I learned how to implement logic rules and to store a user's score",
        live: "https://geoffreyhach.github.io/react-chifoumi/",
        repo: "https://github.com/geoffreyhach/react-chifoumi",
        img: "mockupchifoumi",
        direction: "from-left",
    },
    {
        name: "Countries informations app",
        tools: ["React", "CSS", "External API"],
        desc: "Small app based on a front-end mentor challenge. I learned how to fetch data from a Rest API and filter the data",
        live: "https://geoffreyhach.github.io/react-restcountriesAPI/",
        repo: "https://github.com/geoffreyhach/react-restcountriesAPI",
        img: "mockupAPI",
        direction: "from-right",
    },
];

const Projects = () => {
    //direction "from-right" or "from-left" for animation direction

    return (
        <section
            id="projects"
            className="full-page projects flex flex-col centered bg-primary"
        >
            <PageTitle text="projects" classes="project-title color-white" />

            {projects.map((project) => (
                <Project
                    key={project.name}
                    name={project.name}
                    tools={project.tools}
                    desc={project.desc}
                    img={project.img}
                    live={project.live}
                    repo={project.repo}
                    direction={project.direction}
                />
            ))}
            <Divider bgColor="bg-white" />
        </section>
    );
};

export default Projects;
