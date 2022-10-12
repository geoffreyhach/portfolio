import React from "react";
import PageTitle from "../components/PageTitle";
import Project from "../components/Project";
import Divider from "../components/Divider";

const projects = [
    {
        name: "Space Agency Website",
        tools: ["React", "CSS"],
        desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Debitis praesentium facilis alias nihil minus beatae, unde laudantium quidem possimus modi.",
        live: "https://geoffreyhach.github.io/react-spacetourism/",
        repo: "https://github.com/geoffreyhach/react-spacetourism",
        direction: "from-left",
    },
    {
        name: "Projet 2",
        tools: ["React", "CSS", "HTML"],
        desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Debitis praesentium facilis alias nihil minus beatae, unde laudantium quidem possimus modi. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Debitis praesentium facilis alias nihil minus beatae, unde laudantium quidem possimus modi.",
        live: "https://geoffreyhach.github.io/react-spacetourism/",
        repo: "https://github.com/geoffreyhach/react-spacetourism",
        direction: "from-right",
    },
    {
        name: "Projet 3",
        tools: ["React", "CSS"],
        desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Debitis praesentium facilis alias nihil minus beatae, unde laudantium quidem possimus modi.",
        live: "https://geoffreyhach.github.io/react-spacetourism/",
        repo: "https://github.com/geoffreyhach/react-spacetourism",
        direction: "from-left",
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
                    key={projects.name}
                    name={project.name}
                    tools={project.tools}
                    desc={project.desc}
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
