import { Container } from './molecules/Container/Container';
import { HomePage } from './pages/HomePage/HomePage';
import ThemeProvider from './global/ThemeProvider/ThemeProvider';

function App() {
  return (
    <ThemeProvider>
      <Container data-testid="global-container">
        <HomePage />
      </Container>
    </ThemeProvider>
  );
}

export default App;
