import React, { useEffect } from 'react';

export default function StatsChart() {
    useEffect(() => {
        const c = document.getElementById('resultChart');
        if (!c) return;
        const ctx = c.getContext('2d');
        ctx.clearRect(0, 0, c.width, c.height);
        c.width = 400;
        c.height = 200;
        ctx.fillStyle = '#eef2ff';
        ctx.fillRect(0, 0, c.width, c.height);
        ctx.fillStyle = '#0b72ff';
        ctx.fillRect(50, 100, 40, 80);
        ctx.fillRect(120, 60, 40, 120);
        ctx.fillStyle = '#111';
        ctx.fillText('Demo Graph', 10, 12);
    }, []);

    return <canvas id="resultChart"></canvas>;
}