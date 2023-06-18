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
  sbg
}) => {
  return (
    <div>
      <Container bg={`${bg}`} col={`${col}`} bgx={`${bgx}`}>
        <Main>
          <SmallBox sbg={`${sbg}`}>
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
const SmallBox = styled.div<{sbg:string}>`
  height: 60px;
  width: 60px;
  background-color: ${({sbg})=>sbg};
  margin-bottom: 20px;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;

  :hover {
    background-color: white;
  }
`;
const Main = styled.div`
  width: 85%;
  height: 90%;
  display: flex;
  flex-direction: column;
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

  :hover ${SmallText}{
    color: white;
  }
`;
