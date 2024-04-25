import React from 'react';
import screenbg from '../../assets/screenbg.png';
import '../socialmediaSection/socialmedia.css';
import './mobilescreen.css';

const MobileScreens = () => {
  return (
    <div className=''>
      <div className='custom-grid-item-container'>
        <div className='custom-grid-item'>
          <img src={screenbg} alt='img' width='100%' />
        </div>
        <div className='custom-grid-item'>
          <div className='mobile-screenshot-heading-div'>
            <p className='mobile-screenshot-heading'>
              Discover the look of our mobile
            </p>
            <p className='mobile-screenshot-heading'>application</p>
          </div>
          <div className='mobile-screenshot-container-div'>
            <div className='mobile-screenshot screenshot-1'></div>
            <div className='mobile-screenshot screenshot-2'></div>
            <div className='mobile-screenshot screenshot-3'></div>
            <div className='mobile-screenshot screenshot-4'></div>
            <div className='mobile-screenshot screenshot-5'></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileScreens;
