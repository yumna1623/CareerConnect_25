import React from 'react';
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-sky-950 text-sky-300 py-10 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">

        {/* About Section */}
        <div className="text-center md:text-left">
          <h3 className="text-lg font-semibold text-white mb-2">About CareerConnect</h3>
          <p className="text-sm text-sky-400">
            Powered by UBIT — empowering students with real-world career opportunities.
          </p>
        </div>

        {/* Quick Links */}
        <div className="text-center">
          <h3 className="text-lg font-semibold text-white mb-2">Quick Links</h3>
          <ul className="space-y-1">
            <li><a href="#home" className="hover:text-white transition">Home</a></li>
            <li><a href="#about" className="hover:text-white transition">About Us</a></li>
            <li><a href="#sponsors" className="hover:text-white transition">Sponsors</a></li>
            <li><a href="#registration" className="hover:text-white transition">Register</a></li>
            <li><a href="#contact" className="hover:text-white transition">Contact</a></li>
          </ul>
        </div>

        {/* Contact & Social */}
        <div className="text-center md:text-right space-y-3">
          <h3 className="text-lg font-semibold text-white mb-2">Connect With Us</h3>
          <div className="flex justify-center md:justify-end gap-4 text-xl">
            <a href="mailto:careerconnect@ubit.edu.pk" className="hover:text-white" aria-label="Email">
              <FaEnvelope />
            </a>
            <a href="https://www.facebook.com/ubit.uok" className="hover:text-white" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
              <FaFacebookF />
            </a>
            <a href="https://www.instagram.com/uok_official" className="hover:text-white" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <FaInstagram />
            </a>
            <a href="https://www.linkedin.com/school/university-of-karachi/" className="hover:text-white" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <FaLinkedinIn />
            </a>
            <a href="https://twitter.com/uok_official" className="hover:text-white" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
              <FaTwitter />
            </a>
          </div>
        </div>
      </div>

      <hr className="my-8 border-sky-800" />

      <p className="text-center text-xs">
        © 2025 CareerConnect, UBIT — All Rights Reserved
      </p>
    </footer>
  );
};

export default Footer;
