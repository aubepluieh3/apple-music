import styled from "styled-components";
import { AnimatePresence, motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { useRef, useState } from "react";
import { items } from "../Data/Data";

const Box = styled.div`
  display: flex;
  flex-direction: column;
  margin: 25px;
`;

const Container = styled.ul`
  display: flex;
  overflow-x: scroll;
  padding-bottom: 20px;
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
const MusicImg = styled.div`
  display: flex;
`;

const AlbumImg = styled.img`
  width: 150px;
  height: 150px;
  border-radius: 10%;
  margin-top: 15px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
`;

const Line = styled.li`
  display: flex;
  flex-direction: column;
  margin-right: 20px;
  span {
    margin-top: 5px;
    margin-left: 5px;
    font-weight: 500;
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
  div:last-child {
    grid-column: span 2;
  }
`;

const BoxTwo = styled(motion.div)`
  background-color: rgba(255, 255, 255, 1);
  border-radius: 40px;
  height: 200px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
  img {
    height: 100%;
    width: 100%;
    object-fit: cover;
    border-radius: 40px;
  }
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
  exit: { backgroundColor: "rgba(0, 0, 0, 0)" },
};

const Title = styled(motion.span)`
  position: relative;
  top: -40px;
  left: 30px;
  color: white;
  font-weight: 700;
`;

const Content = styled(motion.div)`
  width: 600px;
  height: 320px;
  margin: 25px 0px;
  font-size: 12px;
  div:first-child {
    font-size: 30px;
    font-weight: 700;
    margin-bottom: 30px;
    margin: 10px 15px;
  }
  div:last-child {
    margin: 10px 15px;
  }
`;

function HomePlaylist() {
  const ref = useRef(null);
  const [id, setId] = useState<null | string>(null);

  return (
    <Box>
      <Header>
        <span>INTERVIEW💘</span>
        <FontAwesomeIcon icon={faChevronRight} />
      </Header>
      <Wrapper>
        <Grid>
          {items.map((item) => (
            <BoxTwo
              onClick={() => setId(item.id)}
              layoutId={item.id}
              key={item.id}
            >
              <img src={`${process.env.PUBLIC_URL}/img/${item.id}.jpg`} />
              <Title>{item.title}</Title>
            </BoxTwo>
          ))}
        </Grid>
        <AnimatePresence>
          {id && (
            <Overlay
              variants={overlay}
              onClick={() => setId(null)}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              <BoxTwo layoutId={id} style={{ width: 600, height: 320 }}>
                {items
                  .filter((item) => item.id === id)
                  .map((item) => (
                    <Content>
                      <div>{item.title}</div>
                      <div>{item.content}</div>
                    </Content>
                  ))}
              </BoxTwo>
            </Overlay>
          )}
        </AnimatePresence>
      </Wrapper>
      <Header>
        <span>에디터 PICK💘</span>
        <FontAwesomeIcon icon={faChevronRight} />
      </Header>
      <Container ref={ref}>
        <Line>
          <MusicImg>
            <AlbumImg alt="Today's Hits" src={`${process.env.PUBLIC_URL}/img/today.jpg`}/>
          </MusicImg>
          <span>Today's Hits</span>
        </Line>
        <Line>
          <MusicImg>
            <AlbumImg alt="K-POP" src={`${process.env.PUBLIC_URL}/img/kpop.jpg`}/>
          </MusicImg>
          <span>K-POP</span>
        </Line>
        <Line>
          <MusicImg>
            <AlbumImg alt="R&B" src={`${process.env.PUBLIC_URL}/img/strawberry_moon.jpg`}/>
          </MusicImg>
          <span>R&B</span>
        </Line>
        <Line>
          <MusicImg>
            <AlbumImg alt="Cafe Music" src={`${process.env.PUBLIC_URL}/img/cafe.jpg`}/>
          </MusicImg>
          <span>Cafe Music</span>
        </Line>
        <Line>
          <MusicImg>
            <AlbumImg alt="Acoustic" src={`${process.env.PUBLIC_URL}/img/acoustic.jpg`} />
          </MusicImg>
          <span>Acoustic</span>
        </Line>
      </Container>
    </Box>
  );
}
export default HomePlaylist;
