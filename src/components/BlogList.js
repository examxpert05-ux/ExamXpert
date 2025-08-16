import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { t } from '../utils/translations.js';
import blogData from '../config/blogData';
import BlogPost from './BlogPost';
import '../App.css';

export default function BlogList({ lang = 'en' }) {
    const { id } = useParams();
    const [showScrollTop, setShowScrollTop] = useState(false);
    const isMobile = window.innerWidth <= 768;

    useEffect(() => {
        const handleScroll = () => {
            setShowScrollTop(window.scrollY > 300);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    if (id) {
        const post = blogData.find(post => post.id === parseInt(id));
        return <BlogPost post={post} lang={lang} />;
    }

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <section className="px-6 bg-gray-100 min-h-screen" style={{ paddingTop: isMobile ? '20px' : '40px' }}>
            <div className="blog-container">
                <h2 className="font-bold text-gray-800 text-center" style={{ fontSize: isMobile ? '28px' : '48px', marginBottom: isMobile ? '24px' : '40px' }}>ExamXpert {t('blogTitle', lang)}</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3" style={{ gap: isMobile ? '24px' : '48px' }}>
                    {blogData.map(post => (
                        <div key={post.id} className="blog-card hover:shadow-xl transition-shadow" style={{ padding: isMobile ? '16px' : '32px' }}>
                            <h3 className="font-semibold text-gray-800" style={{ fontSize: isMobile ? '18px' : '28px', marginBottom: isMobile ? '8px' : '16px' }}>{lang === 'hi' ? post.hindiTitle : post.title}</h3>
                            <p className="text-gray-600" style={{ fontSize: isMobile ? '14px' : '18px', marginBottom: isMobile ? '12px' : '20px' }}>{lang === 'hi' ? post.hindiExcerpt : post.excerpt}</p>
                            {post.image && (
                                <div className="mb-4" style={{ marginBottom: isMobile ? '8px' : '16px' }}>
                                    <img
                                        src={process.env.PUBLIC_URL + post.image}
                                        alt={lang === 'hi' ? post.hindiTitle : post.title}
                                        className="blog-image-thumbnail"
                                        style={{ height: isMobile ? '120px' : '150px' }}
                                    />
                                </div>
                            )}
                            <Link to={`/blog/${post.id}`} className="blog-btn" style={{ fontSize: isMobile ? '14px' : '16px', padding: isMobile ? '6px 12px' : '8px 16px' }}>
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