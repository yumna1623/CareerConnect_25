import React from 'react';
import { FaLightbulb } from 'react-icons/fa';
import G1 from '../assets/G1.jpg'; // Replace with actual filenames if needed
import G2 from '../assets/G2.jpg';
import G3 from '../assets/G3.jpg';

const EventOverview = () => {
  return (
    <section className="bg-gray-50 py-20 px-4 md:px-10 text-gray-800">
      <div className="max-w-6xl mx-auto">
        {/* Title */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-extrabold text-gray-900 flex justify-center items-center gap-4">
            <FaLightbulb className="text-blue-600 text-4xl animate-pulse" />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
              Event Overview
            </span>
          </h2>
          <p className="text-xl text-gray-600 mt-4 max-w-2xl mx-auto">
            Connecting talent, innovation, and opportunity for a brighter future.
          </p>
        </div>

        {/* Main Content: Description and Image Gallery Side-by-Side */}
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-start"> {/* Use flex for side-by-side */}
          {/* Description - Left Column */}
          <div className="w-full lg:w-3/5 space-y-8 text-lg leading-relaxed text-gray-700">
            <p>
              Over the past several years, the **Department of Computer Science (UBIT)** at the University of Karachi
              has established its annual **Career Fest** as a premier platform for connecting students, alumni, and
              industry leaders. These events have consistently provided invaluable opportunities for participants to engage in
              recruitment activities, knowledge sharing, and professional networking, fostering a vibrant ecosystem for tech talent.
            </p>

            <p>
              In **2023**, the Career Fest was notably inaugurated by Vice Chancellor Professor Dr. Khalid Mahmood Iraqi, who
              emphasized the critical importance of IT proficiency and the vast, ever-expanding opportunities available in the global job
              market. The event saw active participation from numerous leading software houses and IT companies, who conducted on-the-spot interviews for
              both internships and full-time positions, leading to successful placements for many deserving students.
            </p>

            <p>
              The **2024** edition, rebranded as <strong className="text-blue-600">Career Connect'24</strong>, continued this proud tradition by bringing
              together esteemed industry professionals, groundbreaking innovators, and eager students. Companies such as **Impetus Systems**
              and **Avialdo Solutions** were key participants, offering profound insights into emerging industry trends and crucial job market
              demands. The event effectively facilitated valuable networking opportunities and provided essential exposure to innovative solutions
              and cutting-edge technologies that are shaping the future.
            </p>

            <p>
              Building upon the resounding successes of previous years, <strong className="text-purple-600">Career Fest 2025</strong> aims to significantly further
              enhance these experiences by introducing new, dynamic features and substantially expanding its reach. The event will
              continue to serve as a vital bridge between academia and industry, actively fostering collaborations and providing a robust
              platform for students to exceptionally showcase their talents to potential employers and industry stalwarts.
            </p>

            <p>
              With an unwavering focus on **innovation, professional development, and community engagement**, Career Fest 2025 is
              poised to be a landmark event that contributes profoundly to the sustainable growth and progressive advancement of the tech
              ecosystem in Pakistan, driving forward the next generation of IT professionals.
            </p>
          </div>

          {/* Image Gallery - Right Column */}
          <div className="w-full lg:w-2/5 mt-12 lg:mt-0"> {/* Adjusted margin for mobile, removed for large screens */}
            <h3 className="text-2xl font-bold text-gray-800 text-center mb-8"> {/* Smaller heading, centered */}
              <span className="pb-2 border-b-4 border-blue-500">
                Glimpses from Past Events
              </span>
            </h3>
            <div className="grid grid-cols-1 gap-6"> {/* Changed to single column for better flow on the side */}
              {[G1, G2, G3].map((img, idx) => (
                <div
                  key={idx}
                  className="relative rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 group"
                >
                  <img
                    src={img}
                    alt={`Event Highlight ${idx + 1}`}
                    className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105" // Adjusted height for side column
                    loading="lazy"
                  />
                  {/* Optional overlay for subtle effect or future captions */}
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                    <p className="text-white text-lg font-semibold">
                      {idx === 0 && "Networking Success"}
                      {idx === 1 && "Keynote Insights"}
                      {idx === 2 && "Innovation Showcase"}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EventOverview;