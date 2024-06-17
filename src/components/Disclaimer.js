import '../assets/styles/disclaimer.css';
import React, { useEffect } from 'react'; 
const Disclaimer = () =>
{
    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }, []);

    return( 
        <>
            <div className="disclaimer-container">
                <h2 className='disclaimer-header'>DISCLAIMER</h2>
                <div className='disclaimer-text-content'>
                    <p className='text'>
                        By accessing this website, you have read, understood and agreed to be legally bound by the terms of the following disclaimer.
                        This website is created for informational purposes only. Nothing contained in this website should be construed as investment advice or personal recommendation to buy / sell / hold any investment product. We make no representation or warranty (expressed or implied) to any investor on advisability of investing in any investment product or its future performance.
                        All Mutual Funds are subject to market risks. Please read all Scheme related documents carefully before investing. We insist investors to read data and risk factors of various mutual fund schemes available in the Scheme Information Document (SID), Statement of Additional Information (SAI), Key Information Memorandum (KIM), etc. 

                        With respect to mutual fund schemes, we distribute all mutual fund products in accordance with AMFI guidelines, or the various circulars issued thereunder. Investors must determine on their own behalf or through their investment adviser, as the case may be, the merits and risks of any mutual fund schemes or any other investment product as well as its suitability for them. We do not make any warranty (express or implied) of any investment product and do not assume any responsibility for, and shall not be liable for any losses or damages of any kind resulting from investment in any investment product arising due to market loss of the investment product. Please note that we are a mutual fund distributor engage only in distribution and execution of mutual fund investments, and we do not provide investment advice on any investment product.
                        We receive commission from Asset Management Companies for investments made by our clients under our ARN Codes. The commission receivable is subject to and as per the guidelines laid down by SEBI and the Asset Management Companies.
                    </p>
                </div>
            </div>
        </>
    );
};

export default Disclaimer;