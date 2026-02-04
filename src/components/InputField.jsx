import React from 'react';

/**
 * InputField Component
 * Floating label style input field with purple label
 * 
 * @param {string} label - Input label text
 * @param {boolean} required - Shows required asterisk
 * @param {string} placeholder - Placeholder text
 * @param {string} value - Input value
 * @param {function} onChange - Change handler
 * @param {function} onBlur - Blur handler for validation
 * @param {string} type - Input type (text, email, password, tel)
 * @param {string} name - Input name attribute
 */
function InputField({
  label,
  required = false,
  placeholder,
  value,
  onChange,
  onBlur,
  type = 'text',
  name,
  className = ''
}) {
  const handleChange = (e) => {
    if (onChange) {
      onChange(e.target.value);
    }
  };

  const handleBlur = (e) => {
    if (onBlur) {
      onBlur(e);
    }
  };

  return (
    <div className={`input-field ${className}`}>
      <div className="input-field__label-row">
        <span className="input-field__label">{label}</span>
        {required && <span className="input-field__required">*</span>}
      </div>
      <input
        type={type}
        name={name}
        className="input-field__input"
        placeholder={placeholder}
        value={value}
        onChange={handleChange}
        onBlur={handleBlur}
        autoComplete={type === 'password' ? 'new-password' : 'off'}
      />
    </div>
  );
}

export default InputField;
