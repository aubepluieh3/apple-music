import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowLeft,
  faEllipsisVertical,
  faRepeat,
  faBackward,
  faPlay,
  faForward,
  faShuffle,
} from "@fortawesome/free-solid-svg-icons";
return (
  <div className="second box">
    <header>
      <FontAwesomeIcon icon="faArrowLeft" />
      <FontAwesomeIcon icon="faEllipsisVertical" />
    </header>
    <div className="music__image">
      <img src="img/strawberry moon.jpg" />
    </div>
    <div className="text">
      <span className="text__title">Strawberry Moon</span>
      <span className="text__artist">IU</span>
    </div>
    <div className="time">
      <span>1:56</span>
      <span>3:25</span>
    </div>
    <div className="music__bar">
      <input
        type="range"
        id="bar"
        name="bar"
        min="0"
        max="205"
        value="116"
        step="1"
      />
    </div>
    <div className="play__bar">
      <FontAwesomeIcon icon="faRepeat" />
      <FontAwesomeIcon icon="faBackward" />
      <div className="play__box">
        <FontAwesomeIcon icon="faPlay" />
      </div>
      <FontAwesomeIcon icon="faForward" />
      <FontAwesomeIcon icon="faShuffle" />
    </div>
  </div>
);
export default PlayScreen;
