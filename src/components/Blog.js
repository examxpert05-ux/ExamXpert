import React, { useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import blogData from '../data/blogData';
import '../App.css';

export default function Blog() {
    const { id } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    // If id is present, show single blog post
    if (id) {
        const post = blogData.find(post => post.id === parseInt(id));
        if (!post) {
            return (
                <section className="py-10 px-6 bg-gray-100 min-h-screen">
                    <div className="blog-container">
                        <h2 className="text-3xl font-bold text-gray-800 mb-6">Post Not Found</h2>
                        <p className="text-gray-600 mb-4">Sorry, the blog post you’re looking for doesn’t exist.</p>
                        <button
                            onClick={() => navigate('/blog')}
                            className="blog-btn"
                        >
                            Back to Blog
                        </button>
                    </div>
                </section>
            );
        }

        return (
            <section className="py-10 px-6 bg-gray-100 min-h-screen">
                <div className="blog-container">
                    <div className="blog-card p-8">
                        <button
                            onClick={() => navigate('/blog')}
                            style={{
                                background: 'none',
                                border: 'none',
                                color: '#4f46e5',
                                fontSize: '16px',
                                cursor: 'pointer',
                                marginBottom: '24px',
                                marginTop: '12px',
                                position: 'relative',
                                padding: 0
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
                        </button>
                        <h2 className="font-bold text-gray-900" style={{ fontSize: '42px', marginBottom: '20px' }}>{post.title}</h2>
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

    // Otherwise, show blog list
    return (
        <section className="px-6 bg-gray-100 min-h-screen" style={{ paddingTop: '40px' }}>
            <div className="blog-container">
                <h2 className="font-bold text-gray-800 text-center" style={{ fontSize: '48px', marginBottom: '40px' }}>ExamXpert Blogs</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3" style={{ gap: '48px' }}>
                    {blogData.map(post => (
                        <div key={post.id} className="blog-card hover:shadow-xl transition-shadow" style={{ padding: '32px' }}>
                            <h3 className="font-semibold text-gray-800" style={{ fontSize: '28px', marginBottom: '16px' }}>{post.title}</h3>
                            <p className="text-gray-600" style={{ fontSize: '18px', marginBottom: '20px' }}>{post.excerpt}</p>
                            {post.image && (
                                <div className="mb-4">
                                    <img
                                        src={process.env.PUBLIC_URL + post.image}
                                        alt={post.title}
                                        className="blog-image-thumbnail"
                                    />
                                </div>
                            )}
                            <Link to={`/blog/${post.id}`} className="blog-btn">
                                Read More
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}