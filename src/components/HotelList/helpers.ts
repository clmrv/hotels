import Hotel from "../../model/Hotel";
import HotelDetails, { Room } from "../../model/HotelDetails";
import { Filters } from "../../store/store";

export const filterHotels = ({
  hotels,
  details,
  filters,
}: {
  hotels: Hotel[];
  details: HotelDetails[];
  filters: Filters;
}) => {
  const filteredRating = filterByRating(hotels, filters.rating);
  const filteredRooms = details.map((hotelDetails) => ({
    ...hotelDetails,
    rooms: filterRooms({
      rooms: hotelDetails.rooms,
      adults: filters.adults,
      children: filters.children,
    }),
  }));
  return filteredRating.filter(
    (hotel, index) => filteredRooms[index]?.rooms.length > 0
  );
};

const filterByRating = (hotels: Hotel[], rating: number) =>
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
