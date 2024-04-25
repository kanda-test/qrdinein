import React from 'react';
// import Socialmedia from '../components/SocialmediaSection/Socialmedia';
import Socialmedia from '../components/socialmediaSection/Socialmedia';
import MobileScreens from '../components/mobileScreens/MobileScreens';
import ApplicationFeatures from '../components/applicationFeatures/ApplicationFeatures';
import TestimonialSection from '../components/testimonial/TestimonialSection';
import PriceSection from '../components/priceSection/PriceSection';
import Achievements from '../components/achievements/Achievements';
import ContactForm from '../components/contact/ContactForm';

const SocialmediaSection = () => {
  return (
    <>
      <Socialmedia />
      <MobileScreens />
      <ApplicationFeatures />
      <TestimonialSection />
      <PriceSection />
      <Achievements />
      <ContactForm />
    </>
  );
};

export default SocialmediaSection;
