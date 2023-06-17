import React from 'react'
import styled from 'styled-components'
import ImageCard from '../global/ImageCard'
import Button from '../components/static/Button'
import img1 from "../assets/profile-img.webp";
import img from "../assets/crd-img.webp";
import img4 from "../assets/crd-img2.webp"
import img5 from "../assets/crd-img3.webp"
import img6 from "../assets/profile-img1.webp"
import img7 from "../assets/profile-img2.webp"
import {AiOutlineArrowLeft, AiOutlineArrowRight} from "react-icons/ai"

const Course = () => {
  return (
    <div>
      <Container>
        <Main>
       <Holder>
       <Text>
            Get choice of your course
            </Text>
            <Button text='View all' width='100px'/>
       </Holder>
<Wrap>
<ImageCard title='Learn Python Programming Beginner' item='4.5'item1='49,00' item2='9' item3='Petey Cruiser' item4='$200.00' item5='$150.00' img2={img} img3={img1}/>
<ImageCard title='Statistcs Data Science and Business Analysis' item='4.3' item1='23,00' item2='7' item3='Nicole Brown' item4='$150' item5='$99.99' img2={img4} img3={img6}/>
<ImageCard title='Learn HTML% Programming Beginning' item='4.7' item1='70,00' item2='15' item3='Anna Sthesia' item4='$100.00' item5='$70.00' img2={img5} img3={img7}/>
</Wrap>
<LineHolder>
    <Box>
        <Icon/>
    </Box>
    <Line></Line>
    <Line1></Line1>
    <Box>
        <Icon1/>
    </Box>
</LineHolder>
        </Main>
      </Container>
    </div>
  )
}

export default Course

const Box =styled.div`
width: 50px;
height: 100%;
border-radius: 5px;
background-color: white;
display: flex;
align-items: center;
justify-content: center;
`
const Line1 =styled.div`
width: 550px;
height: 2px;
background-color: white;
`
const Line =styled.div`
width: 550px;
height: 2px;
background-color: orange;
`
const Icon1 =styled(AiOutlineArrowRight)``
const Icon =styled(AiOutlineArrowLeft)``
const LineHolder =styled.div`
width: 100%;
height: 80px;
/* background-color: black; */
display: flex;
align-items: center;
justify-content: space-between;
margin-top: 50px;
`

const Wrap=styled.div`
display: flex;
width: 100%;
align-items: center;
justify-content: space-between;
`

const Holder=styled.div`
/* background-color: blue; */
width: 100%;
height: 20%;
margin-bottom: 40px;
display: flex;
justify-content: space-between;
align-items: center;
`
const Text=styled.div`
font-size: 40px;
font-weight: bold;
color: #302d3a;
`
const Main=styled.div`
width: 90%;
display: flex;
justify-content: space-between;
align-items: center;
flex-direction: column;
/* background-color: green; */
`
const Container=styled.div`
width: 100%;
height: 800px;
background-color: #efeff6;
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
`