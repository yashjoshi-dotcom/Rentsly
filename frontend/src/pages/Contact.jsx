import React from "react";
import styled from "styled-components";

const GlobalStyle = styled.div`
  max-width: 30vw;
  margin: 0 auto;
  text-align: center;
`;

const Text = styled.h2`
  margin-top: 4vw;
  font-size: 2rem;
  color: #f1356d;
  margin-bottom: 1vw;
`;

const Input = styled.input`
  width: 32vw;
  padding: 12vw, 6vw;
  margin: 10vw, 0;
  border: 5vw, solid, white;
  box-sizing: border-box;
  display: block;
`;

const TextArea = styled(Input)`
  height: 15rem;
`;

const Button = styled.button`
  margin-top: 2rem;
  background-color: #f1356d;
  color: #fff;
  border: 0vw;
  padding: 1vw;
  border-radius: 1.2vw;
  cursor: pointer;
`;

const Label = styled.label`
  text-align: left;
  display: block;
`;

const Contact = () => {
  return (
    <>
      <GlobalStyle>
        <Text>Contact Us</Text>
        <form>
          <Label>Name</Label>
          <Input type="text" required />
          <Label>Email</Label>
          <Input type="text" required />
          <Label>Message</Label>
          <TextArea required></TextArea>
          <Button>Send Message</Button>
        </form>
      </GlobalStyle>
    </>
  );
};

export default Contact;
