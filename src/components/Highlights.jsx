import {
  Briefcase,
  FileText,
  Mic,
  Users,
  Building2,
  Code,
  Lightbulb,
  Rocket,
  ShieldCheck,
  MessageSquare
} from 'lucide-react';

const Highlights = () => {
  const highlights = [
    {
      title: 'Industry Engagement & Recruitment',
      description:
        'Direct interaction between students and professionals to align academic curricula with evolving market needs.',
      icon: <Briefcase className="text-sky-600 w-8 h-8" />,
    },
    {
      title: 'Panel Discussions & Seminars',
      description:
        'Sessions with tech industry giants to foster innovation and entrepreneurship among students.',
      icon: <Mic className="text-sky-600 w-8 h-8" />,
    },
    {
      title: 'Skill Development Workshops',
      description:
        'Hands-on training in IT tools, resume writing, interview skills, and personal branding.',
      icon: <Code className="text-sky-600 w-8 h-8" />,
    },
    {
      title: 'Alumni Networking',
      description:
        'Reconnecting with alumni to share career insights and foster continuous learning.',
      icon: <Users className="text-sky-600 w-8 h-8" />,
    },
    {
      title: 'Innovation Showcases',
      description:
        'Presentation of student-led startups and projects to a broad range of employers.',
      icon: <Lightbulb className="text-sky-600 w-8 h-8" />,
    },
    {
      title: 'Interactive Challenges',
      description:
        'Hackathons, coding contests, and problem-solving challenges to test and highlight student talent.',
      icon: <Rocket className="text-sky-600 w-8 h-8" />,
    },
    {
      title: 'Career Counseling & Resume Clinics',
      description:
        'One-on-one sessions with career professionals for personalized guidance and resume reviews.',
      icon: <FileText className="text-sky-600 w-8 h-8" />,
    },
    {
      title: 'Tech Demonstrations',
      description:
        'Live demonstrations and product launches from participating companies.',
      icon: <Building2 className="text-sky-600 w-8 h-8" />,
    },
    {
      title: 'Emerging Tech Workshops',
      description:
        'Hands-on learning in AI, Blockchain, Cybersecurity, and other emerging technologies.',
      icon: <ShieldCheck className="text-sky-600 w-8 h-8" />,
    },
    {
      title: 'Feedback & Improvement',
      description:
        'Feedback systems to collect insights from attendees and continuously enhance future fests.',
      icon: <MessageSquare className="text-sky-600 w-8 h-8" />,
    },
  ];

  return (
    <section className="bg-gray-50 py-20 px-6">
      <div className="text-center mb-14">
        <p className="text-base uppercase text-sky-600 font-semibold tracking-widest">
          Signature Features of Career Fest 2025
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
