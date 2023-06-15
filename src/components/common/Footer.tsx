import React from "react";
import styled from "styled-components";

const Footer = () => {
  return (
    <div>
      <Container>
        <Main>
          <TextHolder>
            <BigText></BigText>
            <SmallText></SmallText>
            <SmallText>  </SmallText>
            <SmallText></SmallText>
          </TextHolder>
        </Main>
      </Container>
    </div>
  );
};

export default Footer;

const SmallText = styled.div`
margin: 5px 0;
color: #919291;
`;
const BigText = styled.div`
margin: 10px 0;
font-size: 20px;
font-weight: 700;
`;
const TextHolder = styled.div`
 height: 300px;
  width: 200px;
  flex-direction: column;
  display: flex;
`;
const Main = styled.div`
  width: 90%;
  height: 80%;
  display: flex;
  justify-content: space-between;
`;
const Container = styled.div`
  width: 100%;
  height: 400px;
  display: flex;
  background-color: black;
  align-items: center;
  justify-content: center;
  color: white;
`;
