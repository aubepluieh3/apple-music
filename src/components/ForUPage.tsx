import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";
import { AnimatePresence, motion } from "framer-motion";
import { items } from "../data";
import { useState } from "react";

const Box = styled.div`
  display: flex;
  flex-direction: column;
  margin: 25px;
`;
const Header = styled.div`
  display: flex;
  align-items: center;
  margin-top: 15px;
  margin-left: 5px;
  font-weight: bold;
  span {
    margin-right: 3px;
  }
`;
const Wrapper = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding-bottom: 20px;
  margin-top: 15px;
`;
const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  width: 70vw;
  gap: 10px;
  div:nth-child(2) {
    grid-column: span 2;
  }
`;

const BoxTwo = styled(motion.div)`
  background-color: rgba(255, 255, 255, 1);
  border-radius: 40px;
  height: 200px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
`;

const BoxAnimation = styled(motion.div)`
  background-color: rgba(255, 255, 255, 1);
  border-radius: 40px;
  width: 200px;
  height: 200px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
`;
const Overlay = styled(motion.div)`
  width: 60%;

  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const overlay = {
  hidden: { backgroundColor: "rgba(0, 0, 0, 0)" },
  visible: { backgroundColor: "rgba(0,0,0,0)" },
  exit: { backgroundColor: "rgba(0, 0, 0, 0)" },
};
const Title = styled(motion.span)``;
const Detail = styled(motion.span)``;
const Btn = styled(motion.button)``;

function ForUPage() {
  const [id, setId] = useState<null | string>(null);
  return (
    <Box>
      <Header>
        <span>FOR U💘</span>
        <FontAwesomeIcon icon={faChevronRight} />
      </Header>
      <Wrapper>
        <Grid>
          {items.map((item) => (
            <BoxTwo
              layoutId={item.id}
              key={item.id}
              onClick={() => setId(item.id)}
            >
              <Title>{item.title}</Title>
              <Detail>{item.category}</Detail>
            </BoxTwo>
          ))}
        </Grid>
        <AnimatePresence>
          {id ? (
            <Overlay
              variants={overlay}
              onClick={() => setId(null)}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              {items.map((item) => (
                <BoxAnimation layoutId={id}>
                  <Btn onClick={() => setId(null)} />
                  <Title>{item.title}</Title>
                  <Detail>{item.category}</Detail>
                </BoxAnimation>
              ))}
            </Overlay>
          ) : null}
        </AnimatePresence>
      </Wrapper>
    </Box>
  );
}
export default ForUPage;
