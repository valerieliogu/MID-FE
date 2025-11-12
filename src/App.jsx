import React from "react";
import Navbar from "./Navbar";
import Header from "./Header";
import Home from "./Home";
import Contact from "./Contact";
import Footer from ".//Footer";

function App() {
  return (
    <div className="bg-dark text-primary font-sans scroll-smooth">
      <Navbar />
      <Header />
      <Home />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
