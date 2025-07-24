import React from 'react';

const Schedule = () => {
  const schedule = [
    { time: '09:00 AM', event: 'Opening Ceremony' },
    { time: '10:00 AM', event: 'Keynote Session' },
    { time: '11:00 AM', event: 'Panel Discussion' },
    { time: '12:00 PM', event: 'Resume Clinic' },
    { time: '01:00 PM', event: 'Lunch Break' },
    { time: '02:00 PM', event: 'Networking Session' },
    { time: '03:00 PM', event: 'Mock Interviews' },
    { time: '04:00 PM', event: 'Giveaway & Swag Time' },
    { time: '05:00 PM', event: 'Closing Remarks' },
  ];

  return (
    <section className="bg-gradient-to-b from-white via-blue-50 to-white py-20 px-4 md:px-10">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-sky-900">Event Schedule</h2>
        <p className="text-sky-600 mt-2 text-lg">Plan your day with confidence</p>
      </div>

      <div className="max-w-4xl mx-auto space-y-4">
        {schedule.map((item, index) => (
          <div
            key={index}
            className="bg-white border border-sky-100 rounded-xl p-6 shadow-sm hover:shadow-lg transition-all duration-300 hover:bg-sky-50"
          >
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div className="text-sky-700 font-semibold text-lg md:text-xl">
                {item.time}
              </div>
              <div className="text-gray-800 text-base md:text-lg font-medium">
                {item.event}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Schedule;
