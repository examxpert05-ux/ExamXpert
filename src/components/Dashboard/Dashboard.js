import React from 'react';
import { Link } from 'react-router-dom';
import { t } from '../../utils/translations.js';
import RazorpayButton from '../Payment/RazorpayButton';
import './Dashboard.css';
import '../../App.css';

export default function Dashboard({ user, lang }) {
  const tests = [
    { id: 't1', title: 'Bank PO Test', duration: 10, description: 'Bank Probationary Officer', price: 'xx' },
    { id: 't2', title: 'SSC CGL Test', duration: 10, description: 'Staff Selection Commission\nCombined Graduate Level', price: 'xx' },
    { id: 't3', title: 'UPSC Test', duration: 10, description: 'Union Public Service Commission', price: 'xx' },
  ];

  return (
    <section style={{ padding: 40 }}>
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
              justifyContent: 'space-between',
              alignItems: 'center',
            }}
          >
            <div>
              <h3 style={{ margin: 0 }}>{test.title}</h3>
              <p style={{ fontWeight: 'bold', color: '#6b7280', fontSize: 16, margin: 0, whiteSpace: 'pre-line' }}>{test.description}</p>
              <p style={{ color: '#6b7280' }}>{t('duration', lang)}: {test.duration} {t('mins', lang)}</p>
            </div>
            <div style={{ display: 'flex', gap: 8 }}>
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