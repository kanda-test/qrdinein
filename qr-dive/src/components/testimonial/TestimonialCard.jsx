import * as React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';

export default function TestimonialCard({ name, profession, details }) {
  return (
    <div style={{ width: '250px', margin: '1rem 0.5rem' }}>
      <Paper elevation={3}>
        <div
          className='testimonial-div'
          style={{
            padding: '2rem 1.3rem',
          }}
        >
          <div className='testimonial-container-div'>
            <div className='testimonial-circle-div'></div>
            <div className='testimonial-details-div'>
              <div className='testimonial-name-div'>{name}</div>
              <div className='testimonial-profession-div'>{profession}</div>
            </div>
          </div>
          <p className='testimonial-paragraph-div'>{details}</p>
        </div>
      </Paper>
    </div>
  );
}
