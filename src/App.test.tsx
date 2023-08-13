import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('Testing username placeholder', () => {
  render(<App />);
  const linkElement = screen.getByPlaceholderText("Insira seu e-mail")
  expect(linkElement).toBeInTheDocument();
});

test('Testing password placeholder', () => {
  render(<App />);
  const linkElement = screen.getByPlaceholderText("Insira sua senha")
  expect(linkElement).toBeInTheDocument();
});