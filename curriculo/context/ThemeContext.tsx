import React, { createContext, useState, useContext, ReactNode } from 'react';
import { MD3LightTheme, MD3DarkTheme, Provider as PaperProvider, MD3Theme } from 'react-native-paper';

interface ThemeContextProps {
  isDarkMode: boolean;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextProps>({
  isDarkMode: false,
  toggleTheme: () => {},
});

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const toggleTheme = () => setIsDarkMode((prev) => !prev);

  const theme: MD3Theme = isDarkMode
    ? { ...MD3DarkTheme, colors: { ...MD3DarkTheme.colors, primary: '#8b5cf6' } }
    : { ...MD3LightTheme, colors: { ...MD3LightTheme.colors, primary: '#7c3aed' } };

  return (
    <ThemeContext.Provider value={{ isDarkMode, toggleTheme }}>
      <PaperProvider theme={theme}>{children}</PaperProvider>
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
