import { faListUl } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { tracks } from "../Data/Music";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import styled from "styled-components";

const Container = styled.div``;
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
  right: 105px;
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
`;
const BoxAnimation = styled(motion.div)`
  background-color: rgba(255, 255, 255, 1);
  border-radius: 40px;
  width: 355px;
  height: 300px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
  position: absoulte;
  overflow-x: scroll;
`;

function Playlist({ tracks }) {
  const [trackIndex, setTrackIndex] = useState(0);
  const [id, setId] = useState<null | string>(null);

  return (
    <Container>
      {tracks
        .filter((track: { id: string }) => track.id === String(trackIndex))
        .map((track) => (
          <div
            layoutId={track.id}
            key={track.id}
            onClick={() => setId(track.id)}
          >
            <Btn>
              <FontAwesomeIcon icon={faListUl} />
            </Btn>{" "}
          </div>
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
                    (track: { id: string }) => track.id !== String(trackIndex)
                  )
                  .map((track) => (
                    <ListBox>
                      <Album>
                        <AlbumImg src={track.img} />
                      </Album>
                      <AlbumDetail>
                        <span>{title}</span>
                        <span>{artist}</span>
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
