import logo from "./logo.svg";
import "./App.css";
import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";

function App() {
    return (
        <>
            <NavBar />
            <main className="bg-white">
                <Home />
                <About />
                <Projects />
            </main>
        </>
    );
}

export default App;
