import React, { useState } from 'react';
import '../App.css';

export default function Contact() {
    const [status, setStatus] = useState(null);

    const handleSubmit = (e) => {
        e.preventDefault();
        setStatus('Message sent (demo).');
        setTimeout(() => setStatus(null), 3000);
    };

    return (
        <section style={{ padding: 40 }}>
            <h2>Contact</h2>
            <form onSubmit={handleSubmit} style={{ maxWidth: 600, display: 'grid', gap: 8 }}>
                <input required placeholder="Naam" />
                <input type="email" required placeholder="Email" />
                <textarea placeholder="Message" rows={4}></textarea>
                <div style={{ display: 'flex', gap: 8 }}>
                    <button className="btn">Send</button>
                    <button
                        type="button"
                        onClick={() => {
                            navigator.clipboard.writeText(window.location.href);
                            alert('URL copied');
                        }}
                    >
                        Share
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