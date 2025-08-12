import React from 'react';
import { Link } from 'react-router-dom';
import blogData from '../data/blogData'; // Fixed import path
import '../App.css';

export default function Blog() {
    return (
        <section style={{ padding: 40 }}>
            <h2>Blog</h2>
            <div style={{ display: 'grid', gap: 12 }}>
                {blogData.map(p => (
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