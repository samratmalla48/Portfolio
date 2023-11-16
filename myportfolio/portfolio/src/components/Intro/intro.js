import React from "react";

import "./intro.css";

import bg from "../../assets/new.png";
import { Link } from "react-scroll";
const Intro = () => {
  return (
    <div>
      <section id="intro">
        <div className="introContent">

          <span className="hello">Hello</span>
          <span className="introText">I am</span>
          <span className="introName">Samrat</span>
          <p className="introPara">This is the paragraph section</p>
          <Link>
            <button className="btn">Hire Me</button>
          </Link>
        </div>

        <img src={bg} alt="Profile" className="profPic" />
      </section>
    </div>
  );
};

export default Intro;

