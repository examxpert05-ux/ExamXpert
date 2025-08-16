import React, { useState, useEffect, useMemo } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { t } from '../utils/translations.js';
import { getTestByTitle } from '../config/testData.js';
import StatsChart from './Dashboard/StatsChart';
import '../App.css';

export default function Result({ lang = 'en' }) {
  const [results, setResults] = useState([]);
  const { state } = useLocation();
  const title = state?.title;
  const isMobile = window.innerWidth <= 768;

  const displayTitle = useMemo(() => {
    if (!title) return t('unknownTest', lang);
    const testData = getTestByTitle(title);
    return testData ? (lang === 'hi' ? testData.hindiTitle : testData.title) : title;
  }, [title, lang]);

  const translations = useMemo(() => ({
    result: lang === 'hi' ? 'परिणाम' : 'Result',
    yourScore: t('yourScore', lang),
    timeTaken: t('timeTaken', lang),
    performanceGraph: lang === 'hi' ? 'प्रदर्शन ग्राफ' : 'Performance Graph',
    reviewResponse: lang === 'hi' ? 'अपने उत्तर की समीक्षा करें' : 'Review Your Response',
    noResult: lang === 'hi' ? 'कोई हालिया परिणाम नहीं मिला (पहले एक डेमो टेस्ट लें)।' : 'No recent result found (take a demo test first).',
    min: lang === 'hi' ? 'मिनट' : 'min',
    sec: lang === 'hi' ? 'सेकंड' : 'sec'
  }), [lang]);

  useEffect(() => {
    const storedResults = JSON.parse(localStorage.getItem('results') || '[]');
    setResults(storedResults);
    // Remove auto-scroll to prevent page jumping
  }, []);

  const last = results.length > 0 ? results[results.length - 1] : null;

  return (
    <section style={{ padding: 40, position: 'relative' }}>
      <h2>{translations.result} — {displayTitle}</h2>
      {!last && <p>{translations.noResult}</p>}
      {last && (
        <div style={{ display: isMobile ? 'block' : 'grid', gridTemplateColumns: isMobile ? 'none' : '1fr 1fr', gap: isMobile ? 0 : 12 }}>
          <div className="card">
            <h3>{translations.yourScore}: {last.score} / {last.total}</h3>
            <p>
              {translations.timeTaken}: {Math.floor(last.timeTaken / 60)} {translations.min} {last.timeTaken % 60} {translations.sec}
            </p>
          </div>
          <div className="card">
            <h3>{translations.performanceGraph}</h3>
            <StatsChart score={last.score} total={last.total} lang={lang} />
          </div>
        </div>
      )}
      {last && (
        <Link to="/review" state={{ result: last, title }}>
          <button className="btn btn-purple review-button">{translations.reviewResponse}</button>
        </Link>
      )}
    </section>
  );
}