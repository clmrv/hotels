import React from "react";
import { StarFilled, StarOutlined } from "@ant-design/icons";
import { COLORS } from "../constants";

const Star: React.FC<{
  filled: boolean;
  onClick?: () => void;
  dataTestId?: string;
}> = ({ filled, onClick, dataTestId }) => {
  const Component = filled ? StarFilled : StarOutlined;

  return (
    <Component
      onClick={onClick}
      style={{ fontSize: "1.4em", color: COLORS.YELLOW }}
      data-testid={dataTestId}
    />
  );
};

interface Props {
  starsCount: number;
  value: number;
  onChange?: (value: number) => void;
  className?: string;
}

const StarFilter: React.FC<Props> = ({
  starsCount,
  value,
  onChange,
  className,
}) => {
  const starsIdArray = Array.from(Array(starsCount).keys());
  const readOnly = onChange === undefined;

  const handleClick = (id: number) =>
    onChange ? () => onChange(id + 1) : undefined;

  return (
    <div
      className={className}
      aria-label={
        readOnly ? `${value} out of ${starsCount} stars` : "rating filter"
      }
    >
      {starsIdArray.map((id) => (
        <Star
          key={id}
          filled={id + 1 <= value}
          onClick={handleClick(id)}
          dataTestId={`star-${readOnly ? "" : "button-"}${id + 1}`}
        />
      ))}
    </div>
  );
};

export default StarFilter;
