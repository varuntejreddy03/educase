import { describe, it, expect, beforeEach } from 'vitest';

// ==========================================
// VALIDATION FUNCTION TESTS
// ==========================================

// Validation functions (same as in CreateAccount.jsx)
const validatePhone = (value) => {
  if (!value.trim()) return 'Phone number is required';
  if (value.replace(/\D/g, '').length < 10) return 'Enter valid phone number';
  return '';
};

const validateEmail = (value) => {
  if (!value.trim()) return 'Email is required';
  if (!value.includes('@')) return 'Enter valid email';
  return '';
};

const validatePassword = (value) => {
  if (!value) return 'Password is required';
  if (value.length < 4) return 'Min 4 characters';
  return '';
};

const validateName = (value) => {
  if (!value.trim()) return 'Full name is required';
  return '';
};

describe('Form Validation', () => {

  describe('Phone Validation', () => {
    it('returns error for empty phone', () => {
      expect(validatePhone('')).toBe('Phone number is required');
    });

    it('returns error for short phone number', () => {
      expect(validatePhone('12345')).toBe('Enter valid phone number');
    });

    it('returns empty string for valid phone', () => {
      expect(validatePhone('9876543210')).toBe('');
    });

    it('handles phone with spaces/dashes', () => {
      expect(validatePhone('987-654-3210')).toBe('');
    });
  });

  describe('Email Validation', () => {
    it('returns error for empty email', () => {
      expect(validateEmail('')).toBe('Email is required');
    });

    it('returns error for email without @', () => {
      expect(validateEmail('testgmail.com')).toBe('Enter valid email');
    });

    it('returns empty string for valid email', () => {
      expect(validateEmail('test@gmail.com')).toBe('');
    });
  });

  describe('Password Validation', () => {
    it('returns error for empty password', () => {
      expect(validatePassword('')).toBe('Password is required');
    });

    it('returns error for short password', () => {
      expect(validatePassword('abc')).toBe('Min 4 characters');
    });

    it('returns empty string for valid password', () => {
      expect(validatePassword('password123')).toBe('');
    });
  });

  describe('Name Validation', () => {
    it('returns error for empty name', () => {
      expect(validateName('')).toBe('Full name is required');
    });

    it('returns error for whitespace only', () => {
      expect(validateName('   ')).toBe('Full name is required');
    });

    it('returns empty string for valid name', () => {
      expect(validateName('John Doe')).toBe('');
    });
  });
});

// ==========================================
// LOCALSTORAGE TESTS
// ==========================================
describe('LocalStorage', () => {
  beforeEach(() => {
    localStorage.clear();
  });

  it('stores user data correctly', () => {
    const userData = {
      fullName: 'John Doe',
      email: 'john@test.com',
      phone: '1234567890'
    };
    localStorage.setItem('popx_user', JSON.stringify(userData));

    const stored = JSON.parse(localStorage.getItem('popx_user'));
    expect(stored.fullName).toBe('John Doe');
    expect(stored.email).toBe('john@test.com');
  });

  it('stores theme preference correctly', () => {
    localStorage.setItem('popx_theme', 'dark');
    expect(localStorage.getItem('popx_theme')).toBe('dark');
  });
});
