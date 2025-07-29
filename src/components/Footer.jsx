import React from 'react';
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
  FaEnvelope,
} from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-sky-950 text-sky-300 px-6 pt-12 pb-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">

        {/* About Section */}
        <div className="text-center md:text-left space-y-3">
          <h3 className="text-xl font-bold text-white">Career Fest 2025</h3>
          <p className="text-sm text-sky-400 italic">
            “Empowering Futures through Opportunity, Innovation, and Collaboration”
          </p>
          <p className="text-xs text-sky-500">
            Organized by Department of Computer Science, University of Karachi
          </p>
        </div>

        {/* Quick Links */}
        <div className="text-center space-y-3">
          <h3 className="text-lg font-semibold text-white">Quick Links</h3>
          <ul className="space-y-1 text-sm">
            <li><a href="#home" className="hover:text-white transition">Home</a></li>
            <li><a href="#about" className="hover:text-white transition">About Us</a></li>
            <li><a href="#sponsors" className="hover:text-white transition">Sponsors</a></li>
            <li><a href="#registration" className="hover:text-white transition">Register</a></li>
            <li><a href="#contact" className="hover:text-white transition">Contact</a></li>
          </ul>
        </div>

        {/* Social & Contact */}
        <div className="text-center md:text-right space-y-3">
          <h3 className="text-lg font-semibold text-white">Connect With Us</h3>
          <div className="flex justify-center md:justify-end gap-4 text-xl">
            <a href="mailto:careerconnect@ubit.edu.pk" className="hover:text-white" aria-label="Email">
              <FaEnvelope />
            </a>
            <a href="https://www.facebook.com/ubit.uok" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="hover:text-white">
              <FaFacebookF />
            </a>
            <a href="https://www.instagram.com/uok_official" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="hover:text-white">
              <FaInstagram />
            </a>
            <a href="https://www.linkedin.com/school/university-of-karachi/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="hover:text-white">
              <FaLinkedinIn />
            </a>
            <a href="https://twitter.com/uok_official" target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="hover:text-white">
              <FaTwitter />
            </a>
          </div>
        </div>
      </div>

      <hr className="my-6 border-sky-800" />

      <p className="text-center text-xs text-sky-500">
        © 2025 CareerConnect, UBIT — All Rights Reserved
      </p>
    </footer>
  );
};

export default Footer;
