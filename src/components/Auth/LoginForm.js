import React from 'react';
import '../../App.css';

export default function LoginForm({ email, setEmail, signin }) {
    return (
        <form onSubmit={signin} style={{ display: 'grid', gap: 8 }}>
            <h3>Login</h3>
            <input placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} />
            <button className="btn">Login (demo)</button>
        </form>
    );
}