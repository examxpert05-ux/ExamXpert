import React, { useState, useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';
import StatsChart from './Dashboard/StatsChart';
import '../App.css';

export default function Result() {
  const [results, setResults] = useState([]);
  const { state } = useLocation();
  const title = state?.title;

  useEffect(() => {
    const storedResults = JSON.parse(localStorage.getItem('results') || '[]');
    setResults(storedResults);
    // Remove auto-scroll to prevent page jumping
  }, []);

  const last = results.length > 0 ? results[results.length - 1] : null;

  return (
    <section style={{ padding: 40, position: 'relative' }}>
      <h2>Result — {title || 'Unknown Test'}</h2> {/* Fallback only for display */}
      {!last && <p>No recent result found (take a demo test first).</p>}
      {last && (
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
          <div className="card">
            <h3>Your Score: {last.score} / {last.total}</h3>
            <p>
              Time taken: {Math.floor(last.timeTaken / 60)}min {last.timeTaken % 60}sec
            </p>
          </div>
          <div className="card">
            <h3>Performance Graph</h3>
            <StatsChart score={last.score} total={last.total} />
          </div>
        </div>
      )}
      {last && (
        <Link to="/review" state={{ result: last, title }}>
          <button className="btn btn-purple review-button">Review Your Response</button>
        </Link>
      )}
    </section>
  );
}