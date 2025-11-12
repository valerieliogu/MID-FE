import React from "react";

function Home() {
  return (
    <section
      id="home"
      className="min-h-screen flex flex-col justify-center items-center text-center bg-gradient-to-b from-gray-900 to-gray-800 text-white px-6"
    >
      <h1 className="text-6xl font-extrabold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-pink-400">
        Welcome to My Portfolio
      </h1>
      <p className="text-gray-300 max-w-2xl mb-6">
        I’m <span className="text-blue-400 font-semibold">Valerie</span>, a UO Front-End Developer.
      </p>
      <a
        href="#projects"
        className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg transition-all duration-300"
      >
        Explore My Work
      </a>
    </section>
  );
}

export default Home;
