import '../assets/styles/news.css'
import { FaExternalLinkAlt } from "react-icons/fa";
import sebiLogo from '../assets/images/news/sebii.png'; 
import amfiLogo from '../assets/images/news/amfi.jpg';
import React, { useEffect } from 'react'; 

const News = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}, []);
    return(
        <>
          <div className="news">
            <h1 className="news-main-header">Circulars and Updates</h1>
            <div className="news-link-container">
              <h2 className="news-header"><strong>SEBI</strong> Circulars are available here:</h2>
              <a className="news-anchor" href="https://www.sebi.gov.in/sebiweb/home/HomeAction.do?doListing=yes&sid=1&ssid=7&smid=0" target="_blank" rel="noopener noreferrer">
                <img src={sebiLogo} alt="SEBI Logo" className="news-logo" />
                Visit SEBI Circulars
                <FaExternalLinkAlt style={{marginLeft: '7px'}}/>
              </a>
            </div>
            <div className="news-link-container">
              <h2 className="news-header"><strong>SID/SAI/KIM</strong> Circulars are available here:</h2>
              <a className="news-anchor" href="https://www.sebi.gov.in/fillings/mutual-funds.html" target="_blank" rel="noopener noreferrer">
                <img src={sebiLogo} alt="SEBI Logo" className="news-logo" />
                Visit SEBI Circulars
                <FaExternalLinkAlt style={{marginLeft: '7px'}}/>
              </a>
            </div>
            <div className="news-link-container">
              <h2 className="news-header"><strong>AMFI</strong> Circulars are available here:</h2>
              <a className="news-anchor" href="https://www.amfiindia.com/distributor-corner/circulars-and-announcements/circulars" target="_blank" rel="noopener noreferrer">
                <img src={amfiLogo} alt="AMFI Logo" className="news-logo" />
                Visit AMFI Circulars
                <FaExternalLinkAlt style={{marginLeft: '7px'}}/>
              </a>
            </div>
            <div className="news-link-container">
              <h2 className="news-header"><strong>New Fund Offers</strong> are available here:</h2>
              <a className="news-anchor" href="https://www.amfiindia.com/new-fund-offer" target="_blank" rel="noopener noreferrer">
                <img src={amfiLogo} alt="New Fund Offer Logo" className="news-logo" />
                Visit New Fund Offers
                <FaExternalLinkAlt style={{marginLeft: '7px'}}/>
              </a>
            </div>
          </div>
        </>
    )
}

export default News;