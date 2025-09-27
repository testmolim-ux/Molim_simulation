import React from "react";

export const Skeleton: React.FC<{ style?: React.CSSProperties }> = ({ style }) => (
  <div style={{ background: "#eee", borderRadius: 4, ...style }} />
);
