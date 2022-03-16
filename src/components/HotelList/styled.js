import styled from "@emotion/styled";
import { BREAKPOINTS } from "../../constants";

export const StyledContainerWrapper = styled.main`
  box-sizing: border-box;
  width: 100%;
  max-width: 1200px;
  padding: 0 1em 1em 1em;

  ${BREAKPOINTS.tablet} {
    padding: 0 1.5em 1.5em 1.5em;
  }

  ${BREAKPOINTS.laptop} {
    padding: 0 3em 3em 3em;
  }
`;

export const StyledContainer = styled.div`
  display: grid;
  grid-auto-flow: row;
  gap: 1em;
`;
