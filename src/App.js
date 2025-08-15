// ExamXpert — React MVP Single-File App (App.jsx) 
// ----------------------------------------------- 
// Instructions: 
// - This single-file React component shows the structure: Home, Contact, Blog, Auth (Firebase placeholders), 
//   Dashboard, Test UI (demo), Result chart, Admin panel, Language toggle, Logo, and Razorpay integration points. 
// - Replace the FIREBASE_CONFIG and RAZORPAY_KEY placeholders with your actual sandbox keys. 
// - This file assumes you're using a React app created with Vite or Create React App with Tailwind CSS. 
// - For quick testing without Tailwind, basic inline styles are used for critical parts.

import React, {
  useEffect,
  useState
} from 'react';

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useNavigate,
  useParams
} from 'react-router-dom';

import bankQuestions from './data/bankData.js';
import sscQuestions from './data/sscData.js';
import upscQuestions from './data/upscData.js';
import Result from './components/Result.js';
import Review from './components/Review.js';
import Timer from './components/Quiz/Timer.js';
import Blog from './components/Blog.js';
import BlogPost from './components/BlogPost.js';

/* --------------------------- IMPORTANT: Replace these with your Firebase config --------------------------- */
// const FIREBASE_CONFIG = {
//   apiKey: "YOUR_FIREBASE_API_KEY",
//   authDomain: "YOUR_FIREBASE_AUTH_DOMAIN",
//   projectId: "YOUR_FIREBASE_PROJECT_ID",
//   storageBucket: "YOUR_FIREBASE_STORAGE_BUCKET",
//   messagingSenderId: "YOUR_FIREBASE_MESSAGING_SENDER_ID",
//   appId: "YOUR_FIREBASE_APP_ID"
// };

/* --------------------------- IMPORTANT: Razorpay key (test mode) --------------------------- */
const RAZORPAY_KEY = 'YOUR_RAZORPAY_TEST_KEY';

// Simple SVG logo generator for 'ExamXpert' 
function ExamXpertLogo({ size = 40 }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
      <svg
        width={size}
        height={size}
        viewBox="0 0 64 64"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect rx="10" width="64" height="64" fill="#0b72ff" />
        <text
          x="50%"
          y="58%"
          textAnchor="middle"
          fontSize="30"
          fontWeight="700"
          fill="#fff"
          fontFamily="Arial"
        >
          E
        </text>
      </svg>
      <div style={{ lineHeight: 1 }}>
        <div style={{ fontWeight: 700 }}>ExamXpert</div>
        <div style={{ fontSize: 12, color: '#6b7280' }}>
          Your Exam, Our Responsibility
        </div>
      </div>
    </div>
  );
}

/* --------------------------- Minimal CSS fallback (if Tailwind not present) --------------------------- */
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

/* --------------------------- Mock Firebase functions (replace with real Firebase modular SDK calls) --------------------------- */
// NOTE: Below is pseudo-implementation. Integrate actual Firebase SDK in your project. 
const mockAuth = {
  currentUser: null,
  users: [],
  async signup({
    name,
    email,
    password,
    phone
  }) {
    const user = {
      uid: 'u' + Date.now(),
      name,
      email,
      phone,
      verified: false
    };
    this.users.push(user);
    this.currentUser = user;
    return user;
  },
  async signin({
    email
  }) {
    const user = this.users.find(u => u.email === email) || null;
    this.currentUser = user;
    return user;
  },
  signout() {
    this.currentUser = null;
  }
};

/* --------------------------- Utility: load Razorpay script dynamically --------------------------- */
function loadRazorpayScript() {
  return new Promise((resolve) => {
    if (document.getElementById('razorpay-sdk')) return resolve(true);
    const script = document.createElement('script');
    script.id = 'razorpay-sdk';
    script.src = 'https://checkout.razorpay.com/v1/checkout.js';
    script.onload = () => resolve(true);
    script.onerror = () => resolve(false);
    document.body.appendChild(script);
  });
}

/* --------------------------- Pages --------------------------- */
function Home({ lang }) {
  return (
    <section style={{ padding: 40 }}>
      <h1 style={{ fontSize: 28 }}>Welcome to ExamXpert</h1>
      <p style={{ fontSize: 16, color: '#374151', marginTop: 8 }}>
        Your comprehensive online test preparation platform designed to simulate real exam conditions
      </p>
      <p style={{ color: '#6b7280' }}>
        Aapka one-stop coaching & test-series platform — practice like the real exam.
      </p>
      <div style={{ display: 'flex', gap: 12, marginTop: 18 }}>
        <Link to="/dashboard">
          <button style={btn}>Start Practice</button>
        </Link>
        <Link to="/blog">
          <button style={{ ...btn, background: '#10b981' }}>Our Blog</button>
        </Link>
      </div>
      <div style={{ marginTop: 28, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20 }}>
        <div
          style={{
            background: '#fff',
            padding: 16,
            borderRadius: 12,
            boxShadow: '0 6px 18px rgba(0,0,0,0.06)',
          }}
        >
          <h3>Features</h3>
          <ul>
            <li>Real-exam like interface</li>
            <li>Timer, Mark for Review, Section Navigation</li>
            <li>Performance Graphs</li>
          </ul>
        </div>
        <div
          style={{
            background: '#fff',
            padding: 16,
            borderRadius: 12,
            boxShadow: '0 6px 18px rgba(0,0,0,0.06)',
          }}
        >
          <h3>Why ExamXpert</h3>
          <p style={{ color: '#6b7280' }}>
            Personalised practice, secure tests, and insightful analytics.
          </p>
        </div>
      </div>
    </section>
  );
}

function Contact() {
  const [status, setStatus] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('Message sent (demo).');
    setTimeout(() => setStatus(null), 3000);
  };

  return (
    <section style={{ padding: 40 }}>
      <h2>Contact</h2>
      <form
        onSubmit={handleSubmit}
        style={{ maxWidth: 600, display: 'grid', gap: 8 }}
      >
        <input required placeholder="Naam" />
        <input type="email" required placeholder="Email" />
        <textarea placeholder="Message" rows={4}></textarea>
        <div style={{ display: 'flex', gap: 8 }}>
          <button style={btn}>Send</button>
          <button
            type="button"
            onClick={() => {
              navigator.clipboard.writeText(window.location.href);
              alert('URL copied');
            }}
          >
            Share
          </button>
        </div>
        {status && (
          <div style={{ background: '#e6ffef', padding: 10, borderRadius: 8 }}>
            {status}
          </div>
        )}
      </form>
    </section>
  );
}



/* --------------------------- Dashboard: shows tests, start test, results --------------------------- */
function Dashboard({ user }) {
  const tests = [
    { id: 't1', title: 'Bank PO Test', duration: 10, description: 'Bank Probationary Officer', price: 'xx' },
    { id: 't2', title: 'SSC CGL Test', duration: 10, description: 'Staff Selection Commission\nCombined Graduate Level', price: 'xx' },
    { id: 't3', title: 'UPSC Test', duration: 10, description: 'Union Public Service Commission', price: 'xx' },
  ];

  return (
    <section style={{ padding: 40 }}>
      <h2>Dashboard</h2>
      {user ? (
        <div style={{ background: '#fff', padding: 12, borderRadius: 8 }}>
          Hello, <strong>{user.name || user.email}</strong> — Welcome back!
        </div>
      ) : (
        <div style={{ color: '#6b7280' }}>Login to access tests.</div>
      )}

      <div style={{ marginTop: 18, display: 'grid', gap: 12 }}>
        {tests.map(t => (
          <div
            key={t.id}
            style={{
              background: '#fff',
              padding: 12,
              borderRadius: 8,
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}
          >
            <div>
              <h3 style={{ margin: 0 }}>{t.title}</h3>
              <p style={{ fontWeight: 'bold', color: '#6b7280', fontSize: 16, margin: 0, whiteSpace: 'pre-line' }}>{t.description}</p>
              <p style={{ color: '#6b7280' }}>Duration: {t.duration} mins</p>
            </div>
            <div style={{ display: 'flex', gap: 8 }}>
              <Link to={`/test/${t.id}`}>
                <button style={btn}>Start Demo</button>
              </Link>
              <RazorpayButton amount={t.price * 100} description={t.title} />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

/* --------------------------- RazorpayButton component (test mode) --------------------------- */
function RazorpayButton({ amount = 1000, description = 'Test Purchase' }) {
  const [loading, setLoading] = useState(false); const handlePay = async () => {
    setLoading(true); const ok = await loadRazorpayScript(); if (!ok) { alert('Razorpay SDK failed to load'); setLoading(false); return; }

    // Create order on your backend in production. Here we'll open checkout with fake order.
    const options = {
      key: RAZORPAY_KEY, // test key
      amount: amount, currency: 'INR',
      name: 'ExamXpert',
      description,
      handler: function (response) {
        alert('Payment success (demo). Payment id: ' + response.razorpay_payment_id);
      },
      prefill: { name: 'Demo User', email: 'demo@example.com', contact: '9999999999' },
      theme: { color: '#0b72ff' }
    };
    const rzp = new window.Razorpay(options);
    rzp.open();
    setLoading(false);

  }; return <button style={{ ...btn, background: '#9333ea' }} onClick={handlePay} disabled={loading}>{loading ? 'Loading...' : 'Buy'}</button>;
}

/* --------------------------- Test UI (simplified) — real exam like controls --------------------------- */
function TestInterface() {
  const navigate = useNavigate();
  const { id } = useParams();
  
  const getTestData = () => {
    switch(id) {
      case 't1': return { questions: bankQuestions, title: 'Bank PO Test' };
      case 't2': return { questions: sscQuestions, title: 'SSC CGL Test' };
      case 't3': return { questions: upscQuestions, title: 'UPSC Test' };
      default: return { questions: [], title: 'Unknown Test' };
    }
  };
  
  const { questions, title } = getTestData();
  const [cur, setCur] = useState(0);
  const [answers, setAnswers] = useState({});
  const [timeLeft, setTimeLeft] = useState(600); // 10 minutes
  const [showSubmitModal, setShowSubmitModal] = useState(false);



  function selectChoice(qid, choiceIndex) {
    setAnswers(prev => ({ ...prev, [qid]: choiceIndex }));
  }

  function handleSubmit() {
    let score = 0;
    const userAnswers = [];
    questions.forEach((q, i) => {
      if (answers[q.id] === q.answerId) score++;
      userAnswers.push(answers[q.id]);
    });
    const result = { score, total: questions.length, timeTaken: (600 - timeLeft) };
    
    const quizResponses = {
      questions: questions,
      answers: userAnswers,
      examId: id
    };
    localStorage.setItem('quizResponses', JSON.stringify(quizResponses));
    
    const rlist = JSON.parse(localStorage.getItem('results') || '[]');
    rlist.push(result);
    localStorage.setItem('results', JSON.stringify(rlist));
    navigate('/result', { state: { title } });
  }

  function showConfirmation() {
    setShowSubmitModal(true);
  }

  function confirmSubmit() {
    setShowSubmitModal(false);
    handleSubmit();
  }

  function cancelSubmit() {
    setShowSubmitModal(false);
  }

  return (
    <section style={{ padding: 20 }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 12 }}>
        <h3>Live Test — {title}</h3>
        <Timer 
          timeLeft={timeLeft} 
          setTimeLeft={setTimeLeft} 
          submitted={false} 
          onTimeout={handleSubmit} 
        />
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: 12, marginTop: 12 }}>
        <div style={{ background: '#fff', padding: 12, borderRadius: 8 }}>
          <h4>Q{cur + 1}. {questions[cur].question}</h4>
          <div style={{ display: 'grid', gap: 8, marginTop: 8 }}>
            {questions[cur].options.map((option) => (
              <label
                key={option.optionId}
                style={{
                  display: 'block',
                  padding: 8,
                  borderRadius: 8,
                  background: answers[questions[cur].id] === option.optionId ? '#eef2ff' : '#f8fafc',
                  cursor: 'pointer',
                }}
              >
                <input
                  type="radio"
                  name={'q' + questions[cur].id}
                  checked={answers[questions[cur].id] === option.optionId}
                  onChange={() => selectChoice(questions[cur].id, option.optionId)}
                />{' '}{option.text}
              </label>
            ))}
          </div>

          <div style={{ display: 'flex', gap: 16, marginTop: 28 }}>
            <button onClick={() => setCur(c => Math.max(0, c - 1))} style={btn}>
              Prev
            </button>
            <button
              onClick={() => setCur(c => Math.min(questions.length - 1, c + 1))}
              style={{ ...btn, background: '#10b981' }}
            >
              Next
            </button>
          </div>
        </div>

        <div style={{ background: '#fff', padding: 12, borderRadius: 8 }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 8 }}>
            <h4 style={{ margin: 0 }}>Navigation</h4>
            <label style={{ fontSize: 14 }}>
              <input type="checkbox" /> Full screen (demo)
            </label>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(6, 1fr)', gap: 8 }}>
            {questions.map((q, i) => (
              <button
                key={q.id}
                onClick={() => setCur(i)}
                style={{
                  padding: 8,
                  borderRadius: 8,
                  background: answers[q.id] !== undefined ? '#0b72ff' : '#f1f5f9',
                  color: answers[q.id] !== undefined ? '#fff' : '#111',
                }}
              >
                {i + 1}
              </button>
            ))}
          </div>
          <div style={{ display: 'flex', justifyContent: 'center', marginTop: 32 }}>
            <button onClick={showConfirmation} style={{ ...btn, background: '#ef4444' }}>
              Submit
            </button>
          </div>
        </div>
      </div>
      
      {showSubmitModal && (
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'rgba(0,0,0,0.5)',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          zIndex: 1001
        }}>
          <div style={{
            background: '#fff',
            padding: 24,
            borderRadius: 12,
            boxShadow: '0 10px 30px rgba(0,0,0,0.3)',
            textAlign: 'center',
            maxWidth: 400
          }}>
            <h3 style={{ marginBottom: 16 }}>Submit Test?</h3>
            <p style={{ marginBottom: 24, color: '#6b7280' }}>Do you want to submit the test?</p>
            <div style={{ display: 'flex', gap: 12, justifyContent: 'center' }}>
              <button 
                onClick={confirmSubmit}
                style={{ ...btn, background: '#0b72ff', padding: '12px 24px' }}
              >
                Yes
              </button>
              <button 
                onClick={cancelSubmit}
                style={{ ...btn, background: '#10b981', padding: '12px 24px' }}
              >
                No
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}



/* --------------------------- Admin Panel (demo) — add tests --------------------------- */
function Admin() {
  const [tests, setTests] = useState([]);
  const [title, setTitle] = useState('');

  function addTest() {
    setTests(prev => [...prev, { id: 't' + Date.now(), title }]);
    setTitle('');
  }

  const btn = {
    padding: '8px 16px',
    backgroundColor: '#007bff',
    color: '#fff',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer'
  };

  return (
    <section style={{ padding: 40 }}>
      <h2>Admin Panel</h2>

      <div style={{ display: 'flex', gap: 12 }}>
        <input
          placeholder="Test title"
          value={title}
          onChange={e => setTitle(e.target.value)}
        />
        <button onClick={addTest} style={btn}>
          Add Test
        </button>
      </div>

      <div style={{ marginTop: 18 }}>
        {tests.map(t => (
          <div
            key={t.id}
            style={{
              background: '#fff',
              padding: 10,
              borderRadius: 8,
              marginTop: 8
            }}
          >
            {t.title}
          </div>
        ))}
      </div>
    </section>
  );
}

/* --------------------------- Authentication UI (demo) — integrates with mockAuth Replace with Firebase SDK code in production --------------------------- */
function Auth({ onLogin }) {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');

  async function signup(e) {
    e.preventDefault();
    const u = await mockAuth.signup({
      name,
      email,
      password: 'demo',
      phone
    });
    onLogin(u);
  }

  async function signin(e) {
    e.preventDefault();
    const u = await mockAuth.signin({ email });
    if (!u) return alert('User not found (demo)');
    onLogin(u);
  }

  return (
    <section style={{ padding: 20 }}>
      <div style={{ display: 'flex', gap: 12 }}>
        <form onSubmit={signup} style={{ display: 'grid', gap: 8 }}>
          <h3>Create Account</h3>
          <input
            required
            placeholder="Full name"
            value={name}
            onChange={e => setName(e.target.value)}
          />
          <input
            required
            placeholder="Email"
            type="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
          <input
            placeholder="Phone"
            value={phone}
            onChange={e => setPhone(e.target.value)}
          />
          <button style={btn}>Sign Up (demo)</button>
        </form>

        <form onSubmit={signin} style={{ display: 'grid', gap: 8 }}>
          <h3>Login</h3>
          <input
            placeholder="Email"
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
          <button style={btn}>Login (demo)</button>
        </form>
      </div>
    </section>
  );
}

/* --------------------------- Top-level App --------------------------- */
export default function App() {
  const [lang, setLang] = useState('en');
  const [user, setUser] = useState(null);
  const [greeting, setGreeting] = useState('');

  useEffect(() => {
    // On login show real-time greeting (demo) — you'll replace with actual user info
    if (user) {
      const h = new Date().getHours();
      const msg =
        h < 12 ? 'Good Morning' : h < 17 ? 'Good Afternoon' : 'Good Evening';
      setGreeting(`${msg}, ${user.name || user.email}`);

      // Clear after 6s
      const t = setTimeout(() => setGreeting(''), 6000);
      return () => clearTimeout(t);
    }
  }, [user]);

  return (
    <Router>
      <div style={{ background: '#f7fafc', minHeight: '100vh' }}>
        <header
          style={{
            background: '#fff',
            boxShadow: '0 2px 6px rgba(0,0,0,0.06)',
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            zIndex: 1000
          }}
        >
          <div style={containerStyle}>
            <nav
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                height: 64
              }}
            >
              <Link
                to="/"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 12,
                  textDecoration: 'none',
                  color: '#111'
                }}
              >
                <ExamXpertLogo />
              </Link>

              <div
                style={{
                  display: 'flex',
                  gap: 12,
                  alignItems: 'center'
                }}
              >
                <Link to="/" style={{ color: '#6b7280' }}>
                  Home
                </Link>
                <Link to="/blog" style={{ color: '#6b7280' }}>
                  Blog
                </Link>
                <Link to="/contact" style={{ color: '#6b7280' }}>
                  Contact
                </Link>
                <Link to="/dashboard" style={{ color: '#6b7280' }}>
                  Dashboard
                </Link>
                <Link to="/admin" style={{ color: '#6b7280' }}>
                  Admin
                </Link>

                <select
                  value={lang}
                  onChange={e => setLang(e.target.value)}
                  style={{ padding: 6 }}
                >
                  <option value="en">EN</option>
                  <option value="hi">HI</option>
                </select>

                {user ? (
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: 8
                    }}
                  >
                    <div
                      style={{
                        padding: 8,
                        background: '#eef2ff',
                        borderRadius: 8
                      }}
                    >
                      {user.name || user.email}
                    </div>
                    <button
                      onClick={() => {
                        mockAuth.signout();
                        setUser(null);
                      }}
                      style={{ padding: 8 }}
                    >
                      Logout
                    </button>
                  </div>
                ) : (
                  <Link to="/auth">
                    <button style={btn}>Login / Signup</button>
                  </Link>
                )}
              </div>
            </nav>
          </div>
        </header>

        {greeting && (
          <div
            style={{
              position: 'fixed',
              right: 20,
              top: 90,
              background: '#0b72ff',
              color: '#fff',
              padding: 12,
              borderRadius: 10,
              zIndex: 50,
              boxShadow: '0 8px 24px rgba(11,19,32,0.12)'
            }}
          >
            {greeting}
          </div>
        )}

        <main style={{ ...containerStyle, marginTop: 64 }}>
          <Routes>
            <Route path="/" element={<Home lang={lang} />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:id" element={<BlogPost />} />
            <Route path="/dashboard" element={<Dashboard user={user} />} />
            <Route path="/test/:id" element={<TestInterface />} />
            <Route path="/result" element={<Result />} />
            <Route path="/review" element={<Review />} />
            <Route path="/admin" element={<Admin />} />
            <Route
              path="/auth"
              element={<Auth onLogin={u => setUser(u)} />}
            />
          </Routes>
        </main>

        <footer
          style={{
            padding: 6,
            textAlign: 'center',
            color: '#6b7280'
          }}
        >
          © ExamXpert — Built with ❤️
        </footer>
      </div>
    </Router>
  );
}

// End of single-file React app
// -----------------------------------------------
// Next steps (in README you should include):
// 1. Create a React project (Vite or CRA) and replace App.jsx with this file.
// 2. Install dependencies: react-router-dom, firebase, tailwind (optional) and setup Tailwind.
// 3. Replace mockAuth with Firebase Authentication code (email verify + phone OTP).
// 4. Create backend endpoints for Razorpay order creation (recommended) or use test checkout flow.
// 5. Deploy to Firebase Hosting (or your preferred host).
