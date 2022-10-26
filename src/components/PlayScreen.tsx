import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";
import {
  faRepeat,
  faBackward,
  faPlay,
  faForward,
  faShuffle,
} from "@fortawesome/free-solid-svg-icons";
import React from "react";

const MusicImg = styled.div`
  display: flex;
  justify-content: center;
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
const PlayBar = styled.div`
  display: flex;
  margin: 60px 0px;
  justify-content: space-between;
  align-items: center;
  margin: 60px 40px;
`;

const PlayBox = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: black;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: rgb(93 88 92 / 65%) 0px 7px 29px 0px;
`;

function PlayScreen() {
  return (
    <div className="second box">
      <MusicImg>
        <img src="img/strawberry moon.jpg" />
      </MusicImg>
      <Text>
        <span>Strawberry Moon</span>
        <span>IU</span>
      </Text>

      <PlayBar>
        <FontAwesomeIcon icon={faRepeat} />
        <FontAwesomeIcon icon={faBackward} />
        <PlayBox>
          <FontAwesomeIcon icon={faPlay} />
        </PlayBox>
        <FontAwesomeIcon icon={faForward} />
        <FontAwesomeIcon icon={faShuffle} />
      </PlayBar>
    </div>
  );
}
export default PlayScreen;
