import { useState } from "react";
import Divider from "./Divider";
import ToggleButton from "./ToggleButton";

const NavBar = ({ setIsContactFormOpen }) => {
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
                    <Divider />
                    <a href="#home">Home</a>
                    <a href="#about">About</a>
                    <a href="#projects">Projects</a>
                    <button onClick={() => setIsContactFormOpen(true)}>
                        Contact
                    </button>
                </nav>
            </header>
        </>
    );
};

export default NavBar;
