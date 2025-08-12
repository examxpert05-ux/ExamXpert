import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import '../App.css';
import './Quiz/Quiz.css';

export default function Review() {
    const { state } = useLocation();
    const result = state?.result;
    const responses = JSON.parse(localStorage.getItem('quizResponses') || '{}');
    const title = state?.title; // Rely on dynamic title from Result.js

    if (!result || !responses.questions) {
        return (
            <section style={{ padding: 40 }}>
                <h2>Review</h2>
                <p>No quiz responses available. Please take a test first.</p>
                <p>Debug Info:</p>
                <ul>
                    <li>Result: {result ? JSON.stringify(result) : 'Missing'}</li>
                    <li>Responses: {responses ? JSON.stringify(responses) : 'Missing'}</li>
                    <li>Questions: {responses.questions ? `${responses.questions.length} questions` : 'Missing'}</li>
                    <li>Exam ID: {responses.examId || 'Missing'}</li>
                    <li>Title: {title || 'Not passed'}</li> {/* Debug info */}
                </ul>
            </section>
        );
    }

    const optionLabels = ['A', 'B', 'C', 'D'];

    // Debug: Log computed style of the button
    if (typeof window !== 'undefined') {
        const button = document.querySelector('.btn');
        if (button) {
            console.log('Button marginTop:', window.getComputedStyle(button).marginTop);
        }
    }

    return (
        <section style={{ padding: 40 }}>
            <h2>Review — {title || 'Unknown Test'}</h2> {/* Fallback only for display */}
            <div className="card">
                <h3>Your Score: {result.score} / {result.total}</h3>
                <p>
                    Time taken: {Math.floor(result.timeTaken / 60)}m {result.timeTaken % 60}s
                </p>
            </div>
            <div className="card">
                {responses.questions.map((q, index) => {
                    const userAnswerId = responses.answers[index];
                    const correctAnswerId = q.answerId;

                    return (
                        <div key={q.id || index} style={{ marginBottom: 20 }}>
                            <p>
                                <strong>Q{index + 1}:</strong> {q.question}
                            </p>
                            {q.options.map((option, optIndex) => {
                                const isCorrect = option.optionId === correctAnswerId;
                                const isUserAnswer = option.optionId === userAnswerId;
                                const className = `option ${isCorrect ? 'correct-dark' : (isUserAnswer ? 'wrong dimmed' : 'dimmed')}`;

                                return (
                                    <p
                                        key={option.optionId}
                                        className={className}
                                        style={isCorrect ? { fontWeight: 'bold' } : { marginBottom: '2px' }}
                                    >
                                        <span className="marker-space">
                                            {isUserAnswer && isCorrect ? '✔' : isUserAnswer ? '✘' : ' '} {/* Space for alignment */}
                                        </span>
                                        <span className="option-label">{optionLabels[optIndex]}.</span> {option.text}
                                    </p>
                                );
                            })}
                        </div>
                    );
                })}
            </div>
            <Link to="/result" className="btn" style={{ backgroundColor: '#10b981', color: '#fff', marginTop: '32px !important' }} state={{ result, title }}>
                Go to Result
            </Link>
        </section>
    );
}