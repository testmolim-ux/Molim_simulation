import React from "react";

export const Button: React.FC<any> = ({ children, ...props }) => (
  <button {...props}>{children}</button>
);
