import React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import { CiLocationOn } from 'react-icons/ci';
import { FiPhone } from 'react-icons/fi';
import { CiMail } from 'react-icons/ci';
import { FaTwitter } from 'react-icons/fa';
import { FaFacebookF } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';
import { FaLinkedinIn } from 'react-icons/fa';
import TextField from '@mui/material/TextField';
import { IoLogoGooglePlaystore } from 'react-icons/io5';
import { FaApple } from 'react-icons/fa';
import './contactform.css';

const ContactForm = () => {
  return (
    <>
      <div className='contact-container-div'>
        <div className='get-in-touch-div'>
          <div className='addressinform'>
            <div className='addressinform-div-1'>Get in touch </div>
            <div className='addressinform-div-2'>
              Do you have a question for us? We'd love to hear from you and we
              would be happy to answer your questions.
            </div>

            <div className='addressinform-div-container'>
              <div className='addressinform-div-3'>
                <Box
                  sx={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    '& > :not(style)': {
                      padding: 1,
                      color: '#5B8B7C',
                    },
                  }}
                >
                  <Paper elevation={5}>
                    <div>
                      <CiLocationOn />
                    </div>
                  </Paper>
                </Box>
                <div className='addressinform-div-text'>
                  1244 Mission College Blvd, Santa Clara
                  <br />
                  CA 95188, United States
                </div>
              </div>

              <div className='addressinform-div-4'>
                <Box
                  sx={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    '& > :not(style)': {
                      padding: 1,
                      color: '#5B8B7C',
                    },
                  }}
                >
                  <Paper elevation={5}>
                    <div>
                      <FiPhone />
                    </div>
                  </Paper>
                </Box>
                <div className='addressinform-div-text'>
                  Support: +1 408-888-1700
                  <br />
                  Office: +1 408-888-1900
                </div>
              </div>
              <div className='addressinform-div-5'>
                <Box
                  sx={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    '& > :not(style)': {
                      padding: 1,
                      color: '#5B8B7C',
                    },
                  }}
                >
                  <Paper elevation={5}>
                    <div>
                      <CiMail />
                    </div>
                  </Paper>
                </Box>
                <div className='addressinform-div-text'>
                  support@urhofoodapp.com
                  <br />
                  office@urhofoodapp.com
                </div>
              </div>
            </div>

            <div className='addressinform-div-6'>
              <Box
                sx={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  '& > :not(style)': {
                    padding: 1,

                    backgroundColor: '#76AAEB',
                  },
                }}
              >
                <Paper elevation={5}>
                  <div className='addressinform-div-icon'>
                    <FaTwitter />
                  </div>
                </Paper>
              </Box>

              <Box
                sx={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  '& > :not(style)': {
                    padding: 1,
                    marginLeft: 1,
                    backgroundColor: '#475996',
                  },
                }}
              >
                <Paper elevation={5}>
                  <div className='addressinform-div-icon'>
                    <FaFacebookF />
                  </div>
                </Paper>
              </Box>

              <Box
                sx={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  '& > :not(style)': {
                    padding: 1,
                    marginLeft: 1,
                    backgroundColor: '#D83A6A',
                  },
                }}
              >
                <Paper elevation={5}>
                  <div className='addressinform-div-icon'>
                    <FaInstagram />
                  </div>
                </Paper>
              </Box>

              <Box
                sx={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  '& > :not(style)': {
                    padding: 1,
                    marginLeft: 1,
                    backgroundColor: '#0E76A8',
                  },
                }}
              >
                <Paper elevation={5}>
                  <div className='addressinform-div-icon'>
                    <FaLinkedinIn />
                  </div>
                </Paper>
              </Box>
            </div>
          </div>
        </div>
        <div className='contact-form-div-container'>
          <Box
            sx={{
              display: 'flex',
              flexWrap: 'wrap',

              '& > :not(style)': {
                m: 1,
                paddingLeft: 5,
                paddingRight: 5,
                paddingTop: 5,
                paddingBottom: 5,
                //   alignItems: 'center',
                //   border: '2px solid red',
              },
            }}
          >
            <Paper elevation={3}>
              <div className='contactinformation'>Contact form </div>
              <div className='contactinformation-div'>
                <TextField
                  id='outlined-basic'
                  label='Name'
                  variant='outlined'
                  fullWidth
                />
              </div>
              <div className='contactinformation-div'>
                <TextField
                  id='outlined-basic'
                  label='E-mail address'
                  variant='outlined'
                  fullWidth
                />
              </div>
              <div className='contactinformation-div'>
                <TextField
                  id='outlined-basic'
                  label='Subject'
                  variant='outlined'
                  fullWidth
                />
              </div>
              <div className='contactinformation-div'>
                <TextField
                  id='outlined-basic'
                  label='Message'
                  variant='outlined'
                  fullWidth
                />
              </div>
              <div className='contactinformation-div-container'>
                <input type='radio' />
                <div className='contactinformation-div-container-text'>
                  I have read the website policy –
                </div>
                <div className='contactinformation-div-container-und'>
                  Read our rules
                </div>
              </div>

              <button className='contactinformation-div-container-button'>
                Send message
              </button>
            </Paper>
          </Box>
        </div>
      </div>
      {/* download app section */}
      <div>
        <div className='download-container'>
          <div className='download-container-div'>
            <div className='download-header-div'>Download our mobile app</div>
            <div className='dowmlaod-header-line'>
              Download applications to your phone, install and enjoy ordering
              food online without leaving your home!
            </div>
            <div className='download-container-sub-div'>
              <div className='downlaod-header-button-1'>
                <div className='downlaod-header-button-icon'>
                  <FaApple />
                </div>
                <div className='downlaod-header-button-text'>
                  <div className='downlaod-header-button-subtext'>
                    Download on the
                  </div>
                  <div className='downlaod-header-button-subheading'>
                    App Store
                  </div>
                </div>
              </div>

              <div className='download-header-button-2'>
                <div className='downlaod-header-button-icon'>
                  <IoLogoGooglePlaystore />
                </div>
                <div className='downlaod-header-button-text'>
                  <div className='downlaod-header-button-subtext'>
                    Download on the
                  </div>
                  <div className='downlaod-header-button-subheading'>
                    Google Play
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className='download-header-footer'>
            © Restapp 2022 • All Rights Reserved
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactForm;
