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

const Items = styled.ul`
  display: flex;
  align-items: center;
`;

const Item = styled.li`
  margin-right: 20px;

  transition: color 0.3s ease-in-out;
  position: relative;
  justify-content: center;
  a {
    text-decoration: none;
    color: black;
  }
`;

const Circle = styled(motion.span)`
  position: absolute;

  height: 8px;
  border-radius: 5px;
  bottom: -5px;
  left: 0;
  right: 0;
  margin: 0 auto;
  background-color: pink;
`;

function Header() {
  const homeMatch = useMatch("/");
  const foruMatch = useMatch("/foru");

  return (
    <>
      <HeaderBox>
        <Logo
          whileHover={{ scale: 1.8, rotate: 90 }}
          whileTap={{
            scale: 1.3,
            rotate: -90,
            borderRadius: "100%",
          }}
        >
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
