import React from "react";
import styled from "styled-components";

import {
  AiOutlineStar,
  AiOutlineEye,
  AiOutlinePlayCircle,
  AiOutlineHeart,
} from "react-icons/ai";

interface iCard {
  img2?: any;
  img3?: any;
  item?: string;
  item1?: string;
  item2?: string;
  title?: string;
  item3?: string;
  item4?: string;
  item5?: string;
}

const ImageCard: React.FC <iCard>= ({img2, img3,item ,item1, item2, item3, item4, item5, title }) => {
  return (
    <div>
      <Container>
        <Img src={img2} />
        <Icon3 />
        <Recommend>
          <Div>
            <Icon /> <Num>{item}</Num>
          </Div>
          <Div>
            <Icon1 />
            <Num>{item1}</Num>
          </Div>
          <Div>
            <Icon2 />
            <Num>{item2}</Num>
          </Div>
        </Recommend>
        <Text>{title}</Text>
        <DownPart>
          <Div1>
            <Img1 src={img3} />
            <SmallText>{item3}</SmallText>
          </Div1>
          <Div1>
            <Fake>{item4}</Fake>
            <Real>{item5}</Real>
          </Div1>
        </DownPart>
      </Container>
    </div>
  );
};

export default ImageCard;

const Num = styled.div``;

const Icon3 = styled(AiOutlineHeart)`
  font-size: 30px;
  color: white;
  margin-right: 3px;
  position: absolute;
  left: 325px;
  top: 25px
`;
const Icon2 = styled(AiOutlinePlayCircle)`
  font-size: 20px;
  color: #439669;
  margin-right: 3px;
`;
const Icon1 = styled(AiOutlineEye)`
  font-size: 20px;
  color: #df5b1e;
  margin-right: 3px;
`;
const Icon = styled(AiOutlineStar)`
  font-size: 20px;
  color: orange;
  margin-right: 3px;
`;
const Real = styled.div`
font-weight: 800;
color: #f68c20;
`;
const Fake = styled.div`
  color: #8a85a3;
  margin-right: 7px;
`;
const Img1 = styled.img`
  border-radius: 5px;
  margin-right: 5px;
`;
const SmallText = styled.div`
  color: #8a85a3;
`;
const Div = styled.div`
  display: flex;
  align-items: center;
  color: #8a85a3;
  /* background-color: red; */
`;
const Div1 = styled.div`
  display: flex;
  align-items: center;
`;
const DownPart = styled.div`
  height: 18%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  /* background-color: red; */
`;
const Text = styled.div`
  height: 20%;
  width: 100%;
  display: flex;
  font-size: 25px;
  align-items: center;
  justify-content: center;
  line-height: 1.02;
  /* background-color: blue; */
`;
const Recommend = styled.div`
  height: 15%;
  margin-top: 5px;
  width: 100%;
  border-bottom: 1px solid silver;
  display: flex;
  align-items: center;
  justify-content: space-between;
  /* background-color: wheat; */
`;

const Img = styled.img`
  height: 58%;
  width: 100%;
  border-radius: 5px;
  object-fit: cover;
 
`;

const Container = styled.div`
  width: 350px;
  height: 400px;
  display: flex;
  padding: 15px 15px;
  border-radius: 5px;
  position: relative;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  background-color: white;
`;
