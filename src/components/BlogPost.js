import React from 'react';
import { useParams, Navigate } from 'react-router-dom';
import blogData from '../data/blogData'; // Fixed import path
import '../App.css';

export default function BlogPost() {
    const { id } = useParams();
    const post = blogData.find(p => p.id === parseInt(id));

    if (!post) {
        return <Navigate to="/blog" replace />;
    }

    return (
        <section style={{ padding: 40 }}>
            <h2>{post.title}</h2>
            <p style={{ whiteSpace: 'pre-wrap' }}>{post.content}</p>
        </section>
    );
}