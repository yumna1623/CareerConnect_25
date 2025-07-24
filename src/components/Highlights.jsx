const Highlights = () => {
  const highlights = [
    {
      title: 'Keynote Talks',
      description: 'Hear from tech leaders and industry pioneers about career trends and future opportunities.'
    },
    {
      title: 'Resume Clinics',
      description: 'Get expert feedback on your resume and learn how to stand out to recruiters.'
    },
    {
      title: 'Mock Interviews',
      description: 'Practice your interview skills with HR professionals and receive constructive insights.'
    },
    {
      title: 'Networking Zone',
      description: 'Meet employers, alumni, and peers to build meaningful career connections.'
    },
    {
      title: 'Company Booths',
      description: 'Explore booths from participating companies and discover exciting job roles.'
    },
    {
      title: 'Skill Workshops',
      description: 'Participate in practical workshops on coding, communication, and personal branding.'
    }
  ];

  return (
    <section className="bg-sky-900 py-16 px-6">
      <h2 className="text-3xl text-center font-semibold mb-12">Event Highlights</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {highlights.map((item, index) => (
          <div
            key={index}
            className="bg-sky-800 p-6 rounded-lg shadow-md hover:shadow-xl transition duration-300"
          >
            <h3 className="text-xl font-bold mb-2">{item.title}</h3>
            <p className="text-sky-200">{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Highlights;