import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";
import { AnimatePresence, motion } from "framer-motion";
import { items } from "../Data/Foru";
import { useState } from "react";
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
  img {
    height: 100%;
    width: 100%;
    object-fit: cover;
    border-radius: 40px;
  }
`;

const Content = styled(motion.div)`
  width: 600px;
  height: 320px;
  margin: 25px 0px;
  font-size: 12px;
  > div:first-child {
    font-size: 30px;
    font-weight: 700;
    margin-bottom: 30px;
    margin: 10px 15px;
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
  visible: { backgroundColor: "rgba(0,0,0,0)" },
  exit: { backgroundColor: "rgba(0, 0, 0, 0)" },
};
const Title = styled(motion.span)`
  position: relative;
  top: -40px;
  left: 10px;
  color: white;
  font-weight: 700;
  font-size: 20px;
`;

const AlbumDetail = styled.div`
  display: flex;
  img {
    margin-top: 10px;
    margin-left: 20px;
    width: 200px;
    height: 200px;
    position: absolute;
  }
`;
const AlbumTrack = styled.div`
  display: flex;
  flex-direction: column;
  width: 300px;
  height: 180px;
  justify-content: center;
  align-items: center;
  font-size: 15px;
  margin-left: 80px;
  margin-top: 15px;
`;

const Track = styled.div`
  width: 300px;
  padding: 10px;
  margin-bottom: 5px;
  text-align: center;
  font-weight: 700;
  border-radius: 10px;
  box-shadow: rgba(17, 12, 46, 0.15) 0px 48px 100px 0px;
`;
const Album = styled.div`
  position: relative;
  color: white;
  display: flex;
  flex-direction: column;
  font-size: 35px;
  font-weight: 700;
  left: 20px;
  top: 100px;
  span {
    margin-left: 7px;
  }
`;

const Interview = styled.div`
  margin: 10px 15px;
`;

function ForUBox() {
  const [id, setId] = useState<null | string>(null);
  return (
    <>
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
              <img src={`img/${item.id}.jpg`} />
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
                      {item.album ? (
                        <AlbumDetail>
                          <div>
                            <img src={`img/${item.id}.jpg`} />
                          </div>
                          <Album>
                            <span>{item.album}</span>
                            <span>{item.artist}</span>
                          </Album>
                          <AlbumTrack>
                            {item.tracks.map((track) => (
                              <Track>{track}</Track>
                            ))}
                          </AlbumTrack>
                        </AlbumDetail>
                      ) : (
                        <Interview>{item.content}</Interview>
                      )}
                    </Content>
                  ))}
              </BoxTwo>
            </Overlay>
          )}
        </AnimatePresence>
      </Wrapper>
    </>
  );
}
export default ForUBox;
