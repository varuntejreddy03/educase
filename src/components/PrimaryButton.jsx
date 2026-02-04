import React from 'react';

/**
 * PrimaryButton Component
 * Full-width primary action button with purple background
 */
function PrimaryButton({ children, disabled, onClick, type = 'button', className = '' }) {
  return (
    <button
      type={type}
      className={`btn btn--primary ${disabled ? 'btn--disabled' : ''} ${className}`}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
}

export default PrimaryButton;
