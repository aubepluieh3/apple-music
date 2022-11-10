import PlayScreen from "./components/PlayScreen";
import { tracks } from "../src/Data/Music";

function Main() {
  //const [audio, setAudio] = useState(new Audio());
  return <PlayScreen tracks={tracks} />;
}

export default Main;
