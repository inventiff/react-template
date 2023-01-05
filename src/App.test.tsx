import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

/**
 * This is necessary for resetting the stores after each test.
 */
vi.mock('zustand', async () => vi.importActual('/__mocks__/zustand'));

describe('Counter tests', () => {
  it('should initially be 0', () => {
    render(<App />);

    expect(+(screen.getByRole('counter').textContent || -1)).toBe(0);
  });

  it('should +1 when "increase" is pressed', () => {
    render(<App />);

    fireEvent.click(screen.getByRole('increment-button'));

    expect(+(screen.getByRole('counter').textContent || -1)).toBe(1);
  });

  it('should -1 when "decrease" is pressed', () => {
    render(<App />);

    fireEvent.click(screen.getByRole('decrement-button'));

    expect(+(screen.getByRole('counter').textContent || 1)).toBe(-1);
  });
});

describe('Snapshot counter tests', () => {
  it('should initially be 0', () => {
    const page = render(<App />);

    expect(page.baseElement).toMatchSnapshot();
  });

  it('should +1 when "increase" is pressed', () => {
    const page = render(<App />);

    fireEvent.click(screen.getByRole('increment-button'));

    expect(page.baseElement).toMatchSnapshot();
  });

  it('should -1 when "decrease" is pressed', () => {
    const page = render(<App />);

    fireEvent.click(screen.getByRole('decrement-button'));

    expect(page.baseElement).toMatchSnapshot();
  });
});
