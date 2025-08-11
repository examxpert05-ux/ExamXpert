import React from 'react';
import '../../App.css';

export default function Question({ question, index, selectedOption, onOptionChange, submitted }) {
    return (
        <div className="question-card">
            <p>
                <strong>Q{index + 1}:</strong> {question.question}
            </p>
            {question.options.map((option, i) => {
                const isSelected = selectedOption === option.optionId;
                const isCorrect = question.answerId === option.optionId;
                let labelClass = 'option';
                if (submitted) {
                    if (isCorrect) labelClass += ' correct';
                    else if (isSelected && !isCorrect) labelClass += ' wrong';
                }
                return (
                    <label key={i} className={labelClass}>
                        <input
                            type="radio"
                            name={`q${index}`}
                            value={option.optionId}
                            checked={isSelected}
                            onChange={() => onOptionChange(index, option.optionId)}
                            disabled={submitted}
                        />
                        {option.text}
                    </label>
                );
            })}
        </div>
    );
}