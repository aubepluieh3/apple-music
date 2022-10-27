import styled from "styled-components";
import Main from "../Main";

const Body = styled.div`
  display: flex;
  margin: 0px 50px;
`;
const Box = styled.div`
  width: 70%;
  border-radius: 30px;
  height: 600px;
  background: white;
  margin: 50px 0px;
`;

function Home() {
  return (
    <Body>
      <Box></Box>
      <Main />
    </Body>
  );
}
export default Home;
