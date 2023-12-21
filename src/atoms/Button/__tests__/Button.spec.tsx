import React from 'react';
import { render, screen } from '@testing-library/react';
import { Button } from '../Button';
import ThemeProvider from '../../../global/ThemeProvider/ThemeProvider';

test('should render hello world', () => {
  render(
    <ThemeProvider>
        <Button data-testid='hello-world-button'>hello world</Button>
    </ThemeProvider>
    );
  const button = screen.getByTestId('hello-world-button');
  expect(button).toBeInTheDocument();
  expect(button).toContainHTML("hello world");
});
