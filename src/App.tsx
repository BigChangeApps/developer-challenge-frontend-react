import React from 'react';
import { Container } from './molecules/Container/Container';
import { ThemeProvider } from '@emotion/react';
import theme from './global/ThemeProvider/Themes';
import GlobalStyles from './global/ThemeProvider/GlobalStyles';
import { HomePage } from './pages/HomePage/HomePage';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles theme={theme} />
      <Container>
        <HomePage />
      </Container>
    </ThemeProvider>
  );
}

export default App;
