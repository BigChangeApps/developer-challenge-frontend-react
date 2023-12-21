import React from 'react';
import { ThemeProvider as EmotionThemeProvider } from '@emotion/react';
import theme from './Themes';
import GlobalStyles from './GlobalStyles';

interface ThemeProviderProps {
  children: React.ReactNode;
}

const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  return (
    <EmotionThemeProvider theme={theme}>
      <GlobalStyles theme={theme} />
      {children}
    </EmotionThemeProvider>
  );
};

export default ThemeProvider;
