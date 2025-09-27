import React from 'react';
import { useAppContext } from './_Globalcontextprovider';

export default function ThememodeSwitch() {
  const { theme, setTheme } = useAppContext();
  return (
    <button onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>
      Toggle theme (current: {theme})
    </button>
  );
}
