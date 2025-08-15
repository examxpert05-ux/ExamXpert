import { render, screen } from '@testing-library/react';
import App from './App';

test('renders ExamXpert app', () => {
  render(<App />);
  const appElement = screen.getByText(/ExamXpert/i);
  expect(appElement).toBeInTheDocument();
});
