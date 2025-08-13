import React from 'react';
import { useParams, Navigate, Link } from 'react-router-dom';
import blogData from '../data/blogData';
import '../App.css';

export default function BlogPost() {
    const { id } = useParams();
    const post = blogData.find(p => p.id === parseInt(id));

    if (!post) {
        return <Navigate to="/blog" replace />;
    }

    return (
        <section className="py-10 px-6 bg-gray-100 min-h-screen">
            <div className="blog-container">
                <div className="blog-card p-8">
                    <Link
                        to="/blog"
                        className="inline-block mb-6 text-blue-600 hover:text-blue-800 transition-colors duration-200"
                    >
                        ← Back to Blog
                    </Link>
                    <h1 className="text-3xl font-bold mb-4 text-gray-900">{post.title}</h1>
                    {/* Adjust the margin-bottom (0px) below to increase/decrease the vertical gap between the date and the blog content */}
                    <div style={{ marginBottom: '0px' }}>
                        <div style={{ color: '#16a34a', marginBottom: '4px' }}>By {post.author || 'Amitesh Gupta'}</div>
                        <div style={{ color: '#4f46e5' }}>{post.date || 'August 13, 2025, 04:27 PM IST'}</div>
                    </div>
                    {/* Blog Image */}
                    {post.image && (
                        <div className="mb-6">
                            <img
                                src={process.env.PUBLIC_URL + post.image}
                                alt={post.title}
                                className="blog-image"
                            />
                        </div>
                    )}
                    {/* Adjust the max-width (400px) below to increase/decrease the width of the blog content; removed mx-auto for extreme left alignment */}
                    <article className="prose prose-lg text-gray-700" style={{ maxWidth: '400px' }}>
                        {post.content.trim().split('\n').map((paragraph, index) => (
                            <p key={index} className="mb-4">{paragraph}</p>
                        ))}
                    </article>
                </div>
            </div>
        </section>
    );
}