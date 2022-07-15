import React from "react";
import styled from "styled-components";
import style from "../App.css";

const Para = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  -webkit-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
`;

const TagLine = styled.div`
  position: absolute;
  left: 50%;
  top: 33%;
  -webkit-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  background-image: linear-gradient(90deg, #4400ff, #ff00f2);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
`;

const About = () => {
  return (
    <div>
      <TagLine>
        <h5>
          -We <span className="Heart"> ❤️ </span> what We Do-
        </h5>
      </TagLine>
      <Para>
        <h3>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea
        </h3>
      </Para>
    </div>
  );
};

export default About;
