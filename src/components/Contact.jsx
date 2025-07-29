import React from 'react';
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
  FaEnvelope,
  FaPhoneAlt,
  FaGlobe,
} from 'react-icons/fa';

const Contact = () => {
  return (
    <section className="bg-white py-20 px-6 text-gray-800">
      <div className="max-w-6xl mx-auto space-y-16">
        <div className="text-center">
          <h2 className="text-4xl font-bold text-sky-900 mb-4">Contact & Registration</h2>
          <p className="text-gray-600 text-lg">
            Reach out to us or explore registration details for students, employers, and alumni.
          </p>
        </div>

        {/* Contact Info */}
        <div className="bg-sky-50 p-8 rounded-xl shadow-lg">
          <h3 className="text-2xl font-semibold text-sky-800 mb-2">Department of Computer Science (UBIT)</h3>
          <p>University of Karachi</p>
          <p>Karachi-75270, Pakistan</p>
          <div className="mt-4 space-y-2">
            <p className="flex items-center gap-3">
              <FaPhoneAlt className="text-sky-600" /> +92-21-99261300-06 Ext: 2462
            </p>
            <p className="flex items-center gap-3">
              <FaEnvelope className="text-sky-600" />
              <a href="mailto:dcs@uok.edu.pk" className="text-sky-700 hover:underline">
                dcs@uok.edu.pk
              </a>
            </p>
            <p className="flex items-center gap-3">
              <FaGlobe className="text-sky-600" />
              <a
                href="https://uok.edu.pk/faculties/computerscience/contact.php"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sky-700 hover:underline"
              >
                Visit Website
              </a>
            </p>
          </div>
        </div>

        {/* Registration Sections */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="space-y-6">
            <h4 className="text-xl font-semibold text-sky-800">For Students:</h4>
            <ul className="list-disc list-inside text-gray-700 space-y-1">
              <li>Fill out the online student registration form.</li>
              <li>Include your name, student ID, program, and contact details.</li>
              <li>Submit before the deadline to reserve your spot.</li>
            </ul>
          </div>

          <div className="space-y-6">
            <h4 className="text-xl font-semibold text-sky-800">For Employers & Industry Representatives:</h4>
            <ul className="list-disc list-inside text-gray-700 space-y-1">
              <li>Contact event coordinators to express interest.</li>
              <li>
                You'll receive sponsorship & participation details including booth info and speaking
                opportunities.
              </li>
            </ul>
          </div>

          <div className="space-y-6">
            <h4 className="text-xl font-semibold text-sky-800">For Alumni:</h4>
            <ul className="list-disc list-inside text-gray-700 space-y-1">
              <li>Register using the online alumni form.</li>
              <li>Stay updated via UBIT’s social channels.</li>
              <li>Contact coordinators to join networking or as speakers.</li>
            </ul>
          </div>

          <div className="space-y-6">
            <h4 className="text-xl font-semibold text-sky-800">Important Dates:</h4>
            <ul className="list-disc list-inside text-gray-700 space-y-1">
              <li>Registration Opens: <span className="italic text-gray-500">[Insert Date]</span></li>
              <li>Registration Closes: <span className="italic text-gray-500">[Insert Date]</span></li>
              <li>Event Date: <span className="italic text-gray-500">[Insert Date]</span></li>
            </ul>
            <p className="italic text-sm text-gray-600">* Early registration is advised. Limited slots.</p>
          </div>
        </div>

        {/* Social Media */}
        <div className="text-center">
          <p className="text-lg text-gray-700 mb-4">Follow us on social media for real-time updates:</p>
          <div className="flex justify-center gap-6 text-sky-600 text-2xl">
            <a
              href="https://www.facebook.com/DCS.UBIT/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-sky-800 hover:scale-110 transition-transform"
            >
              <FaFacebookF />
            </a>
            <a
              href="https://www.instagram.com/explore/locations/864259708/university-of-karachi-department-of-computer-science-ubit/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-sky-800 hover:scale-110 transition-transform"
            >
              <FaInstagram />
            </a>
            <a
              href="https://www.linkedin.com/school/university-of-karachi/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-sky-800 hover:scale-110 transition-transform"
            >
              <FaLinkedinIn />
            </a>
            <a
              href="https://twitter.com/uok_official"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-sky-800 hover:scale-110 transition-transform"
            >
              <FaTwitter />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
