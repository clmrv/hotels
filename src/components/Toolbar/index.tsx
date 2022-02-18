import React from "react";
import { bannerURL } from "../../constants";
import FiltersTool from "../FiltersTool";
import { StyledBanner, StyledContainer, StyledFiltersWrapper } from "./styled";

const Toolbar: React.FC = () => {
  return (
    <StyledContainer>
      <StyledBanner src={bannerURL} />
      <StyledFiltersWrapper>
        <FiltersTool />
      </StyledFiltersWrapper>
    </StyledContainer>
  );
};

export default Toolbar;
