import { Link, useMatch } from "react-router-dom";
import styled from "styled-components";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAppleWhole } from "@fortawesome/free-solid-svg-icons";

const HeaderBox = styled.div`
  display: flex;
  margin: 35px 0px 0px 50px;
`;
const Logo = styled(motion.svg)`
  width: 95px;
  height: 25px;
`;

const logoVariants = {
  normal: {},
  active: {
    fillOpacity: [0, 1, 0],
    transition: {
      repeat: Infinity,
    },
  },
};

const Items = styled.ul`
  display: flex;
  align-items: center;
`;

const Item = styled.li`
  margin-right: 20px;
  color: black;
  transition: color 0.3s ease-in-out;
  position: relative;
  display: flex;
  justify-content: center;
  flex-direction: column;
  &:hover {
    color: pink;
  }
`;

const Circle = styled(motion.span)`
  position: absolute;
  width: 5px;
  height: 5px;
  border-radius: 5px;
  bottom: -5px;
  left: 0;
  right: 0;
  margin: 0 auto;
  background-color: ${(props) => props.theme.red};
`;

function Header() {
  const homeMatch = useMatch("/");
  const foruMatch = useMatch("/foru");

  return (
    <>
      <HeaderBox>
        <Logo variants={logoVariants} whileHover="active" initial="normal">
          <FontAwesomeIcon icon={faAppleWhole} />{" "}
        </Logo>
        <Items>
          <Item>
            <Link to="/">
              Home
              {homeMatch ? <Circle layoutId="circle" /> : null}
            </Link>
          </Item>
          <Item>
            <Link to="/foru">
              ForU {foruMatch && <Circle layoutId="circle" />}
            </Link>
          </Item>
        </Items>
      </HeaderBox>
    </>
  );
}

export default Header;
