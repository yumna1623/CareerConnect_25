
import React from 'react';

const Schedule = () => {
  const schedule = [
    {
      time: '09:00 – 10:00',
      event: 'Registration & Welcome Breakfast',
      description: 'Kickstart the day with registration and networking over breakfast.',
    },
    {
      time: '10:00 – 10:30',
      event: 'Opening Ceremony',
      description: 'Welcome address by UBIT leadership and keynote speech.',
    },
    {
      time: '10:30 – 13:00',
      event: 'Career Fair & Walk-in Interviews',
      description: 'Engagement with top tech companies and startups.',
    },
    {
      time: '11:00 – 12:00',
      event: 'TED-style Talk',
      eventDetail: '(Concurrent Session)', // Added for clarity on concurrent events
      description: 'Topic: "Thinking at Scale: Navigating Your Tech Career".',
    },
    {
      time: '12:00 – 13:00',
      event: 'Panel Discussion',
      eventDetail: '(Concurrent Session)', // Added for clarity on concurrent events
      description: 'Insights from industry leaders on emerging technologies.',
    },
    {
      time: '13:00 – 14:00',
      event: 'Networking Lunch',
      description: 'Informal interactions and networking over lunch.',
    },
    {
      time: '14:00 – 15:30',
      event: 'Skill Development Workshops',
      description: 'Resume building, interview skills, and personal branding.',
    },
    {
      time: '15:30 – 16:30',
      event: 'Startup & Innovation Showcase',
      description: 'Student entrepreneurs present their innovative ideas.',
    },
    {
      time: '16:30 – 17:00',
      event: 'Closing Remarks & Certificate Distribution',
      description: 'Wrap-up and distribution of participation certificates.',
    },
  ];

  return (
    <section className="bg-gray-50 py-20 px-4 md:px-10">
      <div className="text-center mb-16">
        <h2 className="text-5xl font-extrabold text-gray-800 leading-tight">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
            Career Fest 2025
          </span>{' '}
          Agenda
        </h2>
        <p className="text-gray-600 mt-4 text-xl max-w-2xl mx-auto">
          Join us for a day of insights, networking, and opportunities designed to elevate your tech career.
        </p>
        <p className="text-gray-500 mt-2 text-base">
          **Venue:** Department of Computer Science (UBIT), University of Karachi{' '}
          <span className="mx-2">|</span> **Date:** To Be Announced{' '}
          <span className="mx-2">|</span> **Estimated Attendance:** 1,000–2,500 participants
        </p>
      </div>

      <div className="max-w-4xl mx-auto space-y-6">
        {schedule.map((item, index) => (
          <div
            key={index}
            className="group relative bg-white border border-gray-200 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 overflow-hidden"
          >
            {/* Optional: Add a subtle diagonal stripe or corner accent for visual interest */}
            <div className="absolute top-0 left-0 w-2 h-full bg-gradient-to-b from-blue-500 to-purple-500 transform -skew-y-12 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-top-left"></div>

            <div className="flex flex-col md:flex-row md:items-start justify-between gap-6 relative z-10">
              <div className="text-blue-700 font-bold text-xl md:text-2xl w-full md:w-1/4 flex-shrink-0">
                {item.time}
              </div>
              <div className="w-full md:w-3/4">
                <div className="text-gray-900 font-extrabold text-lg md:text-xl leading-snug">
                  {item.event}
                  {item.eventDetail && (
                    <span className="ml-2 text-blue-500 text-sm font-semibold block md:inline-block">
                      {item.eventDetail}
                    </span>
                  )}
                </div>
                <p className="text-gray-600 text-sm mt-2 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Schedule;