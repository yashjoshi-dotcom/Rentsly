import React from "react";
import styled from "styled-components";

const image = require("../images/test.jpg");

const Global = styled.section`
  width: 100%;
  height: 100vh;
  background-image: linear-gradient(to top, #30cfd0 0%, #330867 100%);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Text = styled.div`
  width: 550px;
  max-width: 100%;
  padding: 0 10px;
`;

const Image = styled.img`
  height: auto;
  width: 500px;
  max-width: 100%;
`;

const Content = styled.div`
  width: 1280px;
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-around;
`;

const Tagline = styled.h5`
  color: white;
  font-size: 30px;
  margin-bottom: 20px;
  text-transform: capitalize;
`;

const Para = styled.p`
  color: #c0c4d6;
  font-size: 18px;
  line-height: 28px;
  letter-spacing: 1px;
  margin-bottom: 45px;
`;

const Button = styled.button`
  background-color: #ffcc74;
  color: black;
  border: 2px solid transparent;
  text-decoration: none;
  padding: 10px 30px;
  border-radius: 30px;
  font-size: 17px;
  font-weight: bold;
`;

const About = () => {
  return (
    <Global>
      <Content>
        <Image src={image} />
        <Text>
          <Tagline>
            -We <span className="Heart"> ❤️ </span> what We Do-
          </Tagline>
          <Para>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea
          </Para>
          <Button>Home</Button>
        </Text>
      </Content>
    </Global>
  );
};

export default About;
