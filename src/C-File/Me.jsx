const Me = () => {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 bg-gradient-to-b from-gray-900 to-gray-800 relative overflow-hidden">
      {/* Decorative blurred circles */}
      <div className="absolute -top-32 -left-32 w-72 h-72 bg-blue-500 rounded-full opacity-20 blur-3xl animate-pulse-slow"></div>
      <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-purple-500 rounded-full opacity-20 blur-3xl animate-pulse-slow"></div>

      <div className="flex flex-col md:flex-row items-center bg-gray-950 rounded-3xl shadow-2xl overflow-hidden max-w-5xl w-full p-8 md:p-12 transform transition-transform duration-500 hover:scale-105 hover:shadow-3xl">

        {/* Profile Image */}
        <div className="flex-1 flex justify-center md:justify-start mt-6 md:mt-0 relative">
          <div className="relative group">
            <img
              src="/profile.jpg"
              alt="Siam Profile"
              className="w-48 h-48 md:w-64 md:h-64 rounded-full object-cover shadow-2xl border-4 border-blue-600 transform transition duration-500 group-hover:scale-110 group-hover:rotate-3"
            />
            <div className="absolute inset-0 rounded-full bg-gradient-to-t from-blue-600 via-transparent opacity-20 transition duration-500 group-hover:opacity-50 group-hover:scale-110 group-hover:rotate-3"></div>
          </div>
        </div>

        {/* Text Section */}
        <div className="flex-1 flex flex-col justify-center text-center md:text-left mt-6 md:mt-0 md:pl-12">
          <h1 className="text-4xl md:text-5xl logofont mb-4 text-white leading-tight">
            Hi, I’m <span className="text-blue-500">GM Al Siam</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-400 mb-6 leading-relaxed">
            I am a <span className="text-blue-500 font-semibold">React Developer</span> and a <span className="text-blue-500 font-semibold">Content Creator</span>. I love building modern web applications as much as capturing the beauty of nature through my camera.
          </p>

          <div className="flex justify-center md:justify-start gap-4 flex-wrap">
            <a
              href="#contact"
              className="px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-full text-white font-semibold transition transform hover:-translate-y-1 hover:shadow-xl"
            >
              Contact Me
            </a>
            <a
              href="#about"
              className="px-6 py-3 border border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white rounded-full font-semibold transition transform hover:-translate-y-1 hover:shadow-xl"
            >
              About Me
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};


export default Me;
