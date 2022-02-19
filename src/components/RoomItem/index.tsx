import React from "react";
import { Room } from "../../model/HotelDetails";
import {
  StyledRoomName,
  StyledContainer,
  StyledRoomDesc,
  StyledOccupancy,
} from "./styled";

interface Props {
  room: Room;
}

const RoomItem: React.FC<Props> = ({ room }) => {
  return (
    <StyledContainer>
      <StyledRoomName>{room.name}</StyledRoomName>
      <StyledOccupancy>
        <div>{`Adults: ${room.occupancy.maxAdults}`}</div>
        <div>{`Children: ${room.occupancy.maxChildren}`}</div>
      </StyledOccupancy>
      <StyledRoomDesc>{room.longDescription}</StyledRoomDesc>
    </StyledContainer>
  );
};

export default RoomItem;
