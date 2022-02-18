import { MinusOutlined, PlusOutlined } from "@ant-design/icons";
import React from "react";
import { StyledIconWrapper } from "./styled";

interface Props {
  name?: string;
  minValue?: number;
  maxValue?: number;
  value: number;
  onChange: (value: number) => void;
  style?: React.CSSProperties;
}

const Counter: React.FC<Props> = ({
  name,
  value,
  onChange,
  minValue,
  maxValue,
  style,
}) => {
  const decrementCondition = minValue === undefined || minValue <= value - 1;
  const incrementCondition = maxValue === undefined || maxValue >= value + 1;

  const increment = () => incrementCondition && onChange(value + 1);
  const decrement = () => decrementCondition && onChange(value - 1);

  return (
    <div style={style}>
      <span>{name}</span>
      <StyledIconWrapper>
        <MinusOutlined onClick={decrement} />
      </StyledIconWrapper>
      <span>{value}</span>
      <StyledIconWrapper>
        <PlusOutlined onClick={increment} />
      </StyledIconWrapper>
    </div>
  );
};

export default Counter;
