import React from "react";

const Footer = ({ setIsContactFormOpen }) => {
    return (
        <footer className="flex bg-white">
            <a href="#home">Mentions legales</a>
            <button onClick={() => setIsContactFormOpen(true)}>Contact</button>
        </footer>
    );
};

export default Footer;
