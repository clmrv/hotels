import React from "react";
import Hotel from "../../model/Hotel";
import HotelItem from "../HotelItem";

interface Props {
  hotels: Hotel[];
}

const HotelList: React.FC<Props> = ({ hotels }) => {
  const noHotels = hotels.length === 0;
  return (
    <div>
      {noHotels && <div>No hotels available.</div>}

      {hotels.map((hotel) => (
        <HotelItem hotel={hotel} />
      ))}
    </div>
  );
};

export default HotelList;
