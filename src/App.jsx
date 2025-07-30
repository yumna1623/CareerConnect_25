import React from 'react';
// import AboutUBIT from './components/AboutUBIT';
// import Sponsors from './components/Sponsors';
// import Speakers from './components/Speakers';
import RegistrationForm from './components/RegistrationForm';
import FAQ from './components/FAQ';

import NavBar from './components/NavBar';
import HeroSection from './components/HeroSection';
import AboutEvent from './components/AboutEvent';
import EventOverview from './components/EventOverview'
import Highlights from './components/Highlights';
import StrategicObjectives from './components/StrategicObjectives'
import LogisticsFacilities from './components/LogisticsFacilities'
import Schedule from './components/Schedule';
import Contact from './components/Contact';
import ManagementTeam from './components/ManagementTeam'
import Footer from './components/Footer';


function App() {
  return (
    <div className="bg-sky-950 text-white font-sans">
      <NavBar />
      <HeroSection />
      <AboutEvent />
      <EventOverview/>
      <Highlights />
      <StrategicObjectives/>
      <LogisticsFacilities/>
      <Schedule />
      <RegistrationForm />
      <Contact />
      <ManagementTeam/>
      <Footer />
      {/* <Speakers /> */}
      {/* <FAQ /> */}
      {/* <AboutUBIT /> */}
      {/* <Sponsors /> */}
    </div>
  );
}

export default App;