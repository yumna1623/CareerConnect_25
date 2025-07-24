import React from 'react';

import NavBar from './components/NavBar';
import HeroSection from './components/HeroSection';
import AboutEvent from './components/AboutEvent';
import Highlights from './components/Highlights';
import Schedule from './components/Schedule';
// import Speakers from './components/Speakers';
import RegistrationForm from './components/RegistrationForm';
import FAQ from './components/FAQ';
// import AboutUBIT from './components/AboutUBIT';
// import Sponsors from './components/Sponsors';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="bg-sky-950 text-white font-sans">
      <NavBar />
      <HeroSection />
      <AboutEvent />
      <Highlights />
      <Schedule />
      {/* <Speakers /> */}
      <FAQ />
      <RegistrationForm />
      {/* <AboutUBIT /> */}
      {/* <Sponsors /> */}
      <Contact />
      <Footer />
    </div>
  );
}

export default App;