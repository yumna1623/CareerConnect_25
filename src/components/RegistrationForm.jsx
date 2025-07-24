import React from 'react';
import { FaUser, FaEnvelope, FaBuilding, FaPaperPlane } from 'react-icons/fa';

const RegistrationForm = () => {
  return (
    <section className="bg-sky-900 py-20 px-6">
      <div className="max-w-xl mx-auto bg-white/10 backdrop-blur-sm rounded-2xl shadow-xl p-10 border border-white/20">
        <h2 className="text-4xl font-bold text-white text-center mb-10">Register Now</h2>

        <form className="space-y-6 text-white">
          <div className="flex items-center gap-3 bg-white/10 border border-white/30 rounded-lg px-4 py-2 focus-within:ring-2 focus-within:ring-white">
            <FaUser className="text-white/80 text-lg" />
            <input
              type="text"
              id="fullName"
              placeholder="Full Name"
              className="w-full bg-transparent placeholder-white/80 text-white focus:outline-none"
            />
          </div>

          <div className="flex items-center gap-3 bg-white/10 border border-white/30 rounded-lg px-4 py-2 focus-within:ring-2 focus-within:ring-white">
            <FaEnvelope className="text-white/80 text-lg" />
            <input
              type="email"
              id="email"
              placeholder="Email Address"
              className="w-full bg-transparent placeholder-white/80 text-white focus:outline-none"
            />
          </div>

          <div className="flex items-center gap-3 bg-white/10 border border-white/30 rounded-lg px-4 py-2 focus-within:ring-2 focus-within:ring-white">
            <FaBuilding className="text-white/80 text-lg" />
            <input
              type="text"
              id="department"
              placeholder="Department"
              className="w-full bg-transparent placeholder-white/80 text-white focus:outline-none"
            />
          </div>

          <button
            type="submit"
            className="w-full flex items-center justify-center gap-2 bg-white/20 hover:bg-white/30 text-white font-semibold py-3 rounded-lg transition duration-200"
          >
            <FaPaperPlane className="text-white" />
            Submit
          </button>
        </form>
      </div>
    </section>
  );
};

export default RegistrationForm;
