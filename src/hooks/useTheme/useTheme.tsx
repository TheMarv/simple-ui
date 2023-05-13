import React, { createContext, useContext } from 'react';
import { Theme } from 'types/themeTypes';
import defaultTheme from './defaultTheme';

const ThemeContext = createContext<Theme>(defaultTheme);

export function ThemeProvider({
  theme,
  children,
}: {
  theme: Partial<Theme>;
  children: React.ReactNode;
}) {
  const mergedTheme = { ...defaultTheme, ...theme };
  return (
    <ThemeContext.Provider value={mergedTheme}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  return useContext<Theme>(ThemeContext);
}

export function createTheme(theme: Partial<Theme>): Theme {
  return {
    ...defaultTheme,
    ...theme,
  };
}
