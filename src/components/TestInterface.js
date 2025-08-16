import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { t } from '../utils/translations.js';
import { getTestById } from '../config/testData.js';
import bankQuestions from '../data/bankData.js';
import sscQuestions from '../data/sscData.js';
import upscQuestions from '../data/upscData.js';
import Timer from './Quiz/Timer.js';
import './Quiz/Quiz.css';
import '../App.css';

export default function TestInterface({ lang = 'en' }) {
  const navigate = useNavigate();
  const { id } = useParams();
  
  const isMobile = window.innerWidth <= 768;
  
  const getTestData = () => {
    const testInfo = getTestById(id);
    const questionSets = {
      't1': bankQuestions,
      't2': sscQuestions,
      't3': upscQuestions
    };
    return testInfo ? { ...testInfo, questions: questionSets[id] || [] } : { questions: [], title: 'Unknown Test', hindiTitle: 'अज्ञात परीक्षा' };
  };
  
  const testData = getTestData();
  const { questions, title, hindiTitle } = testData;
  const [cur, setCur] = useState(0);
  const [answers, setAnswers] = useState({});
  const [timeLeft, setTimeLeft] = useState(600); // 10 minutes
  const [showSubmitModal, setShowSubmitModal] = useState(false);
  const [fullScreen, setFullScreen] = useState(false);
  const [currentPage, setCurrentPage] = useState(0);
  const questionsPerPage = 10;

  function selectChoice(qid, choiceIndex) {
    const newAnswers = { ...answers, [qid]: choiceIndex };
    setAnswers(newAnswers);
    
    // Check if all questions are answered
    if (Object.keys(newAnswers).length === questions.length) {
      setTimeout(() => {
        setShowSubmitModal(true);
      }, 500);
    }
  }

  function handleSubmit() {
    let score = 0;
    const userAnswers = [];
    questions.forEach((q, i) => {
      if (answers[q.id] === q.answerId) score++;
      userAnswers.push(answers[q.id]);
    });
    const result = { score, total: questions.length, timeTaken: (600 - timeLeft) };
    
    const quizResponses = {
      questions: questions,
      answers: userAnswers,
      examId: id
    };
    localStorage.setItem('quizResponses', JSON.stringify(quizResponses));
    
    const rlist = JSON.parse(localStorage.getItem('results') || '[]');
    rlist.push(result);
    localStorage.setItem('results', JSON.stringify(rlist));
    navigate('/result', { state: { title } });
  }

  function showConfirmation() {
    setShowSubmitModal(true);
  }

  function confirmSubmit() {
    setShowSubmitModal(false);
    handleSubmit();
  }

  function cancelSubmit() {
    setShowSubmitModal(false);
  }

  return (
    <section style={{ padding: 20 }}>
      <div style={{ 
        position: 'fixed', 
        top: 64, 
        left: 0, 
        right: 0, 
        background: '#f7fafc', 
        zIndex: 999, 
        padding: '12px 20px',
        borderBottom: '1px solid #e5e7eb'
      }}>
        <div style={{ maxWidth: 1000, margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 12 }}>
          <h3 style={{ margin: 0 }}>{t('liveTest', lang)} — {lang === 'hi' ? hindiTitle : title}</h3>
          <Timer 
            timeLeft={timeLeft} 
            setTimeLeft={setTimeLeft} 
            submitted={false} 
            onTimeout={handleSubmit}
            lang={lang} 
          />
        </div>
      </div>

      {isMobile ? (
        <div style={{ marginTop: 80 }}>
        <div className="card" style={{ 
          padding: 12, 
          marginBottom: 12
        }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 12 }}>
            <h4 style={{ margin: 0 }}>{t('navigation', lang)}</h4>
            <label style={{ fontSize: 14 }}>
              <input 
                type="checkbox" 
                checked={fullScreen}
                onChange={(e) => setFullScreen(e.target.checked)}
              /> {t('fullScreen', lang)}
            </label>
          </div>
          
          <div style={{ marginBottom: 12, textAlign: 'center' }}>
            <span style={{ fontSize: 12 }}>
              {fullScreen 
                ? `${t('page', lang)} ${currentPage + 1}/${Math.ceil(questions.length / questionsPerPage)}`
                : `${t('page', lang)} ${Math.floor(cur / questionsPerPage) + 1}/${Math.ceil(questions.length / questionsPerPage)}`
              }
            </span>
          </div>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(6, 1fr)', gap: 6, marginBottom: 12 }}>
            {questions.map((q, i) => {
              const isAnswered = answers[q.id] !== undefined;
              const isCurrentQuestion = i === cur;
              return (
                <button
                  key={q.id}
                  onClick={() => {
                    if (fullScreen) {
                      setCurrentPage(Math.floor(i / questionsPerPage));
                    }
                    setCur(i);
                  }}
                  style={{
                    width: 40,
                    height: 40,
                    fontSize: 14,
                    borderRadius: 6,
                    background: isCurrentQuestion ? '#10b981' : (isAnswered ? '#0b72ff' : '#f1f5f9'),
                    color: (isCurrentQuestion || isAnswered) ? '#fff' : '#111',
                    border: isCurrentQuestion ? '2px solid #10b981' : (isAnswered ? '2px solid #0b72ff' : '2px solid #d1d5db'),
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontWeight: isCurrentQuestion ? 'bold' : 'normal'
                  }}
                >
                  {i + 1}
                </button>
              );
            })}
          </div>

        </div>
        
        <div className="card">
          {!fullScreen ? (
            // Single question view
            <>
              <h4>Q{cur + 1}. {lang === 'hi' ? questions[cur].hindiQuestion : questions[cur].question}</h4>
              <div style={{ display: 'grid', gap: 8, marginTop: 8 }}>
                {questions[cur].options.map((option) => (
                  <label
                    key={option.optionId}
                    className={`option ${answers[questions[cur].id] === option.optionId ? 'correct' : ''}`}
                  >
                    <input
                      type="radio"
                      name={'q' + questions[cur].id}
                      checked={answers[questions[cur].id] === option.optionId}
                      onChange={() => selectChoice(questions[cur].id, option.optionId)}
                    />
                    <span className="option-label">{lang === 'hi' ? option.hindiText : option.text}</span>
                  </label>
                ))}
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: 28 }}>
                <div style={{ display: 'flex', gap: 16 }}>
                  <button onClick={() => setCur(c => Math.max(0, c - 1))} className="btn">
                    {t('prev', lang)}
                  </button>
                  <button
                    onClick={() => setCur(c => Math.min(questions.length - 1, c + 1))}
                    className="btn btn-green"
                  >
                    {t('next', lang)}
                  </button>
                </div>
                <button onClick={showConfirmation} className="btn btn-red submit-button">
                  {t('submit', lang)}
                </button>
              </div>
            </>
          ) : (
            // Full screen view with pagination
            <>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 20 }}>
                <h4>{t('questions', lang)} {currentPage * questionsPerPage + 1} - {Math.min((currentPage + 1) * questionsPerPage, questions.length)}</h4>
                <div>
                  <button 
                    onClick={() => setCurrentPage(p => Math.max(0, p - 1))} 
                    disabled={currentPage === 0}
                    className="btn" 
                    style={{ marginRight: 8 }}
                  >
                    {t('previousPage', lang)}
                  </button>
                  <button 
                    onClick={() => setCurrentPage(p => Math.min(Math.ceil(questions.length / questionsPerPage) - 1, p + 1))} 
                    disabled={currentPage >= Math.ceil(questions.length / questionsPerPage) - 1}
                    className="btn btn-green"
                  >
                    {t('nextPage', lang)}
                  </button>
                </div>
              </div>
              <div style={{ display: 'grid', gap: 20 }}>
                {questions.slice(currentPage * questionsPerPage, (currentPage + 1) * questionsPerPage).map((question, index) => (
                  <div key={question.id} style={{ border: '1px solid #e5e7eb', padding: 16, borderRadius: 8 }}>
                    <h5>Q{currentPage * questionsPerPage + index + 1}. {lang === 'hi' ? question.hindiQuestion : question.question}</h5>
                    <div style={{ display: 'grid', gap: 8, marginTop: 8 }}>
                      {question.options.map((option) => (
                        <label
                          key={option.optionId}
                          className={`option ${answers[question.id] === option.optionId ? 'correct' : ''}`}
                        >
                          <input
                            type="radio"
                            name={'q' + question.id}
                            checked={answers[question.id] === option.optionId}
                            onChange={() => selectChoice(question.id, option.optionId)}
                          />
                          <span className="option-label">{lang === 'hi' ? option.hindiText : option.text}</span>
                        </label>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </>
          )}
          </div>
        </div>
      ) : (
        <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: 12, marginTop: 80 }}>
          <div className="card">
            {!fullScreen ? (
              <>
                <h4>Q{cur + 1}. {lang === 'hi' ? questions[cur].hindiQuestion : questions[cur].question}</h4>
                <div style={{ display: 'grid', gap: 8, marginTop: 8 }}>
                  {questions[cur].options.map((option) => (
                    <label
                      key={option.optionId}
                      className={`option ${answers[questions[cur].id] === option.optionId ? 'correct' : ''}`}
                    >
                      <input
                        type="radio"
                        name={'q' + questions[cur].id}
                        checked={answers[questions[cur].id] === option.optionId}
                        onChange={() => selectChoice(questions[cur].id, option.optionId)}
                      />
                      <span className="option-label">{lang === 'hi' ? option.hindiText : option.text}</span>
                    </label>
                  ))}
                </div>
                <div style={{ display: 'flex', gap: 16, marginTop: 28 }}>
                  <button onClick={() => setCur(c => Math.max(0, c - 1))} className="btn">
                    {t('prev', lang)}
                  </button>
                  <button
                    onClick={() => setCur(c => Math.min(questions.length - 1, c + 1))}
                    className="btn btn-green"
                  >
                    {t('next', lang)}
                  </button>
                </div>
              </>
            ) : (
              <>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 20 }}>
                  <h4>{t('questions', lang)} {currentPage * questionsPerPage + 1} - {Math.min((currentPage + 1) * questionsPerPage, questions.length)}</h4>
                  <div>
                    <button 
                      onClick={() => setCurrentPage(p => Math.max(0, p - 1))} 
                      disabled={currentPage === 0}
                      className="btn" 
                      style={{ marginRight: 8 }}
                    >
                      {t('previousPage', lang)}
                    </button>
                    <button 
                      onClick={() => setCurrentPage(p => Math.min(Math.ceil(questions.length / questionsPerPage) - 1, p + 1))} 
                      disabled={currentPage >= Math.ceil(questions.length / questionsPerPage) - 1}
                      className="btn btn-green"
                    >
                      {t('nextPage', lang)}
                    </button>
                  </div>
                </div>
                <div style={{ display: 'grid', gap: 20 }}>
                  {questions.slice(currentPage * questionsPerPage, (currentPage + 1) * questionsPerPage).map((question, index) => (
                    <div key={question.id} style={{ border: '1px solid #e5e7eb', padding: 16, borderRadius: 8 }}>
                      <h5>Q{currentPage * questionsPerPage + index + 1}. {lang === 'hi' ? question.hindiQuestion : question.question}</h5>
                      <div style={{ display: 'grid', gap: 8, marginTop: 8 }}>
                        {question.options.map((option) => (
                          <label
                            key={option.optionId}
                            className={`option ${answers[question.id] === option.optionId ? 'correct' : ''}`}
                          >
                            <input
                              type="radio"
                              name={'q' + question.id}
                              checked={answers[question.id] === option.optionId}
                              onChange={() => selectChoice(question.id, option.optionId)}
                            />
                            <span className="option-label">{lang === 'hi' ? option.hindiText : option.text}</span>
                          </label>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </>
            )}
          </div>
          <div className="card" style={{ 
            padding: 12, 
            position: 'sticky', 
            top: 100, 
            alignSelf: 'flex-start'
          }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 12 }}>
              <h4 style={{ margin: 0 }}>{t('navigation', lang)}</h4>
              <label style={{ fontSize: 14 }}>
                <input 
                  type="checkbox" 
                  checked={fullScreen}
                  onChange={(e) => setFullScreen(e.target.checked)}
                /> {t('fullScreen', lang)}
              </label>
            </div>
            
            <div style={{ marginBottom: 12, textAlign: 'center' }}>
              <span style={{ fontSize: 12 }}>
                {fullScreen 
                  ? `${t('page', lang)} ${currentPage + 1}/${Math.ceil(questions.length / questionsPerPage)}`
                  : `${t('page', lang)} ${Math.floor(cur / questionsPerPage) + 1}/${Math.ceil(questions.length / questionsPerPage)}`
                }
              </span>
            </div>
            
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(6, 1fr)', gap: 6 }}>
              {questions.map((q, i) => (
                <button
                  key={q.id}
                  onClick={() => {
                    if (fullScreen) {
                      setCurrentPage(Math.floor(i / questionsPerPage));
                    }
                    setCur(i);
                  }}
                  style={{
                    width: 40,
                    height: 40,
                    fontSize: 14,
                    borderRadius: 6,
                    background: answers[q.id] !== undefined ? '#0b72ff' : '#f1f5f9',
                    color: answers[q.id] !== undefined ? '#fff' : '#111',
                    border: answers[q.id] !== undefined ? '2px solid #0b72ff' : '2px solid #d1d5db',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}
                >
                  {i + 1}
                </button>
              ))}
            </div>
            
            <div style={{ display: 'flex', justifyContent: 'center', marginTop: 20 }}>
              <button onClick={showConfirmation} className="btn btn-red submit-button">
                {t('submit', lang)}
              </button>
            </div>
          </div>
        </div>
      )}
      
      {fullScreen && isMobile && (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: 20, gap: 12 }}>
          <button 
            onClick={() => setCurrentPage(p => Math.max(0, p - 1))} 
            disabled={currentPage === 0}
            className="btn" 
            style={{ marginRight: 8 }}
          >
            {t('previousPage', lang)}
          </button>
          <button 
            onClick={() => setCurrentPage(p => Math.min(Math.ceil(questions.length / questionsPerPage) - 1, p + 1))} 
            disabled={currentPage >= Math.ceil(questions.length / questionsPerPage) - 1}
            className="btn btn-green"
          >
            {t('nextPage', lang)}
          </button>
        </div>
      )}
      
      {showSubmitModal && (
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'rgba(0,0,0,0.5)',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          zIndex: 1001
        }}>
          <div style={{
            background: '#fff',
            padding: 24,
            borderRadius: 12,
            boxShadow: '0 10px 30px rgba(0,0,0,0.3)',
            textAlign: 'center',
            maxWidth: 400
          }}>
            <h3 style={{ marginBottom: 16 }}>{t('submitTest', lang)}</h3>
            <p style={{ marginBottom: 24, color: '#6b7280' }}>{t('submitConfirm', lang)}</p>
            <div style={{ display: 'flex', gap: 12, justifyContent: 'center' }}>
              <button 
                onClick={confirmSubmit}
                className="btn"
                style={{ padding: '12px 24px' }}
              >
                {t('yes', lang)}
              </button>
              <button 
                onClick={cancelSubmit}
                className="btn btn-green"
                style={{ padding: '12px 24px' }}
              >
                {t('no', lang)}
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}