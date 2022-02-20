import React, { useEffect } from "react";
import { useAppSelector, useAppDispatch } from "../../hooks";
import { getHotels } from "../../store/thunks";
import HotelItem from "./HotelItem";
import { filterHotels } from "./helpers";
import { StyledContainer, StyledContainerWrapper } from "./styled";
import Loading from "../Loading";

const HotelList: React.FC = () => {
  const thunkDispatch = useAppDispatch();
  const hotels = useAppSelector((store) => store.hotels);
  const hotelsDetails = useAppSelector((store) => store.details);
  const loading = useAppSelector((store) => store.loading);
  const filters = useAppSelector((store) => store.filters);

  const filteredHotels = filterHotels({
    hotels,
    details: hotelsDetails,
    filters,
  });
  const noHotels = !loading && filteredHotels.length === 0;

  useEffect(() => {
    thunkDispatch(getHotels());
  }, [thunkDispatch]);

  return (
    <StyledContainerWrapper>
      <StyledContainer>
        {loading ? (
          <Loading />
        ) : (
          <>
            {noHotels && <div>No hotels available.</div>}
            {filteredHotels.map((hotel, index) => (
              <HotelItem key={index} hotel={hotel} hotelIndex={index} />
            ))}
          </>
        )}
      </StyledContainer>
    </StyledContainerWrapper>
  );
};

export default HotelList;
