import React from 'react';
import Navigation from './Navigation';
import MobileNavigation from './MobileNavigation';
import '../assets/styles/navigation.css';

const Navbar = ({active, updateActiveTab}) => {

    return (
        <div className='sticky-top parent-navbar-component'>
            <Navigation active={active} updateActiveTab={updateActiveTab} />
            <MobileNavigation />
        </div>
    );
}

export default Navbar;