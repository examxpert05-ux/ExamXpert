import React, { useEffect, useCallback } from 'react';

export default function Timer({ timeLeft, setTimeLeft, submitted, onTimeout }) {
    const handleTimeout = useCallback(() => {
        onTimeout();
    }, [onTimeout]);

    useEffect(() => {
        if (submitted || timeLeft <= 0) {
            if (timeLeft <= 0) handleTimeout();
            return;
        }
        const timer = setInterval(() => {
            setTimeLeft(t => t - 1);
        }, 1000);
        return () => clearInterval(timer);
    }, [timeLeft, submitted, setTimeLeft, handleTimeout]);

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