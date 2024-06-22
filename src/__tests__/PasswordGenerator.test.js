import { render, screen, fireEvent } from '@testing-library/react';
import PasswordGenerator from '../components/PasswordGenerator';

describe('PasswordGenerator', () => {
  test('renders password generator component', () => {
    render(<PasswordGenerator />);
    expect(screen.getByText(/Random Password Generator/i)).toBeInTheDocument();
  });

  test('generates a password of specified length', () => {
    render(<PasswordGenerator />);
    fireEvent.change(screen.getByLabelText(/Length:/), { target: { value: '10' } });
    fireEvent.click(screen.getByText(/Generate Password/i));
    expect(screen.getByText(/Password:/).nextSibling.textContent).toHaveLength(10);
  });

  test('includes uppercase letters if specified', () => {
    render(<PasswordGenerator />);
    fireEvent.click(screen.getByText(/Generate Password/i));
    const password = screen.getByText(/Password:/).nextSibling.textContent;
    expect(/[A-Z]/.test(password)).toBe(true);
  });

  test('includes lowercase letters if specified', () => {
    render(<PasswordGenerator />);
    fireEvent.click(screen.getByText(/Generate Password/i));
    const password = screen.getByText(/Password:/).nextSibling.textContent;
    expect(/[a-z]/.test(password)).toBe(true);
  });

  test('includes numbers if specified', () => {
    render(<PasswordGenerator />);
    fireEvent.click(screen.getByText(/Generate Password/i));
    const password = screen.getByText(/Password:/).nextSibling.textContent;
    expect(/[0-9]/.test(password)).toBe(true);
  });

  test('includes symbols if specified', () => {
    render(<PasswordGenerator />);
    fireEvent.click(screen.getByText(/Generate Password/i));
    const password = screen.getByText(/Password:/).nextSibling.textContent;
    expect(/[!@#$%^&*()_+~`|}{[\]:;?><,./-=]/.test(password)).toBe(true);
  });
});
