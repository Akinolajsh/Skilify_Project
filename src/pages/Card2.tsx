import React from "react";
import styled from "styled-components";
import img from "../assets/check-point.svg";
import img1 from "../assets/check-point.svg";
import img2 from "../assets/check-point.svg";
import Button from "../components/static/Button";
import images from "../assets/know-about.webp";

const data: any = [
  {
    img,
    note: "Detail description of each course",
  },
  {
    img1,
    note: "Easy to understand language",
  },
  {
    img2,
    note: "Simple and easy to learn courses.",
  },
];

const Card2 = () => {
  return (
    <div>
      <Container>
        <Main>
          <Left>
            <BigText>Get more close with your courses.</BigText>
            <SmallText>
              We provide a wide range of courses for the different sectors you
              can choose from, which suits you perfectly
            </SmallText>
            <Holder>
              {data.map((el: any) => (
                <Div>
                  <Image src={img} />
                  <Text>{el.note}</Text>
                </Div>
              ))}
            </Holder>
            <Button width="180px" text="Start Learning Now" />
          </Left>
          <Right>
            <Image2 src={images} />
            <Div1></Div1>
          </Right>
        </Main>
      </Container>
    </div>
  );
};

export default Card2;

const Image2 = styled.img`
  position: absolute;
  left: 740px;
  top: 3000px;
  z-index: 1;
`;
const Div1 = styled.div`
  width: 500px;
  height: 630px;

  border-radius: 0 220px 0 0;
  border: 5px solid #f56962;
  position: relative;
`;
const Text = styled.div`
  margin: 10px 0;
  color: #5f5982;
`;
const Image = styled.img`
  margin-right: 10px;
`;
const Div = styled.div`
  display: flex;
`;
const Holder = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-bottom: 20px;
`;
const SmallText = styled.div`
  font-size: 25px;
  margin-top: 20px;
  margin-bottom: 30px;
  color: #5f5982;
`;
const BigText = styled.div`
  font-size: 50px;
  font-weight: 500;
  line-height: 1.02;
  color: #302d3a;
`;
const Right = styled.div`
  width: 50%;
  display: flex;
  justify-content: flex-end;
`;
const Left = styled.div`
  width: 50%;
  display: flex;
  justify-content: center;
  flex-direction: column;
`;
const Main = styled.div`
  width: 90%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const Container = styled.div`
  width: 100%;
  height: 720px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
