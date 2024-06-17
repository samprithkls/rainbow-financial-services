import React from "react";
import Meenakshi from '../assets/images/about/Meenakshi.png';
import Rishabh from '../assets/images/about/Rishabh.png';
import '../assets/styles/about.css';

const About = () => {
    return (
    <div className="row about" id="about">
        <div className='row about-container'>
            <div className='col-xl-5 col-lg-3 col-md-3 col-sm-3 col-xs-4 line-container'><hr className='line'></hr></div>
            <div className='col-xl-2 col-lg-6 col-md-6 col-sm-6 col-xs-4 about-header'><center><span>About Us</span></center></div>
            <div className='col-xl-5 col-lg-3 col-md-3 col-sm-3 col-xs-4 line-container'><hr className='line'></hr></div>
            <div className='row yellow-line'></div>
        </div>
        <div className="row reverse-on-mobile" style={{marginTop: '1em'}}>
            <div className="col-xl-8 col-lg-8 col-md-6 col-sm-12 col-xs-12">
                <div className='contact-header'><span>Mrs. Meenakshi Rajesh Sikchi</span></div>
                <p className="about-content">
                Rainbow Financial Services was founded by Late Rajesh Vimalkishore Sikchi, but after his demise his wife, Meenakshi Rajesh Sikchi carried the brand name ahead. She has an experience of over 17-18 years in the field of investment services. Her personal experience involving the sudden demise of her husband in 2006 helped her realise the importance of insurance products like term plan and investments in one’s life. She wanted to use this experience to help families and the society in securing their future.
                Rainbow Financial Services was started with the motive to help every individual in attaining financial freedom, and to achieve their investment objectives. She strongly believes that one does not need to be wealthy to be an investor but an investor to be wealthy. Over the years, she has used her experience and dedicatedly provided quality financial services to her clients.
                </p>  
            </div>
            <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-xs-12 founder-img-container">
                <img
                    src={Meenakshi}
                    alt="Mrs. Meenakshi Rajesh Sikchi"
                    className="founder-img"
                />
            </div>
        </div>
        <div className="row second-about" style={{marginTop: '60px'}}>
            <div className="col-xl-4 col-lg-8 col-md-6 col-sm-12 col-xs-12">
                <div className="founder-img-container">
                    <img
                        src={Rishabh}
                        alt="Mr. Rishabh Rajesh Sikchi"
                        className="founder-img"
                    />
                </div>
            </div>
            <div className="col-xl-8 col-lg-8 col-md-6 col-sm-12 col-xs-12">
                <div className='contact-header'><span>Mr. Rishab Rajesh Sikchi</span></div>
                <p className="about-content">
                    Rishab has been working with the firm over the course of the last 8 years. He joined the firm with a vision to help investors in making investment choices based on their risk appetite, and wealth creation. He gained trust of the firm’s clients due to his passion to provide services with dedication and excellence. In his quest for providing excellent services, he regularly trains and updates his staff with respect to any changes in the execution and regulatory changes from time to time. 
                </p>  
            </div>
        </div>
    </div>
    

    );
}

export default About;