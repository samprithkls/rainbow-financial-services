import '../assets/styles/disclosure.css';
import React, { useEffect } from 'react'; 
const Disclosure = () => {
    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }, []);

    return(
        <>
            <div className="disclosure-container">
                <h2 className='disclosure-header'>DISCLOSURE</h2>
                <div className='disclosure-text-content'>
                    <p className='disclosure-text'>
                        We receive commission from Asset Management Companies for investments made by our clients under our ARN Codes. The commission receivable is subject to and as per the guidelines laid down by SEBI and the Asset Management Companies. The disclosure of commissions payable to us for the different schemes of various mutual funds as per clause 4(d) of the SEBI Circular No. SEBI/IMD/CIR No. 4/168230 dated June 30, 2009 is provided (hereinbelow table).
                    </p>
                    <div className="disclosure-table-container">
                    <table>
                        <thead>
                        <tr>
                            <th>Sr. No.</th>
                            <th>Mutual Fund Type</th>
                            <th>Commission Method</th>
                            <th>Rate Range</th>
                            <th>Paid From</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td>1</td>
                            <td>Equity / ELSS / Thematic</td>
                            <td>Trail</td>
                            <td>0.05% to 1.85%</td>
                            <td>Portfolio Expenses charged by the AMC</td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>Hybrid</td>
                            <td>Trail</td>
                            <td>0.10% to 1.55%</td>
                            <td>Portfolio Expenses charged by the AMC</td>
                        </tr>
                        <tr>
                            <td>3</td>
                            <td>Debt Scheme / Gilt Scheme / Liquid Scheme / Gold Fund</td>
                            <td>Trail</td>
                            <td>0.02% to 1.05%</td>
                            <td>Portfolio Expenses charged by the AMC</td>
                        </tr>
                        </tbody>
                    </table>
                    </div>
                    <p className='disclosure-text'>
                        This is on a best effort basis and rates are updated as and when actual rates are received from AMCs.
                    </p>
                </div>
            </div>
        </>
    )
}

export default Disclosure;