import React, { useState, useEffect, useRef } from 'react';
import { useLocation, Link } from 'react-router-dom';
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
import '../App.css';

// Register Chart.js components
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

export default function Result() {
  const [results, setResults] = useState([]);
  const { state } = useLocation();
  const title = state?.title; // Rely on dynamic title from Quiz.js
  const chartRef = useRef(null);
  const sectionRef = useRef(null);

  useEffect(() => {
    const storedResults = JSON.parse(localStorage.getItem('results') || '[]');
    setResults(storedResults);
    // Remove auto-scroll to prevent page jumping
  }, []);

  const last = results.length > 0 ? results[results.length - 1] : null;

  // Chart data configuration with dynamic total (number of questions)
  const data = {
    labels: [''],
    datasets: [
      {
        label: 'Your Marks',
        data: last ? [last.score] : [0], // First bar: marks obtained by user
        backgroundColor: 'rgba(75, 192, 192, 0.6)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1,
      },
      {
        label: 'Total Marks',
        data: last ? [last.total] : [0], // Second bar: number of questions
        backgroundColor: 'rgba(255, 99, 132, 0.6)',
        borderColor: 'rgba(255, 99, 132, 1)',
        borderWidth: 1,
      },
    ],
  };

  // Dynamically calculate step size for 10 parts
  const stepSize = last ? last.total / 10 : 1;
  const maxValue = last ? last.total : 10;

  // Chart options with dynamic scale
  const options = {
    responsive: true,
    plugins: {
      legend: { display: false }, // Hide legend since we'll use custom labels
      tooltip: { enabled: true },
    },
    scales: {
      y: {
        beginAtZero: true,
        max: maxValue, // Dynamic max based on total questions
        ticks: {
          stepSize: stepSize, // Dynamic step size for 10 equal parts
          color: 'black',
          font: {
            weight: 'bold',
            size: 12
          },
          padding: 8
        },
        grid: {
          color: 'rgba(0, 0, 0, 0.1)'
        }
      },
      x: {
        ticks: { display: false }, // Hide x-axis labels since we only have one category
      },
    },
  };

  return (
    <section ref={sectionRef} style={{ padding: 40, position: 'relative' }}>
      <h2>Result — {title || 'Unknown Test'}</h2> {/* Fallback only for display */}
      {!last && <p>No recent result found (take a demo test first).</p>}
      {last && (
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
          <div className="card">
            <h3>Your Score: {last.score} / {last.total}</h3>
            <p>
              Time taken: {Math.floor(last.timeTaken / 60)}min {last.timeTaken % 60}sec
            </p>
          </div>
          <div className="card">
            <h3>Performance Graph</h3>
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
            <Bar ref={chartRef} data={data} options={options} />
          </div>
        </div>
      )}
      {last && (
        <Link to="/review" state={{ result: last, title }}>
          <button className="btn btn-purple review-button">Review Your Response</button>
        </Link>
      )}
    </section>
  );
}