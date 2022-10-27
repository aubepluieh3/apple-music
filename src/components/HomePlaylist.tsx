import styled from "styled-components";
import { motion, useScroll } from "framer-motion";
import album from "../img/strawberry moon.jpg";
import cafe from "../img/cafe.jpg";
import acoustic from "../img/acoustic.jpg";
import today from "../img/today.jpg";
import kpop from "../img/kpop.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { useRef } from "react";

const Box = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 25px;
`;

const Container = styled.ul`
  display: flex;
  overflow-x: scroll;
  padding-bottom: 20px;
`;

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
const MusicImg = styled.div`
  display: flex;
`;

const AlbumImg = styled.img`
  width: 150px;
  height: 150px;
  border-radius: 10%;
  margin-top: 15px;
`;

const Line = styled.li`
  display: flex;
  flex-direction: column;
  margin-right: 20px;
  span {
    margin-top: 5px;
    margin-left: 5px;
    font-weight: 500;
  }
`;

function HomePlaylist() {
  const ref = useRef(null);
  const { scrollXProgress } = useScroll({ container: ref });
  return (
    <Box>
      <Header>
        <span>에디터 PICK💘</span>
        <FontAwesomeIcon icon={faChevronRight} />
      </Header>
      <Container ref={ref}>
        <Line>
          <MusicImg>
            <AlbumImg src={today} />
          </MusicImg>
          <span>Today's Hits</span>
        </Line>
        <Line>
          <MusicImg>
            <AlbumImg src={kpop} />
          </MusicImg>
          <span>K-POP</span>
        </Line>
        <Line>
          <MusicImg>
            <AlbumImg src={album} />
          </MusicImg>
          <span>R&B</span>
        </Line>
        <Line>
          <MusicImg>
            <AlbumImg src={cafe} />
          </MusicImg>
          <span>Cafe Music</span>
        </Line>
        <Line>
          <MusicImg>
            <AlbumImg src={acoustic} />
          </MusicImg>
          <span>Acoustic</span>
        </Line>
      </Container>
    </Box>
  );
}
export default HomePlaylist;
