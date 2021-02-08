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
            <h5 classNamess="card-title">Raiffeisenbank | <a href="https://www.raiffeisen.ru" className="card-link">www.raiffeisen.ru</a></h5>
            <p className="card-text">Raiffeisenbank is a Russian commercial bank, a subsidiary of the Austrian banking group Raiffeisen Bank International.</p>
            <p className="card-text">In this project, I used Javascript, HTML5 + CSS3 responsive / adaptive, taking into account the peculiarities of different devices, experience of layout for Retina, font selection. Viewport of tablet, mobile phone, web version were made.</p>
            <img src={logo} alt="logo" width="12px" height="12px" />
            <a href="https://bank-gilt.vercel.app/" className="card-link">
              Landing Page
            </a>
            <img src={logotype} alt="logo" width="12px" height="12px" />
            <a href="https://github.com/oxanashanur/Bank" className="card-link">
              GitHub Code
            </a>
          </div>
        </li>
        <li>
          <div className="card-body">
            <h5 classNamess="card-title">Game of Throns</h5>
            <p className="card-text">This is a small network service for getting data from the API of Ice And Fire.</p>
            <p className="card-text">In this project, I used tools such as HTML5 / CSS3, React, Fetch API, React Router, React Strap.</p>
            <img src={logo} alt="logo" width="12px" height="12px" />
            <a href="https://game-of-throns.vercel.app/" className="card-link">
              Project
            </a>
            <img src={logotype} alt="logo" width="12px" height="12px" />
            <a
              href="https://github.com/oxanashanur/Game-of-Throns"
              className="card-link"
            >
              GitHub Code
            </a>
          </div>
        </li>
        <li>
          <div className="card-body">
            <h5 classNamess="card-title">OFFO | <a href="https://www.vl.ru/off/app" className="card-link">www.vl.ru/off/app</a></h5>
            <p className="card-text">OFFO is a personal home assistant for automating calculations of your home resources supply. It provides you the simple way to keep your home in good condition.</p>
            <p className="card-text">In this project, I used tools such as HTML, CSS, BEM, Cross-browser responsive layout, Javascript, Assembling blocks from existing elements, Automatic adherence to project styles.</p>
            <img src={logo} alt="logo" width="12px" height="12px" />
            <a href="https://www.vl.ru/off/app" className="card-link">
            Landing Page
            </a>
            <img src={logotype} alt="logo" width="12px" height="12px" />
            <a href="https://github.com/oxanashanur/OFFO" className="card-link">
            GitHub Code
            </a>
          </div>
        </li>
        <li>
          <div className="card-body">
            <h5 classNamess="card-title">GOT</h5>
            <p className="card-text">This project is to debug testing of the Game of Thrones network service.</p>
            <p className="card-text">In this project I used HTML5 / CSS3, React, Fetch API, React Router, React Strap. And also UI tests such as Jest, Enzyme.</p>
            <img src={logo} alt="logo" width="12px" height="12px" />
            <a href="https://got-six.vercel.app/" className="card-link">
              Project
            </a>
            <img src={logotype} alt="logo" width="12px" height="12px" />
            <a href="https://github.com/oxanashanur/GOT" className="card-link">
            GitHub Code
            </a>
          </div>
        </li>
        <li>
          <div className="card-body">
            <h5 classNamess="card-title">Map VL | <a href="https://map.vl.ru/app" className="card-link">www.map.vl.ru/app</a></h5>
            <p className="card-text">Map is an application that will show motorists traffic jams, accidents and overlaps. It will inform pedestrians when the bus will arrive and indicate the desired address. Free map that is always at hand.</p>
            <p className="card-text">To implement this project I needed knowledge of responsive HTML / CSS, JQuery, Javascript, BEM, Attention to detail, pixel perfect, Image optimization, Build sprites.</p>
            <img src={logo} alt="logo" width="12px" height="12px" />
            <a href="https://map.vl.ru/app/" className="card-link">
            Landing Page
            </a>
            <img src={logotype} alt="logo" width="12px" height="12px" />
            <a href="https://github.com/oxanashanur/Map" className="card-link">
            GitHub Code
            </a>
          </div>
        </li>
        <li>
          <div className="card-body">
            <h5 classNamess="card-title">Twitter based app</h5>
            <p className="card-text">This app is styled like twitter with a similar set of functionality (post and delete comments, filter search, likes, etc.).</p>
            <p className="card-text">To implement this project, I used HTML5 / CSS3, Webpack, BootstrapCDN, JSX, Javascript, Styled Components, Babel, React.</p>
            <img src={logo} alt="logo" width="12px" height="12px" />
            <a href="https://tw-kappa.vercel.app/" className="card-link">
              Project
            </a>
            <img src={logotype} alt="logo" width="12px" height="12px" />
            <a href="https://github.com/oxanashanur/TW" className="card-link">
            GitHub Code
            </a>
          </div>
        </li>
        <li>
          <div className="card-body">
            <h5 classNamess="card-title">Healthy food cart</h5>
            <p className="card-text">Service for delivery of healthy food from the online store. Here you can find and order the right diet for the whole day.</p>
            <p className="card-text">In this project I used tools such as HTML5 + CSS3, Javascript, Image optimisation, building sprites.</p>
            <img src={logo} alt="logo" width="12px" height="12px" />
            <a
              href="https://oxanashanur.github.io/Healthy-food/"
              className="card-link"
            >
              Project
            </a>
            <img src={logotype} alt="logo" width="12px" height="12px" />
            <a
              href="https://github.com/oxanashanur/Healthy-food"
              className="card-link"
            >
              GitHub Code
            </a>
          </div>
        </li>
        <li>
          <div className="card-body">
            <h5 classNamess="card-title">Movie Counter</h5>
            <p className="card-text">Application for counting of watched films.</p>
            <p className="card-text">The basis of this project is classic Javascript, using callback functions, arrays, pseudo-arrays and other tools of this language, HTML5 + CSS3.</p>
            <img src={logo} alt="logo" width="12px" height="12px" />
            <a
              href="https://oxanashanur.github.io/movie/"
              className="card-link"
            >
              Project
            </a>
            <img src={logotype} alt="logo" width="12px" height="12px" />
            <a
              href="https://github.com/oxanashanur/movie"
              className="card-link"
            >
              GitHub Code
            </a>
          </div>
        </li>
        <li>
          <div className="card-body">
            <h5 classNamess="card-title">Delivery of food</h5>
            <p className="card-text">This is a prototype of an online store selling and delivering dishes from a restaurant.</p>
            <p className="card-text">For this project, I needed tools such as HTML5 / CSS3, React, Redux.</p>
            <img src={logo} alt="logo" width="12px" height="12px" />
            <a
              href="https://delivery-of-food.vercel.app/"
              className="card-link"
            >
              Project
            </a>
            <img src={logotype} alt="logo" width="12px" height="12px" />
            <a
              href="https://github.com/oxanashanur/Delivery-of-food"
              className="card-link"
            >
              GitHub Code
            </a>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default Projects;
