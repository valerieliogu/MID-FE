import React from "react";
import { motion } from "framer-motion";

function Header() {
  return (
    <header
      id="header"
      className="flex flex-col justify-center items-center text-center min-h-screen bg-dark text-primary px-6 pt-20"
    >
      <motion.h1
        className="text-6xl font-extrabold mb-4"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Valerie Liogu
      </motion.h1>

      <motion.h2
        className="text-2xl mb-6 text-yellow-300"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        Front-End Developer | UI Designer
      </motion.h2>

      <motion.p
        className="max-w-2xl text-gray-300 mb-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
      >
        I create elegant and responsive user interfaces with a modern touch.
      </motion.p>

      <motion.div
        className="flex space-x-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
      >
        <a
          href="#home"
          className="bg-primary text-dark px-6 py-3 rounded-lg hover:scale-105 transition-transform"
        >
          View Projects
        </a>
        <a
          href="#contact"
          className="border border-primary px-6 py-3 rounded-lg hover:bg-primary hover:text-dark transition-all"
        >
          Contact Me
        </a>
      </motion.div>
    </header>
  );
}

export default Header;
