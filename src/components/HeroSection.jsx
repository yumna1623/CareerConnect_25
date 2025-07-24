import React, { useState, useEffect } from 'react';
import UbitImage from '../assets/ubit.png'; // Confirm the correct path

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
      className="mx-2 text-xl md:text-3xl font-mono text-sky-300 animate-pulse"
    >
      {timeLeft[interval] < 10 ? `0${timeLeft[interval]}` : timeLeft[interval]}
      <span className="block text-xs md:text-sm text-white uppercase">{interval}</span>
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
      {/* Overlay */}
      <div className="absolute inset-0 bg-sky-900/30 z-0" />

      {/* Main Text */}
      <div className="relative z-10 text-center animate-fade-in-up">
        <h2 className="text-2xl md:text-3xl mb-2 tracking-wider text-sky-200">
          UBIT Presents
        </h2>
        <h1 className="text-5xl md:text-7xl font-extrabold mb-6 drop-shadow-xl">
          CareerConnect'25
        </h1>

        <div className="flex flex-col sm:flex-row justify-center gap-4 mb-10 px-4">
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

      {/* Countdown Timer at Bottom */}
      {!isEventOver && (
        <div className="absolute bottom-6 w-full flex justify-center z-10">
          <div className="bg-sky-900/80 px-6 py-3 rounded-full shadow-md flex backdrop-blur">
            {timerComponents.length > 0 ? (
              timerComponents
            ) : (
              <span className="text-lg text-green-400">Event is Live!</span>
            )}
          </div>
        </div>
      )}
    </section>
  );
};

export default HeroSection;
