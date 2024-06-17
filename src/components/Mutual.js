import '../assets/styles/mutual.css'
import diversification from '../assets/images/mutual/diversification.png';
import professional  from '../assets/images/mutual/management.png';
import liquidation from '../assets/images/mutual/liquidation.png';
import affordability from '../assets/images/mutual/affordability.png';
import transperancy from '../assets/images/mutual/transperancy.png';
import tax from '../assets/images/mutual/tax.png';
import flexibility from '../assets/images/mutual/flexibility.png';
import convinience from '../assets/images/mutual/convinience.png';
import regulatory from '../assets/images/mutual/regulatory.png';
import historical from '../assets/images/mutual/diversification.png';
import React, { useEffect } from 'react'; 

const Mutual = () => {
    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }, []);
    return (
        <>
        <div class="mutual-container">
            <h1 className="mutual-title">Mutual Funds</h1>
            <p>There are many advantages to investing in Mutual Funds. Some of them include:</p>
        <h2 className="mutual-header">Advantages</h2>
        <div class="mutual-advantages">
            <div class="mutual-advantage" id="advantage-01">
                <div class="mutual-circle">
                    <img src={diversification} alt="Diversification Icon"/>
                </div>
                <div class="mutual-text">Diversification</div>
            </div>
            <div class="mutual-advantage" id="advantage-02">
                <div class="mutual-circle">
                    <img src={professional} alt="Professional Management Icon"/>
                </div>
                <div class="mutual-text">Professional Management</div>
            </div>
            <div class="mutual-advantage" id="advantage-03">
                <div class="mutual-circle">
                    <img src={liquidation} alt="Liquidity Icon"/>
                </div>
                <div class="mutual-text">Liquidity</div>
            </div>
            <div class="mutual-advantage" id="advantage-04">
                <div class="mutual-circle">
                    <img src={affordability} alt="Affordability Icon"/>
                </div>
                <div class="mutual-text">Affordability</div>
            </div>
            <div class="mutual-advantage" id="advantage-05">
                <div class="mutual-circle">
                    <img src={transperancy} alt="Transparency Icon"/>
                </div>
                <div class="mutual-text">Transparency</div>
            </div>
            <div class="mutual-advantage" id="advantage-06">
                <div class="mutual-circle">
                    <img src={tax} alt="Tax Advantages Icon"/>
                </div>
                <div class="mutual-text">Tax Advantages</div>
            </div>
            <div class="mutual-advantage" id="advantage-07">
                <div class="mutual-circle">
                    <img src={flexibility} alt="Flexibility Icon"/>
                </div>
                <div class="mutual-text">Flexibility</div>
            </div>
            <div class="mutual-advantage" id="advantage-08">
                <div class="mutual-circle">
                    <img src={convinience} alt="Convenience Icon"/>
                </div>
                <div class="mutual-text">Convenience</div>
            </div>
            <div class="mutual-advantage" id="advantage-09">
                <div class="mutual-circle">
                    <img src={regulatory} alt="Regulatory Oversight Icon"/>
                </div>
                <div class="mutual-text">Regulatory Oversight</div>
            </div>
            <div class="mutual-advantage" id="advantage-10">
                <div class="mutual-circle">
                    <img src={historical} alt="Historical Performance Icon"/>
                </div>
                <div class="mutual-text">Historical Performance</div>
            </div>
        </div>
    </div>
        </>
    )
}

export default Mutual;