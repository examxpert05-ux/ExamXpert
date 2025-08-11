import React from 'react';
import { Link } from 'react-router-dom';
import RazorpayButton from '../Payment/RazorpayButton';
import '../../App.css';

export default function Dashboard({ user }) {
    const tests = [
        { id: 't1', title: 'Bank PO Prelims', description: 'Banking exams', duration: 10, price: 49 },
        { id: 't2', title: 'UPSC Prelims', description: 'Civil Services Prelims', duration: 10, price: 99 },
        { id: 't3', title: 'SSC CGL Prelims', description: 'Staff Selection Commission', duration: 10, price: 79 },
    ];

    return (
        <section style={{ padding: 40 }}>
            <h2>Dashboard</h2>
            {user ? (
                <div className="card">
                    Hello, <strong>{user.name || user.email}</strong> — Welcome back!
                </div>
            ) : (
                <div style={{ color: '#6b7280' }}>Login to access tests.</div>
            )}
            <div style={{ marginTop: 18, display: 'grid', gap: 12 }}>
                {tests.map(t => (
                    <div key={t.id} className="card" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <div>
                            <h3 style={{ margin: '0px 0px 5px' }}>{t.title}</h3>
                            <p style={{ margin: '0px 0px 10px', color: 'rgba(14, 14, 14, 0.36)', fontWeight: 'bold', fontSize: '25px' }}>{t.description}</p>
                            <p style={{ color: '#6b7280' }}>Duration: {t.duration} mins</p>
                        </div>
                        <div style={{ display: 'flex', gap: 8 }}>
                            <Link to={`/test/${t.id}`}>
                                <button className="btn">Start Demo</button>
                            </Link>
                            <RazorpayButton amount={t.price * 100} description={t.title} />
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}