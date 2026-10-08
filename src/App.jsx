import Header from "./components/Header";
import Footer from "./components/Footer";
import React from "react";
import IntroComponent from "./components/IntroComponent";
import AboutMe from "./components/AboutMe";
import Experience from "./components/Experience";
import SkillSet from "./components/SkillSet";
import Projects from "./components/Projects";

export default function App() {
  return (
    <div className="">
      <Header />
      <div className="backgroundDiv">
        <div className="container">
          <IntroComponent />
          <AboutMe />
          <Experience />
          <SkillSet />
          <Projects />
          <Footer />
        </div>
      </div>
    </div>
  );
}
