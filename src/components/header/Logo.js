import React from 'react';
import { Link } from 'react-router-dom';
import logoImage from '../../images/logo4.png'; 

function Logo() {
  return (
    <div>
      <Link to="/">
         <img src={logoImage} width={200} height={200} className="logo-image"  alt="Logo" />
      </Link>
      
    </div>
  );
}

export default Logo;
