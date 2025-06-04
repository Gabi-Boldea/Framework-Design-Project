import React, { createContext, useReducer, useEffect } from 'react';

export const ThemeContext = createContext();

const reducer = (state, action) =>
  action.type === 'toggle' ? (state === 'light' ? 'dark' : 'light') : state;

export function ThemeProvider({ children }) {
  const [theme, dispatch] = useReducer(
    reducer,
    null,
    () => localStorage.getItem('theme') || 'light'
  );

  /* save to localStorage whenever theme changes */
  useEffect(() => localStorage.setItem('theme', theme), [theme]);

  /* flip a data-attribute on <body> for CSS hooks */
  useEffect(() => {
    document.body.dataset.theme = theme;
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, dispatch }}>
      {children}
    </ThemeContext.Provider>
  );
}