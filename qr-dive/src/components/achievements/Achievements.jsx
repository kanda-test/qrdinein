import React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import { FaPlus } from 'react-icons/fa6';
import { FaMinus } from 'react-icons/fa';
import { IoLogoGooglePlaystore } from 'react-icons/io5';
import { FaApple } from 'react-icons/fa';
import './achievements.css';

const achievements = () => {
  const data = [
    { count: '28k', title: 'Happy users ', id: '1' },
    { count: '59k', title: 'Subscriptions sold', id: '2' },
    { count: '3M', title: 'Positive feedback ', id: '3' },
    { count: '20+', title: 'Awards won', id: '4' },
  ];

  return (
    <>
      <div className='funfact-main-div'>
        <div className='funfact-heading-div'>
          <p className='funfact-heading-para'>
            Our achievements will surprise you!
          </p>
          <p className='funfact-heading-para'> Fun facts from our world!</p>
        </div>
        <div className='funfact-container'>
          {data.map((item) => (
            <div key={item.id} className={`funfact cricle-${item.id}`}>
              <div className='funfact-circle'>{item.count}</div>
              <div className='funfact-title'>{item.title}</div>
            </div>
          ))}
        </div>
      </div>
      {/* Q&A section  */}
      <div className='newsletter'>
        <div className='imagecontainer'>
          <div className='imagecontainer-div-1'></div>
          <div className='imagecontainer-div-2'></div>
        </div>

        <div className='QuestionAnswer'>
          <div className=' QuestionAnswer-div-1'>Questions & Answers</div>
          <div className='QuestionAnswer-div-2'>
            Frequently Asked Questions. If you don't find the answer you need,
            please use the contact form at the bottom of the page.
          </div>
          <div className='QuestionAnswer-container-div'>
            <div className='QuestionAnswer-div-3'>
              Who is the application available for?
              <div className='QuestionAnswer-container-div-icon'>
                <FaPlus />
              </div>
            </div>
            <div className='QuestionAnswer-div-4'>
              What devices does the application work on?
              <div className='QuestionAnswer-container-div-icon-2'>
                <FaMinus />
              </div>
            </div>

            <Box
              sx={{
                display: 'flex',
                flexWrap: 'wrap',

                '& > :not(style)': {
                  padding: 2,
                },
              }}
            >
              <Paper elevation={5}>
                <div className='QuestionAnswer-div-5'>
                  Our mobile application works on all mobile devices with
                  Android 6.0.1 or later and iOS. In case of any problems,
                  please contact our technical support.
                </div>
              </Paper>
            </Box>

            <div className='QuestionAnswer-div-6'>
              How to log in to the application?
              <div className='QuestionAnswer-container-div-icon'>
                <FaPlus />
              </div>
            </div>
            <div className='QuestionAnswer-div-7'>
              How to use the app?
              <div className='QuestionAnswer-container-div-icon'>
                <FaPlus />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* newsletter div section  */}
      <div className='newsletter-container-div'>
        <div className='newsletter-heading-div'>
          <p className='newsletter-heading'>Subscribe </p>
          <p className='newsletter-heading'>our newsletter</p>
        </div>
        <div className='newsletter-form-div'>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              console.log('clicked');
            }}
          >
            <div className='newsletter-form-container'>
              <div className='newsletter-form'>
                <input
                  className='newsletter-input'
                  placeholder='Enter your e-mail address'
                />

                <div className='radio-btn-div-newsletter'>
                  <input type='radio' className='radio-btn-newsletter' />
                  <label className='radio-label-newsletter'>
                    I agree to the processing of my personal data by the Restapp
                    – Read our rules
                  </label>
                </div>
              </div>
              <div>
                <button type='summit' className='newsletter-summit-btn'>
                  Subcribe now
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default achievements;
