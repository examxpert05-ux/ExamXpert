import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

export default function Home({ lang }) {
    return (
        <section style={{ padding: 40 }}>
            <h1 style={{ fontSize: 28 }}>Welcome to ExamXpert</h1>
            <p style={{ color: '#6b7280' }}>
                Aapka one-stop coaching & test-series platform — practice like the real exam.
            </p>
            <div style={{ display: 'flex', gap: 12, marginTop: 18 }}>
                <Link to="/dashboard">
                    <button className="btn">Start Practice</button>
                </Link>
                <Link to="/blog">
                    <button className="btn btn-green">Our Blog</button>
                </Link>
            </div>
            <div style={{ marginTop: 28, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20 }}>
                <div className="card">
                    <h3>Features</h3>
                    <ul>
                        <li>Real-exam like interface</li>
                        <li>Timer, Mark for Review, Section Navigation</li>
                        <li>Performance Graphs</li>
                    </ul>
                </div>
                <div className="card">
                    <h3>Why ExamXpert</h3>
                    <p style={{ color: '#6b7280' }}>
                        Personalised practice, secure tests, and insightful analytics.
                    </p>
                </div>
            </div>
        </section>
    );
}