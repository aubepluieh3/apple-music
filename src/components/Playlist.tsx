import { faListUl } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { tracks } from "../Data/Music";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import styled from "styled-components";

const Container = styled.div`
  margin-left: 145px;
`;
const Btn = styled.button`
  background: none;

  border: none;
`;
const Overlay = styled(motion.div)`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  bottom: 590px;
  right: 250px;
`;

const overlay = {
  hidden: { backgroundColor: "rgba(0, 0, 0, 0)" },
  visible: { backgroundColor: "rgba(0,0,0,0)" },
  exit: { backgroundColor: "rgba(0, 0, 0, 0)" },
};

const List = styled.div`
  font-size: 15px;
  padding: 25px;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const ListBox = styled.div`
  display: flex;
  box-shadow: rgba(17, 12, 46, 0.15) 0px 48px 100px 0px;
  jusify-content: center;
  align-items: center;
  width: 200px;
  border-radius: 10px;
  margin-bottom: 5px;
`;
const Album = styled.div`
  margin-right: 10px;
`;
const AlbumImg = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 10%;
`;

const AlbumDetail = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  jusify-content: center;
  width: 150px;
  span:first-child {
    font-weight: 500;
  }
  span:last-child {
    font-size: 10px;
  }
`;

const Box = styled(motion.div)``;
const BoxAnimation = styled(motion.div)`
  background-color: rgba(255, 255, 255, 1);
  border-radius: 40px;
  width: 355px;
  height: 300px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
  position: absoulte;
  overflow-x: scroll;
`;

export interface trackProps {
  trackIndex: number;
}
function Playlist({ trackIndex }: trackProps) {
  const [id, setId] = useState<null | string>(null);

  return (
    <Container>
      {tracks
        .filter((track: { id: string }) => track.id === String(trackIndex))
        .map((track) => (
          <Box
            layoutId={track.id}
            key={track.id}
            onClick={() => setId(track.id)}
          >
            <Btn>
              <FontAwesomeIcon icon={faListUl} />
            </Btn>
          </Box>
        ))}
      <AnimatePresence>
        {id ? (
          <Overlay
            variants={overlay}
            onClick={() => setId(null)}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <BoxAnimation layoutId={id} key={id}>
              <List>
                {tracks
                  .filter(
                    (track: { id: string }) => parseInt(track.id) > trackIndex
                  )
                  .map((track) => (
                    <ListBox key={track.id}>
                      <Album>
                        <AlbumImg src={track.img} />
                      </Album>
                      <AlbumDetail>
                        <span>{track.title}</span>
                        <span>{track.artist}</span>
                      </AlbumDetail>
                    </ListBox>
                  ))}
              </List>
            </BoxAnimation>
          </Overlay>
        ) : null}
      </AnimatePresence>
    </Container>
  );
}

export default Playlist;
