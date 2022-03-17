import styled from "@emotion/styled";
import { BREAKPOINTS } from "../../constants";
import IconWrapper from "../IconWrapper";


export const StyledIconWrapper = styled(IconWrapper)`
  margin: 0 0.5em;
  padding: 0;
  border: none;
  background: none;

  cursor: pointer;
  font: inherit;
  outline: inherit;
  color: inherit;
`;

export const StyledValueWrapper = styled.span`
  display: inline-block;
  min-width: 1ch;
  text-align: center;
  font-weight: 600;
`;

export const StyledContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  align-self: flex-end;

  ${BREAKPOINTS.laptop} {
    align-self: auto;
  }
`;
