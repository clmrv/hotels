import React from "react";
import { Room } from "../../../../model/HotelDetails";
import {
  StyledRoomName,
  StyledContainer,
  StyledRoomDesc,
  StyledOccupancy,
  StyledRoomInfo,
} from "./styled";

interface Props {
  room: Room;
}

const RoomItem: React.FC<Props> = ({ room }) => {
  return (
    <StyledContainer data-testid="room">
      <StyledRoomInfo>
        <StyledRoomName>{room.name}</StyledRoomName>
        <StyledOccupancy>
          <div>{`Adults: ${room.occupancy.maxAdults}`}</div>
          <div>{`Children: ${room.occupancy.maxChildren}`}</div>
        </StyledOccupancy>
      </StyledRoomInfo>
      <StyledRoomDesc>{room.longDescription}</StyledRoomDesc>
    </StyledContainer>
  );
};

export default RoomItem;
