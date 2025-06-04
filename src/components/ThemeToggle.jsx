import React, { useContext } from 'react';
import { ThemeContext } from './ThemeContext';

export default function ThemeToggle() {
  const { theme, dispatch } = useContext(ThemeContext);
  return (
    <button
      className="btn btn-secondary"
      onClick={() => dispatch({ type: 'toggle' })}
      style={{ marginTop: '1rem' }}
    >
      Switch to {theme === 'light' ? 'Dark' : 'Light'} Mode
    </button>
  );
}