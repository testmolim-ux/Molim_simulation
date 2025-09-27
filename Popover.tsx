import React, { ReactNode } from "react";

export const Popover: React.FC<any> = ({ children }) => <div>{children}</div>;
export const PopoverContent: React.FC<any> = ({ children, className }) => (
  <div className={className}>{children}</div>
);
export const PopoverTrigger: React.FC<any> = ({ children }) => <>{children}</>;
