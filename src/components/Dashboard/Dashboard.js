import React from 'react';
import { Link } from 'react-router-dom';
import { t } from '../../utils/translations.js';
import { tests } from '../../config/testData.js';
import RazorpayButton from '../Payment/RazorpayButton';
import './Dashboard.css';
import '../../App.css';

export default function Dashboard({ user, lang }) {
  const isMobile = window.innerWidth <= 768;

  return (
    <section style={{ padding: isMobile ? 20 : 40 }}>
      <h2>{t('dashboardTitle', lang)}</h2>
      {user ? (
        <div className="card">
          Hello, <strong>{user.name || user.email}</strong> — {t('welcomeBack', lang)}
        </div>
      ) : (
        <div style={{ color: '#6b7280' }}>{t('loginToAccess', lang)}</div>
      )}

      <div style={{ marginTop: 18, display: 'grid', gap: 12 }}>
        {tests.map(test => (
          <div
            key={test.id}
            className="card"
            style={{
              display: 'flex',
              flexDirection: isMobile ? 'column' : 'row',
              justifyContent: isMobile ? 'flex-start' : 'space-between',
              alignItems: isMobile ? 'flex-start' : 'center',
            }}
          >
            <div style={{ width: isMobile ? '100%' : 'auto' }}>
              <h3 style={{ margin: 0 }}>{lang === 'hi' ? test.hindiTitle : test.title}</h3>
              <p style={{ fontWeight: 'bold', color: '#6b7280', fontSize: 16, margin: 0, whiteSpace: 'pre-line' }}>{lang === 'hi' ? test.hindiDescription : test.description}</p>
              <p style={{ color: '#6b7280', marginBottom: isMobile ? 12 : 0 }}>{t('duration', lang)}: {test.duration} {t('mins', lang)}</p>
            </div>
            <div style={{ display: 'flex', gap: 8, width: isMobile ? '100%' : 'auto' }}>
              <Link to={`/test/${test.id}`}>
                <button className="btn">{t('startDemo', lang)}</button>
              </Link>
              <RazorpayButton amount={test.price * 100} description={test.title} lang={lang} />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}