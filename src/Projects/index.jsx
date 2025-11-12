import React from "react";

function Projects() {
  const projects = [
    { title: "Portfolio Website", desc: "Built with React + TailwindCSS" },
    { title: "UI Design Mockup", desc: "Created using Figma" },
    { title: "Interactive Landing Page", desc: "Responsive animations & layouts" },
  ];

  return (
    <div className="max-w-5xl mx-auto text-center px-6">
      <h2 className="text-3xl font-bold mb-10 text-[#FEEF4C]">Projects</h2>
      <div className="grid md:grid-cols-3 gap-8">
        {projects.map((p, index) => (
          <div
            key={index}
            className="p-6 bg-[#2A323F] border border-[#FEEF4C]/30 rounded-xl hover:border-[#FEEF4C] transition-all"
          >
            <h3 className="text-xl font-semibold mb-2 text-[#FEEF4C]">
              {p.title}
            </h3>
            <p className="text-gray-300">{p.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
