import React from "react";
import { useAppDispatch, useAppSelector } from "../../hooks";
import { FilterAction } from "../../store/actions";
import Counter from "../Counter";
import StarFilter from "../StarFilter";
import { StyledContainer } from "./styled";

const FiltersTool: React.FC = () => {
  const dispatch = useAppDispatch();
  const filters = useAppSelector((store) => store.filters);

  const handleChange = (actionType: FilterAction) => (value: number) => {
    dispatch({ type: actionType, payload: value });
  };

  return (
    <StyledContainer>
      <StarFilter
        starsCount={5}
        value={filters.rating}
        onChange={handleChange("CHANGED_RATING")}
      />
      <Counter
        style={{ alignSelf: "flex-end" }}
        name="Adults:"
        value={filters.adults}
        onChange={handleChange("CHANGED_ADULTS")}
        minValue={1}
      />
      <Counter
        name="Children:"
        value={filters.children}
        onChange={handleChange("CHANGED_CHILDREN")}
        minValue={0}
      />
    </StyledContainer>
  );
};

export default FiltersTool;
