import React, { ReactNode } from "react";

export const CommandGroup: React.FC<{ children: ReactNode }> = ({ children }) => (
  <div>{children}</div>
);
export const CommandItem: React.FC<any> = ({ children, ...props }) => (
  <div {...props}>{children}</div>
);
export const CommandList: React.FC<{ children: ReactNode }> = ({ children }) => (
  <div>{children}</div>
);
