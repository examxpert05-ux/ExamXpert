import React from 'react';
import { Link } from 'react-router-dom';
import { t } from '../utils/translations.js';

export default function LandingPage({ lang }) {
  const isMobile = window.innerWidth <= 768;
  
  return (
    <div style={{ textAlign: 'center', padding: isMobile ? '40px 16px' : '60px 20px' }}>
      <div style={{ maxWidth: 800, margin: '0 auto' }}>
        <h1 style={{ 
          fontSize: isMobile ? '2rem' : '3rem', 
          fontWeight: 'bold', 
          color: '#1a202c', 
          marginBottom: 20,
          lineHeight: 1.2
        }}>
          {t('welcome', lang) || 'Welcome to ExamXpert'}
        </h1>
        <p style={{ 
          fontSize: isMobile ? '1rem' : '1.2rem', 
          color: '#4a5568', 
          marginBottom: 40, 
          lineHeight: 1.6,
          padding: isMobile ? '0 10px' : '0'
        }}>
          {t('landingDescription', lang) || 'Your ultimate platform for online examinations and skill assessment. Take tests, track progress, and excel in your learning journey.'}
        </p>
        
        <div style={{ 
          display: 'flex', 
          gap: isMobile ? 15 : 20, 
          justifyContent: 'center', 
          flexWrap: 'wrap', 
          marginBottom: isMobile ? 40 : 60,
          flexDirection: isMobile ? 'column' : 'row',
          alignItems: 'center'
        }}>
          <Link to="/home">
            <button style={{
              background: '#0b72ff',
              color: '#fff',
              padding: isMobile ? '12px 24px' : '15px 30px',
              borderRadius: 8,
              border: 'none',
              cursor: 'pointer',
              fontSize: isMobile ? '1rem' : '1.1rem',
              fontWeight: '600',
              width: isMobile ? '200px' : 'auto'
            }}>
              {t('getStarted', lang) || 'Get Started'}
            </button>
          </Link>
          
          <Link to="/auth">
            <button style={{
              background: 'transparent',
              color: '#0b72ff',
              padding: isMobile ? '12px 24px' : '15px 30px',
              borderRadius: 8,
              border: '2px solid #0b72ff',
              cursor: 'pointer',
              fontSize: isMobile ? '1rem' : '1.1rem',
              fontWeight: '600',
              width: isMobile ? '200px' : 'auto'
            }}>
              {t('loginSignup', lang)}
            </button>
          </Link>
        </div>

        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: isMobile ? '1fr' : 'repeat(3, 1fr)', 
          gap: isMobile ? 20 : 30, 
          marginTop: 40 
        }}>
          <div style={{ 
            padding: isMobile ? 20 : 30, 
            background: '#fff', 
            borderRadius: 12, 
            boxShadow: '0 4px 12px rgba(0,0,0,0.1)' 
          }}>
            <h3 style={{ color: '#2d3748', marginBottom: 15, fontSize: isMobile ? '1.1rem' : '1.25rem' }}>
              {t('takeTests', lang) || 'Take Tests'}
            </h3>
            <p style={{ color: '#718096', fontSize: isMobile ? '0.9rem' : '1rem' }}>
              {t('takeTestsDesc', lang) || 'Access a wide variety of practice tests and assessments'}
            </p>
          </div>
          
          <div style={{ 
            padding: isMobile ? 20 : 30, 
            background: '#fff', 
            borderRadius: 12, 
            boxShadow: '0 4px 12px rgba(0,0,0,0.1)' 
          }}>
            <h3 style={{ color: '#2d3748', marginBottom: 15, fontSize: isMobile ? '1.1rem' : '1.25rem' }}>
              {t('trackProgress', lang) || 'Track Progress'}
            </h3>
            <p style={{ color: '#718096', fontSize: isMobile ? '0.9rem' : '1rem' }}>
              {t('trackProgressDesc', lang) || 'Monitor your performance and improvement over time'}
            </p>
          </div>
          
          <div style={{ 
            padding: isMobile ? 20 : 30, 
            background: '#fff', 
            borderRadius: 12, 
            boxShadow: '0 4px 12px rgba(0,0,0,0.1)' 
          }}>
            <h3 style={{ color: '#2d3748', marginBottom: 15, fontSize: isMobile ? '1.1rem' : '1.25rem' }}>
              {t('expertReview', lang) || 'Expert Review'}
            </h3>
            <p style={{ color: '#718096', fontSize: isMobile ? '0.9rem' : '1rem' }}>
              {t('expertReviewDesc', lang) || 'Get detailed analysis and feedback on your answers'}
            </p>
          </div>
        </div>

        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr', 
          gap: isMobile ? 20 : 30, 
          marginTop: isMobile ? 40 : 60 
        }}>
          <div style={{ 
            padding: isMobile ? 20 : 30, 
            background: '#fff', 
            borderRadius: 12, 
            boxShadow: '0 4px 12px rgba(0,0,0,0.1)' 
          }}>
            <h3 style={{ color: '#2d3748', marginBottom: 15, fontSize: isMobile ? '1.1rem' : '1.25rem' }}>
              Features
            </h3>
            <ul style={{ color: '#2d3748', fontSize: isMobile ? '0.9rem' : '1rem', textAlign: 'left', paddingLeft: 20, margin: 0 }}>
              <li style={{ marginBottom: 8 }}>Real-exam like interface</li>
              <li style={{ marginBottom: 8 }}>Timer, Mark for Review, Section Navigation</li>
              <li style={{ marginBottom: 8 }}>Performance Graphs</li>
            </ul>
          </div>
          
          <div style={{ 
            padding: isMobile ? 20 : 30, 
            background: '#fff', 
            borderRadius: 12, 
            boxShadow: '0 4px 12px rgba(0,0,0,0.1)' 
          }}>
            <h3 style={{ color: '#2d3748', marginBottom: 15, fontSize: isMobile ? '1.1rem' : '1.25rem' }}>
              Why ExamXpert
            </h3>
            <p style={{ color: '#2d3748', fontSize: isMobile ? '0.9rem' : '1rem', textAlign: 'left' }}>
              Personalised practice, secure tests, and insightful analytics.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}