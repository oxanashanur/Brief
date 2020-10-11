import React from "react";

import "./projects.css";
import logo from "./globe.svg";
import logotype from "./github.svg";

const Projects = () => {
  return (
    <div>
      <h2>Projects</h2>
      <ul className="">
        <li>
          <div className="card-body">
            <h5 classNamess="card-title">Map</h5>
            <p className="card-text">Landing page</p>
            <img src={logo} alt="logo" width="12px" height="12px" />
            <a href="https://map.vl.ru/app/" className="card-link">
              project
            </a>
            <img src={logotype} alt="logo" width="12px" height="12px" />
            <a href="https://github.com/oxanashanur/Map" className="card-link">
              code
            </a>
          </div>
        </li>
        <li>
          <div className="card-body">
            <h5 classNamess="card-title">OFFO</h5>
            <p className="card-text">Landing page</p>
            <img src={logo} alt="logo" width="12px" height="12px" />
            <a href="https://www.vl.ru/off/app" className="card-link">
              project
            </a>
            <img src={logotype} alt="logo" width="12px" height="12px" />
            <a href="https://github.com/oxanashanur/OFFO" className="card-link">
              code
            </a>
          </div>
        </li>
        <li>
          <div className="card-body">
            <h5 classNamess="card-title">Movie</h5>
            <p className="card-text">
              In that project I solved simple tasks while learning Javascript
            </p>
            <img src={logo} alt="logo" width="12px" height="12px" />
            <a
              href="https://oxanashanur.github.io/movie/"
              className="card-link"
            >
              project
            </a>
            <img src={logotype} alt="logo" width="12px" height="12px" />
            <a
              href="https://github.com/oxanashanur/movie"
              className="card-link"
            >
              code
            </a>
          </div>
        </li>
        <li>
          <div className="card-body">
            <h5 classNamess="card-title">Healthy food</h5>
            <p className="card-text">
              Service for delivery of healthy food from the online store in
              Javascript
            </p>
            <img src={logo} alt="logo" width="12px" height="12px" />
            <a
              href="https://oxanashanur.github.io/Healthy-food/"
              className="card-link"
            >
              project
            </a>
            <img src={logotype} alt="logo" width="12px" height="12px" />
            <a
              href="https://github.com/oxanashanur/Healthy-food"
              className="card-link"
            >
              code
            </a>
          </div>
        </li>
        <li>
          <div className="card-body">
            <h5 classNamess="card-title">TW</h5>
            <p className="card-text">
              A test project using components like for TW components in React.js
            </p>
            <img src={logo} alt="logo" width="12px" height="12px" />
            <a href="https://tw-kappa.vercel.app/" className="card-link">
              project
            </a>
            <img src={logotype} alt="logo" width="12px" height="12px" />
            <a href="https://github.com/oxanashanur/TW" className="card-link">
              code
            </a>
          </div>
        </li>
        <li>
          <div className="card-body">
            <h5 classNamess="card-title">Game of Throns</h5>
            <p className="card-text">
              Service for fans of serial Game of Throns in React.js
            </p>
            <img src={logo} alt="logo" width="12px" height="12px" />
            <a href="https://game-of-throns.vercel.app/" className="card-link">
              project
            </a>
            <img src={logotype} alt="logo" width="12px" height="12px" />
            <a
              href="https://github.com/oxanashanur/Game-of-Throns"
              className="card-link"
            >
              code
            </a>
          </div>
        </li>
        <li>
          <div className="card-body">
            <h5 classNamess="card-title">Delivery of food</h5>
            <p className="card-text">
              Service for delivery of food in Redux.js
            </p>
            <img src={logo} alt="logo" width="12px" height="12px" />
            <a
              href="https://delivery-of-food.vercel.app/"
              className="card-link"
            >
              project
            </a>
            <img src={logotype} alt="logo" width="12px" height="12px" />
            <a
              href="https://github.com/oxanashanur/Delivery-of-food"
              className="card-link"
            >
              code
            </a>
          </div>
        </li>
        <li>
          <div className="card-body">
            <h5 classNamess="card-title">GOT</h5>
            <p className="card-text">
              Service for fans of serial GOT using analytics such as Enzyme,
              Jest-extended and other
            </p>
            <img src={logo} alt="logo" width="12px" height="12px" />
            <a href="https://got-six.vercel.app/" className="card-link">
              project
            </a>
            <img src={logotype} alt="logo" width="12px" height="12px" />
            <a href="https://github.com/oxanashanur/GOT" className="card-link">
              code
            </a>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default Projects;
