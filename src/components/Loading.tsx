import styled from "@emotion/styled";
import React from "react";
import ReactLoading from "react-loading";

const StyledLoading = styled(ReactLoading)`
  width: 100%;
  margin: 0 auto;
`;

const Loading: React.FC = () => {
  return <StyledLoading type="spin" data-testid="loading" />;
};

export default Loading;
