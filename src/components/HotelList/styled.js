import styled from "@emotion/styled";
import { BOXSHADOW, COLORS } from "../../constants";

export const StyledContainerWrapper = styled.div`
  box-sizing: border-box;
  width: 100%;
  max-width: 1200px;
  padding: 0 1em 1em 1em;
`;

export const StyledContainer = styled.div`
  padding: 1em;
  background-color: ${COLORS.WHITE};
  border-radius: 1em;
  box-shadow: ${BOXSHADOW};
`;
