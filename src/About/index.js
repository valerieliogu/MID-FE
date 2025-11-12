import React from "react";

function About() {
  return (
    <section
      id="about"
      className="min-h-screen flex flex-col justify-center items-center text-center bg-gray-800 text-white px-6 py-20"
    >
      <h2 className="text-4xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-pink-400">
        About Me
      </h2>
      <p className="text-gray-300 max-w-2xl mb-4">
        I’m a Front-End Developer who loves turning creative ideas into real, interactive websites.
        I focus on clean design, responsive layouts, and smooth user experiences.
      </p>
      <p className="text-gray-400 max-w-2xl">
        I enjoy learning new tools, exploring UI/UX design, and building web apps using React and TailwindCSS.
      </p>
    </section>
  );
}

export default About;
