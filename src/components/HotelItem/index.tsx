import React from "react";
import Hotel from "../../model/Hotel";

interface Props {
  hotel: Hotel;
}

const HotelItem: React.FC<Props> = ({ hotel }) => {
  return (
    <div>
      {hotel.id}
      {hotel.name}
    </div>
  );
};

export default HotelItem;
