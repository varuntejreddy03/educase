import React from 'react';

/**
 * PhoneFrame Component
 * Wraps all pages in a responsive phone frame.
 * Desktop: Centered 375x812 phone mockup
 * Mobile: Full-width responsive layout
 */
function PhoneFrame({ children }) {
  return (
    <div className="phone-frame-wrapper">
      <div className="phone-frame">
        <div className="phone-screen">
          {children}
        </div>
      </div>
    </div>
  );
}

export default PhoneFrame;
