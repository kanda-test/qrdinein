import React from 'react';
import socialmediabg from '../../assets/socailmediabg.png';
import './socialmedia.css';
import { FaTwitter } from 'react-icons/fa';
import { BarChart } from '@mui/x-charts/BarChart';
import { FaInstagram } from 'react-icons/fa6';
import { FaFacebookF } from 'react-icons/fa';

import { Paper } from '@mui/material';
import { LineChart } from '@mui/x-charts';

const Socialmedia = () => {
  var options = {
    scales: {
      xAxes: [
        {
          barPercentage: 10,
        },
      ],
    },
  };
  return (
    <div className=' socialmedia-container-div '>
      <div className='custom-grid-item-container'>
        <div className='socialmedia-graph-bg-div custom-grid-item'>
          <img src={socialmediabg} width='50%' alt='img' />
        </div>
        <div className='overlay-div-socialmedia custom-grid-item'>
          <div className='graph-main-container-div'>
            <div className='graph-container-div1'>
              <Paper elevation={3}>
                <div className='paper-card-div'>
                  <FaTwitter className='custom-icon twitter-icon' />
                  <p className='socialmedia-heading'>Spending on Twitter</p>
                  <p className='highlighted-doller'>$0</p>
                  <p className='highlighted-heading'>Promoted posts</p>
                  <p className='socialmedia-heading'>for the first month</p>
                </div>
              </Paper>
              <Paper elevation={3}>
                <div className='paper-card-div'>
                  <FaFacebookF className='custom-icon facebook-icon' />
                  <p className='socialmedia-heading'>Profits from Facebook</p>
                  <div style={{ alignItems: 'start' }}>
                    <LineChart
                      xAxis={[{ data: [2, 3, 4, 5, 8, 10] }]}
                      series={[
                        {
                          data: [2, 5.5, 2, 8.5, 1.5, 5],
                        },
                      ]}
                      sx={[{ p: 0 }]}
                      colors={['#475996']}
                      width={220}
                      height={180}
                    />
                  </div>
                </div>
              </Paper>
            </div>
            <div className='graph-container-div2'>
              <Paper elevation={3}>
                <div className='paper-card-div'>
                  <FaTwitter className='twitter-icon' />
                  <p className='socialmedia-heading'>Spending on Twitter</p>
                </div>
              </Paper>
              <Paper elevation={3}>
                <div className='paper-card-div'>
                  <FaInstagram className='custom-icon instagram-icon' />
                  <p className='socialmedia-heading'>Profits from Facebook</p>
                  <BarChart
                    series={[
                      // { data: [35] },
                      // { data: [51] },
                      // { data: [15] },
                      { data: [10, 30, 15] },
                      { data: [50, 25, 35] },
                      { data: [60, 50, 15] },
                    ]}
                    radius='10'
                    sx={[{ p: 1, pt: 5 }]}
                    colors={['#D83A6A']}
                    slotProps={{
                      bar: {
                        rx: 5,
                      },
                    }}
                    options={options}
                    xAxis={[
                      {
                        data: ['a', 'b', 'c'],
                        scaleType: 'band',
                        categoryGapRatio: 0.1,
                        barGapRatio: 0.5,
                      },
                    ]}
                    margin={{ top: 0, bottom: 40, left: 10, right: 10 }}
                    width={220}
                    height={180}
                  />
                </div>
              </Paper>
            </div>
          </div>
        </div>
      </div>
      {/* <div className='socialmedia-content-div'> */}
      <div className='advertisement-div'>
        <div className='advert-text-div'>
          <div className='heading-div'>
            Advertise your application on social media
          </div>
          <div className='para-div'>
            Start promoting your restaurants and gain new customers, new orders,
            new opinions. Thanks to promotion in social media you are able to
            reach several hundred thousand customers.
          </div>
        </div>

        <div className='advert-text-div'>
          <div className='subheading-div'>
            Don't know how to create the first ad?
          </div>
          <div className='para-div'>
            Creating an ad is a very simple thing. Put your post on social
            media, then start promoting it. Create your first ads in your region
            to encourage potential customers who will stay with you longer.
          </div>
        </div>

        <div className='advert-text-div'>
          <div className='subheading-div'>Spend me, get more!</div>
          <div className='para-div'>
            If you already have a rich fanpage in social media then you can
            safely count on the fact that over time new customers will come
            alone.
          </div>
        </div>

        <button className='advert-button'>Read More</button>
      </div>
      {/* </div> */}

      {/* <div className='container'>
        <div className='item'>item1</div>
        <div className='item'>item2</div>
      </div> */}
    </div>
  );
};

export default Socialmedia;
