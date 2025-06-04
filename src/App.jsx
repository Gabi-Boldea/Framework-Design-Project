import { useRef } from 'react';
import Stopwatch from './components/Stopwatch';
import ThemeToggle from './components/ThemeToggle';
import HeavyCalc from './components/HeavyCalc';
import AutoResizeTextarea from './components/AutoResizeTextarea';
import React, { useEffect } from 'react';
import useLocalStorage from './hooks/useLocalStorage';  
import ToggleComponent from './ToggleComponent';
import './App.css';

export default function App() {
  const [count, setCount] = useLocalStorage('counter', 0);
  const swRef = useRef();

  useEffect(() => {
    document.title = `Count is ${count}`;
  }, [count]);

  return (
    <div className="card">
      <h1>React Hooks</h1>

      <div className="count-value">{count}</div>

      <div>
        <button className="btn btn-primary" onClick={() => setCount(c => c + 1)}>
          Increment
        </button>
        <button className="btn btn-secondary" onClick={() => setCount(c => c - 1)}>
          Decrement
        </button>
      </div>

      <ToggleComponent />
      <ThemeToggle />

      <Stopwatch ref={swRef} />
      <button className="btn btn-secondary" onClick={() => swRef.current.reset()}>
        Reset Timer
      </button>

      <HeavyCalc />
      <AutoResizeTextarea />
    </div>
  );
}