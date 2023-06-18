import React from "react";
import styled from "styled-components";
import TeacherCard from "../global/TeacherCard";
import img from "../assets/dots-pattern-pink.svg";



const ApplyCard = () => {
  return (
    <div>
      <Container>
        <Main>
         <TeacherCard wid="150px" text1="Apply As Teacher" title="Become a teacher" text="Teach what you love. Coursector gives you the tools to create a course."/>
         <TeacherCard wid="200px" text1="Get Skilify For Business" text="Get unlimited access to 3,000+ of Coursector's top courses for your team" title="Coursector for business"/>
        </Main>

        <Img src={img} />
      </Container>
    </div>
  );
};

export default ApplyCard;


const Img = styled.img`
  width: 200px;
  height: 250px;
  top: 1100;
  left: -45px;
  position: absolute;
`;
const Main = styled.div`
  width: 90%;
  justify-content: space-between;
  display: flex;
  align-items: center;
  z-index: 2;
`;
const Container = styled.div`
  width: 100%;
  height: 350px;
  background-color: #fef0ef;
  display: flex;
  justify-content: center;
  align-items: center;
`;
