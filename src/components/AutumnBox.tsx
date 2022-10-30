import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";
import { AnimatePresence, motion } from "framer-motion";
import { datas } from "../Data/Autumn";
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

const SecondGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  width: 70vw;
  gap: 10px;
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
  left: 16px;
  color: white;
  font-weight: 700;
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
  grid-template-columns: repeat(2, 170px);
  height: 180px;
  width: 200px;

  justify-content: center;
  align-items: center;
  font-size: 15px;
  display: grid;
  gap: 5px;
`;

const TrackBox = styled.div`
  width: 300px;
  displat: flex;
  margin-left: 100px;
  margin-top: 20px;
`;
const Track = styled.div`
  padding: 10px;
  margin-bottom: 5px;
  text-align: center;
  font-weight: 700;
  border-radius: 10px;
  box-shadow: rgba(17, 12, 46, 0.15) 0px 48px 100px 0px;
`;
const Album = styled.div`
  width: 200px;
  height: 200px;
  display: flex;
  flex-direction: column;

  span {
    margin-left: 7px;
    color: white;
    position: relative;
    font-size: 35px;
    font-weight: 700;
    top: 120px;
    left: 30px;
  }
`;
function AutumnBox() {
  const [id, setId] = useState<null | string>(null);
  return (
    <>
      <Header>
        <span>가을 포근한 음악과 🍂</span>
        <FontAwesomeIcon icon={faChevronRight} />
      </Header>
      <Wrapper>
        <SecondGrid>
          {datas.map((data) => (
            <BoxTwo
              layoutId={data.id}
              key={data.id}
              onClick={() => setId(data.id)}
            >
              <img src={`img/${data.id}.jpg`} />
              <Title>{data.title}</Title>
            </BoxTwo>
          ))}
        </SecondGrid>
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
                {datas
                  .filter((data) => data.id === id)
                  .map((data) => (
                    <Content>
                      <div>{data.title}</div>

                      <AlbumDetail>
                        <Album>
                          <img src={`img/${data.id}.jpg`} />
                          <span>{data.album}</span>
                          <span>{data.artist}</span>
                        </Album>
                        <TrackBox>
                          <AlbumTrack>
                            {data.tracks.map((track) => (
                              <Track>{track}</Track>
                            ))}
                          </AlbumTrack>
                        </TrackBox>
                      </AlbumDetail>
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

export default AutumnBox;
