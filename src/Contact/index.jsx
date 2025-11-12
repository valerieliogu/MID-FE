import React from "react";
import { motion } from "framer-motion";

function Contact() {
  return (
    <section id="contact" className="py-20 bg-[#2A323F] text-center">
      <motion.h2
        className="text-4xl font-bold mb-8 text-primary"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Contact Me
      </motion.h2>

      <motion.form
        className="max-w-md mx-auto flex flex-col space-y-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        <input
          type="text"
          placeholder="Your Name"
          className="p-3 rounded-lg border border-primary bg-[#394150] text-primary"
        />
        <input
          type="email"
          placeholder="Your Email"
          className="p-3 rounded-lg border border-primary bg-[#394150] text-primary"
        />
        <textarea
          placeholder="Your Message"
          className="p-3 rounded-lg border border-primary bg-[#394150] text-primary"
          rows="4"
        ></textarea>
        <button
          type="submit"
          className="bg-primary text-dark font-bold py-3 rounded-lg hover:scale-105 transition-transform"
        >
          Send Message
        </button>
      </motion.form>
    </section>
  );
}

export default Contact;
