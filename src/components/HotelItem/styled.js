import styled from "@emotion/styled";
import { BOXSHADOW, COLORS } from "../../constants";
import StarFilter from "../StarFilter";

export const StyledContainer = styled.div`
  display: grid;
  grid-template-areas:
    "images"
    "stars"
    "info"
    "rooms";
  justify-items: center;

  padding: 1em;
  background-color: ${COLORS.WHITE};
  border-radius: 1em;
  box-shadow: ${BOXSHADOW};
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

export const StyledRoomsWrapper = styled.div`
  grid-area: rooms;
  display: flex;
  flex-direction: column;
  gap: 1px;
  width: 100%;
  background-image: linear-gradient(
    to right,
    rgba(${COLORS.RGB_GRAY}, 0),
    rgba(${COLORS.RGB_GRAY}, 0.5),
    rgba(${COLORS.RGB_GRAY}, 0)
  );
`;
