import React from "react";
import HotelList from "./components/HotelList";
import Toolbar from "./components/Toolbar";
import styled from "@emotion/styled";
import { COLORS } from "./constants";

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
  background-image: linear-gradient(
    120deg,
    ${COLORS.CYAN} 0%,
    ${COLORS.CYAN2} 100%
  );
`;

function App() {
  return (
    <StyledContainer>
      <Toolbar />
      <HotelList />
    </StyledContainer>
  );
}

export default App;
