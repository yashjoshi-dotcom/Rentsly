import React from "react";
import styled from "styled-components";
import style from "./About.css";
import illus from "../../images/illus.svg"

const About = () => {
  return (
    <div className="Global">
      <div className="Content">
        <img src={illus} alt="about-us-image" />
        <div className="Text">
          <h1>
            -We <span className="Heart"> ❤️ </span> what We Do-
          </h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea
          </p>
          <button>Home</button>
        </div>
      </div>
    </div>
  );
};

export default About;
