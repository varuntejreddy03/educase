import React, { useState } from 'react';
import CodePanel from './CodePanel';

// Source code strings for display
const PAGE_CODES = {
  welcome: `// Welcome.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { PrimaryButton, SecondaryButton } from '../components';

function Welcome() {
  const navigate = useNavigate();

  return (
    <div className="page-wrapper">
      <div className="welcome-page">
        <div className="welcome-page__hero" />
        
        <div className="welcome-page__content">
          <h1 className="heading-1">
            Welcome to PopX
          </h1>
          <p className="text-muted">
            Lorem ipsum dolor sit amet,
            consectetur adipisicing elit,
          </p>

          <div className="stack">
            <PrimaryButton 
              onClick={() => navigate('/create')}
            >
              Create Account
            </PrimaryButton>
            <SecondaryButton 
              onClick={() => navigate('/login')}
            >
              Already Registered? Login
            </SecondaryButton>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Welcome;`,

  login: `// Login.jsx
import React, { useState, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { PrimaryButton, InputField } from '../components';

function Login({ onLogin }) {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const isValid = useMemo(() => {
    const emailValid = email.includes('@');
    const passwordValid = password.length >= 4;
    return emailValid && passwordValid;
  }, [email, password]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!isValid) return;
    onLogin?.({ email });
    navigate('/account');
  };

  return (
    <div className="page-wrapper">
      <div className="login-page">
        <h1 className="heading-1">
          Signin to your PopX account
        </h1>
        
        <form onSubmit={handleSubmit}>
          <InputField
            label="Email Address"
            type="email"
            value={email}
            onChange={setEmail}
          />
          <InputField
            label="Password"
            type="password"
            value={password}
            onChange={setPassword}
          />
          <PrimaryButton type="submit">
            Login
          </PrimaryButton>
        </form>
      </div>
    </div>
  );
}

export default Login;`,

  create: `// CreateAccount.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { PrimaryButton, InputField, 
         RadioButton } from '../components';

function CreateAccount({ onCreate }) {
  const navigate = useNavigate();
  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isAgency, setIsAgency] = useState(true);
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};
    if (!fullName.trim()) 
      newErrors.fullName = 'Required';
    if (!phone.trim()) 
      newErrors.phone = 'Required';
    if (!email.includes('@')) 
      newErrors.email = 'Invalid email';
    if (password.length < 4) 
      newErrors.password = 'Min 4 chars';
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateForm()) return;
    
    const userData = { fullName, phone, 
      email, isAgency };
    localStorage.setItem('popx_user', 
      JSON.stringify(userData));
    onCreate?.(userData);
    navigate('/account');
  };

  return (
    <form onSubmit={handleSubmit}>
      <InputField label="Full Name" ... />
      <InputField label="Phone" ... />
      <InputField label="Email" ... />
      <InputField label="Password" ... />
      
      <RadioButton 
        checked={isAgency} 
        label="Yes"
        onChange={() => setIsAgency(true)} 
      />
      
      <PrimaryButton type="submit">
        Create Account
      </PrimaryButton>
    </form>
  );
}`,

  account: `// AccountSettings.jsx
import React, { useState, useRef } from 'react';

function AccountSettings({ user }) {
  const fileInputRef = useRef(null);
  const name = user?.fullName || 'User';
  const email = user?.email || 'email@example.com';

  const [profilePhoto, setProfilePhoto] = 
    useState(() => {
      return localStorage.getItem(
        'popx_profile_photo'
      ) || null;
    });

  const handlePhotoClick = () => {
    fileInputRef.current?.click();
  };

  const handlePhotoChange = (e) => {
    const file = e.target.files?.[0];
    if (file && file.type.startsWith('image/')) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfilePhoto(reader.result);
        localStorage.setItem(
          'popx_profile_photo', 
          reader.result
        );
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="account-page">
      <header>Account Settings</header>
      
      <div className="profile-card">
        <div className="avatar-wrapper" 
             onClick={handlePhotoClick}>
          {profilePhoto ? (
            <img src={profilePhoto} alt="" />
          ) : (
            <div className="avatar" />
          )}
          <input
            ref={fileInputRef}
            type="file"
            accept="image/*"
            onChange={handlePhotoChange}
            hidden
          />
        </div>
        
        <div className="profile-info">
          <h2>{name}</h2>
          <p>{email}</p>
        </div>
      </div>
    </div>
  );
}`
};

const COMPONENT_CODE = `// Components Overview

// PrimaryButton.jsx
function PrimaryButton({ 
  children, 
  disabled, 
  onClick, 
  type = 'button' 
}) {
  return (
    <button
      type={type}
      className={\`btn btn--primary 
        \${disabled ? 'btn--disabled' : ''}\`}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
}

// InputField.jsx
function InputField({ 
  label, 
  required, 
  placeholder, 
  value, 
  onChange, 
  type = 'text' 
}) {
  return (
    <div className="input-field">
      <div className="input-field__label-row">
        <span className="input-field__label">
          {label}
        </span>
        {required && <span>*</span>}
      </div>
      <input
        type={type}
        className="input-field__input"
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
}

// RadioButton.jsx
function RadioButton({ 
  checked, 
  label, 
  onChange 
}) {
  return (
    <label className={\`radio 
      \${checked ? 'radio--checked' : ''}\`}
      onClick={onChange}
    >
      <span className="radio__dot" />
      <span className="radio__label">
        {label}
      </span>
    </label>
  );
}`;

/**
 * PageLayout Component
 * Wraps pages with code panels on the sides
 */
function PageLayout({ children, pageName }) {
  const [leftOpen, setLeftOpen] = useState(false);
  const [rightOpen, setRightOpen] = useState(false);

  const pageCode = PAGE_CODES[pageName] || PAGE_CODES.welcome;

  return (
    <>
      {children}

      {/* Left Panel - Page Code */}
      <CodePanel
        title={`${pageName.charAt(0).toUpperCase() + pageName.slice(1)}.jsx`}
        code={pageCode}
        position="left"
        isOpen={leftOpen}
        onToggle={() => setLeftOpen(!leftOpen)}
      />

      {/* Right Panel - Components */}
      <CodePanel
        title="Components.jsx"
        code={COMPONENT_CODE}
        position="right"
        isOpen={rightOpen}
        onToggle={() => setRightOpen(!rightOpen)}
      />
    </>
  );
}

export default PageLayout;
