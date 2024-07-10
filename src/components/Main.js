import React from "react";
import Home from './Home';
import Contact from './Contact';
// import About from "./About";
// import Projects from "./Projects";
import Kyc from './Kyc';
import News from './News'

const Main = () => {
    return (
        <div className="container">
            <Home />
            {/* <Projects />
            <About />  */}
            <Kyc/>
            <News/>
            <Contact />
        </div>
    );
}

export default Main;