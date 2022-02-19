import React from "react";
import { useAppSelector, useAppDispatch } from "../../hooks";
import { handleFilterChange } from "../../store/thunks";
import Counter from "../Counter";
import StarFilter from "../StarFilter";
import { StyledContainer } from "./styled";

const FiltersTool: React.FC = () => {
  const filters = useAppSelector((store) => store.filters);
  const dispatch = useAppDispatch();
  const handleChange = handleFilterChange(dispatch);

  return (
    <StyledContainer>
      <StarFilter
        starsCount={5}
        value={filters.rating}
        onChange={handleChange("CHANGED_RATING")}
      />
      <Counter
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
