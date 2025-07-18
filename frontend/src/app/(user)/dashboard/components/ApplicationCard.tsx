import React from 'react';
import styles from './ApplicationCard.module.css';

export type ApplicationStatus = 'Applied' | 'Under Review' | 'Interview' | 'Offer' | 'Rejected';

export interface Application {
  id: string;
  jobTitle: string;
  company: string;
  dateApplied: string;
  status: ApplicationStatus;
  aiInsight: string;
  nextStep: string;
}

const ApplicationCard: React.FC<{ application: Application }> = ({ application }) => {
  return (
    <div className={`${styles.card} ${styles[application.status.toLowerCase().replace(' ', '')]}`}>
      <div className={styles.header}>
        <h3>{application.jobTitle}</h3>
        <span className={styles.company}>{application.company}</span>
      </div>
      <div className={styles.body}>
        <p><strong>Date Applied:</strong> {application.dateApplied}</p>
        <p><strong>Status:</strong> <span className={styles.status}>{application.status}</span></p>
        <p><strong>Next Step:</strong> {application.nextStep}</p>
        <p className={styles.aiInsight}><strong>AI Insight:</strong> {application.aiInsight}</p>
      </div>
      <div className={styles.actions}>
        <button>View Details</button>
        <button>Withdraw</button>
      </div>
    </div>
  );
};

export default ApplicationCard;
