import React from "react";
import { StarFilled, StarOutlined } from "@ant-design/icons";

const Star: React.FC<{ filled: boolean; onClick?: () => void }> = ({
  filled,
  onClick,
}) => {
  const Component = filled ? StarFilled : StarOutlined;

  return <Component onClick={onClick} />;
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

  const handleClick = (id: number) =>
    onChange ? () => onChange(id + 1) : undefined;

  return (
    <div className={className}>
      {starsIdArray.map((id) => (
        <Star key={id} filled={id + 1 <= value} onClick={handleClick(id)} />
      ))}
    </div>
  );
};

export default StarFilter;
