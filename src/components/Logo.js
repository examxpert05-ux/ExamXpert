import React from 'react';
import { t } from '../utils/translations.js';

export default function ExamXpertLogo({ size = 40, lang = 'en' }) {
  const isMobile = window.innerWidth <= 768;
  
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
      <svg
        width={size}
        height={size}
        viewBox="0 0 64 64"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect rx="10" width="64" height="64" fill="#0b72ff" />
        <text
          x="50%"
          y="58%"
          textAnchor="middle"
          fontSize="30"
          fontWeight="700"
          fill="#fff"
          fontFamily="Arial"
        >
          E
        </text>
      </svg>
      <div style={{ lineHeight: 1 }}>
        <div style={{ fontWeight: 700 }}>ExamXpert</div>
        <div style={{ fontSize: 12, color: '#6b7280', marginTop: lang === 'hi' ? 6 : 4, whiteSpace: isMobile ? 'pre-line' : 'normal' }}>
          {isMobile ? 
            (lang === 'hi' ? 'आपकी परीक्षा,\nहमारी जिम्मेदारी' : 'Your Exam,\nOur Responsibility') : 
            t('logoTagline', lang)
          }
        </div>
      </div>
    </div>
  );
}