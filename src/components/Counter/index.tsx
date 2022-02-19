import { MinusOutlined, PlusOutlined } from "@ant-design/icons";
import React from "react";
import {
  StyledContainer,
  StyledIconWrapper,
  StyledValueWrapper,
} from "./styled";

interface Props {
  name?: string;
  minValue?: number;
  maxValue?: number;
  value: number;
  onChange: (value: number) => void;
}

const Counter: React.FC<Props> = ({
  name,
  value,
  onChange,
  minValue,
  maxValue,
}) => {
  const decrementCondition = minValue === undefined || minValue <= value - 1;
  const incrementCondition = maxValue === undefined || maxValue >= value + 1;

  const increment = () => incrementCondition && onChange(value + 1);
  const decrement = () => decrementCondition && onChange(value - 1);

  return (
    <StyledContainer>
      <span>{name}</span>
      <StyledIconWrapper>
        <MinusOutlined onClick={decrement} />
      </StyledIconWrapper>
      <StyledValueWrapper>{value}</StyledValueWrapper>
      <StyledIconWrapper>
        <PlusOutlined onClick={increment} />
      </StyledIconWrapper>
    </StyledContainer>
  );
};

export default Counter;
