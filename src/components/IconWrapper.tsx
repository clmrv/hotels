import React from "react";

interface Props {
  children: React.ReactNode;
  [x: string]: any;
}

const IconWrapper: React.FC<Props> = ({ children, ...props }) => (
  <span {...props}>{children}</span>
);

export default IconWrapper;
