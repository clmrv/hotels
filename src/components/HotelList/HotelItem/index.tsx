import React from "react";
import { Carousel } from "react-responsive-carousel";
import Hotel from "../../../model/Hotel";
import RoomItem from "./RoomItem";
import {
  StyledContainer,
  StyledHotelInfo,
  StyledImages,
  StyledName,
  StyledRoomsWrapper,
  StyledStarFilter,
  StyledAddresses,
  StyledCarouselImage,
} from "./styled";

interface Props {
  hotel: Hotel;
}

const HotelItem: React.FC<Props> = ({ hotel }) => {
  const rooms = hotel.details?.rooms;

  return (
    <StyledContainer data-testid="hotel">
      <StyledImages>
        <Carousel dynamicHeight={true} showStatus={false} showThumbs={false}>
          {hotel.images.map((image, index) => (
            <StyledCarouselImage key={index} src={image.url} alt={image.alt} />
          ))}
        </Carousel>
      </StyledImages>
      <StyledHotelInfo>
        <StyledName>{hotel.name}</StyledName>
        <StyledAddresses>
          <div>{hotel.address1}</div>
          <div>{hotel.address2}</div>
        </StyledAddresses>
      </StyledHotelInfo>
      <StyledStarFilter value={parseInt(hotel.starRating)} starsCount={5} />
      <StyledRoomsWrapper>
        {rooms && rooms.map((room) => <RoomItem key={room.id} room={room} />)}
      </StyledRoomsWrapper>
    </StyledContainer>
  );
};

export default HotelItem;
