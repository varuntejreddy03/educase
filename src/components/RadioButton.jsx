import React from 'react';

/**
 * RadioButton Component
 * Custom styled radio button with purple accent
 * 
 * @param {boolean} checked - Whether the radio is selected
 * @param {string} label - Radio button label
 * @param {function} onChange - Click handler
 * @param {string} name - Radio group name
 * @param {string} value - Radio value
 */
function RadioButton({
  checked,
  label,
  onChange,
  name,
  value
}) {
  return (
    <label
      className={`radio ${checked ? 'radio--checked' : ''}`}
      onClick={onChange}
    >
      <span className="radio__dot" />
      <span className="radio__label">{label}</span>
    </label>
  );
}

export default RadioButton;
