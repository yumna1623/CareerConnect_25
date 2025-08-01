import React, { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleScroll = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
    setIsOpen(false);
  };

  return (
    <nav className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 w-[90%] md:w-[70%] bg-white/30 backdrop-blur-md rounded-2xl shadow-lg px-4 sm:px-6 py-2 sm:py-3 text-gray-600 transition-all duration-300">
      <div className="flex items-center justify-between">
        {/* Brand */}
        <div
          onClick={() => handleScroll('home')}
          className="text-lg sm:text-xl font-bold tracking-wide cursor-pointer"
        >
          CareerFest
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6 font-medium text-sm sm:text-base">
          <li className="cursor-pointer hover:text-sky-300" onClick={() => handleScroll('home')}>Home</li>
          <li className="cursor-pointer hover:text-sky-300" onClick={() => handleScroll('about')}>About Us</li>
          <li className="cursor-pointer hover:text-sky-300" onClick={() => handleScroll('sponsors')}>Sponsors</li>
          <li className="cursor-pointer hover:text-sky-300" onClick={() => handleScroll('registration')}>Register</li>
        </ul>

        {/* Mobile Menu Toggle */}
        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden focus:outline-none">
          <svg className="w-6 h-6" fill="none" stroke="white" strokeWidth="2" viewBox="0 0 24 24">
            {isOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <ul className="md:hidden mt-4 space-y-2 font-medium text-center text-sm sm:text-base transition-all duration-300">
          <li className="cursor-pointer hover:text-sky-300" onClick={() => handleScroll('home')}>Home</li>
          <li className="cursor-pointer hover:text-sky-300" onClick={() => handleScroll('about')}>About Us</li>
          <li className="cursor-pointer hover:text-sky-300" onClick={() => handleScroll('sponsors')}>Sponsors</li>
          <li className="cursor-pointer hover:text-sky-300" onClick={() => handleScroll('registration')}>Register</li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
