import React, { useEffect } from 'react';

export default function Timer({ timeLeft, setTimeLeft, submitted, onTimeout }) {
    useEffect(() => {
        if (submitted) return;
        if (timeLeft <= 0) {
            onTimeout();
            return;
        }
        const timer = setInterval(() => {
            setTimeLeft(t => t - 1);
        }, 1000);
        return () => clearInterval(timer);
    }, [timeLeft, submitted, onTimeout, setTimeLeft]); // Added setTimeLeft

    const formatTime = (seconds) => {
        const m = Math.floor(seconds / 60);
        const s = seconds % 60;
        return `${m}:${s.toString().padStart(2, '0')}`;
    };

    return (
        <div>
            Time left: <strong>{formatTime(timeLeft)}</strong>
        </div>
    );
}