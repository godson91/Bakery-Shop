import React from "react";
import Hero from "./../../components/LandingPageHero/LandingPageHero";
import Directory from "../../components/directory/directory.component";
import SectionTwo from "../../components/sectionTwo/SectionTwo";
import AboutUs from "../../pages/aboutUs/AboutUs";
import "./homepage.styles.scss";
import app from "../../firebase/Login";

const HomePage = () => {
  return (
    <div className='homepage'>
      <Hero />
      <SectionTwo />
      <Directory />
      <AboutUs />
      <button onClick={() => app.auth().signOut()}>Sign Out</button>
    </div>
  );
};

export default HomePage;
