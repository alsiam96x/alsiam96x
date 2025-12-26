const Education = () => {
  const educationData = [
    {
      year: "2023 - Present",
      title: "Self-Taught Web Developer",
      description: "Learning and building projects with JavaScript, React, Node.js, Tailwind CSS, and MongoDB.",
    },
    {
      year: "2020 - 2023",
      title: "Bachelor’s Degree in Computer Science",
      description: "Completed a BSc in Computer Science, focusing on software development and web technologies.",
    },
  ];

  return (
    <section
      id="education"
      className="py-20 px-6 bg-gray-950 text-white flex justify-center"
    >
      <div className="max-w-4xl w-full">
        <h2 className="text-4xl font-bold mb-12 text-center">Education</h2>
        <div className="space-y-10">
          {educationData.map((edu, index) => (
            <div key={index} className="flex flex-col md:flex-row items-start md:items-center gap-6">
              {/* Year */}
              <div className="text-blue-500 font-bold w-32 flex-shrink-0">
                {edu.year}
              </div>
              {/* Details */}
              <div>
                <h3 className="text-2xl font-semibold">{edu.title}</h3>
                <p className="text-gray-400">{edu.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
