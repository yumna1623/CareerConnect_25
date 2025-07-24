import React from 'react';

const Schedule = () => {
  return (
    <section className="bg-sky-900 py-16 px-6">
      <h2 className="text-3xl font-semibold text-center mb-8">Event Schedule</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full table-auto border-collapse border border-sky-800 text-white">
          <thead>
            <tr className="bg-sky-800">
              <th className="border border-sky-700 px-4 py-2">Time</th>
              <th className="border border-sky-700 px-4 py-2">Event</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-sky-700 px-4 py-2">09:00 AM</td>
              <td className="border border-sky-700 px-4 py-2">Opening Ceremony</td>
            </tr>
            <tr>
              <td className="border border-sky-700 px-4 py-2">10:00 AM</td>
              <td className="border border-sky-700 px-4 py-2">Keynote Session</td>
            </tr>
            <tr>
              <td className="border border-sky-700 px-4 py-2">11:00 AM</td>
              <td className="border border-sky-700 px-4 py-2">Panel Discussion</td>
            </tr>
            <tr>
              <td className="border border-sky-700 px-4 py-2">12:00 PM</td>
              <td className="border border-sky-700 px-4 py-2">Resume Clinic</td>
            </tr>
            <tr>
              <td className="border border-sky-700 px-4 py-2">01:00 PM</td>
              <td className="border border-sky-700 px-4 py-2">Lunch Break</td>
            </tr>
            <tr>
              <td className="border border-sky-700 px-4 py-2">02:00 PM</td>
              <td className="border border-sky-700 px-4 py-2">Networking Session</td>
            </tr>
            <tr>
              <td className="border border-sky-700 px-4 py-2">03:00 PM</td>
              <td className="border border-sky-700 px-4 py-2">Mock Interviews</td>
            </tr>
            <tr>
              <td className="border border-sky-700 px-4 py-2">04:00 PM</td>
              <td className="border border-sky-700 px-4 py-2">Giveaway & Swag Time</td>
            </tr>
            <tr>
              <td className="border border-sky-700 px-4 py-2">05:00 PM</td>
              <td className="border border-sky-700 px-4 py-2">Closing Remarks</td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default Schedule;