import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

export default function Home({ lang }) {
    return (
        <section className="home-container">
            {/* Hero */}
            <div className="home-hero">
                <h1 className="home-title">Welcome to ExamXpert</h1>
                <p className="home-subtitle">
                    Aapka one-stop coaching &amp; test-series platform — practice like the real exam.
                </p>
                <div className="home-cta">
                    <Link to="/dashboard">
                        <button className="btn">Start Practice</button>
                    </Link>
                    <Link to="/blog">
                        <button className="btn btn-green">Our Blog</button>
                    </Link>
                </div>
            </div>

            {/* Cards */}
            <div className="home-cards flex flex-row space-x-4">
                <div className="card card-elevated flex-1">
                    <h3>Features</h3>
                    <ul className="home-list">
                        <li>Real-exam like interface</li>
                        <li>Timer, Mark for Review, Section Navigation</li>
                        <li>Performance Graphs</li>
                    </ul>
                </div>
                <div className="card card-elevated flex-1">
                    <h3>Why ExamXpert</h3>
                    <p className="muted">
                        Personalised practice, secure tests, and insightful analytics.
                    </p>
                </div>
            </div>
        </section>
    );
}