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
      className="relative py-20 px-6 bg-cover bg-center bg-no-repeat text-white"
      style={{ backgroundImage: `url(${UBITBackground})` }}
    >
      {/* dark blur overlay */}
      <div className="absolute inset-0 bg-sky-950/80 backdrop-blur-md" />

      <div className="relative z-10 max-w-3xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-white mb-12 tracking-wide">
          Frequently Asked Questions
        </h2>

        <div className="space-y-6">
          {faqs.map((item, index) => (
            <div
              key={index}
              className="bg-white/10 hover:bg-white/20 transition-all duration-300 border border-white/20 rounded-xl p-6 shadow-lg"
            >
              <h3 className="text-xl font-semibold text-white mb-2">{item.q}</h3>
              <p className="text-sky-200">{item.a}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
