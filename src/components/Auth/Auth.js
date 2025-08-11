import React, { useState } from 'react';
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

export default function Auth({ onLogin }) {
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
        else alert('User not found (demo)');
    }

    return (
        <section style={{ padding: 20 }}>
            <div style={{ display: 'flex', gap: 12 }}>
                <form onSubmit={signup} style={{ display: 'grid', gap: 8 }}>
                    <h3>Create Account</h3>
                    <input required placeholder="Full name" value={name} onChange={e => setName(e.target.value)} />
                    <input required placeholder="Email" type="email" value={email} onChange={e => setEmail(e.target.value)} />
                    <input placeholder="Phone" value={phone} onChange={e => setPhone(e.target.value)} />
                    <button className="btn">Sign Up (demo)</button>
                </form>
                <LoginForm email={email} setEmail={setEmail} signin={signin} />
            </div>
        </section>
    );
}