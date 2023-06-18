import React from "react";
import styled from "styled-components";
import {AiOutlineArrowLeft, AiOutlineArrowRight} from "react-icons/ai"
import img from "../assets/partner.webp"
import img1 from "../assets/partner.webp"
import img2 from "../assets/partner2.png"
import img3 from "../assets/partner4.webp"
import img4 from "../assets/partner3.webp"
import img5 from "../assets/partner1.webp"

const Partners = () => {
  return (
    <div>
      <Container>
        <Main>
     <Wrap>
     <Text>Trusted by our awesome partners</Text>
        <Dir>
        <Box>
        <Icon/>
    </Box>
    <Box>
        <Icon1/>
    </Box>
        </Dir>
     </Wrap>
          <ImageHolder>
            <Img src={img} />
            <Img src={img2}/>
            <Img src={img3}/>
            <Img src={img1}/>
            <Img src={img4}/>
            <Img src={img5}/>
          </ImageHolder>
        </Main>
      </Container>
    </div>
  );
};

export default Partners;

const Dir = styled.div`
height: 50px;
width: 120px;
display: flex;
align-items: center;
justify-content: space-between;
`
const Wrap =styled.div`
display: flex;
height: 70px;
align-items: center;
justify-content: space-between;
`
const Box =styled.div`
width: 50px;
height: 100%;
border-radius: 5px;
background-color: #efeff6;
display: flex;
align-items: center;
justify-content: center;
`
const Icon1 =styled(AiOutlineArrowRight)``
const Icon =styled(AiOutlineArrowLeft)``
const Img = styled.img``;
const ImageHolder = styled.div`
display: flex;
height: 70px;
align-items: center;
justify-content: space-between;
`;
const Text = styled.div`
font-size: 55px;
font-weight: 500;
color: #302d3a;
font-family: poppins;
`;
const Main = styled.div`
  width: 90%;
  height: 60%;
  justify-content: space-between;
  display: flex;
  flex-direction: column;
`;
const Container = styled.div`
  width: 100%;
  height: 350px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
