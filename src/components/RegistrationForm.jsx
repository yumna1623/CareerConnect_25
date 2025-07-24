import React from 'react';

const RegistrationForm = () => {
  return (
    <section className="bg-sky-900 py-16 px-6">
      <div className="max-w-2xl mx-auto bg-white/10 backdrop-blur-sm rounded-2xl shadow-lg p-8 border border-white/20">
        <h2 className="text-3xl font-bold text-white text-center mb-8">Register Now</h2>
        <form className="space-y-6 text-white">
          <div>
            <label className="block font-medium mb-1" htmlFor="fullName">
              Full Name
            </label>
            <input
              type="text"
              id="fullName"
              placeholder="Enter your full name"
              className="w-full px-4 py-2 bg-white/10 placeholder-white text-white border border-white/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-white"
            />
          </div>

          <div>
            <label className="block font-medium mb-1" htmlFor="email">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              placeholder="Enter your email"
              className="w-full px-4 py-2 bg-white/10 placeholder-white text-white border border-white/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-white"
            />
          </div>

          <div>
            <label className="block font-medium mb-1" htmlFor="department">
              Department
            </label>
            <input
              type="text"
              id="department"
              placeholder="Your department"
              className="w-full px-4 py-2 bg-white/10 placeholder-white text-white border border-white/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-white"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-white/20 hover:bg-white/30 text-white font-semibold py-2 rounded-lg transition duration-200"
          >
            Submit
          </button>
        </form>
      </div>
    </section>
  );
};

export default RegistrationForm;
