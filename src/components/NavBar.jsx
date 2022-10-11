import { useState } from "react";
import ToggleButton from "./ToggleButton";

const NavBar = () => {
    const [isHidden, setIsHidden] = useState(false);

    return (
        <>
            <ToggleButton isHidden={isHidden} setIsHidden={setIsHidden} />
            <header>
                <nav
                    className={`primary-navigation centered ${
                        isHidden ? "active" : ""
                    }`}
                >
                    <a href="#home">Home</a>
                    <a href="#about">About</a>
                    <a href="#projects">Projects</a>
                    <a href="#contact">Contact</a>
                </nav>
            </header>
        </>
    );
};

export default NavBar;
