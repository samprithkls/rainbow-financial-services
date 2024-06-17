import React, { useEffect, useRef, useState } from 'react';
import { HiOutlineChevronDown } from "react-icons/hi2";
import { Link } from 'react-router-dom';
import '../assets/styles/dropdown-menu.css';

const DropdownMenu = ({title, dropdownOptions}) => {

    const [isExpanded, setIsExpanded] = useState(false);

    let dropdownMenuRef = useRef();

    useEffect(() => {   
        const clickawayHandler = (event) => {
            if(!dropdownMenuRef.current.contains(event.target)) {
                setIsExpanded(false);
            }
        };

        document.addEventListener("mousedown", clickawayHandler);

        return () => {
            document.removeEventListener("mousedown", clickawayHandler);
        }
    },[]);

    const handleDropdownMenuToggle = (event) => {
        setIsExpanded(!isExpanded);
    }

    return (
        <div className='dropdown-menu-container' ref={dropdownMenuRef}>
            <div className='dropdown-menu-header' onClick={handleDropdownMenuToggle} >
                {title}
                <HiOutlineChevronDown  className={ `dropdown-header-chevron ${isExpanded && 'expanded'} `} />
            </div>
            <div className={`dropdown-menu-options ${isExpanded ? 'options-expanded' : 'options-collapsed'}`}>
                {
                    dropdownOptions.map((dropdownOption) => {
                        return (
                            <div className='dropdown-option'>
                                <Link to={`/${dropdownOption.routeToPathName}`} onClick={() => setIsExpanded(!isExpanded)}>{dropdownOption.name}</Link>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    );
};

export default DropdownMenu;