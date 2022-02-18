import React, { useEffect } from "react";
import { useAppSelector, useThunkDispatch } from "../../hooks";
import { getHotels } from "../../store/thunks";
import HotelItem from "../HotelItem";
import { StyledContainer, StyledContainerWrapper } from "./styled";

const HotelList: React.FC = () => {
  const thunkDispatch = useThunkDispatch();
  const hotels = useAppSelector((store) => store.hotels);
  const loading = useAppSelector((store) => store.loading);

  const noHotels = !loading && hotels.length === 0;

  useEffect(() => {
    thunkDispatch(getHotels());
  }, [thunkDispatch]);

  return (
    <StyledContainerWrapper>
      <StyledContainer>
        {noHotels && <div>No hotels available.</div>}

        {hotels.map((hotel, index) => (
          <HotelItem key={index} hotel={hotel} />
        ))}

        {loading && <div>Loading...</div>}
      </StyledContainer>
    </StyledContainerWrapper>
  );
};

export default HotelList;
