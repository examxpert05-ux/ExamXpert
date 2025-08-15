import React from 'react';
import { Link } from 'react-router-dom';
import { t } from '../utils/translations.js';
import '../App.css';

export default function Home({ lang }) {
  return (
    <section style={{ padding: 40 }}>
      <h1 style={{ fontSize: 28 }}>{t('welcomeTitle', lang)}</h1>
      <p style={{ fontSize: 16, color: '#374151', marginTop: 8 }}>
        {t('welcomeSubtitle', lang)}
      </p>
      <p style={{ color: '#6b7280' }}>
        {t('welcomeDescription', lang)}
      </p>
      <div className="home-cta">
        <Link to="/dashboard">
          <button className="btn">{t('startPractice', lang)}</button>
        </Link>
        <Link to="/blog">
          <button className="btn btn-green">{t('ourBlog', lang)}</button>
        </Link>
      </div>
      <div style={{ marginTop: 28, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20 }}>
        <div className="card" style={{ padding: 16 }}>
          <h3>{t('features', lang)}</h3>
          <ul>
            <li>{t('realExamInterface', lang)}</li>
            <li>{t('timerMarkReview', lang)}</li>
            <li>{t('performanceGraphs', lang)}</li>
          </ul>
        </div>
        <div className="card" style={{ padding: 16 }}>
          <h3>{t('whyExamXpert', lang)}</h3>
          <p style={{ color: '#6b7280' }}>
            {t('featuresDesc', lang)}
          </p>
        </div>
      </div>
    </section>
  );
}