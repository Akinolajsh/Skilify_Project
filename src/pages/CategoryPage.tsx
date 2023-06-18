import React from "react";
import styled from "styled-components";
import Button from "../components/static/Button";
import GlobalFile from "../global/GlobalFile";
import img1 from "../assets/pantone.svg"
import img2 from "../assets/monitor.svg"
import img3 from "../assets/shake.svg"
import img4 from "../assets/briefcase.svg"
import img5 from "../assets/volume-up.svg"
import img6 from "../assets/camera.svg"
import img7 from "../assets/heart.svg"
import img8 from "../assets/cast.svg"

const CategoryPage = () => {
  return (
    <div>
      <Container>
        <Main>
          <Top>
            <Text>Choice favourite course from top category</Text>
            <Button width="180px" text="See all Categories" />
          </Top>

          <Bottom>
            <GlobalFile bg="#efeff6" bgx="purple" col="white" bigtext="Design" text="Learn how to design your website. Wehave a wide range of designing courses from which you can select the best that suits you." img={img1}/>
            <GlobalFile bg="#fef3e8" bgx="orange" col="white" bigtext="Development" text="Learn how to develop your software and websites. We provide you with a wide range of different development courses that will help you to learn more. " img={img2}/>
            <GlobalFile bg="#ddf7ff" bgx="skyblue" col="white" bigtext="IT & Software" text="If yoou want to learn somethimg new in IT and Sofware, then this is the right place to help you with different IT and Software courses from which you can get the one for you." img={img3}/>
            <GlobalFile bg=" #e6faea" bgx="lightgreen" col="white" bigtext="Bussines" text="If you want to be a successful business owner, our courses will help you do so. Book your courses now." img={img4}/>
          </Bottom>
          <Bottom1>
            <GlobalFile bg="#e6faea" bgx="lightgreen" col="white" bigtext="Marketing" text="In the world,marketing is essential to learn how to do excellent marketing with our courses and get your business on top." img={img5}/>
            <GlobalFile bg="#ddf7ff" bgx="skyblue" col="white" bigtext="Photography" text="The most successful business today is photography,butyou should know how to get it on top. Our courses will help you to pull yourself up." img={img6}/>
            <GlobalFile bg="#fef3e8" bgx="orange" col="white" bigtext="Health & Care" text="The health and care industry has increased so far.You will need to buck yourself up to catch with,and this can be done with our courses." img={img7}/>
            <GlobalFile bg="#efeff6" bgx="purple" col="white" bigtext="Technology" text="There are various technologies which you need to learn if you want to stay in the race. Our courses will  help you to learn more." img={img8}/>
          </Bottom1>
        </Main>
      </Container>
    </div>
  );
};

export default CategoryPage;

const Bottom1 = styled.div`
  display: flex;
  margin-top: 40px;
  justify-content: space-between;
`;
const Bottom = styled.div`
  display: flex;
  justify-content: space-between;
`;
const Text = styled.div`
  font-size: 40px;
  font-weight: 500;
`;
const Top = styled.div`
  width: 100%;
  height: 15%;
  justify-content: space-between;
  align-items: center;
  background-color: white;
  display: flex;
`;
const Main = styled.div`
  width: 90%;
  height: 90%;
`;
const Container = styled.div`
  width: 100%;
  height: 850px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
