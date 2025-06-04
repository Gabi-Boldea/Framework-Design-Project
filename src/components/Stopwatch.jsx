import React, {
  useRef,
  useState,
  useEffect,
  forwardRef,
  useImperativeHandle,
} from 'react';

function StopwatchInner(_, ref) {
  const [elapsed, setElapsed] = useState(0);
  const intervalRef = useRef(null);

  /* start ticking once */
  useEffect(() => {
    intervalRef.current = setInterval(() => setElapsed(e => e + 1), 1000);
    return () => clearInterval(intervalRef.current);
  }, []);

  /* expose reset() to parent */
  useImperativeHandle(ref, () => ({
    reset() {
      setElapsed(0);
    },
  }));

  return <div className="count-value">{elapsed}s</div>;
}

export default forwardRef(StopwatchInner);