import styled from "@emotion/styled";

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
  position: relative;
  top: -2em;
`;
