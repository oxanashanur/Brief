import React from "react";

import "./social.css";

const Social = () => {
  return (
    <div>
      <h2>Social</h2>
      <ul className="">
        <li className="link">
          <a href="https://github.com/oxanashanur" className="card-link">
            Github
          </a>
        </li>
        <li>
          <a href="mailto:oxanaboki@gmail.com" className="card-link">
            oxanaboki@gmail.com
          </a>
        </li>
        <li>
          <a href="https://www.dropbox.com/s/f66ct5bqn57sg9v/bokievets-eng.pdf?dl=0" className="card-link">
            Download CV
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Social;
