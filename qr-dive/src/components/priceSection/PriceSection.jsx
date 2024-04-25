import React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
import joinBg from '../../assets/joinBg.png';
import './price-section.css';

const PriceSection = () => {
  const IOSSwitch = styled((props) => (
    <Switch
      focusVisibleClassName='.Mui-focusVisible'
      disableRipple
      {...props}
    />
  ))(({ theme }) => ({
    width: 42,
    height: 26,
    padding: 0,
    '& .MuiSwitch-switchBase': {
      padding: 0,
      margin: 2,
      transitionDuration: '300ms',
      '&.Mui-checked': {
        transform: 'translateX(16px)',
        color: '#fff',
        '& + .MuiSwitch-track': {
          backgroundColor:
            theme.palette.mode === 'dark' ? '#2ECA45' : '#65C466',
          opacity: 1,
          border: 0,
        },
        '&.Mui-disabled + .MuiSwitch-track': {
          opacity: 0.5,
        },
      },
      '&.Mui-focusVisible .MuiSwitch-thumb': {
        color: '#33cf4d',
        border: '6px solid #fff',
      },
      '&.Mui-disabled .MuiSwitch-thumb': {
        color:
          theme.palette.mode === 'light'
            ? theme.palette.grey[100]
            : theme.palette.grey[600],
      },
      '&.Mui-disabled + .MuiSwitch-track': {
        opacity: theme.palette.mode === 'light' ? 0.7 : 0.3,
      },
    },
    '& .MuiSwitch-thumb': {
      boxSizing: 'border-box',
      width: 22,
      height: 22,
    },
    '& .MuiSwitch-track': {
      borderRadius: 26 / 2,
      backgroundColor: theme.palette.mode === 'light' ? '#E9E9EA' : '#39393D',
      opacity: 1,
      transition: theme.transitions.create(['background-color'], {
        duration: 500,
      }),
    },
  }));

  return (
    <>
      <div className='price-section-container-div'>
        <div
          style={{
            width: '45%',
            display: 'flex',
          }}
        >
          <div className='price-section-title-container-div'>
            <p className='price-section-heading'>
              Choose the right <br /> subscription for yourself
            </p>
            <p className='price-section-subtitle'>
              You can use the application for free, but with some restrictions,
              that's why we've prepared the right subscription plan that you can
              choose for a month or a year.
            </p>
            <div>
              <span>Monthly {'  '}</span>
              <FormControlLabel
                control={<IOSSwitch sx={{ m: 1 }} />}
                label='Yearly'
              />
            </div>
          </div>
        </div>
        <div className='price-section-pricetable-container-div'>
          <div className='paid-pricetable-container'>
            <Box
              sx={{
                display: 'flex',
                flexWrap: 'wrap',

                '& > :not(style)': {
                  m: '1rem 0 1rem 1rem',
                  width: 250,
                  paddingTop: 5,
                  paddingBottom: 5,
                },
              }}
            >
              <Paper
                elevation={5}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  flexDirection: 'column',
                }}
              >
                <div className='pricetable'>Premium</div>
                <div className='pricetable-div'>$39</div>
                <div className='pricetable-div-line'>10 users</div>
                <div className='pricetable-div-line-user'>
                  Many payment cards
                </div>
                <div className='pricetable-div-line-user'>
                  Order without any obligations
                </div>
                <div className='pricetable-div-line-user'>
                  Account without ads
                </div>
                <div className='pricetable-div-line-user'>
                  The history of orders
                </div>
                <div className='pricetable-div-line-user'>Support 24/7</div>

                <button className='pricetable-button'>Buy now</button>
              </Paper>
            </Box>
          </div>
          <div className='free-pricetable-card'>
            <Box
              sx={{
                display: 'flex',
                flexWrap: 'wrap',

                '& > :not(style)': {
                  width: '16em',
                  paddingTop: 5,
                  paddingBottom: 5,
                  // fontSize: '85%',
                },
              }}
            >
              <Paper
                elevation={5}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  flexDirection: 'column',
                }}
              >
                <div className='carttable'>Free</div>
                <div className='cartprice-div'>$0</div>
                <div className='cart-line-div'>5 users</div>
                <div className='cart-line-div-user'>2 payment cards</div>
                <div className='cart-line-div-user'>
                  Order without any obligations
                </div>
                <div className='cart-line-div-user'>Account with ads</div>
                <div className='cart-line-div-user'>The history of orders</div>

                <button className='carttable-button'>Buy now</button>
              </Paper>
            </Box>
          </div>
        </div>
      </div>
      <div className='join-our-team-div'>
        <div>
          <p className='join-our-team-heading'>
            Do you want to become a team <br /> member and improve our
            application?
          </p>
        </div>
        <div>
          <button className='join-us-button'>Join us</button>
        </div>
      </div>
    </>
  );
};

export default PriceSection;
