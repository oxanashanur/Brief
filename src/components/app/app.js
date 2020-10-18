import React from "react";

import AppHeader from "../app-header";
import Social from "../social";
import Skills from "../skills";
import Tools from "../tools";
import Projects from "../projects";

import "./app.css";

const App = () => {
  return (
    <div className="app col-md-auto">
      <AppHeader />
      <div className="skills d-flex">
        <Skills />
      </div>
      <div className="tools d-flex">
        <Tools />
      </div>
      <div className="projects d-flex">
        <Projects />
      </div>
      <div className="social d-flex">
        <Social />
      </div>
    </div>
  );
};

export default App;
