import React from "react";
import { Carousel } from "react-responsive-carousel";
import { useAppSelector } from "../../../hooks";
import Hotel from "../../../model/Hotel";
import { filterRooms } from "../helpers";
import RoomItem from "./RoomItem";
import {
  StyledContainer,
  StyledHotelInfo,
  StyledImages,
  StyledName,
  StyledRoomsWrapper,
  StyledStarFilter,
  StyledAddresses,
  StyledNoRoomWrapper,
  StyledCarouselImage,
} from "./styled";

interface Props {
  hotelIndex: number;
  hotel: Hotel;
}

const HotelItem: React.FC<Props> = ({ hotel, hotelIndex }) => {
  const hotelDetails = useAppSelector((store) => store.details[hotelIndex]);
  const filters = useAppSelector((store) => store.filters);
  const loading = useAppSelector((store) => store.loading);

  const filteredRooms =
    !loading &&
    filterRooms({
      rooms: hotelDetails.rooms,
      adults: filters.adults,
      children: filters.children,
    });

  const noRooms = filteredRooms && filteredRooms.length === 0;
  return (
    <StyledContainer>
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
        {filteredRooms &&
          filteredRooms.map((room, index) => (
            <RoomItem key={room.id} room={room} />
          ))}
      </StyledRoomsWrapper>

      {noRooms && (
        <StyledNoRoomWrapper>No rooms available.</StyledNoRoomWrapper>
      )}
    </StyledContainer>
  );
};

export default HotelItem;
