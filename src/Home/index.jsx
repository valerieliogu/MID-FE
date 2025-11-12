import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

function Home() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/projects")
      .then((res) => res.json())
      .then((data) => setProjects(data))
      .catch((err) => console.error("Error fetching data:", err));
  }, []);

  return (
    <section id="home" className="py-20 bg-dark text-primary text-center">
      <h2 className="text-4xl font-bold mb-8">My Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-6">
        {projects.map((p, i) => (
          <motion.div
            key={p.id}
            className="bg-[#394150] p-6 rounded-xl shadow-lg hover:scale-105 transition-transform"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.2 }}
          >
            <h3 className="text-2xl font-semibold mb-2">{p.title}</h3>
            <p className="text-gray-300">{p.tech}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Home;
