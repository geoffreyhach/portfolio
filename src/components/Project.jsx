import React from "react";
import { useInView } from "react-intersection-observer";

const Project = ({
    name,
    tools,
    desc,
    live,
    repo,
    img,
    direction = "from-right",
}) => {
    const { ref, inView } = useInView();

    return (
        <div
            ref={ref}
            className={`project-cards flex flex-col flow color-white ${
                inView ? direction : ""
            }`}
        >
            <h3>{name}</h3>
            <div className="tools">
                {tools.map((tool) => (
                    <span key={tool}>• {tool} </span>
                ))}
            </div>
            <p className="project-p">{desc}</p>
            <img
                src={require("../assets/images/" + img + ".png")}
                alt="Screenshot of the project on various devices"
            />
            <span className="flex centered">
                <a href={live}>
                    <RiExternalLinkLine />
                </a>

                <a href={repo}>
                    <BrandicoGithubText />
                </a>
            </span>
        </div>
    );
};

function BrandicoGithubText(props) {
    return (
        <svg width="0.93em" height="1em" viewBox="0 0 924.464 1000" {...props}>
            <path
                // fill="red"
                d="M526.961 0c-21.136 0-39.171 8.011-54.113 24.045c-14.939 16.037-22.39 35.359-22.39 57.954c0 21.866 7.448 40.798 22.39 56.831c14.942 16.037 32.978 24.073 54.113 24.073c20.409 0 38.08-8.036 53.022-24.073c14.942-16.033 22.419-34.965 22.419-56.831c0-22.596-7.476-41.917-22.419-57.954C565.044 8.012 547.37 0 526.961 0zm163.903 156.345c2.183 12.391 3.278 28.772 3.278 49.181v42.622h-53.55v106.041c15.304-2.186 27.684-3.246 37.159-3.246l16.395 1.063v2.186h-1.091v195.69c0 61.228 7.678 106.058 22.982 134.486c20.409 37.896 57.21 56.831 110.413 56.831c37.899 0 70.331-7.274 97.299-21.859V610.018c-18.227 12.394-38.64 18.578-61.232 18.578c-32.067 0-48.086-24.42-48.086-73.254v-203.34h46.995c8.748 0 18.046.365 27.886 1.091c9.84.73 16.561 1.091 20.204 1.091V248.143h-95.081v-44.809c0-17.49 1.095-33.144 3.278-46.995H690.877l-.011.004zm-500.638 86.34c-49.56 0-92.183 16.413-127.899 49.209c-37.166 34.983-55.768 78.7-55.768 131.177c0 34.983 10.194 67.784 30.6 98.391c18.22 28.421 39.005 46.658 62.327 54.677v2.186c-23.322 10.194-34.972 35.72-34.972 76.532c0 31.344 12.38 54.641 37.159 69.945v2.186C33.897 749.58.005 791.483.005 852.701c0 53.21 22.599 92.222 67.791 117c35.706 19.68 81.252 29.509 136.641 29.509c134.83 0 202.249-56.487 202.249-169.459c0-70.693-52.119-114.056-156.345-130.086c-24.048-3.643-42.254-12.377-54.645-26.228c-9.475-9.471-14.209-18.971-14.209-28.446c0-26.965 14.57-42.619 43.714-46.995c44.458-6.552 80.727-27.145 108.79-61.763c28.059-34.622 42.091-75.26 42.091-121.904c0-14.577-2.913-30.235-8.741-46.995c18.953-4.376 33.509-8.38 43.714-12.022V242.681c-45.921 17.493-86.361 26.259-121.341 26.259c-30.614-17.49-63.772-26.259-99.486-26.259v.004zm274.44 5.464c1.456 13.117 2.186 36.819 2.186 71.068v340.012c0 34.987-.73 59.747-2.186 74.317h123.527c-1.46-16.76-2.186-43.732-2.186-80.904V317.03c0-32.067.726-55.035 2.186-68.882H464.666zm-270.068 95.113c21.866 0 38.976 8.408 51.367 25.168c10.201 15.311 15.3 33.509 15.3 54.645c0 51.017-22.209 76.532-66.667 76.532c-45.911 0-68.882-25.15-68.882-75.441c0-53.929 22.971-80.904 68.882-80.904zm7.65 444.962c61.225 0 91.836 18.567 91.836 55.736c0 39.359-28.063 59.046-84.182 59.046c-64.134 0-96.204-18.967-96.204-56.863c0-38.629 29.519-57.922 88.554-57.922l-.004.004z"
            ></path>
        </svg>
    );
}

function RiExternalLinkLine(props) {
    return (
        <svg width="1em" height="1em" viewBox="0 0 24 24" {...props}>
            <path d="M10 6v2H5v11h11v-5h2v6a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h6zm11-3v8h-2V6.413l-7.793 7.794l-1.414-1.414L17.585 5H13V3h8z"></path>
        </svg>
    );
}

export default Project;
