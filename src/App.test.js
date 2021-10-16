import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

test('renders plus button', () => {
  render(<App />);
  const plusButton = screen.getByText("+");
  expect(plusButton).toBeInTheDocument();
});

test('renders subtract button', () => {
  render(<App />);
  const subtractButton = screen.getByText("-");
  expect(subtractButton).toBeInTheDocument();
});

test('renders multiply button', () => {
  render(<App />);
  const multiplyButton = screen.getByText("*");
  expect(multiplyButton).toBeInTheDocument();
});

test('renders division button', () => {
  render(<App />);
  const divisionButton = screen.getByText("/");
  expect(divisionButton).toBeInTheDocument();
});