import React from "react";
import ProfilPic from "../assets/images/profilepic.png";
import Divider from "../components/Divider";

const Home = () => {
    return (
        <section id="home" className="full-page home flex flex-col flow">
            <div className="flex flex-col centered flow">
                <h1>
                    <span>I'M </span>
                    <span>G</span>
                    <span>E</span>
                    <span>O</span>
                    <span>F</span>
                    <span>F</span>
                    <span>R</span>
                    <span>E</span>
                    <span>Y</span>
                </h1>
                <p className="color-primary">
                    I cut big projects into small pieces of code
                </p>
                <Divider bgColor="bg-secondary" />
                <button className="color-primary cta">
                    Let's work together
                </button>
            </div>

            <div>
                <img className="profile" src={ProfilPic} alt="" />
            </div>
            <Divider bgColor="bg-secondary" />
        </section>
    );
};

export default Home;
