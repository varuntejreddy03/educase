import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

// Import styles in correct order
import './styles/global.css';
import './styles/phone.css';
import './styles/forms.css';
import './styles/pages.css';
import './styles/codePanel.css';
import './styles/infoPanel.css';
import './styles/darkMode.css';
import './styles/animations.css';

// Import main App component
import App from './App.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
