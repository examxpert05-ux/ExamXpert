import React, { useState } from 'react';
import '../App.css';

export default function Admin() {
    const [tests, setTests] = useState([]);
    const [title, setTitle] = useState('');

    function addTest() {
        setTests(prev => [...prev, { id: 't' + Date.now(), title }]);
        setTitle('');
    }

    return (
        <section style={{ padding: 40 }}>
            <h2>Admin Panel</h2>
            <div style={{ display: 'flex', gap: 12 }}>
                <input placeholder="Test title" value={title} onChange={e => setTitle(e.target.value)} />
                <button className="btn" onClick={addTest}>
                    Add Test
                </button>
            </div>
            <div style={{ marginTop: 18 }}>
                {tests.map(t => (
                    <div key={t.id} className="card" style={{ marginTop: 8 }}>
                        {t.title}
                    </div>
                ))}
            </div>
        </section>
    );
}