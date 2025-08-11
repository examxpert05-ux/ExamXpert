import React from 'react';
import { useParams } from 'react-router-dom';

export default function BlogPost() {
    const { id } = useParams();
    return (
        <section style={{ padding: 40 }}>
            <h2>Blog Post #{id}</h2>
            <p>Full blog content (demo).</p>
        </section>
    );
}