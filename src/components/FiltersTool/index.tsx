import React from "react";
import { Filters } from "../../store/state";

interface Props {
  filters: Filters;
}

const FiltersTool: React.FC<Props> = ({ filters }) => {
  return (
    <div>{`stars:${filters.stars} adults:${filters.adults} children:${filters.children}`}</div>
  );
};

export default FiltersTool;
