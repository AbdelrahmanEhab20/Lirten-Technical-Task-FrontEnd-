import React, { useState } from 'react';
import logo from '../../Images/Logo.png'
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
    const [active, setActive] = useState("nav__menu");
    const [icon, setIcon] = useState("nav__toggler");
    const navToggle = () => {
        if (active === "nav__menu") {
            setActive("nav__menu nav__active");
        } else setActive("nav__menu");

        // Icon Toggler
        if (icon === "nav__toggler") {
            setIcon("nav__toggler toggle");
        } else setIcon("nav__toggler");
    };
    return (
        <nav className='navbar'>
            <Link to='/' className='brand'> <img src={logo} width={'150'} alt={""} /> </Link>
            <ul className={active}>
                <li className='nav_item border_nav'><Link to='/' className='nav_link'>Profiles</Link></li>
                <li className='nav_item'><Link to='/Submit#' className='nav_link'>Add Profile</Link></li>
            </ul>
            <div className={icon} onClick={navToggle}>
                <div className='line1'></div>
                <div className='line2'></div>
                <div className='line3'></div>
            </div>
        </nav>
    );
}

export default Navbar;