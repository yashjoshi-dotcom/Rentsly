import React from "react";
import styled from "styled-components";

const GlobalStyle = styled.div`
  max-width: 400px;
  margin: 0 auto;
  text-align: center;
`;

const Text = styled.h2`
  font-size: 40px;
  color: #f1356d;
  margin-bottom: 30px;
`;

const Input = styled.input`
  width: 400px;
  padding: 24px, 40px;
  margin: 40px, 0;
  border: 20px, solid, white;
  box-sizing: border-box;
  display: block;
`;

const TextArea = styled(Input)`
  height: 200px;
`;

const Button = styled.button`
  margin-top: 20px;
  background-color: #f1356d;
  color: #fff;
  border: 0px;
  padding: 8px;
  border-radius: 8px;
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
