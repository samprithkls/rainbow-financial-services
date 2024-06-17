import React, { useState } from 'react';
import { HiOutlineChevronDown } from "react-icons/hi2";
import { Link } from 'react-router-dom';
import '../assets/styles/dropdown-menu.css';

const MobileDropdownMenu = ({title, dropdownOptions, updateMobileNavOpen}) => {

    const [isExpanded, setIsExpanded] = useState(false);

    const handleDropdownMenuToggle = (event) => {
        setIsExpanded(!isExpanded);
    }

    const handleOptionClick = (event) => {
        setIsExpanded(!isExpanded);
        updateMobileNavOpen(false);
    }
    
    return (
        <div className='dropdown-menu-container'>
            <div className='dropdown-menu-header' onClick={handleDropdownMenuToggle} >
                {title}
                <HiOutlineChevronDown  className={ `dropdown-header-chevron ${isExpanded && 'expanded'} `} />
            </div>
            <div className={`dropdown-menu-options ${isExpanded ? 'options-expanded' : 'options-collapsed'}`}>
                {
                    dropdownOptions.map((dropdownOption) => {
                        return (
                            <div className='dropdown-option'>
                                <Link to={`/${dropdownOption.routeToPathName}`} onClick={handleOptionClick}>{dropdownOption.name}</Link>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    );
};

export default MobileDropdownMenu;