import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';

// Import components to test
import PrimaryButton from '../components/PrimaryButton';
import SecondaryButton from '../components/SecondaryButton';
import InputField from '../components/InputField';
import RadioButton from '../components/RadioButton';

// Helper to wrap components with Router
const renderWithRouter = (component) => {
  return render(
    <BrowserRouter>
      {component}
    </BrowserRouter>
  );
};

// ==========================================
// PRIMARY BUTTON TESTS
// ==========================================
describe('PrimaryButton', () => {
  it('renders with correct text', () => {
    render(<PrimaryButton>Click Me</PrimaryButton>);
    expect(screen.getByText('Click Me')).toBeInTheDocument();
  });

  it('calls onClick when clicked', () => {
    const handleClick = vi.fn();
    render(<PrimaryButton onClick={handleClick}>Click</PrimaryButton>);
    fireEvent.click(screen.getByText('Click'));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it('is disabled when disabled prop is true', () => {
    render(<PrimaryButton disabled>Disabled</PrimaryButton>);
    expect(screen.getByText('Disabled')).toBeDisabled();
  });

  it('has correct CSS class', () => {
    render(<PrimaryButton>Button</PrimaryButton>);
    expect(screen.getByText('Button')).toHaveClass('btn--primary');
  });
});

// ==========================================
// SECONDARY BUTTON TESTS
// ==========================================
describe('SecondaryButton', () => {
  it('renders with correct text', () => {
    render(<SecondaryButton>Secondary</SecondaryButton>);
    expect(screen.getByText('Secondary')).toBeInTheDocument();
  });

  it('has correct CSS class', () => {
    render(<SecondaryButton>Button</SecondaryButton>);
    expect(screen.getByText('Button')).toHaveClass('btn--secondary');
  });
});

// ==========================================
// INPUT FIELD TESTS
// ==========================================
describe('InputField', () => {
  it('renders with label', () => {
    render(<InputField label="Email" placeholder="Enter email" />);
    expect(screen.getByText('Email')).toBeInTheDocument();
  });

  it('shows required asterisk when required', () => {
    render(<InputField label="Name" required />);
    expect(screen.getByText('*')).toBeInTheDocument();
  });

  it('calls onChange when value changes', () => {
    const handleChange = vi.fn();
    render(
      <InputField
        label="Test"
        value=""
        onChange={handleChange}
      />
    );
    fireEvent.change(screen.getByRole('textbox'), {
      target: { value: 'test' }
    });
    expect(handleChange).toHaveBeenCalledWith('test');
  });

  it('displays placeholder text', () => {
    render(<InputField label="Email" placeholder="Enter email" />);
    expect(screen.getByPlaceholderText('Enter email')).toBeInTheDocument();
  });
});

// ==========================================
// RADIO BUTTON TESTS
// ==========================================
describe('RadioButton', () => {
  it('renders with label', () => {
    render(<RadioButton label="Yes" checked={false} />);
    expect(screen.getByText('Yes')).toBeInTheDocument();
  });

  it('shows checked state correctly', () => {
    const { container } = render(
      <RadioButton label="Yes" checked={true} />
    );
    expect(container.firstChild).toHaveClass('radio--checked');
  });

  it('calls onChange when clicked', () => {
    const handleChange = vi.fn();
    render(<RadioButton label="Yes" onChange={handleChange} />);
    fireEvent.click(screen.getByText('Yes'));
    expect(handleChange).toHaveBeenCalled();
  });
});
