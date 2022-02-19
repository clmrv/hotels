import styled from "@emotion/styled";
import { BREAKPOINTS } from "../../constants";
import IconWrapper from "../IconWrapper";

export const StyledButton = styled.span`
  cursor: pointer;
  border: 1px solid black;
  border-radius: 50%;
`;

export const StyledIconWrapper = styled(IconWrapper)`
  margin: 0 0.5em;
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
