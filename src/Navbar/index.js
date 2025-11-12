import React from "react";

function Navbar() {
  return (
    <nav className="fixed top-0 w-full bg-gray-900 bg-opacity-80 backdrop-blur-sm text-white shadow-md z-50">
      <div className="container mx-auto flex justify-between items-center px-6 py-4">
        <h1 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-pink-400">
          Valerie
        </h1>
        <ul className="flex space-x-6 text-gray-300">
          <li><a href="#header" className="hover:text-blue-400 transition">Home</a></li>
          <li><a href="#about" className="hover:text-blue-400 transition">About</a></li>
          <li><a href="#projects" className="hover:text-blue-400 transition">Projects</a></li>
          <li><a href="#contact" className="hover:text-blue-400 transition">Contact</a></li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
