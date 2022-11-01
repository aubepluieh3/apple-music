import { useEffect, useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";
import { AnimatePresence, motion } from "framer-motion";

import {
  faRepeat,
  faBackward,
  faPlay,
  faForward,
  faShuffle,
  faStop,
  faListUl,
  faVolumeOff,
  faVolumeHigh,
} from "@fortawesome/free-solid-svg-icons";
import { faMessage } from "@fortawesome/free-regular-svg-icons";
import React from "react";
import { onCalcMusicTime } from "./CalTime";
import Playlist from "./Playlist";

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

const SoundBar = styled.div`
  display: flex;
  justify-content: center;
  input {
    accent-color: black;
  }
  svg {
    margin: 0px 5px;
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
  margin: 15px 40px;
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
  svg {
    margin: 30px 40px;
  }
`;

//

const Btn = styled.button`
  background: none;

  border: none;
`;

const BoxAnimation = styled(motion.div)`
  background-color: rgba(255, 255, 255, 1);
  border-radius: 40px;
  width: 400px;
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
  bottom: 520px;
  right: 105px;
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

function PlayScreen({ tracks }) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState("0:00");
  const [duration, setDuration] = useState("0:00");
  const [timeRange, setTimeRange] = useState(0);
  const [trackIndex, setTrackIndex] = useState(0);
  const [barLength, setBarLength] = useState(0);
  const [trackProgress, setTrackProgress] = useState(0);
  const [id, setId] = useState<null | string>(null);

  const { title, artist, music, lyrics, img } = tracks[trackIndex];

  // Refs
  const audioRef = useRef(new Audio(music));
  const intervalRef = useRef();
  const isReady = useRef(false);

  //재생 버튼
  const onPlayButtonClick = () => {
    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      audioRef.current.play();
      setIsPlaying(true);
    }
  };

  //이전
  const toPrevTrack = () => {
    if (trackIndex - 1 < 0) {
      setTrackIndex(tracks.length - 1);
    } else {
      setTrackIndex(trackIndex - 1);
    }
  };

  //다음
  const toNextTrack = () => {
    if (trackIndex < tracks.length - 1) {
      setTrackIndex(trackIndex + 1);
    } else {
      setTrackIndex(0);
    }
  };

  //막대 길이
  useEffect(() => {
    setBarLength(Math.floor(audioRef.current.duration));
  }, [[audioRef.current]]);

  const startTimer = () => {
    // Clear
    clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      if (audioRef.current.ended) {
        toNextTrack();
      } else {
        setTrackProgress(audioRef.current.currentTime);
      }
    }, [1000]);
  };

  const onScrub = (value) => {
    // Clear any timers already running
    clearInterval(intervalRef.current);
    audioRef.current.currentTime = value;
    setTrackProgress(audioRef.current.currentTime);
  };

  //onMouseUp,onKeyUp
  const onScrubEnd = () => {
    if (!isPlaying) {
      setIsPlaying(true);
    }
    startTimer();
  };

  // track 바뀔 떄
  useEffect(() => {
    audioRef.current.pause();

    audioRef.current = new Audio(music);
    setTrackProgress(audioRef.current.currentTime);

    if (isReady.current) {
      audioRef.current.play();
      setIsPlaying(true);
      startTimer();
    } else {
      // Set the isReady ref as true for the next pass
      isReady.current = true;
    }
  }, [trackIndex]);

  // Handles cleanup and setup when changing tracks
  useEffect(() => {
    audioRef.current.pause();

    audioRef.current = new Audio(music);
    setTrackProgress(audioRef.current.currentTime);

    if (isReady.current) {
      audioRef.current.play();
      setIsPlaying(true);
      startTimer();
    } else {
      // Set the isReady ref as true for the next pass
      isReady.current = true;
    }
  }, [trackIndex]);

  //음악 재생 시간, 실시간 재생 위치
  useEffect(() => {
    audioRef.current.addEventListener("timeupdate", () => {
      setDuration(onCalcMusicTime(audioRef.current.duration));
      setCurrentTime(onCalcMusicTime(audioRef.current.currentTime));
      setTimeRange(
        (audioRef.current.currentTime / audioRef.current.duration) * 1000
      );
    });
  }, [audioRef.current]);

  // Pause and clean up on unmount
  useEffect(() => {
    return () => {
      audioRef.current.pause();
      clearInterval(intervalRef.current);
    };
  }, []);

  //shuffle
  const onShuffle = () => {
    clearInterval(intervalRef.current);
    setTrackIndex(Math.floor(Math.random() * tracks.length));
  };

  //volume
  const onVolumeChange = (value: string) => {
    audioRef.current.volume = parseInt(value) / 100;
  };

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
          step="1"
          min="0"
          max={barLength}
          value={trackProgress}
          onChange={(e) => onScrub(e.target.value)}
          onMouseUp={onScrubEnd}
          onKeyUp={onScrubEnd}
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
        <Btn onClick={onShuffle}>
          <FontAwesomeIcon icon={faShuffle} />
        </Btn>
      </PlayBar>
      <SoundBar>
        <FontAwesomeIcon icon={faVolumeOff} />
        <input
          type="range"
          id="bar"
          name="bar"
          step="10"
          min="0"
          max="100"
          onChange={(e) => {
            onVolumeChange(e.target.value);
          }}
        />
        <FontAwesomeIcon icon={faVolumeHigh} />
      </SoundBar>

      <Another>
        {tracks
          .filter((track: { id: string }) => track.id === String(trackIndex))
          .map((track) => (
            <div
              layoutId={track.id}
              key={track.id}
              onClick={() => setId(track.id)}
            >
              {" "}
              <Btn>
                <FontAwesomeIcon icon={faMessage} />
              </Btn>
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
              <BoxAnimation layoutId={id}>
                <Lyrics>
                  {lyrics.map((lyric) => (
                    <>
                      <span>{lyric}</span>
                      <br />
                    </>
                  ))}
                </Lyrics>
              </BoxAnimation>
            </Overlay>
          ) : null}
        </AnimatePresence>
        <Playlist tracks={tracks} />
      </Another>
    </Box>
  );
}
export default PlayScreen;
