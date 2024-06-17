import React from "react";
import Amfi from "../assets/images/Amfi.jpg"
import {TfiLocationPin} from 'react-icons/tfi';
import {BsTelephone} from 'react-icons/bs';
import {AiOutlineMail} from 'react-icons/ai';
import { Link } from "react-router-dom";
import "../assets/styles/footer.css";

const Footer = ({updateActiveTab}) => {
    return (
        <div className="footer">
        <div className="row" >

        <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12 col-xs-12 footer-infos" >
                <h4>Contact</h4>
                <div className="row footer-info" >
                    <div className="left-div">
                        <span><TfiLocationPin size={30}/> &nbsp;</span> 
                    </div>
                    <div  className="right-div">
                        <p style={{justifyContent:'center'}}><strong> Rainbow Financial Services 
                            Ground Floor, Siddharth Bhawan, Opposite Sahakar Bhawan,  
                            Morshi Road 
                            Amravati – 444601
                            </strong> </p>
                    </div>
                </div>
                <div className="row footer-info">
                    <span><BsTelephone size={23}/> <a href="tel:+91 9370154501" style={{textDecoration: 'none', color: 'whitesmoke'}} > &nbsp; <strong>+91 9370154501</strong> </a></span>
                </div>
                <div className="row footer-info">
                    <span><AiOutlineMail size={25}/> <a href="mailto:mrsikchi@gmail.com" style={{textDecoration: 'none',color: '#2596be'}} > &nbsp; <strong>mrsikchi@gmail.com</strong></a></span>
                </div>
            </div>
            

            <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12 col-xs-12 footer-amfi">
                <div className="row footer-info">
                    <div className="footer-image-container">
                        <img  className="footer-image" src={Amfi} alt="AMFI"/>
                    </div>
                    <div className="footer-heading">
                        <h4>Rainbow Financial Services</h4>
  
                    </div>
                    <div className="footer-subheading">
                        <p style={{marginBottom: '2px'}}><strong>ARN:</strong>119096</p>
                        <p><strong>EUIN:</strong>E182587</p>
                    </div>
                </div>
                <div className="row footer-info parent-about" style={{marginTop: '-15px'}}>
                    <p className="footer-about" style={{marginBottom: '0px'}}><strong>Since:</strong> January 30,2017</p>
                    <p className="footer-about"><strong>Current Validity:</strong> September 20, 2025</p>
                    <p style={{fontSize: '14px  '}}><strong> AMFI REGISTERED MUTUAL FUND DISTRIBUTOR </strong></p>
                </div>
                <div className="row footer-info">
                    <div className="footer-heading">
                        <h4>Meenakshi Rajesh Sikchi</h4>
                    </div>
                    <div className="footer-subheading">
                        <p style={{marginBottom: '2px'}}><strong>ARN:</strong>52978</p>
                        <p><strong>EUIN:</strong>E054631</p>
                    </div>
                </div>
                <div className="row footer-info parent-about" style={{marginTop: '-15px'}}>
                    <p className="footer-about" style={{marginBottom: '0px'}}><strong>Since:</strong> August 31,2007</p>
                    <p className="footer-about"><strong>Current Validity:</strong> August 29, 2024</p>
                    <p className="footer-reg" style={{fontSize: '14px '}}><center><strong> AMFI REGISTERED MUTUAL FUND DISTRIBUTOR </strong></center></p>
                </div>
            </div>



            <div className="col-xl-2 col-lg-2 col-md-2 col-sm-12 col-xs-12 footer-infos footer-links">
                <h4>Links</h4>
                <div className="row footer-info">
                    <a className='footer-link' href='#home'>Home</a>
                </div>
                <div className="row footer-info">
                    <a className='footer-link' href='#projects'>Projects</a>
                </div>
                <div className="row footer-info">
                    <a className='footer-link' href='#about'>About</a>
                </div>
                <div className="row footer-info">
                    <a className='footer-link' href='#contact'>Contact</a>
                </div>
                <div className="row footer-info">
                   
                </div>
            </div>
        </div>
        <hr/>
        <div className="row footer-plug" style={{ paddingRight: '10px', width: '100%' }}>
            <div className="footer-copyright">
                <span style={{ whiteSpace: 'nowrap' }}>Copyright © {new Date().getFullYear()} rainbowfinserv. All rights reserved.</span>
            </div>
            <div className="redirect-container">
                <Link to='/disclaimer' className="redirect-link" onClick={() => updateActiveTab('Disclaimer')}>Disclaimer</Link>
                <Link to='/disclosure' className="redirect-link" onClick={() => updateActiveTab('Disclosure')}>Disclosure</Link>
                <Link to='/privacy-policy' className="redirect-link" onClick={() => updateActiveTab('Privacy Policy')}>Privacy Policy</Link>
            </div>
        </div>
    </div>
    );
}

export default Footer;