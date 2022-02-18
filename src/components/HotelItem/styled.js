import styled from "@emotion/styled";
import StarFilter from "../StarFilter";

export const StyledContainer = styled.div`
  display: grid;
  grid-template-areas:
    "images"
    "stars"
    "info";
  justify-items: center;
`;

export const StyledHotelInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  grid-area: info;
`;

export const StyledName = styled.div`
  font-size: 1.3em;
`;

export const StyledImages = styled.div`
  background-color: red;
  grid-area: images;
`;

export const StyledStarFilter = styled(StarFilter)`
  grid-area: stars;
`;
