import styled from "@emotion/styled";
import { BOXSHADOW, BREAKPOINTS, COLORS } from "../../constants";

export const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  padding: 1em;
  gap: 1em;
  background-color: ${COLORS.WHITE};
  border-radius: 1em;
  box-shadow: ${BOXSHADOW};

  ${BREAKPOINTS.laptop} {
    flex-direction: row;
  }
`;
