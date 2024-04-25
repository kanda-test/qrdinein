import React from 'react';
import applicationFeaturesBackground from '../../assets/applicationFeaturesBackground.png';
import './applicationFeatures.css';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import { TbTextResize } from 'react-icons/tb';
import { LiaPencilRulerSolid } from 'react-icons/lia';
import { MdOutlineAppSettingsAlt } from 'react-icons/md';
import { SiPagespeedinsights } from 'react-icons/si';

const ApplicationFeatures = () => {
  return (
    <div className='application-feature-container-div'>
      <div className='application-feature-rightside-div'>
        <div className='newsletter-container'>
          <div className='Newsletter-container-div-1'>
            <div className='Newsletter-container-heading-div'>
              What features will you <br />
              get in our application?
            </div>
            <p className='Newsletter-container-para-div-1'>
              {' '}
              The main features of our mobile application are: readability,{' '}
              <br />
              transparency, efficiency and simple design. The entire application
              is
              <br /> very intuitive and modern, thanks to which everyone can use
              it.
            </p>
          </div>

          <div className='Newsletter-container-div-2'>
            <p className='Newsletter-container-subheading-div'>
              Why our application?
            </p>
            <p className='Newsletter-container-para-div-2'>
              {' '}
              Aenean sollicitudin, lorem quis bibendum lorem ipsum dolar sit
              amet <br />
              auctor, nisi elit consequat ipsum, nec sagittis sem nibh.{' '}
            </p>
          </div>
          <button className='Newsletter-click-div'>Read More</button>
        </div>
      </div>
      <div className='custom-grid-item-container application-feature-leftside-div'>
        <div className='custom-grid-item'>
          <img src={applicationFeaturesBackground} alt='img' width='100%' />
        </div>
        <div className='custom-grid-item'>
          <div className='features-card-outer-div-container'>
            <div className='features-cards-div1'>
              <Paper elevation={3}>
                <div className='custom-div'>
                  <div className='custom-icon-div-1'>
                    <TbTextResize />
                  </div>
                  <p className='custom-para-div'>Minimalistic and legible</p>
                  <p className='custom-text-div'>
                    {' '}
                    The application is for everyone, so the design has been
                    adapted for young and older users.
                  </p>
                </div>
              </Paper>
              <Paper elevation={3}>
                <div className='custom-div'>
                  <div className='custom-icon-div-3'>
                    <MdOutlineAppSettingsAlt />
                  </div>
                  <p className='custom-para-div'>Created for developers</p>
                  <p className='custom-text-div'>
                    An open source application for developers who can test and
                    create new solutions for our clients.
                  </p>
                </div>
              </Paper>
            </div>
            <div className='features-cards-div2'>
              <Paper elevation={3}>
                <div className='custom-div'>
                  <div className='custom-icon-div-2'>
                    <LiaPencilRulerSolid />
                  </div>
                  <p className='custom-para-div'>Friendly interface</p>
                  <p className='custom-text-div'>
                    Simplicity and minimalism is the current trend that has been
                    applied in our application.
                  </p>
                </div>
              </Paper>

              <Paper elevation={3}>
                <div className='custom-div'>
                  <div className='custom-icon-div-4'>
                    <SiPagespeedinsights />
                  </div>
                  <p className='custom-para-div'>High performance</p>
                  <p className='custom-text-div'>
                    A very fast and efficient mobile application in terms of
                    loading.We encourage you to test.
                  </p>
                </div>
              </Paper>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ApplicationFeatures;
