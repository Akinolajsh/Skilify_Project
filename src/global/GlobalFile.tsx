import React from "react";
import styled from "styled-components";
import { iProps } from "../utils/interface";



const GlobalFile: React.FC<iProps> = ({
  text,
  img,
  bg,
  col,
  bgx,
  bigtext,
}) => {
  return (
    <div>
      <Container bg={`${bg}`} col={`${col}`} bgx={`${bgx}`}>
        <Main>
          <SmallBox>
            <Img src={img}/>
          </SmallBox>
          <BigText>{bigtext}</BigText>
          <SmallText>{text}</SmallText>
        </Main>
      </Container>
    </div>
  );
};

export default GlobalFile;

const Img= styled.img``

const SmallText = styled.div`
  color: #7e87a6;
`;
const BigText = styled.div`
  margin-bottom: 20px;
  font-size: 25px;
  font-weight: 500;
`;
const SmallBox = styled.div`
  height: 60px;
  width: 60px;
  background-color: #e2ddff;
  margin-bottom: 20px;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;

  :hover {
    background-color: #edecf0;
  }
`;
const Main = styled.div`
  width: 85%;
  height: 90%;
  display: flex;
  flex-direction: column;
  /* background-color: red; */
`;
const Container = styled.div<{ bg: string; col: string; bgx: string }>`
  width: 290px;
  height: 300px;
  display: flex;
  border-radius: 5px;
  justify-content: center;
  align-items: center;
  background-color: ${({ bg }) => bg};
  transition: all 350ms;


  :hover {
    cursor: pointer;
    background-color: ${({ bgx }) => bgx};
    color: ${({ col }) => col};
  }
`;
