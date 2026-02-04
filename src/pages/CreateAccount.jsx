import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { PrimaryButton, InputField, RadioButton } from '../components';

/**
 * Create Account Page
 * Registration form with simple validation
 */
function CreateAccount({ onCreate }) {
  const navigate = useNavigate();

  // Form state
  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [company, setCompany] = useState('');
  const [isAgency, setIsAgency] = useState(true);

  // Error state
  const [errors, setErrors] = useState({});

  // Simple validation functions
  const validateForm = () => {
    const newErrors = {};

    if (!fullName.trim()) {
      newErrors.fullName = 'Full name is required';
    }

    if (!phone.trim()) {
      newErrors.phone = 'Phone number is required';
    } else if (phone.replace(/\D/g, '').length < 10) {
      newErrors.phone = 'Enter valid phone number';
    }

    if (!email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!email.includes('@')) {
      newErrors.email = 'Enter valid email';
    }

    if (!password.trim()) {
      newErrors.password = 'Password is required';
    } else if (password.length < 4) {
      newErrors.password = 'Min 4 characters';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate form
    if (!validateForm()) {
      return;
    }

    // Create user object and store
    const userData = {
      fullName,
      phone,
      email,
      company,
      isAgency,
    };

    // Store in localStorage
    localStorage.setItem('popx_user', JSON.stringify(userData));

    // Call parent handler
    if (onCreate) {
      onCreate(userData);
    }

    navigate('/account');
  };

  return (
    <div className="page-wrapper">
      <div className="create-account-page">
        <h1 className="heading-1">
          Create your<br />PopX account
        </h1>

        <form className="create-account-page__form" onSubmit={handleSubmit}>
          <div className="input-wrapper">
            <InputField
              label="Full Name"
              placeholder="Enter full name"
              required
              value={fullName}
              onChange={setFullName}
            />
            {errors.fullName && (
              <span className="error-text">{errors.fullName}</span>
            )}
          </div>

          <div className="input-wrapper">
            <InputField
              label="Phone number"
              placeholder="Enter phone number"
              required
              type="tel"
              value={phone}
              onChange={setPhone}
            />
            {errors.phone && (
              <span className="error-text">{errors.phone}</span>
            )}
          </div>

          <div className="input-wrapper">
            <InputField
              label="Email address"
              placeholder="Enter email address"
              required
              type="email"
              value={email}
              onChange={setEmail}
            />
            {errors.email && (
              <span className="error-text">{errors.email}</span>
            )}
          </div>

          <div className="input-wrapper">
            <InputField
              label="Password"
              placeholder="Enter password"
              required
              type="password"
              value={password}
              onChange={setPassword}
            />
            {errors.password && (
              <span className="error-text">{errors.password}</span>
            )}
          </div>

          <InputField
            label="Company name"
            placeholder="Enter company name"
            value={company}
            onChange={setCompany}
          />

          {/* Agency Selection */}
          <div className="agency-block">
            <div className="agency-block__label">
              Are you an Agency?
              <span className="agency-block__required">*</span>
            </div>
            <div className="radio-group">
              <RadioButton
                checked={isAgency}
                label="Yes"
                name="agency"
                value="yes"
                onChange={() => setIsAgency(true)}
              />
              <RadioButton
                checked={!isAgency}
                label="No"
                name="agency"
                value="no"
                onChange={() => setIsAgency(false)}
              />
            </div>
          </div>

          {/* Submit Button - ALWAYS CLICKABLE */}
          <div className="create-account-page__button">
            <PrimaryButton type="submit">
              Create Account
            </PrimaryButton>
          </div>
        </form>
      </div>
    </div>
  );
}

export default CreateAccount;
