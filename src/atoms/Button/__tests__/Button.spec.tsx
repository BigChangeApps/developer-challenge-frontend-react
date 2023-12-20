import React from 'react';
import { render, screen } from '@testing-library/react';
import { Button } from '../Button';

test('should render hello world', () => {
  render(<Button data-testid='hello-world-button'>hello world</Button>);
  const button = screen.getByTestId('hello-world-button');
  expect(button).toBeInTheDocument();
  expect(button).toContainHTML("hello world");
});
