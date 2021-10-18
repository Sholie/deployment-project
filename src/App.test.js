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

test('calculate addition', () => {
  const app = render(<App />);
  const number1Field = app.getByTestId("number1").querySelector("input");
  const number2Field = app.getByTestId("number2").querySelector("input");
  
  const plusButton = app.getByText("+");

  expect(number1Field).toBeInTheDocument();
  expect(number2Field).toBeInTheDocument();
  expect(plusButton).toBeInTheDocument();
  
  const value1 = 4;
  const value2 = 2;
  
  fireEvent.change(number1Field, { target: { value: value1 } });
  fireEvent.change(number2Field, { target: { value: value2 } });

  fireEvent.click(plusButton);
  
  const resultField = app.getByTestId("result");

  expect(resultField).toBeInTheDocument();

  expect(resultField.textContent).toBe(String(value1 + value2));
});