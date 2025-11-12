import React from "react";

function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400 text-center py-6">
      <p>© {new Date().getFullYear()} Valerie Liogu. All rights reserved.</p>
      <p className="text-sm mt-2">2025 Front-End Web Development - A</p>
    </footer>
  );
}

export default Footer;
