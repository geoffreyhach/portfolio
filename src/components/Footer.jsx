import React from "react";

const Footer = () => {
    return (
        <footer className="flex bg-white color-primary">
            <a href="#Home">Mentions legales</a>
            <a
                href="#Home"
                onClick={() =>
                    (window.location = "mailto:je.suis.geoffrey.hach@gmail.com")
                }
            >
                Contact
            </a>
        </footer>
    );
};

export default Footer;
