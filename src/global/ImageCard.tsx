import React, { useState } from "react";
import styled from "styled-components";

import {
  AiOutlineStar,
  AiOutlineEye,
  AiOutlinePlayCircle,

} from "react-icons/ai";
import {MdFavoriteBorder, MdFavorite} from "react-icons/md"
import { iCard } from "../utils/interface";

const ImageCard: React.FC<iCard> = ({
  img2,
  img3,
  item,
  item1,
  item2,
  item3,
  item4,
  item5,
  title,
}) => {
  const [toggle, setToggle] = useState<boolean>(false);

  const onToggle = () => {
    setToggle(!toggle);
  };
  return (
    <div>
      <Container>
        <Img src={img2} />
        <Button onClick={()=>{
          onToggle();
        }}>
         {
          toggle ?  <Icon3 />:<Icon4 />
          
         }
        </Button>
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
          <Line></Line>
            <Fake>
            
              {item4}</Fake>

            
            <Real>{item5}</Real>
          </Div1>
        </DownPart>
      </Container>
    </div>
  );
};

export default ImageCard;

const Line =styled.div`
width: 40px;
height: 2px;
background-color: #bbb9c7;
position: absolute;
`
const Button = styled.div``;
const Num = styled.div``;

const Icon4 = styled(MdFavoriteBorder)`
  font-size: 30px;
  color: white;
  margin-right: 3px;
  position: absolute;
  left: 325px;
  top: 25px;
`;
const Icon3 = styled(MdFavorite)`
  font-size: 30px;
  color: red;
  margin-right: 3px;
  position: absolute;
  left: 325px;
  top: 25px;
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
  transition: all 500ms ;
  :hover{
transform: translate(0, -20px);
cursor: pointer;
}
`;
