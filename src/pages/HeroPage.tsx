import styled from "styled-components";
import { GoSearch } from "react-icons/go";
import image from "../assets/girl-img-study.webp"
import img from "../assets/dots-pattern-pink.svg"
const HeroPage = () => {
  return (
    <div>
      <Container>
        <Main>
          <LeftHold>
            <BigText>
              Learn more and make success the result of perfection.
            </BigText>
            <SmallText>
              Pick from over 100,000 online video courses with new additions
              published every month.
            </SmallText>
            <InputHolder>
              <Input placeholder="Search for your favourite courses" />
              <Icon />
            </InputHolder>
              <Images src={img}/>
          </LeftHold>
          <RightHold>
            <Line>
            <Image src={image} />
          <Img src={img}/>
            </Line>
          </RightHold>
        </Main>
      </Container>
    </div>
  );
};

export default HeroPage;

const Images = styled.img`
position: absolute;
bottom: -100px;
left: 0px;
`
const Img = styled.img`
position: absolute;
left: 330px;
top: 20px;
`
const Image = styled.img`
  width: 400px;
  position: absolute;
  bottom: 50px;
  right: 70px;
`;

const Line = styled.div`
  width: 350px;
  height: 500px;
  border-radius: 25px;
  border: 3px solid #f68c20;
  position: relative;
`

const Icon = styled(GoSearch)`
  font-size: 30px;
  margin: 0 25px;
  color: white;
`;
const Input = styled.input`
  width: 85%;
  height: 100%;
  border: none;
  outline: none;
  font-size: 15px;
  font-weight: 500;
  padding: 0 10px;
`;
const InputHolder = styled.div`
  width: 100%;
  height: 55px;
  background-color: #f56962;
  display: flex;
  align-items: center;
  margin: 30px 0;
  z-index: 2;
  box-shadow: rgb(249,205,202) 0px 20px 25px -5px, rgba(0, 0, 0, 0.04) 0px 10px 10px -5px;
`;
const SmallText = styled.div`
  margin-top: 20px;
  font-size: 25px;
  font-weight: 400;
  color: #5f5982;
  `;
const BigText = styled.div`
  font-size: 50px;
  font-weight: 700;
  margin-top: 80px;
  `;
const RightHold = styled.div`
  width: 45%;
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  margin-left: 20px;
  margin-right: 20px;
  margin-top: 70px;
  `;
const LeftHold = styled.div`
z-index: 2;
  width: 55%;
  height: 100%;
  display: flex;
  flex-direction: column;
`;
const Main = styled.div`
  width: 90%;
  height: 90%;
  flex-direction: row;
  display: flex;
  justify-content: space-between;
  background-color: #fef0ef;
`;
const Container = styled.div`
  width: 100%;
  height: 700px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #fef0ef;
`;
