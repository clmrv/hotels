import React from "react";
import HotelList from "./components/HotelList";
import Toolbar from "./components/Toolbar";
import styled from "@emotion/styled";
import { BREAKPOINTS, COLORS } from "./constants";

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

  ${BREAKPOINTS.tablet} {
    font-size: 1.1rem;
  }

  ${BREAKPOINTS.laptop} {
    font-size: 1.3rem;
  }
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
