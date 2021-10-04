import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className="hstack  bg-danger py-3">
        <div className="bg-light border mx-auto p-2 rounded-3"><Link to="/home">Home</Link></div>
        <div className="bg-light border mx-auto  p-2 rounded-3"><Link to="/services">Services</Link></div>
        <div className="bg-light border mx-auto  p-2 rounded-3"><Link to="/aboutus">About Us</Link></div>
        <div className="bg-light border mx-auto  p-2 rounded-3"><Link to="/gallery">Gallery</Link></div>
      
      </div>
    );
};

export default Header;