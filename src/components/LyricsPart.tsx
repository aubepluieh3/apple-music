import { faMessage } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import styled from "styled-components";
import { tracks } from "../Data/Music";
import { trackProps } from "./Playlist";
import React from "react";

const Container = styled.div``;

const Btn = styled.button`
  background: none;
  border: none;
`;

const Box = styled(motion.div)``;

const BoxAnimation = styled(motion.div)`
  background-color: rgba(255, 255, 255, 1);
  border-radius: 40px;
  width: 350px;
  height: 300px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
  position: absoulte;
  overflow-x: scroll;
`;

const Overlay = styled(motion.div)`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  bottom: 590px;
  left: 5px;
`;

const overlay = {
  hidden: { backgroundColor: "rgba(0, 0, 0, 0)" },
  visible: { backgroundColor: "rgba(0,0,0,0)" },
  exit: { backgroundColor: "rgba(0, 0, 0, 0)" },
};

const Lyrics = styled.div`
  font-size: 15px;
  padding: 25px;
  text-align: center;
`;

function LyricsPart({ trackIndex }: trackProps) {
  // const [trackIndex, setTrackIndex] = useState(0);
  const [id, setId] = useState<null | string>(null);
  const { lyrics } = tracks[trackIndex];

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
              <FontAwesomeIcon icon={faMessage} />
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
            <BoxAnimation layoutId={id}>
            <Lyrics>
                {lyrics.map((lyric, index) => (
                  <React.Fragment key={index}>
                    <span>{lyric}</span>
                    <br />
                  </React.Fragment>
                ))}
              </Lyrics>
            </BoxAnimation>
          </Overlay>
        ) : null}
      </AnimatePresence>
    </Container>
  );
}

export default LyricsPart;
