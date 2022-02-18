import React from "react";
import { useAppDispatch, useAppSelector } from "../../hooks";
import { FilterAction } from "../../store/actions";
import Counter from "../Counter";
import StarFilter from "../StarFilter";

const FiltersTool: React.FC = () => {
  const dispatch = useAppDispatch();
  const filters = useAppSelector((store) => store.filters);

  const handleChange = (actionType: FilterAction) => (value: number) => {
    dispatch({ type: actionType, payload: value });
  };

  return (
    <div>
      <div>
        <StarFilter
          starsCount={5}
          value={filters.rating}
          onChange={handleChange("CHANGED_RATING")}
        />
      </div>
      <div>
        <span>adults</span>
        <Counter
          value={filters.adults}
          onChange={handleChange("CHANGED_ADULTS")}
          minValue={1}
        />
      </div>
      <div>
        <span>children</span>
        <Counter
          value={filters.children}
          onChange={handleChange("CHANGED_CHILDREN")}
          minValue={0}
        />
      </div>
    </div>
  );
};

export default FiltersTool;
