import styled from "@emotion/styled";
import IconWrapper from "../IconWrapper";

export const StyledButton = styled.span`
  cursor: pointer;
  border: 1px solid black;
  border-radius: 50%;
`;

export const StyledIconWrapper = styled(IconWrapper)`
  margin: 0 0.5rem;
`;

export const StyledValueWrapper = styled.span`
  display: inline-block;
  min-width: 1ch;
  text-align: center;
  font-weight: 600;
`;
