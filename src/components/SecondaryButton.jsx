import React from 'react';

/**
 * SecondaryButton Component
 * Full-width secondary action button with soft purple background
 */
function SecondaryButton({ children, onClick, type = 'button', className = '' }) {
  return (
    <button
      type={type}
      className={`btn btn--secondary ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default SecondaryButton;
