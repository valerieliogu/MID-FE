import React from "react";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Home from "./components/Home";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

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
