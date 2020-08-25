import React from 'react';
import Hero from './../../components/LandingPageHero/LandingPageHero';
import Directory from '../../components/directory/directory.component';
import SectionTwo from '../../components/sectionTwo/SectionTwo'
import AboutUs from '../../pages/aboutUs/AboutUs'
import './homepage.styles.scss';

const HomePage = () => {
  return (
    <div className="homepage">
      <Hero />
      <SectionTwo/>
      <Directory />
      <AboutUs/>
    </div>
  );
};

export default HomePage;
