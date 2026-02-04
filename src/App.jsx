import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation, useNavigate } from 'react-router-dom';

// Page imports
import { Welcome, Login, CreateAccount, AccountSettings } from './pages';

// Layout with code panels
import PageLayout from './components/PageLayout';

// Info panel for hiring managers
import InfoPanel from './components/InfoPanel';

// Dark mode toggle
import DarkModeToggle from './components/DarkModeToggle';

/**
 * App Content - Wrapped with location awareness
 */
function AppContent({ user, onLogin, onCreate, isDark, onToggleDark }) {
  const location = useLocation();
  const navigate = useNavigate();

  // Determine current page name
  const getPageName = () => {
    switch (location.pathname) {
      case '/login': return 'login';
      case '/create': return 'create';
      case '/account': return 'account';
      default: return 'welcome';
    }
  };

  // Keyboard shortcuts (Feature #3)
  useEffect(() => {
    const handleKeyDown = (e) => {
      // Only trigger if not typing in an input
      if (e.target.tagName === 'INPUT') return;

      if (e.ctrlKey || e.metaKey) {
        switch (e.key.toLowerCase()) {
          case 'l':
            e.preventDefault();
            navigate('/login');
            break;
          case 'h':
            e.preventDefault();
            navigate('/');
            break;
          case 'k':
            e.preventDefault();
            navigate('/create');
            break;
          case 'd':
            e.preventDefault();
            onToggleDark();
            break;
          default:
            break;
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [navigate, onToggleDark]);

  return (
    <PageLayout pageName={getPageName()}>
      <Routes>
        {/* Welcome/Landing Page */}
        <Route path="/" element={<Welcome />} />

        {/* Login Page */}
        <Route
          path="/login"
          element={<Login onLogin={onLogin} />}
        />

        {/* Create Account Page */}
        <Route
          path="/create"
          element={<CreateAccount onCreate={onCreate} />}
        />

        {/* Account Settings Page */}
        <Route
          path="/account"
          element={<AccountSettings user={user} />}
        />
      </Routes>

      {/* Dark Mode Toggle */}
      <DarkModeToggle isDark={isDark} onToggle={onToggleDark} />

      {/* Info Panel - Shows developer info, tech stack, links */}
      <InfoPanel />
    </PageLayout>
  );
}

/**
 * PopX Application
 * Main app component with routing and user state management
 */
function App() {
  // Shared user state - load from localStorage on init
  const [user, setUser] = useState(() => {
    const stored = localStorage.getItem('popx_user');
    return stored ? JSON.parse(stored) : null;
  });

  // Dark mode state - load from localStorage
  const [isDark, setIsDark] = useState(() => {
    return localStorage.getItem('popx_theme') === 'dark';
  });

  // Apply dark mode to document
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', isDark ? 'dark' : 'light');
    localStorage.setItem('popx_theme', isDark ? 'dark' : 'light');
  }, [isDark]);

  /**
   * Toggle dark mode
   */
  const handleToggleDark = () => {
    setIsDark(!isDark);
  };

  /**
   * Handle login - merge new data with existing user
   */
  const handleLogin = (loginData) => {
    const updatedUser = { ...user, ...loginData };
    setUser(updatedUser);
    localStorage.setItem('popx_user', JSON.stringify(updatedUser));
  };

  /**
   * Handle account creation - set complete user data
   */
  const handleCreate = (userData) => {
    setUser(userData);
    localStorage.setItem('popx_user', JSON.stringify(userData));
  };

  return (
    <BrowserRouter>
      <AppContent
        user={user}
        onLogin={handleLogin}
        onCreate={handleCreate}
        isDark={isDark}
        onToggleDark={handleToggleDark}
      />
    </BrowserRouter>
  );
}

export default App;