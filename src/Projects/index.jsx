import React from "react";

function Projects() {
  const projects = [
    { title: "Portfolio Website", desc: "Personal site built with React and TailwindCSS." },
    { title: "Recipe App", desc: "Search and save recipes using an external API." },
    { title: "Todo Dashboard", desc: "Simple task manager with local storage." },
  ];

  return (
    <section
      id="projects"
      className="min-h-screen bg-gray-900 text-white px-6 py-20 text-center"
    >
      <h2 className="text-4xl font-bold mb-10 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-pink-400">
        Projects
      </h2>
      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-gray-800 p-6 rounded-2xl shadow-lg hover:scale-105 transition-transform duration-300"
          >
            <h3 className="text-2xl font-semibold mb-2">{project.title}</h3>
            <p className="text-gray-400">{project.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
