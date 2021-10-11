import { render, screen } from '@testing-library/react';
import App from './App';

test('renders plus button', () => {
  render(<App />);
  const plusButtonText = screen.getByText("+");
  expect(plusButtonText).toBeInTheDocument();
});
