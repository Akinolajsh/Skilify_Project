import React from 'react'
import styled from 'styled-components';
import Button from '../components/static/Button';
import img from "../assets/apply-crd-img.png"

interface iProps{
title?: string;
text?: string;
wid?: string;
text1?: string;
}


const TeacherCard:React.FC <iProps>= ({title, text, wid, text1}) => {
  return (
    <div>
       <Card>
            <Image>
            <Img src={img}/>
            </Image>
            <Wrap>
             <TextHolder>
             <Title>{title}</Title>
              <Text>{text}</Text>
             </TextHolder>
              <Button width={wid} text={text1}/>
            </Wrap>
          </Card>
    </div>
  )
}

export default TeacherCard


const TextHolder = styled.div`

`;
const Image = styled.div`
margin-right: 10px;

`;
const Text = styled.div`
font-size: 20px;
color: #835e82;
margin-top: 5px;
line-height: 1.02;
`;
const Title = styled.div`
font-size: 20px;
font-weight: 500;
`;
const Img = styled.img``;
const Wrap = styled.div`
margin-left: 10px;
display: flex;
flex-direction: column;
justify-content: space-between;
/* align-items: center; */
`;
const Card = styled.div`
  width: 570px;
  height: 150px;
  border-radius: 5px;
  background-color: white;
  display: flex;
  justify-content: space-between;
  padding: 20px 10px;
`;