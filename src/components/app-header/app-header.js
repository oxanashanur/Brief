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
      </div>
    </div>
  );
};

export default AppHeader;
