import React from "react";
import { StarFilled, StarOutlined } from "@ant-design/icons";

const Star: React.FC<{ filled: boolean; onClick: () => void }> = ({
  filled,
  onClick,
}) => {
  if (filled) {
    return <StarFilled onClick={onClick} />;
  } else {
    return <StarOutlined onClick={onClick} />;
  }
};

interface Props {
  starsCount: number;
  value: number;
  onChange: (value: number) => void;
}

const StarFilter: React.FC<Props> = ({ starsCount, value, onChange }) => {
  const starsIdArray = Array.from(Array(starsCount).keys());

  return (
    <div>
      {starsIdArray.map((id) => (
        <Star
          key={id}
          filled={id + 1 <= value}
          onClick={() => onChange(id + 1)}
        />
      ))}
    </div>
  );
};

export default StarFilter;
