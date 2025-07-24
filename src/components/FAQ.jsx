import React from 'react';
import UBITBackground from '../assets/ubit.png';

const faqs = [
  {
    q: "Who can attend Career Connect'25?",
    a: "All senior-year students and recent graduates of UBIT are welcome to attend.",
  },
  {
    q: "Is registration required?",
    a: "Yes, all participants must register in advance using the registration form on the website.",
  },
  {
    q: "Will there be any certification?",
    a: "Yes, certificates will be provided to attendees who participate in key activities and sessions.",
  },
  {
    q: "What should I bring to the event?",
    a: "Bring multiple copies of your updated resume, your university ID card, and a notebook.",
  },
];

const FAQ = () => {
  return (
    <section
      className="relative text-white py-16 px-6 bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${UBITBackground})` }}
    >
      {/* Background overlay */}
      <div className="absolute inset-0 bg-sky-900/80 backdrop-blur-sm" />

      {/* FAQ content */}
      <div className="relative z-10 max-w-2xl mx-auto">
        <h2 className="text-3xl font-semibold text-center mb-8">Frequently Asked Questions</h2>
        <div className="space-y-6">
          {faqs.map((item, index) => (
            <div key={index} className="bg-sky-800/80 p-4 rounded shadow">
              <h3 className="text-lg font-medium">{item.q}</h3>
              <p className="text-sky-300 mt-1">{item.a}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
