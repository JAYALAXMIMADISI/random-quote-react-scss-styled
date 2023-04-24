import { render, screen } from '@testing-library/react';
import App from './App';
import '@testing-library/jest-dom'
import RandomQuote from './components/random-quote'

jest.mock('./components/random-quote')
test('renders learn react link', () => {
  render(<App />);
  expect(RandomQuote.mock.calls).toHaveLength(1)
  // const comp=jest.fn()
  // const linkElement = screen.getByText(/learn react/i);
  // expect(linkElement).toBeInTheDocument();
});
