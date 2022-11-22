import { useState } from "react";
import "./App.css";
import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Footer from "./components/Footer";
import SocialMedias from "./components/SocialMedias";

function App() {
    const [isContactFormOpen, setIsContactFormOpen] = useState(false);
    return (
        <>
            <NavBar setIsContactFormOpen={setIsContactFormOpen} />
            <main className="bg-white">
                <Home
                    isContactFormOpen={isContactFormOpen}
                    setIsContactFormOpen={setIsContactFormOpen}
                />
                <About />
                <Projects />
            </main>
            <Footer setIsContactFormOpen={setIsContactFormOpen} />
            <SocialMedias />
        </>
    );
}

export default App;
