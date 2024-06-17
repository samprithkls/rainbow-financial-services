import '../assets/styles/insurance.css';
import life from '../assets/images/insurance/life.png';
import health from '../assets/images/insurance/health.png';
import motor from '../assets/images/insurance/motor.png';
import travel from '../assets/images/insurance/travel.png';
import others from '../assets/images/insurance/other.png';
import React, { useEffect } from 'react'; 

const Insurance = () => {
    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }, []);
    return(
        <>
 <div class="insurance-container">
        <h2 class="insurance-header">Insurance</h2>
        <p class="insurance-content">Insurance is a financial safety net, helping you and your loved ones recover after something bad happens, such as ill health, fire, theft, accident or even death. When you purchase any type of insurance, you will receive an insurance policy, which is a legal contract between you and your insurance provider. Whenever you suffer a loss that is covered by your policy and file a claim, the insurance company pays you or a designated recipient, called a beneficiary, based on the terms of your policy.</p>
        <p class="insurance-content">This insurance policy spells out clearly about the various terms, and conditions under which the insurance company is required to pay out the coverage either to the policyholder or their beneficiaries. So, in case of any unfortunate demise or other eventualities, the insured or beneficiary can file a claim with the insurance company. And, based on their final approval, the insurer settles the claim.</p>
        
        <h2 class="insurance-header">Types of Insurance</h2>
        <div class="insurance-types">
            <div class="insurance-type" id="type-01">
                <div class="insurance-circle">
                    <img src={life} alt="Life Insurance Icon" style={{scale:'2'}}/>
                </div>
                <div class="insurance-text">Life Insurance</div>
            </div>
            <div class="insurance-type" id="type-02">
                <div class="insurance-circle">
                    <img src={health} alt="Health Insurance Icon" style={{scale:'2'}}/>
                </div>
                <div class="insurance-text">Health Insurance</div>
            </div>
            <div class="insurance-type" id="type-03">
                <div class="insurance-circle">
                    <img src={motor} alt="Motor Insurance Icon"/>
                </div>
                <div class="insurance-text">Motor Insurance</div>
            </div>
            <div class="insurance-type" id="type-04">
                <div class="insurance-circle">
                    <img src={travel} alt="Travel Insurance Icon" style={{scale:'1.7'}}/>
                </div>
                <div class="insurance-text">Travel Insurance</div>
            </div>
            <div class="insurance-type" id="type-05">
                <div class="insurance-circle">
                    <img src={others} alt="Other General Insurance Icon"/>
                </div>
                <div class="insurance-text">Other General Insurance</div>
            </div>
        </div>
    </div>
        </>
    )
};

export default Insurance;