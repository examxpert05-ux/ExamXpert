import React from 'react';
import './Quiz.css';

export default function Question({ question, index, selectedOption, onOptionChange, submitted }) {
    const optionLabels = ['A', 'B', 'C', 'D'];

    return (
        <div className="question" style={{ marginBottom: 12 }}>
            <p>
                <strong>Q{index + 1}:</strong> {question.question}
            </p>
            {question.options.map((option, optIndex) => {
                const isCorrect = submitted && option.optionId === question.answerId;
                const isUserAnswer = option.optionId === selectedOption;
                const className = `option ${submitted ? (isCorrect ? 'correct' : (isUserAnswer ? 'wrong' : '')) : ''}`;

                return (
                    <label key={option.optionId} className={className}>
                        <input
                            type="radio"
                            name={`q${index}`}
                            value={option.optionId}
                            checked={selectedOption === option.optionId}
                            onChange={() => onOptionChange(index, option.optionId)}
                            disabled={submitted}
                        />
                        <span className="option-label">{optionLabels[optIndex]}.</span> {option.text}
                    </label>
                );
            })}
        </div>
    );
}