import React, { useState } from 'react';
import { t } from '../../utils/translations.js';
import LoginForm from './LoginForm';
import '../../App.css';

// Pseudo-authentication implementation
const pseudoAuth = {
    currentUser: null,
    async signup({ name, email, password, phone }) {
        const user = { uid: 'u' + Date.now(), name, email, phone, verified: false };
        this.currentUser = user;
        return true; // Simulate successful signup
    },
    async signin({ email }) {
        const user = { uid: 'u' + Date.now(), email, verified: false };
        this.currentUser = user;
        return true; // Simulate successful signin
    },
    signout() {
        this.currentUser = null;
        return true; // Simulate successful signout
    }
};

export default function Auth({ onLogin, lang = 'en' }) {
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');

    async function signup(e) {
        e.preventDefault();
        const success = await pseudoAuth.signup({ name, email, password: 'demo', phone });
        if (success) onLogin({ name, email, phone, uid: 'u' + Date.now() });
    }

    async function signin(e) {
        e.preventDefault();
        const success = await pseudoAuth.signin({ email });
        if (success) onLogin({ email, uid: 'u' + Date.now() });
        else alert(t('userNotFound', lang));
    }

    return (
        <section style={{ padding: 20 }}>
            <div style={{ display: 'flex', gap: 12 }}>
                <form onSubmit={signup} style={{ display: 'grid', gap: 8 }}>
                    <h3>{t('createAccount', lang)}</h3>
                    <input required placeholder={t('fullName', lang)} value={name} onChange={e => setName(e.target.value)} />
                    <input required placeholder={t('email', lang)} type="email" value={email} onChange={e => setEmail(e.target.value)} />
                    <input placeholder={t('phone', lang)} value={phone} onChange={e => setPhone(e.target.value)} />
                    <button className="btn">{t('signUpDemo', lang)}</button>
                </form>
                <LoginForm email={email} setEmail={setEmail} signin={signin} lang={lang} />
            </div>
        </section>
    );
}