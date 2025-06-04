import { useState, useCallback } from 'react';

/**
 * useToggle – simple boolean helper
 */
export default function useToggle(initial = false) {
  const [value, setValue] = useState(initial);
  const toggle = useCallback(() => setValue(v => !v), []);
  return [value, toggle];
}