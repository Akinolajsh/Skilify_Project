import React from "react";
import styled from "styled-components";
import Button from "../components/static/Button";
import img1 from "../assets/circle1.png";
import img2 from "../assets/circle2.png";
import img3 from "../assets/circle3.png";
import img4 from "../assets/circle5.png";
import img5 from "../assets/circle6.png";
import img6 from "../assets/circle7.png";
import img7 from "../assets/circle.svg";
import img8 from "../assets/circle.svg";
import img from "../assets/dots-pattern-pink.svg";

const Card = () => {
  return (
    <div>
      <Container>
        <Main>
          <Image src={img1} />
          <Image2 src={img2} />
          <Image3 src={img3} />
          <Image4 src={img4} />
          <Image5 src={img5} />
          <Image6 src={img6} />
          <Image7 src={img7} />
          <Image8 src={img8} />
          <Holder>
            <BigText>Select the best from various online courses.</BigText>
            <SmallText>
              Our online video courses give you the freedom to learn remotely,
              and our experts will <Small>guide you properly.</Small>
            </SmallText>
            <Button width="100px" text="Join Today" />
          </Holder>
        </Main>
        <Img src={img} />
      </Container>
    </div>
  );
};

export default Card;

const Img = styled.img`
  width: 200px;
  height: 250px;
  top: 300px;
  left: -45px;
  position: absolute;
`;

const Image = styled.img`
  position: absolute;
  left: 90px;
  top: 90px;
`;
const Image2 = styled.img`
  position: absolute;
  left: 70px;
  top: 270px;
  z-index: 2;
`;
const Image3 = styled.img`
  position: absolute;
  left: 120px;
  top: 400px;
`;
const Image4 = styled.img`
  position: absolute;
  right: 150px;
  top: 80px;
`;
const Image5 = styled.img`
  position: absolute;
  right: 100px;
  top: 220px;
`;
const Image6 = styled.img`
  position: absolute;
  right: 220px;
  top: 350px;
`;
const Image8 = styled.img`
  position: absolute;
  right: 30px;
  top: 80px;
`;
const Image7 = styled.img`
  position: absolute;
  left: 150px;
  top: 230px;
`;

const Small = styled.div`
  padding-left: 30px;
`;

const Holder = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  height: 200px;
  width: 80%;
  margin-bottom: 50px;
`;
const SmallText = styled.div`
  font-size: 15px;
  margin-left: 5px;
  width: 90%;
  flex-direction: column;
  font-weight: 500;
  align-items: center;
  justify-content: center;
  display: flex;
  letter-spacing: 3px;
  color: #645982;
`;
const BigText = styled.div`
  font-size: 35px;
  letter-spacing: 3px;
  font-weight: 700;
  color: #302d3a;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Main = styled.div`
  width: 90%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Container = styled.div`
  width: 100%;
  height: 550px;
  background-color: #fef0ef;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`;
