import React from "react";

const Footer = () => {
    return (
        <footer className="flex bg-white color-primary">
            <a href="#">Mentions legales</a>
            <a
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
