import { Briefcase, FileText, Mic, Users, Building2, Code } from 'lucide-react';

const Highlights = () => {
  const highlights = [
    {
      title: 'Keynote Talks',
      description:
        'Hear from tech leaders and industry pioneers about career trends and future opportunities.',
      icon: <Mic className="text-sky-600 w-8 h-8" />,
    },
    {
      title: 'Resume Clinics',
      description:
        'Get expert feedback on your resume and learn how to stand out to recruiters.',
      icon: <FileText className="text-sky-600 w-8 h-8" />,
    },
    {
      title: 'Mock Interviews',
      description:
        'Practice your interview skills with HR professionals and receive constructive insights.',
      icon: <Briefcase className="text-sky-600 w-8 h-8" />,
    },
    {
      title: 'Networking Zone',
      description:
        'Meet employers, alumni, and peers to build meaningful career connections.',
      icon: <Users className="text-sky-600 w-8 h-8" />,
    },
    {
      title: 'Company Booths',
      description:
        'Explore booths from participating companies and discover exciting job roles.',
      icon: <Building2 className="text-sky-600 w-8 h-8" />,
    },
    {
      title: 'Skill Workshops',
      description:
        'Participate in practical workshops on coding, communication, and personal branding.',
      icon: <Code className="text-sky-600 w-8 h-8" />,
    },
  ];

  return (
    <section className="bg-gray-50 py-20 px-6">
      <div className="text-center mb-14">
        <p className="text-base uppercase text-sky-600 font-semibold tracking-widest">
          Year After Year, We Make It Happen
        </p>
        <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mt-2">
          Event Highlights
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">
        {highlights.map((item, index) => (
          <div
            key={index}
            className="bg-white border border-gray-200 rounded-2xl p-6 shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
          >
            <div className="flex items-center gap-3 mb-4">
              {item.icon}
              <h3 className="text-xl font-bold text-sky-700">{item.title}</h3>
            </div>
            <p className="text-gray-600 leading-relaxed">{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Highlights;
