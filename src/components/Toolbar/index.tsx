import React from "react";
import { Filters } from "../../store/state";
import FiltersTool from "../FiltersTool";

interface Props {
  filters: Filters;
}

const Toolbar: React.FC<Props> = ({ filters }) => {
  return (
    <div>
      <div>Toolbar</div>
      <FiltersTool filters={filters} />
    </div>
  );
};

export default Toolbar;
