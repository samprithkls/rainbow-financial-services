import React from "react";
import Home from './Home';
import Contact from './Contact';
import About from "./About";
import Projects from "./Projects";

const Main = () => {
    return (
        <div className="container">
            <Home />
            <Projects />
            <About />
            <Contact />
        </div>
    );
}

export default Main;