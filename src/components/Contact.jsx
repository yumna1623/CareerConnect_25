import React from 'react';
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter, FaEnvelope } from 'react-icons/fa';

const Contact = () => {
  return (
    <section className="bg-sky-900 py-20 px-6 text-white text-center">
      <div className="max-w-2xl mx-auto transform transition-all duration-1000 hover:scale-[1.02]">
        <h2 className="text-4xl font-bold mb-6">Contact Us</h2>

        <div className="flex items-center justify-center gap-2 mb-4">
          <FaEnvelope className="text-sky-300 text-lg" />
          <a
            href="mailto:careerconnect@ubit.edu.pk"
            className="text-sky-300 hover:underline transition duration-300"
          >
            careerconnect@ubit.edu.pk
          </a>
        </div>

        <p className="text-lg mb-6">Stay connected with us:</p>

        <div className="flex justify-center gap-6 text-sky-300 text-2xl">
          <a
            href="https://www.facebook.com/ubit.uok"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-transform transform hover:scale-110"
          >
            <FaFacebookF />
          </a>
          <a
            href="https://www.instagram.com/uok_official"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-transform transform hover:scale-110"
          >
            <FaInstagram />
          </a>
          <a
            href="https://www.linkedin.com/school/university-of-karachi/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-transform transform hover:scale-110"
          >
            <FaLinkedinIn />
          </a>
          <a
            href="https://twitter.com/uok_official"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-transform transform hover:scale-110"
          >
            <FaTwitter />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
