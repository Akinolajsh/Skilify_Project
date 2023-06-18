import React from "react";
import styled from "styled-components";
import { iButton } from "../../utils/interface";

const Button: React.FC<iButton> = ({ width, text }) => {
  return (
    <div>
      <Container width={`${width}`}>{text}</Container>
    </div>
  );
};

export default Button;

const Container = styled.div<{ width: string }>`
  height: 50px;
  width: ${({ width }) => width};
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f56962;
  color: white;
  border-radius: 5px;
  cursor: pointer;
  transition: all 0.2ms ease-in-out;

  :hover {
    transform: scale(1);
    box-shadow: -2px 5px 14px -1px rgba(245, 105, 98, 0.83);
    -webkit-box-shadow: -2px 5px 14px -1px rgba(245, 105, 98, 0.83);
    -moz-box-shadow: -2px 5px 14px -1px rgba(245, 105, 98, 0.83);
  }
`;
