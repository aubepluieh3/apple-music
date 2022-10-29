import styled from "styled-components";
import ForUPage from "../components/ForUPage";
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

function ForU() {
  return (
    <Body>
      <Box>
        <ForUPage />
      </Box>
      <Main />
    </Body>
  );
}
export default ForU;
