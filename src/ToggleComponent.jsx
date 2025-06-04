import React from 'react';
import useToggle from './hooks/useToggle';
import './App.css';

export default function ToggleComponent() {
  const [isVisible, toggle] = useToggle(false);

  return (
    <div style={{ marginTop: '2rem' }}>
      <button className="btn btn-secondary" onClick={toggle}>
        Toggle Visible
      </button>
      {isVisible && (
        <p className="toggle-message">Thats it! Thank you!</p>
      )}
    </div>
  );
}