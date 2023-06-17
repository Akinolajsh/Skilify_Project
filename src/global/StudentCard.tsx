import React from "react";
import styled from "styled-components";
import img1 from "../assets/star.svg";
import { iCard } from "../utils/interface";




const data: any = [
  {
    img1,
  },
  {
    img1,
  },
  {
    img1,
  },
  {
    img1,
  },
  {
    img1,
  },
];

const StudentCard:React.FC <iCard>= ({lastname, img2,img, writeup}) => {
  return (
    <div>
      <Container>
        <Up>
         <Wrap>
         <Img src={img} />
          <Name>
            <First>{lastname}</First>
            <Id>Student</Id>
          </Name>
         </Wrap>
          <Rate>
            {data.map((el: any) => (
              <Icon src={img1} />
            ))}
          </Rate>
        </Up>
        <Text>
          {writeup}
        </Text>
      </Container>
    </div>
  );
};

export default StudentCard;

const Wrap = styled.div`
display: flex;
`;
const Icon = styled.img``;
const Id = styled.div`
color:#91929a;
`;
const First = styled.div`
font-size: 20px;
color: #5f5982;
font-weight: 500;
`;
const Name = styled.div`
  flex-direction: column;
  justify-content: space-between;
  height: 50px;
  width: 150px;
  display: flex;
  margin-left: 20px;
`;
const Rate = styled.div``;
const Img = styled.img``;
const Text = styled.div`
margin-top: 25px;
font-size: 18px;
color: #8e89a7;
`;
const Up = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const Container = styled.div`
  width: 500px;
  border-radius: 0 30px 0 0;
  height: 150px;
  background-color: white;
  padding: 10px 20px;
  :hover{
    cursor: pointer;
    border-left: 3px solid orange;
  }
`;
