import React from "react";
import styled from "styled-components";
import {AiOutlineArrowLeft, AiOutlineArrowRight} from "react-icons/ai"
import StudentCard from "../global/StudentCard";
import img from "../assets/user1.png";
import img2 from "../assets/user.png";

const Card3 = () => {
  return (
    <div>
      <Container>
        <Main>
          <Wrap>
          <Text>What our students have to say</Text>
            <Dir>
            <Box>
        <Icon/>
    </Box>
    <Box>
        <Icon1/>
    </Box>
            </Dir>
          </Wrap>
          <Holder>
            <StudentCard lastname="William Taylor" writeup="Skilify is the best platform to learn new technologies and courses. I have learned a lot many things from this platform" img={img}/>
            <StudentCard lastname="Oliver Smith" writeup="If you search for a platform that can provide you the best learning courses, then i would recommend you Skilify only" img2={img2}/>
          </Holder>
        </Main>
      </Container>
    </div>
  );
};

export default Card3;

const Box =styled.div`
width: 50px;
height: 100%;
border-radius: 5px;
background-color: white;
display: flex;
align-items: center;
justify-content: center;
`
const Icon1 =styled(AiOutlineArrowRight)``
const Icon =styled(AiOutlineArrowLeft)``
const Dir = styled.div`
height: 50px;
width: 120px;
display: flex;
align-items: center;
justify-content: space-between;
`
const Holder = styled.div`
display: flex;
justify-content: space-between;
`
const Text = styled.div`
font-size: 50px;
font-weight: 500;
color: #302d3a;
font-family: poppins;
`
const Wrap = styled.div`
display: flex;
height: 20%;
align-items: center;
margin-bottom: 40px;
justify-content: space-between;
`
const Main = styled.div`
width: 90%;
height: 80%;
align-items: center;
justify-content: center;
flex-direction: column;
`;
const Container = styled.div`
width: 100%;
height: 400px;
background-color: #efeff6;
display: flex;
justify-content: center;
align-items: center;
`;
