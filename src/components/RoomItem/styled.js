import styled from "@emotion/styled";
import { COLORS } from "../../constants";

export const StyledContainer = styled.div`
  box-sizing: border-box;
  padding: 1em;
  width: 100%;
  background-color: ${COLORS.WHITE};
`;

export const StyledRoomName = styled.div`
  font-weight: 500;
`;

export const StyledOccupancy = styled.div`
  padding: 0.25em 0;
  color: rgb(${COLORS.RGB_GRAY});
  font-size: 0.8em;
`;

export const StyledRoomDesc = styled.div`
  margin-top: 0.5em;
`;
