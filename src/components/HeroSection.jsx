import React, { useState, useEffect } from 'react';
import UbitImage from '../assets/ubit.png'; // Make sure the image is sharp and high resolution

const HeroSection = () => {
  const eventDate = new Date('2025-08-01T09:00:00+05:00').getTime();

  const calculateTimeLeft = () => {
    const difference = eventDate - new Date().getTime();
    if (difference <= 0) return {};
    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());
  const [isEventOver, setIsEventOver] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      const newTimeLeft = calculateTimeLeft();
      if (Object.keys(newTimeLeft).length === 0) {
        setIsEventOver(true);
        clearInterval(timer);
      }
      setTimeLeft(newTimeLeft);
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const timerComponents = Object.keys(timeLeft).map((interval) => (
    <span
      key={interval}
      className="mx-2 text-xl sm:text-3xl md:text-4xl font-bold text-white animate-pulse"
    >
      {timeLeft[interval] < 10 ? `0${timeLeft[interval]}` : timeLeft[interval]}
      <span className="block text-xs sm:text-sm md:text-base text-sky-200 uppercase">
        {interval}
      </span>
    </span>
  ));

  const handleScroll = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      className="relative h-screen bg-cover bg-center bg-no-repeat text-white px-4 flex flex-col items-center justify-center"
      style={{ backgroundImage: `url(${UbitImage})` }}
    >
      {/* Keep subtle dark overlay for text readability */}
<div className="absolute inset-0 bg-sky-900/10 backdrop-brightness-95 z-0" />

      <div className="relative z-10 text-center max-w-4xl px-4">
        <h2 className="text-lg sm:text-2xl md:text-3xl mb-2 tracking-wide text-sky-200 font-medium">
          UBIT Presents
        </h2>
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold mb-4 drop-shadow-xl leading-tight">
          CareerConnect'25
        </h1>

        <p className="text-md sm:text-lg md:text-xl font-medium text-sky-100 mb-6">
          “Empowering Futures through Opportunity, Innovation, and Collaboration”
        </p>

        <p className="text-sm sm:text-base text-sky-100 mb-8">
          Organized by the Department of Computer Science,<br />
          University of Karachi
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-4 mb-10">
          <button
            onClick={() => handleScroll('registration')}
            className="bg-sky-600 hover:bg-sky-500 transform hover:scale-105 transition duration-300 text-white px-6 py-2 rounded-lg"
          >
            Register Now
          </button>
          <button
            onClick={() => handleScroll('agenda')}
            className="border border-white hover:bg-white hover:text-sky-900 transform hover:scale-105 transition duration-300 px-6 py-2 rounded-lg"
          >
            View Agenda
          </button>
        </div>
      </div>

      {!isEventOver && (
        <div className="absolute bottom-6 w-full flex justify-center z-10">
          <div className="flex gap-4">{timerComponents}</div>
        </div>
      )}
    </section>
  );
};

export default HeroSection;
