"use client";
import React from 'react';
import ApplicationCard, { Application } from './ApplicationCard';
import styles from './CurrentApplications.module.css';

const mockApplications: Application[] = [
  {
    id: '1',
    jobTitle: 'Senior Frontend Developer',
    company: 'Innovate Inc.',
    dateApplied: '2024-07-15',
    status: 'Interview',
    aiInsight: 'High match for React skills. Mention your state management experience.',
    nextStep: 'Second interview scheduled for 2024-07-22.',
  },
  {
    id: '2',
    jobTitle: 'UX/UI Designer',
    company: 'Creative Solutions',
    dateApplied: '2024-07-10',
    status: 'Under Review',
    aiInsight: 'Portfolio is strong in mobile design. Emphasize that.',
    nextStep: 'Awaiting feedback from hiring manager.',
  },
  {
    id: '3',
    jobTitle: 'Product Manager',
    company: 'DataDriven Co.',
    dateApplied: '2024-07-18',
    status: 'Applied',
    aiInsight: 'Follow up in 3-5 business days to show initiative.',
    nextStep: 'Application submitted. Awaiting review.',
  },
  {
    id: '4',
    jobTitle: 'Backend Engineer',
    company: 'ScaleFast',
    dateApplied: '2024-06-28',
    status: 'Rejected',
    aiInsight: 'Lacked specific experience with Kubernetes. Consider a certification.',
    nextStep: 'Application closed.',
  },
];

export default function CurrentApplications() {
  // TODO: Implement state and filtering logic
  const [applications, setApplications] = React.useState(mockApplications);
  const [filter, setFilter] = React.useState('All');

  const filteredApplications = applications.filter(app => 
    filter === 'All' || app.status === filter
  );

  return (
    <section className={styles.section}>
      <div className={styles.sectionHeader}>
        <h2>Current Applications</h2>
        <div className={styles.summaryBar}>
          <span><strong>Total:</strong> {applications.length}</span>
          <span><strong>Interviews:</strong> {applications.filter(a => a.status === 'Interview').length}</span>
        </div>
      </div>

      <div className={styles.filters}>
        <label>Filter by status: </label>
        <select onChange={(e) => setFilter(e.target.value)} value={filter}>
          <option>All</option>
          <option>Applied</option>
          <option>Under Review</option>
          <option>Interview</option>
          <option>Offer</option>
          <option>Rejected</option>
        </select>
      </div>

      <div className={styles.grid}>
        {filteredApplications.map(app => (
          <ApplicationCard key={app.id} application={app} />
        ))}
      </div>
    </section>
  );
}
