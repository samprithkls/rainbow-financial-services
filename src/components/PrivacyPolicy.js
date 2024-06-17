import '../assets/styles/privacy.css'
import React, { useEffect } from 'react'; 

const PrivacyPolicy = () => {
    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }, []);
    return (
        <>
            <div className="privacy-container">
                <h2 className='privacy-header'>Privacy Policy</h2>
                <div className='privacy-text-content'>
                    <p className='privacy-text'>
                        By accessing this website, you have read, understood and agreed to be legally bound by the terms of the following disclaimer.
                        This website is created for informational purposes only. Nothing contained in this website should be construed as investment advice or personal recommendation to buy / sell / hold any investment product. We make no representation or warranty (expressed or implied) to any investor on advisability of investing in any investment product or its future performance.
                        All Mutual Funds are subject to market risks. Please read all Scheme related documents carefully before investing. We advise investors to read data and risk factors of various mutual fund schemes available in the Scheme Information Document (SID), Statement of Additional Information (SAI), Key Information Memorandum (KIM), etc. The value of any investment may rise and/or fall as a result of market changes and this website is not intended to predict actual performance and/or success of any scheme or other investment product and no assurances are given with respect thereto. Past performance is not indicative of future returns.
                        We are under no obligation to provide investment advice concerning, any investment product for you. However, with respect to mutual fund schemes, we endeavour to distribute only such mutual fund products which are suitable and appropriate for you, as allowed under the AMFI Guidelines, or the various circulars issued thereunder. You must determine on your own behalf or through investment adviser, as the case may be, the merits and risks of any mutual fund schemes or any other investment product as well as its suitability for you. We do not make any warranty (express or implied) of any investment product and do not assume any responsibility for, and shall not be liable for any losses or damages of any kind resulting from investment in any investment product arising due to market loss of the investment product. Please note that we are not registered investment advisers and do not provide investment advice on any investment product.
                        We receive commission from Asset Management Companies for investments made by our clients under our ARN Code. The commission receivable is subject to and as per the guidelines laid down by SEBI and the Asset Management Companies.
                    </p>
                    <h3 className='privacy-subheader'>What we collect</h3>
                    <p className='privacy-text'>
                        We may collect the following information:
                        <ul>
                            <li>Name and contact details</li>
                            <li>Personal information, including date of birth, Aadhaar Number, and Permanent Account Number (PAN)</li>
                            <li>Demographic information such as gender and income</li>
                            <li>Other information that can help us improve our services</li>
                        </ul>
                    </p>
                    <h3 className='privacy-subheader'>What we do with the information we gather</h3>
                    <p className='privacy-text'>
                        We may collect the following information:
                        <ul>
                            <li>To conduct Know-Your-Customer registration as required by SEBI and/or other regulatory bodies</li>
                            <li>To perform compliance checks and keep/maintain internal records</li>
                            <li>To use the information to improve our products and services</li>
                            <li>To periodically send emails to your registered email address about your investments, or other information which we think you may find interesting.</li>
                            <li>You will be free to unsubscribe from our mailing list at any time if you do not wish to receive such emails from us. From time-to-time, we may also use your information to contact you via phone or email for market research purposes.</li>
                            <li>We will not sell, distribute or lease your personal information to third parties unless we are required to share such information under the terms and conditions of the products and services you avail, or we are required to do so by law.</li>
                        </ul>
                    </p>
                    <h3 className='privacy-subheader'>Security</h3>
                    <p className='privacy-text'>
                        We are committed to ensuring that your information is secure. In order to prevent unauthorised access or disclosure, we have put in place suitable physical, electronic and managerial procedures to safeguard and secure the information we collect online.
                    </p>
                    <h3 className='privacy-subheader'>Links to other websites</h3>
                    <p className='privacy-text'>
                        Our website may contain links to other websites of interest. However, once you have used these links to leave our site, you should note that we do not have any control over such third-party websites. Therefore, we cannot be responsible for the protection and privacy of any information which you provide whilst visiting such sites. You should exercise caution and look at the privacy statement applicable to the website in question.
                    </p>
                    <h3 className='privacy-subheader'>Controlling your personal information</h3>
                    <h3 className='privacy-subheader'>Security certificates</h3>
                    <p className='privacy-text'>
                        Rainbow Financial Services Pvt. Ltd. is an online financial services company. We fully recognise and understand the security implications of being a service provider with whom people trust their money. There are many safeguards we adopt in this regard – some of these are technical, and some are structural.
                    </p>
                    <h3 className='privacy-subheader'>When it comes to data security, our goal is to ensure that:</h3>
                    <p className='privacy-text'>
                        <ul>
                            <li>Your data is stored safely and securely – passwords are one-way encrypted before being stored in the database for high security.</li>
                            <li>All communication with you, or with mutual fund companies and other service providers – are encrypted using the highest standards.</li>
                            <li>Your data is not shared with anyone, unless you have explicitly requested us to do so to fulfil a transaction request.</li>
                            <li>To ensure that we achieve these goals, we have a variety of certifications/trust verifications in place for our firm, both from technical and legal/operational perspectives. All our communications are encrypted by 256-bit encryption, and our data is hosted with top-tier hosting service providers. Also, our data is continuously backed up to ensure continuity of operations.</li>
                        </ul>
                    </p>
                </div>
            </div>
        </>
    );
}

export default PrivacyPolicy;