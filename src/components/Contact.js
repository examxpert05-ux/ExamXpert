import React, { useState } from 'react';
import { t } from '../utils/translations.js';
import './Auth/Auth.css';
import '../App.css';

export default function Contact({ lang }) {
  const [status, setStatus] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus(t('messageSent', lang));
    setTimeout(() => setStatus(null), 3000);
  };

  return (
    <section style={{ padding: 40 }}>
      <h2>{t('contactTitle', lang)}</h2>
      <form onSubmit={handleSubmit} style={{ maxWidth: 600 }}>
        <input required placeholder={t('name', lang)} />
        <input type="email" required placeholder={t('email', lang)} />
        <textarea placeholder={t('message', lang)} rows={4}></textarea>
        <div style={{ display: 'flex', gap: 8 }}>
          <button className="btn">{t('send', lang)}</button>
          <button
            type="button"
            onClick={() => {
              navigator.clipboard.writeText(window.location.href);
              alert('URL copied');
            }}
          >
            {t('share', lang)}
          </button>
        </div>
        {status && (
          <div style={{ background: '#e6ffef', padding: 10, borderRadius: 8 }}>
            {status}
          </div>
        )}
      </form>
    </section>
  );
}