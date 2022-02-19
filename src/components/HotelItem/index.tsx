import React from "react";
import { useAppSelector } from "../../hooks";
import Hotel from "../../model/Hotel";
import RoomItem from "../RoomItem";
import {
  StyledContainer,
  StyledHotelInfo,
  StyledImages,
  StyledName,
  StyledRoomsWrapper,
  StyledStarFilter,
} from "./styled";

interface Props {
  hotelIndex: number;
  hotel: Hotel;
}

const HotelItem: React.FC<Props> = ({ hotel, hotelIndex }) => {
  const hotelDetails = useAppSelector((store) => store.details[hotelIndex]);
  const loading = useAppSelector((store) => store.loading);

  const noRooms = !loading && hotelDetails.rooms.length === 0;
  return (
    <StyledContainer>
      <StyledImages>img</StyledImages>
      <StyledHotelInfo>
        <StyledName>{hotel.name}</StyledName>
        <div>{hotel.address1}</div>
        <div>{hotel.address2}</div>
      </StyledHotelInfo>
      <StyledStarFilter value={parseInt(hotel.starRating)} starsCount={5} />
      <StyledRoomsWrapper>
        {!loading &&
          hotelDetails.rooms.map((room, index) => (
            <RoomItem key={room.id} room={room} />
          ))}
      </StyledRoomsWrapper>

      {noRooms && <div>No rooms available.</div>}
    </StyledContainer>
  );
};

export default HotelItem;
