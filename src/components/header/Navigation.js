import React from 'react';
import { Link } from 'react-router-dom';

function Navigation() {
  return (
    <nav>
      <Link to="/">
        <button>HOME</button>
      </Link>
      <Link to="/inventory">
        <button>INVENTORY</button>
      </Link>
      <Link to="/services-parts">
        <button>SERVICES</button>
      </Link>
      <Link to="/contact-us">
        <button>CONTACT US</button>
      </Link>
    </nav>
  );
}

export default Navigation;
