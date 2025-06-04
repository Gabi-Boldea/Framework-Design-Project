import React, { useRef, useLayoutEffect } from 'react';

export default function AutoResizeTextarea() {
  const ref = useRef();

  useLayoutEffect(() => {
    const el = ref.current;
    const resize = () => {
      el.style.height = 'auto';
      el.style.height = `${el.scrollHeight}px`;
    };
    resize();                            // initial size
    el.addEventListener('input', resize);
    return () => el.removeEventListener('input', resize);
  }, []);

  return (
    <textarea
      ref={ref}
      placeholder="Type something… (text area grows automatically)"
      style={{ width: '100%', marginTop: '2rem', fontSize: '1rem' }}
    />
  );
}