import React, { useState } from "react";
import PlayScreen from "./components/PlayScreen";

function Main() {
  const [audio, setAudio] = useState(new Audio());
  return <PlayScreen audio={audio} />;
}

export default Main;
