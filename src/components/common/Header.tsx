import styled from "styled-components";
import { FaAngleDown } from "react-icons/fa";
import { BsCart2 } from "react-icons/bs";
import { GoSearch } from "react-icons/go";
import Button from "../static/Button";

const Header = () => {
  return (
    <div>
      <Container>
        <Main>
          <Logo>JayCode</Logo>
          <NavHolder>
            <Nav>
              Home
              <Icons1 />
            </Nav>
            <Nav>
              Pages
              <Icons2 />
            </Nav>
            <Nav>
              Courses
              <Icons3 />
            </Nav>
            <Nav>
              Features
              <Icons4 />
            </Nav>
            <Nav>
              Blog
              <Icons5 />
            </Nav>
          </NavHolder>
          <ButtonHold>
            <Icon />
            <Icon2 />
            <Button width="100px" text="Register" />
          </ButtonHold>
        </Main>
      </Container>
    </div>
  );
};

export default Header;
const Icons5 = styled(FaAngleDown)`
  margin-top: 5px;
  color: #645c5c;
`;
const Icons4 = styled(FaAngleDown)`
  margin-top: 5px;
  color: #645c5c;
`;
const Icons3 = styled(FaAngleDown)`
  margin-top: 5px;
  color: #645c5c;
`;
const Icons2 = styled(FaAngleDown)`
  margin-top: 5px;
  color: #645c5c;
`;
const Icons1 = styled(FaAngleDown)`
  margin-top: 5px;
  color: #645c5c;
`;
const Container = styled.div`
  width: 100%;
  height: 70px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #fef0ef;
`;
const Main = styled.div`
  width: 90%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #fef0ef;
`;
const Logo = styled.div`
  font-weight: 700;
  font-size: 30px;
  font-family: Cambria, Cochin, Georgia, Times, "Times New Roman", serif;
`;
const NavHolder = styled.div`
  display: flex;
  justify-content: space-between;
  width: 500px;
`;
const Nav = styled.div`
  margin: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ButtonHold = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 200px;
  /* background-color: blue; */
`;
const Icon = styled(BsCart2)`
  margin: 0 5px;
`;
const Icon2 = styled(GoSearch)`
  margin: 0 5px;
`;

