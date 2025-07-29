import React from 'react';
import { FaBullseye } from 'react-icons/fa';

const objectives = [
  {
    title: 'Enhance Industry-Academia Collaboration',
    description:
      'Building upon the success of past events like the UBIT Career Fest 2023, the 2025 fest aims to strengthen ties between academia and industry. It will facilitate direct interactions between students and professionals to align academic curricula with evolving market needs.',
  },
  {
    title: 'Promote Entrepreneurship and Innovation',
    description:
      'Recognizing the importance of entrepreneurship, Career Fest 2025 will nurture entrepreneurial skills among students. Collaborations with KUBIC and ORIC will offer platforms to showcase innovative ideas and products.',
  },
  {
    title: 'Facilitate Skill Development and Career Readiness',
    description:
      'The fest will include workshops and sessions to enhance students’ IT proficiency, including tools, software, and real-world applications — preparing them for the global job market.',
  },
  {
    title: 'Strengthen Alumni Engagement',
    description:
      'Dedicated alumni sessions will reconnect graduates with the department, encouraging them to share career insights and experiences with current students, building community and mentorship.',
  },
  {
    title: 'Expand Employer Participation',
    description:
      'The 2025 fest will invite a diverse range of companies to engage with students through interviews, presentations, and job offerings, broadening employment opportunities.',
  },
];

const StrategicObjectives = () => {
  return (
    <section className="bg-sky-900 py-20 px-6 text-sky-100">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold flex justify-center items-center gap-3 text-white">
            <FaBullseye className="text-sky-300" />
            Strategic Objectives - Career Fest 2025
          </h2>
          <p className="text-lg text-sky-300 mt-2">
            Our goals for empowering students, connecting with industry, and fostering innovation.
          </p>
        </div>

        <div className="space-y-10">
          {objectives.map((obj, index) => (
            <div key={index} className="flex gap-4 items-start">
              <div className="flex-shrink-0">
                <div className="h-10 w-10 rounded-full bg-sky-500 text-white flex items-center justify-center font-bold text-lg shadow-md">
                  {index + 1}
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white">{obj.title}</h3>
                <p className="text-sky-200 mt-2 text-justify">{obj.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StrategicObjectives;
