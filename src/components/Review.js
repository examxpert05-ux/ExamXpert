import React, { useEffect, useState, useMemo, useCallback } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { t } from '../utils/translations.js';
import { getTestByTitle } from '../config/testData.js';
import '../App.css';
import './Quiz/Quiz.css';

export default function Review({ lang = 'en' }) {
    const { state } = useLocation();
    const result = state?.result;
    const responses = useMemo(() => JSON.parse(localStorage.getItem('quizResponses') || '{}'), []);
    const title = state?.title;
    const [showScrollTop, setShowScrollTop] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setShowScrollTop(window.scrollY > 300);
        };
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToTop = useCallback(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }, []);

    const translations = useMemo(() => ({
        review: t('review', lang),
        min: lang === 'hi' ? 'मिनट' : 'min',
        sec: lang === 'hi' ? 'सेकंड' : 'sec',
        yourScore: t('yourScore', lang),
        timeTaken: t('timeTaken', lang),
        goToResult: t('goToResult', lang)
    }), [lang]);

    const displayTitle = useMemo(() => {
        if (!title) return t('unknownTest', lang);
        const testData = getTestByTitle(title);
        return testData ? (lang === 'hi' ? testData.hindiTitle : testData.title) : title;
    }, [title, lang]);

    const optionLabels = useMemo(() => ['A', 'B', 'C', 'D'], []);

    if (!result || !responses.questions) {
        return (
            <section style={{ padding: 40 }}>
                <h2>{translations.review}</h2>
                <p>{t('noQuizResponses', lang)}</p>
            </section>
        );
    }

    return (
        <section style={{ padding: 40 }}>
            <h2>{translations.review} — {displayTitle}</h2>
            <div className="card">
                <h3>{translations.yourScore}: {result.score} / {result.total}</h3>
                <p>
                    {translations.timeTaken}: {Math.floor(result.timeTaken / 60)} {translations.min} {result.timeTaken % 60} {translations.sec}
                </p>
            </div>
            <div className="card">
                {responses.questions.map((q, index) => {
                    const userAnswerId = responses.answers[index];
                    const correctAnswerId = q.answerId;

                    return (
                        <div key={q.id || index} style={{ marginBottom: 20 }}>
                            <p>
                                <strong>Q{index + 1}:</strong> {lang === 'hi' ? (q.hindiQuestion || q.question) : q.question}
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
                                            {isUserAnswer && isCorrect ? '✔' : isUserAnswer ? '✘' : ' '}
                                        </span>
                                        <span className="option-label">{optionLabels[optIndex]}.</span> {lang === 'hi' ? (option.hindiText || option.text) : option.text}
                                    </p>
                                );
                            })}
                        </div>
                    );
                })}
            </div>
            <Link to="/result" className="btn" style={{ backgroundColor: '#10b981', color: '#fff', marginTop: '32px !important' }} state={{ result, title }}>
                {translations.goToResult}
            </Link>
            
            {showScrollTop && (
                <button
                    onClick={scrollToTop}
                    style={{
                        position: 'fixed',
                        right: '20px',
                        bottom: '20px',
                        width: '50px',
                        height: '50px',
                        borderRadius: '50%',
                        background: '#0b72ff',
                        color: '#fff',
                        border: 'none',
                        cursor: 'pointer',
                        fontSize: '20px',
                        boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
                        zIndex: 1000,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center'
                    }}
                    title="Scroll to top"
                    aria-label="Scroll to top"
                >
                    ↑
                </button>
            )}
        </section>
    );
}