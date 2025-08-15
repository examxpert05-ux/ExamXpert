import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Quiz.css';
import '../../App.css';

export default function Quiz() {
    const navigate = useNavigate();
    const questions = [
        { id: 1, q: 'What is 2+2?', choices: ['1', '2', '3', '4'], ans: 3 },
        { id: 2, q: 'What is capital of India?', choices: ['Mumbai', 'Delhi', 'Kolkata', 'Chennai'], ans: 1 },
    ];
    const [cur, setCur] = useState(0);
    const [answers, setAnswers] = useState({});
    const [timeLeft, setTimeLeft] = useState(1060);

    useEffect(() => {
        const t = setInterval(() => setTimeLeft(s => s > 0 ? s - 1 : 0), 1000);
        return () => clearInterval(t);
    }, []);

    function selectChoice(qid, choiceIndex) {
        setAnswers(prev => ({ ...prev, [qid]: choiceIndex }));
    }

    function submit() {
        let score = 0;
        questions.forEach((q) => {
            if (answers[q.id] === q.ans) score++;
        });
        const result = { score, total: questions.length, timeTaken: (10 * 60 - timeLeft) };
        const rlist = JSON.parse(localStorage.getItem('results') || '[]');
        rlist.push(result);
        localStorage.setItem('results', JSON.stringify(rlist));
        navigate('/result');
    }

    return (
        <section style={{ padding: '20px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '12px' }}>
                <h3>Live Test — Demo</h3>
                <div>
                    Time left: <strong>{Math.floor(timeLeft / 60)}:{String(timeLeft % 60).padStart(2, '0')}</strong>
                </div>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '12px', marginTop: '12px' }}>
                <div className="card">
                    <h4>Q{cur + 1}. {questions[cur].q}</h4>
                    <div style={{ display: 'grid', gap: '8px', marginTop: '8px' }}>
                        {questions[cur].choices.map((c, ci) => (
                            <label
                                key={ci}
                                className={`option ${answers[questions[cur].id] === ci ? 'correct' : ''}`}
                            >
                                <input
                                    type="radio"
                                    name={'q' + questions[cur].id}
                                    checked={answers[questions[cur].id] === ci}
                                    onChange={() => selectChoice(questions[cur].id, ci)}
                                />
                                <span className="option-label">{c}</span>
                            </label>
                        ))}
                    </div>

                    <div style={{ display: 'flex', gap: '8px', marginTop: '12px' }}>
                        <button onClick={() => setCur(c => Math.max(0, c - 1))} className="btn">Prev</button>
                        <button
                            onClick={() => setCur(c => Math.min(questions.length - 1, c + 1))}
                            className="btn btn-green"
                        >
                            Next
                        </button>
                        <button onClick={submit} className="btn btn-red submit-button">Submit</button>
                    </div>
                </div>

                <div className="card">
                    <h4>Navigation</h4>
                    <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                        {questions.map((q, i) => (
                            <button
                                key={q.id}
                                onClick={() => setCur(i)}
                                className="btn"
                                style={{ background: answers[q.id] ? '#0b72ff' : '#f1f5f9', color: answers[q.id] ? '#fff' : '#111' }}
                            >
                                {i + 1}
                            </button>
                        ))}
                    </div>
                    <div style={{ marginTop: '12px' }}>
                        <label>
                            <input type="checkbox" /> Full screen (demo)
                        </label>
                    </div>
                </div>
            </div>
        </section>
    );
}