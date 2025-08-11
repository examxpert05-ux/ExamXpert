import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Auth from './components/Auth/Auth';
import Dashboard from './components/Dashboard/Dashboard';
import Quiz from './components/Quiz/Quiz';
import Home from './components/Home';
import Contact from './components/Contact';
import Blog from './components/Blog';
import BlogPost from './components/BlogPost';
import Admin from './components/Admin';
import Result from './components/Results';
import './App.css';

// Pseudo-authentication implementation
const pseudoAuth = {
  currentUser: null,
  async signup({ name, email, password, phone }) {
    const user = { uid: 'u' + Date.now(), name, email, phone, verified: false };
    this.currentUser = user;
    return true; // Simulate successful signup
  },
  async signin({ email }) {
    const user = { uid: 'u' + Date.now(), email, verified: false };
    this.currentUser = user;
    return true; // Simulate successful signin
  },
  signout() {
    this.currentUser = null;
    return true; // Simulate successful signout
  }
};

function ExamXpertLogo({ size = 40 }) {
  return (
    <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 10, cursor: 'pointer' }}>
        <svg width={size} height={size} viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
          <rect rx="10" width="64" height="64" fill="#0b72ff" />
          <text x="50%" y="58%" textAnchor="middle" fontSize="30" fontWeight="700" fill="#fff" fontFamily="Arial">
            E
          </text>
        </svg>
        <div style={{ lineHeight: 1 }}>
          <div style={{ fontWeight: 700 }}>ExamXpert</div>
          <div style={{ fontSize: 12, color: '#6b7280' }}>Your Exam, Our Responsibility</div>
        </div>
      </div>
    </Link>
  );
}

export default function App() {
  const [lang, setLang] = useState('en');
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Placeholder for greeting or auth state listener
  }, []);

  return (
    <Router>
      <div style={{ maxWidth: 1000, margin: '0 auto', padding: '0 16px' }}>
        <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '16px 0' }}>
          <ExamXpertLogo />
          <nav style={{ display: 'flex', gap: 12 }}>
            <Link to="/">Home</Link>
            <Link to="/contact">Contact</Link>
            <Link to="/blog">Blog</Link>
            {user ? (
              <>
                <Link to="/dashboard">Dashboard</Link>
                <Link to="/admin">Admin</Link>
                <button
                  style={{ padding: '8px 12px', background: '#ef4444', color: '#fff', borderRadius: 8, border: 'none' }}
                  onClick={() => {
                    pseudoAuth.signout();
                    setUser(null);
                  }}
                >
                  Logout
                </button>
              </>
            ) : (
              <Link to="/auth">Login</Link>
            )}
            <select value={lang} onChange={(e) => setLang(e.target.value)}>
              <option value="en">English</option>
              <option value="hi">Hindi</option>
            </select>
          </nav>
        </header>
        <Routes>
          <Route path="/" element={<Home lang={lang} />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:id" element={<BlogPost />} />
          <Route path="/auth" element={<Auth onLogin={setUser} />} />
          <Route path="/dashboard" element={<Dashboard user={user} />} />
          <Route path="/test/:id" element={<Quiz />} />
          <Route path="/result" element={<Result />} />
          <Route path="/admin" element={<Admin />} />
        </Routes>
      </div>
    </Router>
  );
}