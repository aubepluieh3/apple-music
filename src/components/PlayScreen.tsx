import { useEffect, useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";
import { motion } from "framer-motion";

import {
  faRepeat,
  faBackward,
  faPlay,
  faForward,
  faShuffle,
  faStop,
  faListUl,
} from "@fortawesome/free-solid-svg-icons";
import { faMessage } from "@fortawesome/free-regular-svg-icons";
import React from "react";

const Box = styled.div`
  background: white;
  border-radius: 30px;
  width: 30%;
  height: 600px;
  margin: 50px 0px;
`;

const MusicImg = styled(motion.div)`
  display: flex;
  justify-content: center;
  margin-top: 30px;
`;

const AlbumImg = styled.img`
  width: 200px;
  height: 200px;
  border-radius: 10%;
  margin: 30px 0px;
  box-shadow: rgb(194 150 183) 0px 7px 29px 0px;
`;

const Text = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;

  span:first-child {
    padding-top: 30px;
    font-size: 20px;
    margin-bottom: 5px;
    font-weight: 600;
  }

  span:last-child {
    font-size: 12px;
    margin-bottom: 5px;
    color: grey;
  }
`;

const MusicBar = styled.div`
  display: flex;
  justify-content: center;
  input {
    width: 205px;
    accent-color: black;
  }
`;

const Time = styled.div`
  display: flex;
  justify-content: space-around;
  font-size: 11px;
  color: lightgray;
  margin-top: 10px;
`;
const PlayBar = styled.div`
  display: flex;
  margin: 60px 0px;
  justify-content: space-between;
  align-items: center;
  margin: 30px 40px;
`;

const PlayBox = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: black;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: rgb(93 88 92 / 65%) 0px 7px 29px 0px;
`;

const Another = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 30px 40px;
`;
const Btn = styled.button`
  background: none;

  border: none;
`;

function PlayScreen({ tracks }) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState("0:00");
  const [duration, setDuration] = useState("0:00");
  const [timeRange, settimeRange] = useState(0);
  const [trackIndex, setTrackIndex] = useState(0);
  const [trackProgress, setTrackProgress] = useState(0);

  const { title, artist, id, music, lyrics, img } = tracks[trackIndex];

  // Refs
  const audioRef = useRef(new Audio(music));
  const intervalRef = useRef();
  const isReady = useRef(false);

  const onPlayButtonClick = () => {
    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      audioRef.current.play();
      setIsPlaying(true);
    }
  };

  const toPrevTrack = () => {
    if (trackIndex - 1 < 0) {
      setTrackIndex(tracks.length - 1);
    } else {
      setTrackIndex(trackIndex - 1);
    }
  };

  const toNextTrack = () => {
    if (trackIndex < tracks.length - 1) {
      setTrackIndex(trackIndex + 1);
    } else {
      setTrackIndex(0);
    }
  };

  
  useEffect(() => {
    audioRef.current.addEventListener("timeupdate", () => {
      setDuration(audioRef.current.duration);
      setCurrentTime(audioRef.current.currentTime);
      settimeRange(
        (audioRef.current.currentTime / audioRef.current.duration) * 1000
      );
    });
  }, [audioRef.current]);

  return (
    <Box>
      <MusicImg
        whileHover={{ scale: [null, 1.2, 1.1] }}
        transition={{ duration: 0.3 }}
      >
        <AlbumImg src={img} />
      </MusicImg>
      <Text>
        <span>{title}</span>
        <span>{artist}</span>
      </Text>
      <MusicBar>
        <input
          type="range"
          id="bar"
          name="bar"
          min="0"
          max="205"
          value={timeRange}
        />
      </MusicBar>
      <Time>
        <span>{currentTime}</span>
        <span>{duration}</span>
      </Time>
      <PlayBar>
        <FontAwesomeIcon icon={faRepeat} />
        <Btn onClick={toPrevTrack}>
          <FontAwesomeIcon icon={faBackward} />
        </Btn>
        <PlayBox onClick={onPlayButtonClick}>
          {isPlaying ? (
            <>
              <FontAwesomeIcon icon={faStop} />
            </>
          ) : (
            <>
              <FontAwesomeIcon icon={faPlay} />
            </>
          )}
        </PlayBox>
        <Btn onClick={toNextTrack}>
          <FontAwesomeIcon icon={faForward} />
        </Btn>
        <Btn>
          <FontAwesomeIcon icon={faShuffle} />
        </Btn>
      </PlayBar>
      <Another>
        <FontAwesomeIcon icon={faMessage} />
        <FontAwesomeIcon icon={faListUl} />
      </Another>
    </Box>
  );
}
export default PlayScreen;
