import React from 'react';

/**
 * DarkModeToggle Component
 * Toggles between light and dark themes
 */
function DarkModeToggle({ isDark, onToggle }) {
  return (
    <button
      className="dark-mode-toggle"
      onClick={onToggle}
      title={isDark ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
      aria-label={isDark ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
    >
      <span className="dark-mode-toggle__icon">
        {isDark ? '☀️' : '🌙'}
      </span>
    </button>
  );
}

export default DarkModeToggle;
