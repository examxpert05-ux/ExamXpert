import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, Navigate } from 'react-router-dom';
import Auth from './components/Auth/Auth';
import Dashboard from './components/Dashboard/Dashboard';
import Quiz from './components/Quiz/Quiz';
import Home from './components/Home';
import Contact from './components/Contact';
import Blog from './components/Blog';
import BlogPost from './components/BlogPost';
// import Admin from './components/Admin';
import Result from './components/Result'; 
import Review from './components/Review';
import './index.css'; // Updated to use index.css

const pseudoAuth = {
  currentUser: null,
  async signup({ name, email, password, phone }) {
    const user = { uid: 'u' + Date.now(), name, email, phone, verified: false };
    this.currentUser = user;
    return true;
  },
  async signin({ email }) {
    const user = { uid: 'u' + Date.now(), email, verified: false };
    this.currentUser = user;
    return true;
  },
  signout() {
    this.currentUser = null;
    return true;
  }
};

function ExamXpertLogo() {
  return (
    <Link to="/" className="logo">
      <svg width="40" height="40" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
        <rect rx="10" width="64" height="64" fill="#0b72ff" />
        <text x="50%" y="58%" text-anchor="middle" font-size="30" font-weight="700" fill="#fff" font-family="Arial">E</text>
      </svg>
      <div>
        <div>ExamXpert</div>
        <div>Your Exam, Our Responsibility</div>
      </div>
    </Link>
  );
}

export default function App() {
  const [lang, setLang] = useState('en');
  const [user, setUser] = useState(null); // Corrected from state to useState

  useEffect(() => {
    // Placeholder for greeting or auth state listener
  }, []);

  return (
    <Router>
      <div className="container">
        <header className="header">
          <ExamXpertLogo />
          <nav className="nav">
            <Link to="/">Home</Link>
            <Link to="/contact">Contact</Link>
            <Link to="/blog">Blog</Link>
            {user ? (
              <>
                <Link to="/dashboard">Dashboard</Link>
                <Link to="/admin">Admin</Link>
                <button
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
          <Route path="/review" element={<Review />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </div>
    </Router>
  );
}