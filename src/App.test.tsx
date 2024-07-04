import { render, screen } from '@testing-library/react';
import App from './App';

test('renders quiz question', () => {
  render(<App />);
  const questionElement = screen.getByText(/What is GitHub primarily used for?/i);
  expect(questionElement).toBeInTheDocument();
});
