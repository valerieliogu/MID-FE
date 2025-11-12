import React, { useState } from "react";

function Navbar() {
  const [open, setOpen] = useState(false);

  const toggleMenu = () => setOpen(!open);

  return (
    <nav className="fixed top-0 left-0 w-full bg-[#1E242E] text-primary shadow-md z-50">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold">Valerie</h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8">
          <li><a href="#header" className="hover:text-yellow-300">Home</a></li>
          <li><a href="#home" className="hover:text-yellow-300">Projects</a></li>
          <li><a href="#contact" className="hover:text-yellow-300">Contact</a></li>
        </ul>

        {/* Mobile Menu Toggle */}
        <button className="md:hidden" onClick={toggleMenu}>
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-[#1E242E] flex flex-col items-center py-4 space-y-4">
          <a href="#header" onClick={toggleMenu}>Home</a>
          <a href="#home" onClick={toggleMenu}>Projects</a>
          <a href="#contact" onClick={toggleMenu}>Contact</a>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
