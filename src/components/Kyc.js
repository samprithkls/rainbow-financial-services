import React from 'react';
import { FaExternalLinkAlt } from "react-icons/fa";
import '../assets/styles/kyc.css';
import { useEffect } from 'react'; 

const Kyc = () => {
    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }, []);
    return(
        <>
        <div className="kyc">
            <h2 className='kyc-header'>KYC Validation</h2>
            <div className="validation-section">
            <h2>KYC Mobile / Email Validation Links:</h2>
            <div className="button-row">
                <div className="button-container">
                    <a href="https://camskra.com/PanDetailsUpdate.aspx" target="_blank" rel="noreferrer">
                        <button className="button">CAMS KRA  <FaExternalLinkAlt style={{marginLeft: '7px'}}/></button>
                    </a>
                </div>
                <div className="button-container">
                    <a href="https://validate.cvlindia.com/CVLKRAVerification_V1/" target="_blank" rel="noreferrer">
                        <button className="button">CVL KRA  <FaExternalLinkAlt style={{marginLeft: '7px'}}/></button>
                    </a>
                </div>
            </div>
            <div className="button-row">
                <div className="button-container">
                    <a href="https://www.karvykra.com/KYC_Validation/Default.aspx" target="_blank" rel="noreferrer">
                        <button className="button">KARVY KRA  <FaExternalLinkAlt style={{marginLeft: '7px'}}/></button>
                    </a>
                </div>
                <div className="button-container">
                    <a href="https://kra.ndml.in/ClientInitiatedKYC-webApp/#/ClientinitiatedKYC" target="_blank" rel="noreferrer">
                        <button className="button">NDML KRA  <FaExternalLinkAlt style={{marginLeft: '7px'}}/></button>
                    </a>
                </div>
            </div>
        </div>

        <div className="validation-section">
            <h2>PAN - Aadhaar Validation Links:</h2>
            <div className="button-row">
                <div className="button-container">
                    <a href="https://camskra.com/pan_aadhaarlink.aspx" target="_blank" rel="noreferrer">
                        <button className="button">CAMS KRA  <FaExternalLinkAlt style={{marginLeft: '7px'}}/></button>
                    </a>
                </div>
                <div className="button-container">
                    <a href="https://validate.cvlindia.com/CVLKRAVerification_V1/" target="_blank" rel="noreferrer">
                        <button className="button">CVL KRA  <FaExternalLinkAlt style={{marginLeft: '7px'}}/></button>
                    </a>
                </div>
            </div>
            <div className="button-row">
                <div className="button-container">
                    <a href="https://www.karvykra.com/KYC_Validation/Default.aspx" target="_blank" rel="noreferrer">
                        <button className="button">KARVY KRA  <FaExternalLinkAlt style={{marginLeft: '7px'}}/></button>
                    </a>
                </div>
                <div className="button-container">
                    <a href="https://kra.ndml.in/ClientInitiatedKYC-webApp/#/ClientinitiatedKYC" target="_blank" rel="noreferrer">
                        <button className="button">NDML KRA  <FaExternalLinkAlt style={{marginLeft: '7px'}}/></button>
                    </a>
                </div>
            </div>
        </div>
    </div>
        </>
    )
}

export default Kyc;