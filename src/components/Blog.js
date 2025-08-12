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
                    <button
                        onClick={() => navigate('/blog')}
                        className="blog-btn mb-6"
                    >
                        Back to Blog
                    </button>
                    <div className="blog-card p-6">
                        <h2 className="text-3xl font-bold text-gray-800 mb-4">{post.title}</h2>
                        <p className="text-gray-600 mb-6">{post.excerpt}</p>
                        <div className="blog-prose text-gray-700">
                            {post.content.trim().split('\n').map((paragraph, index) => (
                                <p key={index} className="mb-4">{paragraph}</p>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        );
    }

    // Otherwise, show blog list
    return (
        <section className="py-10 px-6 bg-gray-100 min-h-screen">
            <div className="blog-container">
                <h2 className="text-3xl font-bold text-gray-800 mb-25 text-center">ExamXpert Blog</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12"> {/* Increased gap from 6 to 12 */}
                    {blogData.map(post => (
                        <div key={post.id} className="blog-card p-6 hover:shadow-xl transition-shadow">
                            <h3 className="text-xl font-semibold text-gray-800 mb-3">{post.title}</h3>
                            <p className="text-gray-600 mb-4">{post.excerpt}</p>
                            <Link to={`/blog/${post.id}`} className="blog-btn mb-6"> {/* Changed mb-15 to mb-6 */}
                                Read More
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}