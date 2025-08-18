/**
 * ExamXpert - React Application
 * Click to expand sections below for detailed information
 */

//#region Imports
import React, { useEffect, useState, useMemo, useCallback } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { lazy, Suspense } from 'react';
// Lazy loaded components for performance
const Result = lazy(() => import('./components/Result.js'));
const Review = lazy(() => import('./components/Review.js'));
const BlogList = lazy(() => import('./components/BlogList.js'));
const Dashboard = lazy(() => import('./components/Dashboard/Dashboard.js'));
const Home = lazy(() => import('./components/Home.js'));
const Contact = lazy(() => import('./components/Contact.js'));
const Auth = lazy(() => import('./components/Auth/Auth.js'));
const Admin = lazy(() => import('./components/Admin.js'));
const TestInterface = lazy(() => import('./components/TestInterface.js'));
import ExamXpertLogo from './components/Logo.js';
import ErrorBoundary from './components/ErrorBoundary.js';
import { t } from './utils/translations.js';
//#endregion

//#region Configuration
/* 
 * Firebase Config (Replace with your actual keys)
 * const FIREBASE_CONFIG = {
 *   apiKey: "YOUR_FIREBASE_API_KEY",
 *   authDomain: "YOUR_FIREBASE_AUTH_DOMAIN",
 *   projectId: "YOUR_FIREBASE_PROJECT_ID",
 *   storageBucket: "YOUR_FIREBASE_STORAGE_BUCKET",
 *   messagingSenderId: "YOUR_FIREBASE_MESSAGING_SENDER_ID",
 *   appId: "YOUR_FIREBASE_APP_ID"
 * };
 */
//#endregion

//#region Styles
const containerStyle = {
  maxWidth: 1000,
  margin: '0 auto',
  padding: '0 16px'
};
const btn = {
  background: '#0b72ff',
  color: '#fff',
  padding: '10px 12px',
  borderRadius: 8,
  border: 'none',
  cursor: 'pointer'
};
//#endregion

//#region Mock Auth (Replace with Firebase)
const mockAuth = {
  currentUser: null,
  users: [],
  async signup({ name, email, password, phone }) {
    const user = { uid: 'u' + Date.now(), name, email, phone, verified: false };
    this.users.push(user);
    this.currentUser = user;
    return user;
  },
  async signin({ email }) {
    const user = this.users.find(u => u.email === email) || null;
    this.currentUser = user;
    return user;
  },
  signout() {
    this.currentUser = null;
  }
};
//#endregion
export default function App() {
  const [lang, setLang] = useState('en');
  const [user, setUser] = useState(null);
  const [greeting, setGreeting] = useState('');
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    if (user) {
      const h = new Date().getHours();
      const msg = h < 12 ? t('goodMorning', lang) : h < 17 ? t('goodAfternoon', lang) : t('goodEvening', lang);
      setGreeting(`${msg}, ${user.name || user.email}`);
      const timer = setTimeout(() => setGreeting(''), 6000);
      return () => clearTimeout(timer);
    }
  }, [user, lang]);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <Router>
      <div style={{ background: '#f7fafc', minHeight: '100vh' }}>
        <header style={{ background: '#fff', boxShadow: '0 2px 6px rgba(0,0,0,0.06)', position: 'fixed', top: 0, left: 0, right: 0, zIndex: 1000, transform: 'translateZ(0)' }}>
          <div style={containerStyle}>
            <nav style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: 64 }}>
              <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: 12, textDecoration: 'none', color: '#111' }}>
                <ExamXpertLogo lang={lang} />
              </Link>
              <div style={{ display: 'flex', gap: 8, alignItems: 'center', flexWrap: 'wrap' }}>
                <div style={{ display: isMobile ? 'none' : 'flex', gap: 12, alignItems: 'center' }}>
                  <Link to="/" style={{ color: '#6b7280', fontSize: '14px' }}>{t('home', lang)}</Link>
                  <Link to="/blog" style={{ color: '#6b7280', fontSize: '14px' }}>{t('blog', lang)}</Link>
                  <Link to="/contact" style={{ color: '#6b7280', fontSize: '14px' }}>{t('contact', lang)}</Link>
                  <Link to="/dashboard" style={{ color: '#6b7280', fontSize: '14px' }}>{t('dashboard', lang)}</Link>
                </div>
                <select value={lang} onChange={e => setLang(e.target.value)} style={{ padding: '8px 4px', fontSize: '12px' }}>
                  <option value="en">EN</option>
                  <option value="hi">हि</option>
                </select>
                {user ? (
                  <div style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
                    <div style={{ padding: '4px 8px', background: '#eef2ff', borderRadius: 6, fontSize: '12px' }}>
                      {(user.name || user.email).substring(0, 10)}
                    </div>
                    <button onClick={() => { mockAuth.signout(); setUser(null); }} style={{ padding: '4px 8px', fontSize: '12px' }}>
                      {t('logout', lang)}
                    </button>
                  </div>
                ) : (
                  <Link to="/auth">
                    <button style={{ ...btn, padding: '8px 12px', fontSize: '12px' }}>{t('loginSignup', lang)}</button>
                  </Link>
                )}
              </div>
            </nav>
            {isMobile && (
              <div style={{ display: 'flex', justifyContent: 'center', gap: 20, paddingBottom: 12, borderTop: '1px solid #e5e7eb' }}>
                <Link to="/" style={{ color: '#6b7280', fontSize: '14px', padding: '8px 0' }}>{t('home', lang)}</Link>
                <Link to="/blog" style={{ color: '#6b7280', fontSize: '14px', padding: '8px 0' }}>{t('blog', lang)}</Link>
                <Link to="/contact" style={{ color: '#6b7280', fontSize: '14px', padding: '8px 0' }}>{t('contact', lang)}</Link>
                <Link to="/dashboard" style={{ color: '#6b7280', fontSize: '14px', padding: '8px 0' }}>{t('dashboard', lang)}</Link>
              </div>
            )}
          </div>
        </header>
        {greeting && (
          <div style={{ position: 'fixed', right: 20, top: 90, background: '#0b72ff', color: '#fff', padding: 12, borderRadius: 10, zIndex: 50, boxShadow: '0 8px 24px rgba(11,19,32,0.12)' }}>
            {greeting}
          </div>
        )}
        <main style={{ ...containerStyle, marginTop: isMobile ? 140 : 100 }}>
          <ErrorBoundary>
            <Routes>
              <Route path="/" element={<Home lang={lang} />} />
              <Route path="/home" element={<Home lang={lang} />} />
              <Route path="/contact" element={<Contact lang={lang} />} />
              <Route path="/blog" element={<BlogList lang={lang} />} />
              <Route path="/blog/:id" element={<BlogList lang={lang} />} />
              <Route path="/dashboard" element={<Dashboard user={user} lang={lang} />} />
              <Route path="/test/:id" element={<TestInterface lang={lang} />} />
              <Route path="/result" element={<Result lang={lang} />} />
              <Route path="/review" element={<Review lang={lang} />} />
              <Route path="/admin" element={<Admin lang={lang} />} />
              <Route path="/auth" element={<Auth onLogin={u => setUser(u)} lang={lang} />} />
            </Routes>
          </ErrorBoundary>
        </main>
        <footer style={{ padding: 6, textAlign: 'center', color: '#6b7280' }}>
          © ExamXpert — {t('builtWith', lang)}
        </footer>
      </div>
    </Router>
  );
}

//#region Development Notes
/*
 * Next steps for production:
 * 1. Replace mockAuth with Firebase Authentication
 * 2. Add Razorpay backend integration
 * 3. Setup environment variables
 * 4. Deploy to hosting platform
 */
//#endregion
