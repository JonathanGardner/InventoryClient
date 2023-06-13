import React from 'react';
import Logo from './Logo';
import Navigation from './Navigation';
import './Header.css';
import phoneIcon from '../../images/phone-icon.png';  // Adjust the path to your actual image location
import addressIcon from '../../images/address-icon.png'; // Adjust the path to your actual image location
import SideBar from './SideBar';

function Header() {
  return (
    <>
      <div className="notification-bar">
        <span>
          <img className="icon" src={phoneIcon} alt="Phone" style={{ marginRight: "5px" }}/>
          <a href="tel:6096240400">(609) 624-0400</a>
        </span>
        <span>
          <img className="icon" src={addressIcon} alt="Address" style={{ marginRight: "5px" }}/>
          <a 
            href="https://www.google.com/maps/search/?api=1&query=1882+US-9+Cape+May+Court+House+NJ+08210"
            target="_blank" 
            rel="noopener noreferrer"
          >
            1882 US-9, Cape May Court House, NJ 08210
          </a>
        </span>
      </div>
      <header className="header">
        <div className="logo-container">
            <Logo />
        </div>
        <div className="navigation-container">
            <Navigation />
        </div>
        <div>
            <SideBar/>
        </div>
    </header>

    </>
  );
}

export default Header;