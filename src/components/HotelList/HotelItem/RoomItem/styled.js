import styled from "@emotion/styled";
import { BREAKPOINTS, COLORS } from "../../../../constants";

export const StyledContainer = styled.div`
  box-sizing: border-box;
  padding: 2em 1em;
  width: 100%;
  background-color: ${COLORS.WHITE};

  ${BREAKPOINTS.laptop} {
    display: grid;
    grid-template-columns: 16rem 1fr;
  }
`;

export const StyledRoomInfo = styled.div`
  display: flex;
  flex-direction: column;

  ${BREAKPOINTS.laptop} {
    justify-content: center;
    padding-right: 1em;
  }
`;

export const StyledRoomName = styled.div`
  font-weight: 500;
`;

export const StyledOccupancy = styled.div`
  padding-top: 0.25em;
  color: rgb(${COLORS.RGB_GRAY});
  font-size: 0.8em;
`;

export const StyledRoomDesc = styled.div`
  margin-top: 0.75em;
  line-height: 1.3;

  ${BREAKPOINTS.laptop} {
    margin-top: 0;
  }
`;
