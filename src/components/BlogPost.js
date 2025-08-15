import React, { useEffect } from 'react';
import { useParams, Navigate, Link } from 'react-router-dom';
import blogData from '../data/blogData';
import '../App.css';

export default function BlogPost() {
    const { id } = useParams();
    const post = blogData.find(p => p.id === parseInt(id));

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    if (!post) {
        return <Navigate to="/blog" replace />;
    }

    return (
        <section className="py-10 px-6 bg-gray-100 min-h-screen">
            <div className="blog-container">
                <div className="blog-card" style={{ padding: '48px' }}>
                    <Link
                        to="/blog"
                        style={{
                            display: 'inline-block',
                            marginBottom: '24px',
                            marginTop: '12px',
                            color: '#4f46e5',
                            textDecoration: 'none',
                            fontSize: '16px',
                            position: 'relative'
                        }}
                    >
                        <span style={{ 
                            textDecoration: 'underline',
                            paddingLeft: '20px'
                        }}>Back to Blog</span>
                        <span style={{ 
                            position: 'absolute',
                            left: '0px',
                            bottom: '0px',
                            fontSize: '18px'
                        }}>←</span>
                    </Link>
                    <h1 className="font-bold text-gray-900" style={{ fontSize: '42px', marginBottom: '20px' }}>{post.title}</h1>
                    {/* Adjust the margin-bottom (0px) below to increase/decrease the vertical gap between the date and the blog content */}
                    <div style={{ marginBottom: '0px' }}>
                        <div style={{ color: '#16a34a', marginBottom: '4px' }}>By {post.author || 'Amitesh Gupta'}</div>
                        <div style={{ color: '#4f46e5' }}>{post.date || 'August 13, 2025, 04:27 PM IST'}</div>
                    </div>
                    {/* Blog Image */}
                    {post.image && (
                        <div style={{ textAlign: 'center', marginBottom: '40px' }}>
                            <div className={`blog-frame-wrapper blog-frame-${post.id}`} style={{ margin: '0 auto' }}>
                                <img
                                    src={process.env.PUBLIC_URL + post.image}
                                    alt={post.title}
                                    className="blog-image"
                                    style={{ display: 'block' }}
                                />
                            </div>
                        </div>
                    )}
                    {/* Adjust the max-width (400px) below to increase/decrease the width of the blog content; removed mx-auto for extreme left alignment */}
                    <article className="text-gray-700" style={{ maxWidth: '800px', fontSize: '18px', lineHeight: '1.7', margin: '0 auto', textAlign: 'justify', fontFamily: 'Georgia, "Times New Roman", serif' }}>
                        {post.content.trim().split('\n').map((paragraph, index) => (
                            <p key={index} style={{ marginBottom: '20px', textIndent: '2em' }}>{paragraph}</p>
                        ))}
                    </article>
                </div>
            </div>
        </section>
    );
}