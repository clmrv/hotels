import Hotel from "../../model/Hotel";
import { Room } from "../../model/HotelDetails";

export const filterHotels = (hotels: Hotel[], rating: number) =>
  hotels.filter((hotel) => parseInt(hotel.starRating) >= rating);

export const filterRooms = ({
  rooms,
  adults,
  children,
}: {
  rooms: Room[];
  adults: number;
  children: number;
}) =>
  rooms.filter(
    (room) =>
      room.occupancy.maxAdults >= adults &&
      room.occupancy.maxChildren >= children
  );
