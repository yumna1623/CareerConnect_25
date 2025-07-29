import React from 'react';
import { FaEnvelope, FaPhoneAlt, FaUserTie, FaUsers } from 'react-icons/fa';

const ManagementTeam = () => {
  return (
    <section className="bg-gray-50 py-16 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-sky-900 mb-12 flex justify-center items-center gap-3">
          <FaUsers className="text-sky-700" />
          Event Management Team
        </h2>

        {/* Chairman */}
        <div className="bg-white shadow-md rounded-xl p-6 mb-10">
          <h3 className="text-2xl font-semibold text-sky-800 mb-2 flex items-center justify-center gap-2">
            <FaUserTie className="text-sky-600" />
            Chairman
          </h3>
          <p className="text-lg text-gray-700 font-medium">Dr. Sadiq Ali Khan</p>
        </div>

        {/* Coordinators */}
        <div className="grid md:grid-cols-2 gap-6">
          {/* Dr. Humera */}
          <div className="bg-white shadow-md rounded-xl p-6">
            <h4 className="text-xl font-semibold text-sky-800 mb-2">Dr. Humera Azam</h4>
            <p className="text-gray-700 flex items-center gap-2">
              <FaEnvelope className="text-sky-600" />
              <a
                href="mailto:humera.azam@uok.edu.pk"
                className="text-sky-700 hover:underline"
              >
                humera.azam@uok.edu.pk
              </a>
            </p>
          </div>

          {/* Dr. Khalid */}
          <div className="bg-white shadow-md rounded-xl p-6">
            <h4 className="text-xl font-semibold text-sky-800 mb-2">Dr. S. M. Khalid</h4>
            <p className="text-gray-700 flex items-center gap-2">
              <FaPhoneAlt className="text-sky-600" />
              WhatsApp (Text Only): <span className="text-sky-700">0333-2178423</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ManagementTeam;
