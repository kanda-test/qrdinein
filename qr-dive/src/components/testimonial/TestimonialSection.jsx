import React from 'react';
import testimonialbg from '../../assets/testimonialbg.png';
import TestimonialCard from './TestimonialCard';
import data from './data';
import './testimonial.css';

const TestimonialSection = () => {
  // console.log(data);
  // const data = [{ name: '', profession: '', details: '', photo: '' }];
  return (
    <div>
      {/* <div className='custom-grid-item-container'>
        <div className='custom-grid-item'>
          <img src={testimonialbg} alt='img' width='100%' />
        </div> */}
      {/* <div className='custom-grid-item'> */}
      <div>
        <div className='testimonial-section-container-div'>
          <div className='testimonial-section-left-container'>
            <div className='testimonial-section-leftside-innerdiv-1'>
              <TestimonialCard
                name={data[0]?.name}
                profession={data[0]?.profession}
                details={data[0]?.details}
              />
              <TestimonialCard
                name={data[1]?.name}
                profession={data[1]?.profession}
                details={data[1]?.details}
              />
            </div>
            <div className='testimonial-section-leftside-innerdiv-2'>
              <TestimonialCard
                name={data[2]?.name}
                profession={data[2]?.profession}
                details={data[2]?.details}
              />
              <TestimonialCard
                name={data[3]?.name}
                profession={data[3]?.profession}
                details={data[3]?.details}
              />
            </div>
          </div>
          <div className='testimonial-section-right-container'>
            <div className='testimonial-secion-text-and-card-container'>
              <div className='testimonial-section-text-container'>
                <div className='title-div'>
                  <div className='title-div-heading'>
                    Short stories
                    <br />
                    of our satisfied users
                  </div>
                  <div className='title-div-paragraph'>
                    Especially for you, we have prepared short stories of our
                    users who agreed to share their opinions on our application.
                    The main tests were carried out on performance and
                    application stabilization.
                  </div>
                </div>
              </div>
              <div className='testimonial-section-testimonial-card-container'>
                <div className='testimonial-section-rightside-innerdiv-1'>
                  <TestimonialCard
                    name={data[4]?.name}
                    profession={data[4]?.profession}
                    details={data[4]?.details}
                  />
                  <TestimonialCard
                    name={data[5]?.name}
                    profession={data[5]?.profession}
                    details={data[5]?.details}
                  />
                </div>
                <div className='testimonial-section-rightside-innerdiv-2'>
                  <TestimonialCard
                    name={data[6]?.name}
                    profession={data[6]?.profession}
                    details={data[6]?.details}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* </div> */}
    </div>
  );
};

export default TestimonialSection;
