import styled from "@emotion/styled";
import { BREAKPOINTS } from "../../constants";

export const StyledBanner = styled.img`
  border-image-width: 0;

  display: block;
  height: 20vh;
  width: 100%;
  background-color: red;
  object-fit: cover;
`;

export const StyledContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const StyledFiltersWrapper = styled.div`
  transform: translateY(-50%);
  margin-bottom: -1.5em;

  ${BREAKPOINTS.laptop} {
    margin-bottom: 0;
  }
`;
