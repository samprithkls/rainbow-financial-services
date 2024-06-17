import React from 'react';
import Logo from '../assets/images/logo.gif';
import DropdownMenu from './DropdownMenu';
import '../assets/styles/navigation.css';
const Navigation = ({ active, updateActiveTab }) => {
    const hostPath = window.location.pathname;

    const servicesDropdownMenuOptions = [
        { "name": "Mutual Funds", "routeToPathName": "mutual-funds" },
        { "name": "Insurance", "routeToPathName": "insurance" }
    ];

    const investorZoneMenuOptions = [
        { "name": "KYC Validation", "routeToPathName": "kyc" },
        { "name": "Circulars and Updates", "routeToPathName": "news" }
    ];

    return (
        <nav className='navbar'>
            <div className='navbar-logo'>
                <a href='/'>
                    <img className='logo img-fluid' src={Logo} alt='Rainbow Financial Services' />
                </a>
            </div>
            <div className='navbar-links'>
                {hostPath === '/' ?
                    <ul className='nav-links'>
                        <li href='#home' className={`nav-item ${active === 'Home' ? 'active' : null}`} onClick={() => updateActiveTab('Home')}>
                            <a href='#home' style={{ textDecoration: 'none', color: 'whitesmoke' }}> Home</a>
                        </li>
                        <li className={`nav-item ignore-active-border ${active === 'Projects' ? 'active' : null}`} onClick={() => updateActiveTab('Projects')}>
                            <DropdownMenu title="Services" dropdownOptions={servicesDropdownMenuOptions} />
                        </li>
                        <li className={`nav-item ignore-active-border ${active === 'InvestorZone' ? 'active' : null}`} onClick={() => updateActiveTab('InvestorZone')}>
                            <DropdownMenu title="InvestorZone" dropdownOptions={investorZoneMenuOptions} />
                        </li>
                        <li className={`nav-item ${active === 'About' ? 'active' : null}`} onClick={() => updateActiveTab('About')}>
                            <a href='#about' style={{ textDecoration: 'none', color: 'whitesmoke' }}>About Us</a>
                        </li>
                        <li href='#contact' className={`nav-item ${active === 'Contact' ? 'active' : null}`} onClick={() => updateActiveTab('Contact')}>
                            <a href='#contact' style={{ textDecoration: 'none', color: 'whitesmoke' }}>Contact</a>
                        </li>
                    </ul>
                    :
                    <ul className='nav-links'>
                        <li href='#home' className={`nav-item ${active === 'Home' ? 'active' : null}`} onClick={() => updateActiveTab('Home')}>
                            <a href='../#home' style={{ textDecoration: 'none', color: 'whitesmoke' }}> Home</a>
                        </li>
                        <li className={`nav-item ignore-active-border ${active === 'Projects' ? 'active' : null}`} onClick={() => updateActiveTab('Projects')}>
                            <DropdownMenu title="Services" dropdownOptions={servicesDropdownMenuOptions} />
                        </li>
                        <li className={`nav-item ignore-active-border ${active === 'InvestorZone' ? 'active' : null}`} onClick={() => updateActiveTab('InvestorZone')}>
                            <DropdownMenu title="InvestorZone" dropdownOptions={investorZoneMenuOptions} />
                        </li>
                        <li className={`nav-item ${active === 'About' ? 'active' : null}`} onClick={() => updateActiveTab('About')}>
                            <a href='../#about' style={{ textDecoration: 'none', color: 'whitesmoke' }}>About Us</a>
                        </li>
                        <li href='#contact' className={`nav-item ${active === 'Contact' ? 'active' : null}`} onClick={() => updateActiveTab('Contact')}>
                            <a href='../#contact' style={{ textDecoration: 'none', color: 'whitesmoke' }}>Contact</a>
                        </li>
                    </ul>
                }
            </div>
            <div className="client-button-container">
                <a href="https://wealthelite.in/client-login" target='_blank' rel="noreferrer">
                    <button className="client-button">Client Login</button>
                </a>
            </div>
        </nav>
    );
}

export default Navigation;