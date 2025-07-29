import React from 'react';
import ubitImage from '../assets/UBIT2.jpg'; // Make sure the image path is correct

const AboutEvent = () => {
  return (
    <section className="bg-sky-900 py-16 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center md:items-start gap-10">
        {/* Text Section */}
        <div className="md:w-1/2 text-left">
          <h2 className="text-3xl font-semibold mb-6 text-white">About the Host Institution</h2>
          <p className="text-lg text-sky-200 mb-4">
            Established in 1984, the Department of Computer Science at the University of Karachi (UBIT) is a premier hub for computing education, research, and innovation in Pakistan. Located in a purpose-built, multi-level complex, UBIT offers cutting-edge programs at undergraduate, graduate, and doctoral levels including BS (CS, SE, AI), MS (CS), and PhD in all domains.
          </p>
          <p className="text-lg text-sky-200 mb-4">
            With internationally benchmarked curricula and a strong focus on industrial relevance, students engage in capstone projects, specializations, and cross-disciplinary research in areas like AI, ML, Cybersecurity, Data Science, and Blockchain. Facilities include advanced labs, a high-performance computing center, and access to global research repositories like IEEE, ACM, and SpringerLink.
          </p>
          <p className="text-lg text-sky-200 mb-4">
            The department maintains strong industry linkages with Microsoft, IBM, GDG, and national incubators, enabling hands-on learning and startup incubation. Student life thrives through active IEEE, ACM, and GDSC chapters, as well as media and literary societies. Events like hackathons, research expos, and innovation challenges support career growth and industry engagement.
          </p>
          <p className="text-lg text-sky-200">
            UBIT’s alumni network of over 15,000 professionals drives impact globally across tech, academia, policy, and entrepreneurship. With a mission to produce ethical, industry-ready, and globally competitive graduates, UBIT continues to lead as a beacon of excellence in computing education.
          </p>
        </div>

        {/* Image Section */}
        <div className="md:w-1/2">
          <img
            src={ubitImage}
            alt="UBIT Building"
            className="rounded-2xl shadow-lg w-full h-auto object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default AboutEvent;
