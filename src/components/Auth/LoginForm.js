import React from 'react';
import { t } from '../../utils/translations.js';
import '../../App.css';

export default function LoginForm({ email, setEmail, signin, lang = 'en' }) {
    return (
        <form onSubmit={signin} style={{ display: 'grid', gap: 8 }}>
            <h3>{t('login', lang)}</h3>
            <input placeholder={t('email', lang)} value={email} onChange={e => setEmail(e.target.value)} />
            <button className="btn">{t('loginDemo', lang)}</button>
        </form>
    );
}