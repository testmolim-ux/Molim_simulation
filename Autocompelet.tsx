import React from 'react';

type Props = {
  value?: string;
  onChange?: (v: string) => void;
};

export default function Autocompelet({ value = '', onChange }: Props) {
  return (
    <div className="autocompelet">
      <input
        value={value}
        onChange={(e) => onChange?.(e.target.value)}
        placeholder="Type to search..."
      />
    </div>
  );
}
