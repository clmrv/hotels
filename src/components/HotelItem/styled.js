import styled from "@emotion/styled";
import { BOXSHADOW, BREAKPOINTS, COLORS } from "../../constants";
import StarFilter from "../StarFilter";

export const StyledContainer = styled.div`
  display: grid;
  padding: 1em;
  background-color: ${COLORS.WHITE};
  border-radius: 1em;
  box-shadow: ${BOXSHADOW};
  justify-items: center;
  grid-template-areas:
    "images"
    "stars"
    "info"
    "rooms";

  ${BREAKPOINTS.laptop} {
    grid-template-columns: calc(16rem + 1em) 1fr 7rem; /* 1em padding */
    grid-template-areas:
      "images info stars"
      "rooms rooms rooms";

    justify-items: start;
  }
`;

export const StyledHotelInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  grid-area: info;

  ${BREAKPOINTS.laptop} {
    align-items: flex-start;
  }
`;

export const StyledName = styled.div`
  font-size: 1.3em;
  font-weight: 500;
`;

export const StyledAddresses = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: rgb(${COLORS.RGB_GRAY});

  ${BREAKPOINTS.laptop} {
    align-items: flex-start;
  }
`;

export const StyledImages = styled.div`
  background-color: red;
  grid-area: images;
`;

export const StyledStarFilter = styled(StarFilter)`
  grid-area: stars;
  ${BREAKPOINTS.laptop} {
    justify-self: end;
  }
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
