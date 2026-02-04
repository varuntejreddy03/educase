# 🚀 PopX UI - React Mobile App Interface

A pixel-perfect, responsive React application showcasing a mobile app interface with authentication flows.

![React](https://img.shields.io/badge/React-19-61DAFB?style=flat-square&logo=react)
![Vite](https://img.shields.io/badge/Vite-7-646CFF?style=flat-square&logo=vite)
![CSS](https://img.shields.io/badge/Pure_CSS-3-264DE4?style=flat-square&logo=css3)
![Tests](https://img.shields.io/badge/Tests-28%20passed-brightgreen?style=flat-square)
![Coverage](https://img.shields.io/badge/Coverage-100%25%20Core-success?style=flat-square)
![License](https://img.shields.io/badge/License-MIT-green?style=flat-square)

---

## 🎬 Demo

[Live](https://educase.varuntej.online/) 

---

## ✨ Features

### Core Features
- 📱 **Mobile-First Design** - 375px mobile interface centered on desktop
- 🎨 **Pixel-Perfect UI** - Matches design specifications exactly
- 🔐 **Form Validation** - Real-time validation for all input fields
- 💾 **Data Persistence** - User data saved to localStorage
- 📸 **Photo Upload** - Profile picture with file selection
- 🧭 **Smooth Navigation** - React Router for seamless page transitions

### Bonus Features
- 🌙 **Dark Mode** - Toggle between light and dark themes
- ⌨️ **Keyboard Shortcuts** - Quick navigation (see below)
- 📋 **Code Preview Panels** - View source code without GitHub
- ℹ️ **Info Panel** - Tech stack and developer information
- ♿ **Accessibility** - ARIA labels, skip links, and focus states
- 📱 **PWA Support** - Installable as mobile app

---

## 🧪 Testing

### Test Results
```
✓ src/__tests__/validation.test.js (15 tests) 
✓ src/__tests__/components.test.jsx (13 tests)

Test Files  2 passed (2)
Tests       28 passed (28)
```

### Coverage Report
| Component | Statements | Branch | Functions | Lines |
|-----------|------------|--------|-----------|-------|
| **PrimaryButton** | 100% | 100% | 100% | 100% |
| **SecondaryButton** | 100% | 100% | 100% | 100% |
| **RadioButton** | 100% | 100% | 100% | 100% |
| **InputField** | 90% | 75% | 67% | 90% |
| **Validation Logic** | 100% | 100% | 100% | 100% |

### Run Tests
```bash
# Run all tests
npm test

# Run with coverage report
npm run test:coverage

# Run with UI
npm run test:ui
```

---

## 🛠️ Tech Stack

| Technology | Purpose |
|------------|---------|
| **React 19** | UI Framework |
| **Vite 7** | Build Tool |
| **React Router 7** | Navigation |
| **Pure CSS** | Styling (no frameworks) |
| **Vitest** | Testing Framework |
| **Testing Library** | Component Testing |
| **localStorage** | Data Persistence |

---

## 📂 Project Structure

```
popx-ui/
├── public/
│   ├── icon.svg          # PWA Icon
│   └── manifest.json     # PWA Manifest
├── src/
│   ├── __tests__/        # Unit Tests
│   │   ├── components.test.jsx
│   │   ├── validation.test.js
│   │   └── setup.js
│   ├── components/       # Reusable UI Components
│   │   ├── PrimaryButton.jsx
│   │   ├── SecondaryButton.jsx
│   │   ├── InputField.jsx
│   │   ├── RadioButton.jsx
│   │   ├── DarkModeToggle.jsx
│   │   ├── CodePanel.jsx
│   │   ├── InfoPanel.jsx
│   │   └── PageLayout.jsx
│   ├── pages/            # Page Components
│   │   ├── Welcome.jsx
│   │   ├── Login.jsx
│   │   ├── CreateAccount.jsx
│   │   └── AccountSettings.jsx
│   ├── styles/           # CSS Files
│   │   ├── global.css
│   │   ├── forms.css
│   │   ├── pages.css
│   │   ├── darkMode.css
│   │   └── animations.css
│   ├── App.jsx
│   └── main.jsx
├── package.json
├── vite.config.js
└── README.md
```

---

## ⌨️ Keyboard Shortcuts

| Shortcut | Action |
|----------|--------|
| `Ctrl + H` | Go to Home/Welcome |
| `Ctrl + L` | Go to Login |
| `Ctrl + K` | Go to Create Account |
| `Ctrl + D` | Toggle Dark Mode |

---

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/varuntejreddy03/educase.git

# Navigate to project
cd popx-ui

# Install dependencies
npm install

# Start development server
npm run dev
```

### Build for Production

```bash
npm run build
```

---

## 📱 Pages

| Page | Route | Description |
|------|-------|-------------|
| Welcome | `/` | Landing page with CTA buttons |
| Login | `/login` | Sign in with email/password |
| Create Account | `/create` | Registration with validation |
| Account Settings | `/account` | Profile display with photo upload |

---

## 🎨 Design Specifications

| Property | Value |
|----------|-------|
| Primary Color | `#6C25FF` |
| Secondary Color | `#CAB3FF` |
| Mobile Width | `375px` |
| Mobile Height | `680px` |
| Button Height | `46px` |
| Border Radius | `6px` |
| Font | Inter |

---

## ✅ Form Validation Rules

| Field | Validation |
|-------|------------|
| Full Name | Required |
| Phone | Required, 10 digits |
| Email | Required, must contain @ |
| Password | Required, min 4 characters |

---

## 🌙 Dark Mode

Toggle between light and dark themes:
- Click the 🌙/☀️ button (top-right corner)
- Or use `Ctrl + D` keyboard shortcut
- Preference saved to localStorage

---

## ♿ Accessibility Features

- **Skip Link** - Jump to main content
- **Focus States** - Visible keyboard focus indicators
- **ARIA Labels** - Screen reader friendly
- **Reduced Motion** - Respects user preferences
- **Semantic HTML** - Proper heading hierarchy

---



## 👨‍💻 Developer

**Varun Tej**

- 🌐 [Portfolio](https://varuntej.online)
- 🔗 [GitHub](https://github.com/varuntejreddy03)
- 🔗 [LinkedIn](https://www.linkedin.com/in/nvaruntej)

---

## 📋 Assessment Highlights

| Requirement | Implementation |
|-------------|----------------|
| Pixel-perfect UI | ✅ Matches design specs |
| Form Validation | ✅ Real-time with error messages |
| Responsive Design | ✅ Mobile-first approach |
| Clean Code | ✅ Modular components |
| Unit Tests | ✅ 28 tests, 100% core coverage |
| Documentation | ✅ Comprehensive README |
| Bonus Features | ✅ Dark mode, shortcuts, PWA |

---

## 📄 License

MIT License - feel free to use this project for learning!

---

## 🙏 Acknowledgments

- Design inspiration from modern mobile app patterns
- Built with ❤️ as part of a frontend assessment
