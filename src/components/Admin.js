import React, { useState } from 'react';
import { t } from '../utils/translations.js';
import './Auth/Auth.css';
import '../App.css';

export default function Admin({ lang = 'en' }) {
    const [tests, setTests] = useState([]);
    const [title, setTitle] = useState('');

    function addTest() {
        setTests(prev => [...prev, { id: 't' + Date.now(), title }]);
        setTitle('');
    }

    return (
        <section style={{ padding: 40 }}>
            <h2>{t('adminPanel', lang)}</h2>
            <div style={{ display: 'flex', gap: 12 }}>
                <input placeholder={t('testTitle', lang)} value={title} onChange={e => setTitle(e.target.value)} />
                <button className="btn" onClick={addTest}>
                    {t('addTest', lang)}
                </button>
            </div>
            <div style={{ marginTop: 18 }}>
                {tests.map(test => (
                    <div key={test.id} className="card" style={{ marginTop: 8 }}>
                        {test.title}
                    </div>
                ))}
            </div>
        </section>
    );
}