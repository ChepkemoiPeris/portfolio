import React from "react";
import About from "./About";
import Contact from "./Contact";
import Skills from "./Skills";
import Description from "./Description";
import Navigation from "./Navigation";
import Projects from "./Projects";
import Footer from "./Footer";
function App() {
  return (
    <div>
      <Navigation />
      <Description />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}
export default App;
