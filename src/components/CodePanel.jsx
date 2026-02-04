import React, { useState } from 'react';

/**
 * CodePanel Component
 * Displays source code on the sides of the mobile interface
 */
function CodePanel({
  title,
  code,
  position = 'left',
  isOpen,
  onToggle
}) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className={`code-panel code-panel--${position} ${isOpen ? 'code-panel--open' : ''}`}>
      <button
        className="code-panel__toggle"
        onClick={onToggle}
        title={isOpen ? 'Hide Code' : 'Show Code'}
      >
        {isOpen ? '✕' : '</>'}
      </button>

      {isOpen && (
        <div className="code-panel__content">
          <div className="code-panel__header">
            <span className="code-panel__title">{title}</span>
            <button
              className="code-panel__copy"
              onClick={handleCopy}
            >
              {copied ? '✓ Copied' : 'Copy'}
            </button>
          </div>
          <pre className="code-panel__code">
            <code>{code}</code>
          </pre>
        </div>
      )}
    </div>
  );
}

export default CodePanel;
