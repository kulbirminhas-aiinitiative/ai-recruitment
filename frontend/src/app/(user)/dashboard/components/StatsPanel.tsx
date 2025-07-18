'use client';

import React from 'react';
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, PieChart, Pie, Cell, BarChart, Bar
} from 'recharts';
import styles from './StatsPanel.module.css';

// Mock data for the chart
const applicationData = [
  { week: 'Week 1', applications: 5 },
  { week: 'Week 2', applications: 8 },
  { week: 'Week 3', applications: 6 },
  { week: 'Week 4', applications: 12 },
  { week: 'Week 5', applications: 10 },
  { week: 'Week 6', applications: 15 },
];

const interviewRateData = [
  { name: 'Interviewed', value: 12 },
  { name: 'No Interview', value: 42 },
];

const responseRateData = [
  { name: 'Response', value: 25 },
  { name: 'No Response', value: 29 },
];

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

const timeToStageData = [
  { name: 'Time to Interview', days: 14, benchmark: 18 },
  { name: 'Time to Offer', days: 35, benchmark: 40 },
];

const StatsPanel = () => {
  return (
    <section className={styles.statsContainer}>
      <div className={styles.header}>
        <h2>Your Job Search Journey</h2>
        <p>Track your progress and gain valuable insights.</p>
      </div>
      <div className={styles.chartsGrid}>
        <div className={styles.chartWrapper}>
          <h3>Applications Over Time</h3>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={applicationData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="week" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="applications" stroke="#8884d8" activeDot={{ r: 8 }} />
            </LineChart>
          </ResponsiveContainer>
        </div>

        <div className={styles.chartWrapper}>
          <h3>Interview Rate</h3>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie data={interviewRateData} cx="50%" cy="50%" labelLine={false} outerRadius={80} fill="#8884d8" dataKey="value">
                {interviewRateData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </div>

        <div className={styles.chartWrapper}>
          <h3>Response Rate</h3>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie data={responseRateData} cx="50%" cy="50%" labelLine={false} outerRadius={80} fill="#8884d8" dataKey="value">
                {responseRateData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </div>

        <div className={styles.chartWrapper}>
          <h3>Time to Stage (Days)</h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={timeToStageData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="days" fill="#82ca9d" name="Your Average" />
              <Bar dataKey="benchmark" fill="#ccc" name="Benchmark" />
            </BarChart>
          </ResponsiveContainer>
        </div>

        <div className={styles.benchmarkCard}>
            <h4>AI Benchmark Insight</h4>
            <p>You're applying to 20% more jobs than the average for your role. Keep up the momentum!</p>
        </div>

      </div>
    </section>
  );
};

export default StatsPanel;
