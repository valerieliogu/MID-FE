import React from "react";

function Header() {
  return (
    <header
      id="header"
      className="flex flex-col justify-center items-center text-center min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white px-6"
    >
      <h1 className="text-6xl font-extrabold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-pink-400">
        Valerie Liogu
      </h1>
      <h2 className="text-2xl text-gray-300 mb-6">Front-End Developer | UI Designer</h2>
      <p className="text-gray-400 max-w-2xl mb-8">
        Front-End Dev. | UI Designer
      </p>
      <div className="flex space-x-4">
        <a
          href="#about"
          className="bg-blue-500 hover:bg-blue-600 px-6 py-3 rounded-lg transition-all duration-300"
        >
          About Me
        </a>
        <a
          href="#projects"
          className="border border-pink-400 text-pink-400 hover:bg-pink-400 hover:text-white px-6 py-3 rounded-lg transition-all duration-300"
        >
          See Projects
        </a>
      </div>
    </header>
  );
}

export default Header;
