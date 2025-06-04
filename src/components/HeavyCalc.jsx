import React, { useMemo, useState, useCallback } from 'react';

function fib(n) {
  if (n <= 1) return n;
  return fib(n - 1) + fib(n - 2);   // intentionally slow
}

export default function HeavyCalc() {
  const [num, setNum] = useState(1);

  const result = useMemo(() => fib(num), [num]);

  const inc = useCallback(() => setNum(n => n + 1), []);
  const dec = useCallback(() => setNum(n => Math.max(1, n - 1)), []);

  return (
    <div style={{ marginTop: '2rem' }}>
      <p>fib({num}) = {result}</p>
      <button className="btn btn-primary" onClick={inc}>+1</button>
      <button className="btn btn-secondary" onClick={dec}>-1</button>
    </div>
  );
}