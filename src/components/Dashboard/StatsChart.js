import React from 'react';
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

export default function StatsChart({ score, total }) {
  const data = {
    labels: [''],
    datasets: [
      {
        label: 'Your Marks',
        data: [score],
        backgroundColor: 'rgba(75, 192, 192, 0.6)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1,
      },
      {
        label: 'Total Marks',
        data: [total],
        backgroundColor: 'rgba(255, 99, 132, 0.6)',
        borderColor: 'rgba(255, 99, 132, 1)',
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: { display: false },
      tooltip: { enabled: true },
    },
    scales: {
      y: {
        beginAtZero: true,
        max: total,
        ticks: {
          stepSize: total / 10,
          color: 'black',
          font: { weight: 'bold', size: 12 },
          padding: 8
        },
        grid: { color: 'rgba(0, 0, 0, 0.1)' }
      },
      x: { ticks: { display: false } },
    },
  };

  return (
    <>
      <div style={{ display: 'flex', justifyContent: 'center', gap: 20, marginBottom: 10 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 5 }}>
          <div style={{ width: 16, height: 16, backgroundColor: 'rgba(75, 192, 192, 0.6)', border: '1px solid rgba(75, 192, 192, 1)' }}></div>
          <span style={{ fontSize: 14, fontWeight: 'bold' }}>Your Marks</span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 5 }}>
          <div style={{ width: 16, height: 16, backgroundColor: 'rgba(255, 99, 132, 0.6)', border: '1px solid rgba(255, 99, 132, 1)' }}></div>
          <span style={{ fontSize: 14, fontWeight: 'bold' }}>Total Marks</span>
        </div>
      </div>
      <Bar data={data} options={options} />
    </>
  );
}