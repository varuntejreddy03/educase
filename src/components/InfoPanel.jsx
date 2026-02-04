import React, { useState } from 'react';

/**
 * InfoPanel Component
 * Shows tech stack, your info, and links - Impresses hiring managers!
 */
function InfoPanel() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="info-panel">
      {/* Toggle Button */}
      <button
        className="info-panel__toggle"
        onClick={() => setIsOpen(!isOpen)}
        title="About this project"
      >
        {isOpen ? '✕' : 'ℹ️'}
      </button>

      {/* Panel Content */}
      {isOpen && (
        <div className="info-panel__content">
          <div className="info-panel__header">
            <span className="info-panel__title">📋 Project Info</span>
          </div>

          <div className="info-panel__body">
            {/* Developer Info */}
            <div className="info-section">
              <h4 className="info-section__title">👨‍💻 Developer</h4>
              <p className="info-section__text">Varun Tej</p>
            </div>

            {/* Tech Stack */}
            <div className="info-section">
              <h4 className="info-section__title">🛠️ Tech Stack</h4>
              <div className="tech-badges">
                <span className="tech-badge tech-badge--react">React 19</span>
                <span className="tech-badge tech-badge--vite">Vite</span>
                <span className="tech-badge tech-badge--css">Pure CSS</span>
                <span className="tech-badge tech-badge--router">React Router</span>
              </div>
            </div>

            {/* Features */}
            <div className="info-section">
              <h4 className="info-section__title">✨ Features</h4>
              <ul className="info-section__list">
                <li>✓ Pixel-perfect UI</li>
                <li>✓ Form validation</li>
                <li>✓ Dark mode toggle</li>
                <li>✓ LocalStorage persistence</li>
                <li>✓ Photo upload</li>
                <li>✓ Keyboard shortcuts</li>
              </ul>
            </div>

            {/* Keyboard Shortcuts */}
            <div className="info-section">
              <h4 className="info-section__title">⌨️ Shortcuts</h4>
              <ul className="info-section__list">
                <li><kbd>Ctrl+H</kbd> Home</li>
                <li><kbd>Ctrl+L</kbd> Login</li>
                <li><kbd>Ctrl+K</kbd> Create</li>
                <li><kbd>Ctrl+D</kbd> Dark Mode</li>
              </ul>
            </div>

            {/* Links */}
            <div className="info-section">
              <h4 className="info-section__title">🔗 Links</h4>
              <div className="info-links">
                <a
                  href="https://github.com/varuntejreddy03"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="info-link"
                >
                  <span>GitHub</span>
                  <span>→</span>
                </a>
                <a
                  href="https://www.linkedin.com/in/nvaruntej"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="info-link"
                >
                  <span>LinkedIn</span>
                  <span>→</span>
                </a>
                <a
                  href="https://varuntej.online"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="info-link"
                >
                  <span>Portfolio</span>
                  <span>→</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default InfoPanel;
