import React, { useEffect, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { t } from '../utils/translations.js';
import blogData from '../data/blogData';
import '../App.css';

export default function Blog({ lang = 'en' }) {
    const { id } = useParams();
    const navigate = useNavigate();
    const [postLang, setPostLang] = useState(lang);
    const [showScrollTop, setShowScrollTop] = useState(false);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [id]);

    useEffect(() => {
        const handleScroll = () => {
            setShowScrollTop(window.scrollY > 300);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

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
                            {t('backToBlog', lang)}
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
                            }}>{t('backToBlog', lang)}</span>
                            <span style={{ 
                                position: 'absolute',
                                left: '0px',
                                bottom: '0px',
                                fontSize: '18px'
                            }}>←</span>
                        </button>
                        <div style={{ marginBottom: '20px' }}>
                            <button
                                onClick={() => setPostLang(postLang === 'en' ? 'hi' : 'en')}
                                style={{
                                    backgroundColor: '#4f46e5',
                                    color: 'white',
                                    padding: '8px 16px',
                                    borderRadius: '4px',
                                    border: 'none',
                                    cursor: 'pointer',
                                    fontSize: '16px'
                                }}
                            >
                                Switch to {postLang === 'en' ? 'Hindi' : 'English'}
                            </button>
                        </div>
                        <h2 className="font-bold text-gray-900" style={{ fontSize: '42px', marginBottom: '20px' }}>{postLang === 'hi' ? post.hindiTitle : post.title}</h2>
                        {/* Adjust the margin-bottom (0px) below to increase/decrease the vertical gap between the date and the blog content */}
                        <div style={{ marginBottom: '0px' }}>
                            <div style={{ color: '#16a34a', marginBottom: '4px' }}>By {postLang === 'hi' ? (post.hindiAuthor || 'अमितेश गुप्ता') : (post.author || 'Amitesh Gupta')}</div>
                            <div style={{ color: '#4f46e5' }}>{post.date || 'August 13, 2025, 04:27 PM IST'}</div>
                        </div>
                        {/* Blog Image */}
                        {post.image && (
                            <div style={{ textAlign: 'center', marginBottom: '40px' }}>
                                <div className={`blog-frame-${post.id}`} style={{ margin: '0 auto' }}>
                                    <img
                                        src={process.env.PUBLIC_URL + post.image}
                                        alt={postLang === 'hi' ? post.hindiTitle : post.title}
                                        className="blog-image"
                                        style={{ display: 'block', width: '100%', height: 'auto' }}
                                    />
                                </div>
                            </div>
                        )}
                        {/* Adjust the max-width (400px) below to increase/decrease the width of the blog content; removed mx-auto for extreme left alignment */}
                        <article className="text-gray-700" style={{ maxWidth: '800px', fontSize: '18px', lineHeight: '1.7', margin: '0 auto', textAlign: 'justify', fontFamily: 'Georgia, "Times New Roman", serif' }}>
                            {(postLang === 'hi' ? post.hindiContent || post.content : post.content).trim().split('\n').map((paragraph, index) => (
                                <p key={index} style={{ marginBottom: '20px', textIndent: '2em' }}>{paragraph}</p>
                            ))}
                        </article>
                    </div>
                </div>
                {showScrollTop && (
                    <button
                        onClick={scrollToTop}
                        style={{
                            position: 'fixed',
                            right: '20px',
                            bottom: '20px',
                            width: '50px',
                            height: '50px',
                            borderRadius: '50%',
                            background: '#0b72ff',
                            color: '#fff',
                            border: 'none',
                            cursor: 'pointer',
                            fontSize: '20px',
                            boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
                            zIndex: 1000,
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center'
                        }}
                        title="Scroll to top"
                    >
                        ↑
                    </button>
                )}
            </section>
        );
    }

    // Otherwise, show blog list
    return (
        <section className="px-6 bg-gray-100 min-h-screen" style={{ paddingTop: '40px' }}>
            <div className="blog-container">
                <h2 className="font-bold text-gray-800 text-center" style={{ fontSize: '48px', marginBottom: '40px' }}>ExamXpert {t('blogTitle', lang)}</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3" style={{ gap: '48px' }}>
                    {blogData.map(post => (
                        <div key={post.id} className="blog-card hover:shadow-xl transition-shadow" style={{ padding: '32px' }}>
                            <h3 className="font-semibold text-gray-800" style={{ fontSize: '28px', marginBottom: '16px' }}>{lang === 'hi' ? post.hindiTitle : post.title}</h3>
                            <p className="text-gray-600" style={{ fontSize: '18px', marginBottom: '20px' }}>{lang === 'hi' ? post.hindiExcerpt : post.excerpt}</p>
                            {post.image && (
                                <div className="mb-4">
                                    <img
                                        src={process.env.PUBLIC_URL + post.image}
                                        alt={lang === 'hi' ? post.hindiTitle : post.title}
                                        className="blog-image-thumbnail"
                                    />
                                </div>
                            )}
                            <Link to={`/blog/${post.id}`} className="blog-btn">
                                {t('readMore', lang)}
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
            {showScrollTop && (
                <button
                    onClick={scrollToTop}
                    style={{
                        position: 'fixed',
                        right: '20px',
                        bottom: '20px',
                        width: '50px',
                        height: '50px',
                        borderRadius: '50%',
                        background: '#0b72ff',
                        color: '#fff',
                        border: 'none',
                        cursor: 'pointer',
                        fontSize: '20px',
                        boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
                        zIndex: 1000,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center'
                    }}
                    title="Scroll to top"
                >
                    ↑
                </button>
            )}
        </section>
    );
}