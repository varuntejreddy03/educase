import React, { useState, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { PrimaryButton, InputField } from '../components';

/**
 * Login Page
 * Sign in form with email and password fields
 */
function Login({ onLogin }) {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // Validate form - email must have > 3 chars, password >= 4 chars
  const isValid = useMemo(() => {
    const emailValid = email.trim().length > 3 && email.includes('@');
    const passwordValid = password.trim().length >= 4;
    return emailValid && passwordValid;
  }, [email, password]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!isValid) return;

    // Call parent handler and navigate to account
    if (onLogin) {
      onLogin({ email });
    }
    navigate('/account');
  };

  return (
    <div className="page-wrapper">
      <div className="login-page">
        <h1 className="heading-1">
          Signin to your<br />PopX account
        </h1>
        <p className="text-muted">
          Lorem ipsum dolor sit amet,<br />
          consectetur adipisicing elit,
        </p>

        <form className="login-page__form" onSubmit={handleSubmit}>
          <InputField
            label="Email Address"
            placeholder="Enter email address"
            type="email"
            value={email}
            onChange={setEmail}
          />

          <InputField
            label="Password"
            placeholder="Enter password"
            type="password"
            value={password}
            onChange={setPassword}
          />

          <div className="login-page__button">
            <PrimaryButton
              type="submit"
              disabled={!isValid}
            >
              Login
            </PrimaryButton>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
