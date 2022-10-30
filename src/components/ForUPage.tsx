import styled from "styled-components";
import ForUBox from "./ForUBox";
import AutumnBox from "./AutumnBox";

const Box = styled.div`
  display: flex;
  flex-direction: column;
  margin: 25px;
`;

function ForUPage() {
  return (
    <Box>
      <ForUBox />
      <AutumnBox />
    </Box>
  );
}
export default ForUPage;
