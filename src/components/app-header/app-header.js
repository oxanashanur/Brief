import React from "react";

import "./app-header.css";
import foto from "./oxana.jpeg";

const AppHeader = () => {
  return (
    <div className="text-center">
      <img src={foto} class="rounded" alt="foto"></img>
      <div className="card-body app-header">
        <h1>Oxana Bokievets</h1>
        <h2>Front-end developer</h2>
        <p>I have experience in efficient website development, proactive feature optimisation, and relentless debugging, updating the user interface in accordance with changing needs and requirements. My strengths are attention to detail, responsibility, ability to solve non-standard problems and organise my workflow.</p>
      </div>
    </div>
  );
};

export default AppHeader;
