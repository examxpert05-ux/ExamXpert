import React from 'react';
import { useLocation } from 'react-router-dom';
import '../App.css';
import './Quiz/Quiz.css';

export default function Review() {
    const { state } = useLocation();
    const result = state?.result;
    const responses = JSON.parse(localStorage.getItem('quizResponses') || '{}');

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
                </ul>
            </section>
        );
    }

    return (
        <section style={{ padding: 40 }}>
            <h2>Review Your Responses</h2>
            <div className="card">
                {responses.questions.map((q, index) => {
                    const userAnswerId = responses.answers[index];
                    const correctAnswerId = q.answerId;

                    return (
                        <div key={q.id || index} style={{ marginBottom: 20 }}>
                            <p>
                                <strong>Q{index + 1}:</strong> {q.question}
                            </p>
                            {q.options.map((option) => {
                                const isCorrect = option.optionId === correctAnswerId;
                                const isUserAnswer = option.optionId === userAnswerId;
                                const className = `option ${isCorrect ? 'correct-dark' : (isUserAnswer ? 'wrong' : '')}`;

                                return (
                                    <p
                                        key={option.optionId}
                                        className={className}
                                        style={isCorrect ? { fontWeight: 'bold' } : {}}
                                    >
                                        {option.text}
                                    </p>
                                );
                            })}
                        </div>
                    );
                })}
            </div>
        </section>
    );
}