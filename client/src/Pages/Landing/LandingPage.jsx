import React from 'react';
import { Link } from 'react-router-dom';
import './LandingPage.css';
import logo from '../../assets/Earth.png';

const LandingPage = () => {
  return (
    <div className='landing'>
      <div className='button-container'>
        <div className="logo-container">
          <img src={logo} className="logo-landing" alt="Logo" />
        </div>
        <Link to="/home">
          <button className="btn" data-text="Awesome">
            Empezar a recorrer el mundo
          </button>
        </Link>
      </div>
    </div>
  );
};

export default LandingPage;
