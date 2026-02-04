import React from 'react';
import { useNavigate } from 'react-router-dom';
import { PrimaryButton, SecondaryButton } from '../components';

/**
 * Welcome Page
 * Landing page with navigation buttons
 */
function Welcome() {
  const navigate = useNavigate();

  return (
    <div className="page-wrapper">
      <div className="welcome-page">
        {/* Hero Section */}
        <div className="welcome-page__hero">
          {/* Empty hero area */}
        </div>

        {/* Bottom Content Section */}
        <div className="welcome-page__content">
          <h1 className="heading-1">Welcome to PopX</h1>
          <p className="text-muted">
            Lorem ipsum dolor sit amet,<br />
            consectetur adipisicing elit,
          </p>

          <div className="stack">
            <PrimaryButton onClick={() => navigate('/create')}>
              Create Account
            </PrimaryButton>
            <SecondaryButton onClick={() => navigate('/login')}>
              Already Registered? Login
            </SecondaryButton>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Welcome;
