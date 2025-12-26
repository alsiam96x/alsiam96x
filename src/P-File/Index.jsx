import React from "react";
import Me from "../C-File/Me";
import AboutMe from "../C-File/AboutMe";
import Contact from "../C-File/Contact";

const Index = () => {
  return (
    <div className="bg-gray-900 w-full mx-auto text-white relative overflow-hidden">

      {/* Hero / Introduction Section */}
      <Me />
      {/* About Me Section */}
      <AboutMe />
      {/* Contact Section */}
      <Contact />
    </div>
  );
};

export default Index;
