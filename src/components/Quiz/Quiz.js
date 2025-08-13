import React, { useState, useEffect, useMemo, useRef } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Question from './Question';
import Timer from './Timer';
import bankData from '../../data/bankData';
import sscData from '../../data/sscData';
import upscData from '../../data/upscData';
import './Quiz.css';

export default function Quiz() {
    const { id } = useParams();
    const navigate = useNavigate();
    const [questions, setQuestions] = useState([]);
    const [answers, setAnswers] = useState({});
    const [timeLeft, setTimeLeft] = useState(600); // 10 minutes
    const [submitted, setSubmitted] = useState(false);
    const questionRefs = useRef([]);

    const exams = useMemo(() => [
        { id: 't1', title: 'Bank PO Prelims', data: bankData },
        { id: 't2', title: 'UPSC Prelims', data: upscData },
        { id: 't3', title: 'SSC CGL Prelims', data: sscData },
    ], []);

    const shuffleArray = (array) => {
        const shuffled = [...array];
        for (let i = shuffled.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
        }
        return shuffled;
    };

    useEffect(() => {
        const exam = exams.find(e => e.id === id);
        if (exam) {
            const shuffledData = shuffleArray([...exam.data]);
            const shuffledQuestions = shuffledData.map(q => ({
                ...q,
                options: shuffleArray([...q.options])
            }));
            setQuestions(shuffledQuestions);
            setAnswers({});
            setTimeLeft(600);
            setSubmitted(false);
            // Reset refs array when questions change
            questionRefs.current = Array(shuffledQuestions.length).fill().map((_, i) => questionRefs.current[i] || React.createRef());
        }
    }, [id, exams]);

    const handleOptionChange = (qIndex, optionId) => {
        if (submitted) return;
        setAnswers(prev => ({ ...prev, [qIndex]: optionId }));
    };

    const handleSubmit = () => {
        setSubmitted(true);
        const score = questions.reduce((acc, q, idx) => {
            const userAnswer = answers[idx];
            const correctAnswerId = q.answerId;
            const userOption = q.options.find(opt => opt.optionId === userAnswer)?.text;
            const correctOption = q.options.find(opt => opt.optionId === correctAnswerId)?.text;
            return acc + (userAnswer !== undefined && userOption === correctOption ? 1 : 0);
        }, 0);
        const result = { score, total: questions.length, timeTaken: 600 - timeLeft };
        const rlist = JSON.parse(localStorage.getItem('results') || '[]');
        rlist.push(result);
        localStorage.setItem('results', JSON.stringify(rlist));
        localStorage.setItem('quizResponses', JSON.stringify({ questions, answers, examId: id }));
        const title = exams.find(e => e.id === id)?.title; // Get the dynamic title
        navigate('/result', { state: { result, title } }); // Navigate to result with title
    };

    const handleNavigate = (index) => {
        if (questionRefs.current[index] && questionRefs.current[index].current) {
            questionRefs.current[index].current.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    };

    return (
        <section style={{ padding: 20 }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 12 }}>
                <h3>Live Test — {exams.find(e => e.id === id)?.title}</h3>
                <Timer timeLeft={timeLeft} setTimeLeft={setTimeLeft} submitted={submitted} onTimeout={handleSubmit} />
            </div>
            <div className="card" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <h4 style={{ margin: 0 }}>Navigation</h4>
                <label style={{ margin: 0 }}>
                    <input type="checkbox" /> Full screen (demo)
                </label>
            </div>
            <div
                style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    gap: 8,
                    margin: '12px 0',
                    overflowX: 'auto',
                    maxWidth: '100%',
                }}
            >
                {questions.map((q, i) => {
                    const isAnswered = answers[i] !== undefined && answers[i] !== null && answers[i] !== '';
                    return (
                        <button
                            key={q.id || i}
                            onClick={() => handleNavigate(i)}
                            style={{
                                padding: 8,
                                borderRadius: 8,
                                background: isAnswered ? '#0b72ff' : '#f1f5f9',
                                color: isAnswered ? '#fff' : '#111',
                                minWidth: '40px',
                                textAlign: 'center',
                                cursor: 'pointer',
                            }}
                        >
                            {i + 1}
                        </button>
                    );
                })}
            </div>
            <div style={{ marginTop: 12 }}>
                <div className="card">
                    {questions.map((q, index) => (
                        <div ref={questionRefs.current[index]} key={q.id || index}>
                            <Question
                                question={q}
                                index={index}
                                selectedOption={answers[index]}
                                onOptionChange={handleOptionChange}
                                submitted={submitted}
                            />
                        </div>
                    ))}
                    {!submitted && (
                        <button className="btn btn-red submit-button" onClick={handleSubmit}>
                            Submit Exam
                        </button>
                    )}
                </div>
            </div>
        </section>
    );
}