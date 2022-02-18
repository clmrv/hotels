import React from "react";
import Hotel from "../../model/Hotel";
import {
  StyledContainer,
  StyledHotelInfo,
  StyledImages,
  StyledName,
  StyledStarFilter,
} from "./styled";

interface Props {
  hotel: Hotel;
}

const HotelItem: React.FC<Props> = ({ hotel }) => {
  return (
    <StyledContainer>
      <StyledImages>img</StyledImages>
      <StyledHotelInfo>
        <StyledName>{hotel.name}</StyledName>
        <div>{hotel.address1}</div>
        <div>{hotel.address2}</div>
      </StyledHotelInfo>
      <StyledStarFilter value={parseInt(hotel.starRating)} starsCount={5} />
    </StyledContainer>
  );
};

export default HotelItem;
