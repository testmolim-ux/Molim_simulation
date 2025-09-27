import React from "react";

export const DropdownMenu: React.FC<any> = ({ children }) => <div>{children}</div>;
export const DropdownMenuTrigger: React.FC<any> = ({ children }) => <>{children}</>;
export const DropdownMenuContent: React.FC<any> = ({ children }) => <div>{children}</div>;
export const DropdownMenuItem: React.FC<any> = ({ children, ...props }) => (
  <div {...props}>{children}</div>
);
