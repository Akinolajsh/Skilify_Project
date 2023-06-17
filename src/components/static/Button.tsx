import React from 'react'
import styled from 'styled-components'
import { iButton } from '../../utils/interface'



const Button:React.FC<iButton> = ({width,text}) => {
  return (
    <div>
      <Container width={`${width}`}>
      {text}
      </Container>
    </div>
  )
}

export default Button

const Container = styled.div<{width:string}>`
height: 50px;
width: ${({width})=>width};
display: flex;
align-items: center;
justify-content: center;
background-color: #f56962;
color: white;
border-radius: 5px;
cursor: pointer;
transition: all 350ms;

:hover{
  transform: scale(1.2);
}
`