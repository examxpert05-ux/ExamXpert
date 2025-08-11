import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

export default function Blog() {
    const posts = [
        { id: 1, title: 'How to crack exams', excerpt: 'Study smart, not hard.' },
        { id: 2, title: 'Test taking strategies', excerpt: 'Time management and sectional balance.' },
    ];

    return (
        <section style={{ padding: 40 }}>
            <h2>Blog</h2>
            <div style={{ display: 'grid', gap: 12 }}>
                {posts.map(p => (
                    <div key={p.id} className="card">
                        <h3>{p.title}</h3>
                        <p style={{ color: '#6b7280' }}>{p.excerpt}</p>
                        <Link to={`/blog/${p.id}`}>Read more</Link>
                    </div>
                ))}
            </div>
        </section>
    );
}