import React from 'react';
import { Link } from 'react-router-dom';
import { t } from '../utils/translations.js';
import '../App.css';

export default function Home({ lang }) {
  const isMobile = window.innerWidth <= 768;
  
  return (
    <section style={{ padding: isMobile ? 20 : 40 }}>
      <h1 style={{ fontSize: isMobile ? 24 : 28 }}>{t('welcomeTitle', lang)}</h1>
      <p style={{ fontSize: isMobile ? 14 : 16, color: '#374151', marginTop: 8 }}>
        {t('welcomeSubtitle', lang)}
      </p>
      <p style={{ color: '#6b7280', fontSize: isMobile ? 14 : 16 }}>
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
      <div style={{ 
        marginTop: 28, 
        display: 'grid', 
        gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr', 
        gap: isMobile ? 20 : 20 
      }}>
        <div className="card" style={{ padding: isMobile ? 12 : 16 }}>
          <h3 style={{ fontSize: isMobile ? '1rem' : '1.25rem', marginBottom: 12 }}>{t('features', lang)}</h3>
          <div style={{ color: '#6b7280', fontSize: isMobile ? '0.8rem' : '1rem' }}>
            <div style={{ marginBottom: 6 }}>• {t('realExamInterface', lang)}</div>
            <div style={{ marginBottom: 6 }}>• {t('timerMarkReview', lang)}</div>
            <div style={{ marginBottom: 6 }}>• {t('performanceGraphs', lang)}</div>
          </div>
        </div>
        <div className="card" style={{ padding: isMobile ? 12 : 16 }}>
          <h3 style={{ fontSize: isMobile ? '1rem' : '1.25rem', marginBottom: 12 }}>{t('whyExamXpert', lang)}</h3>
          <p style={{ color: '#6b7280', fontSize: isMobile ? '0.8rem' : '1rem', margin: 0 }}>
            {t('featuresDesc', lang)}
          </p>
        </div>
      </div>
    </section>
  );
}