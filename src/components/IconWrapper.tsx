import React from "react";

interface Props {
  children: React.ReactNode;
  [x: string]: any;
}

const IconWrapper: React.FC<Props> = ({ children, ...props }) => (
  <button {...props}>{children}</button>
);

export default IconWrapper;
