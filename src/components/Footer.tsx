import { Link, useMatch } from "react-router-dom";
import styled from "styled-components";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAppleWhole } from "@fortawesome/free-solid-svg-icons";

const Logo = styled(motion.svg)`
  margin-right: 50px;
  width: 95px;
  height: 25px;
  fill: red;
  path {
    stroke-width: 6px;
    stroke: white;
  }
`;

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

function Footer() {
  const homeMatch = useMatch("/");
  const foruMatch = useMatch("/foru");

  return (
    <>
      <Logo>
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
    </>
  );
}

export default Footer;
