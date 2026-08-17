const AboutPage = () => {
  return (
    <div className="max-w-5xl mx-auto px-6 py-16 bg-gray-900">
      {/* Intro */}
      <div className="flex flex-col md:flex-row md:items-start items-center gap-10 mb-12">
        <img
          src="/images/no-image.png"
          alt="profile"
          className="w-40 h-40 rounded-full object-cover border-4 border-blue-500 shadow-md"
        />
        <div>
          <h1 className="text-3xl font-bold text-white mb-2">
            Hi, I'm Graham 👋
          </h1>
          <p className="text-gray-300 text-lg">
            I'm a retired IT tech support specialist who likes coding. I'm also
            a keen motorcyclist with over 40 years riding experience. I also
            enjoy building plastic model kits be they ships, planes, tanks, any
            thing that looks interesting and enjoyable to build and display.
          </p>
        </div>
      </div>

      {/* Bio Section */}
      <div className="mb-12">
        <h2 className="text-2xl font-semibold text-white mb-4">My Mission</h2>
        <p className="text-gray-300 leading-relaxed">
          After retiring, I made it my mission to enjoy life and having
          something new to look forward to each day.
        </p>
      </div>

      {/* Tech Stack */}
      <h2 className="text-2xl font-semibold text-white mb-4">
        🚀 Tech I've Used
      </h2>
      <ul className="flex flex-wrap gap-4 text-sm text-gray-300">
        {[
          "React",
          "Vue",
          "Tailwind CSS",
          "Node.js",
          "Laravel",
          "Prisma",
          "MongoDB",
          "PostgreSQL",
        ].map((tech) => (
          <li key={tech} className="bg-gray-700 px-3 py-1 rounded-md">
            {tech}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AboutPage;
