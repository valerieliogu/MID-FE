import React from "react";

function Contact() {
  return (
    <section
      id="contact"
      className="min-h-screen flex flex-col justify-center items-center text-center bg-gray-800 text-white px-6 py-20"
    >
      <h2 className="text-4xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-pink-400">
        Contact Me
      </h2>
      <p className="text-gray-300 mb-8 max-w-xl">
        Feel free to reach out for collaborations or just say hello 👋  
        I’ll do my best to reply as soon as possible.
      </p>

      <form className="w-full max-w-md space-y-4">
        <input
          type="text"
          placeholder="Your Name"
          className="w-full p-3 rounded-lg bg-gray-900 text-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <input
          type="email"
          placeholder="Your Email"
          className="w-full p-3 rounded-lg bg-gray-900 text-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <textarea
          placeholder="Your Message"
          rows="4"
          className="w-full p-3 rounded-lg bg-gray-900 text-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
        ></textarea>
        <button
          type="submit"
          className="w-full bg-blue-500 hover:bg-blue-600 text-white py-3 rounded-lg transition-all duration-300"
        >
          Send Message
        </button>
      </form>
    </section>
  );
}

export default Contact;
