import React from 'react';
import './header.css';
import headerBackground from '../../assets/headerBackground.png';

import logo from '../../assets/logo.png';

const Header = () => {
  return (
    <div>
      <div className='custom-grid-item-container '>
        {/* Image */}
        <div className='custom-grid-item'>
          <img src={headerBackground} width='100%' alt='img' />
        </div>
        {/* Overlaying div */}
        <div className='custom-grid-item'>
          {/* navbar */}
          <div className='navbar-div'>
            <div>
              <img src={logo} alt='logo' width={166} />
            </div>
            <div className='navlink-div'>
              <div className='menu-element'>
                <div className='navbar-text'>Home</div>
                <div className='navbar-text'>Features</div>
                <div className='navbar-text'>Price</div>
                <div className='navbar-text'>FAQ</div>
                <div className='navbar-text'>Contact</div>
              </div>
              <div className='navbar-button-div'>
                <button className='navbar-button'>Book Demo</button>
              </div>
            </div>
          </div>
          <div className='header-content-div'>
            <div className='header-content-details'>
              <p className='header-content-subheading'>
                Test our application for 30 days{' '}
              </p>
              <p className='header-content-heading'>
                Sell food online with even <br /> more profit than ever before!
              </p>
              <div>
                <button className='header-content-button'>Book A Demo</button>
              </div>
            </div>
            <div className='header-screens'>
              <div className='mobile-screen-1'></div>
              <div className='mobile-screen-2'></div>
              <div className='mobile-screen-3'></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
