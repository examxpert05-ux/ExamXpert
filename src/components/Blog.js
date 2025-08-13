import React from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import blogData from '../data/blogData';
import '../App.css';

export default function Blog() {
    const { id } = useParams();
    const navigate = useNavigate();

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
                            className="blog-btn mb-6"
                        >
                            Back to Blog
                        </button>
                        <h2 className="text-3xl font-bold mb-4 text-gray-900">{post.title}</h2>
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

    // Otherwise, show blog list
    return (
        <section className="py-10 px-6 bg-gray-100 min-h-screen">
            <div className="blog-container">
                <h2 className="text-3xl font-bold text-gray-800 mb-20 text-center">ExamXpert Blog</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-20">
                    {blogData.map(post => (
                        <div key={post.id} className="blog-card p-6 hover:shadow-xl transition-shadow">
                            <h3 className="text-xl font-semibold text-gray-800 mb-3">{post.title}</h3>
                            <p className="text-gray-600 mb-4">{post.excerpt}</p>
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