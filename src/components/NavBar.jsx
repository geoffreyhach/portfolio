import { useState } from "react";
import Divider from "./Divider";
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
                    <Divider />
                    <a href="#home">Home</a>
                    <a href="#about">About</a>
                    <a href="#projects">Projects</a>
                    <a
                        href="home"
                        onClick={() =>
                            (window.location =
                                "mailto:je.suis.geoffrey.hach@gmail.com")
                        }
                    >
                        Contact
                    </a>
                </nav>
            </header>
        </>
    );
};

export default NavBar;
