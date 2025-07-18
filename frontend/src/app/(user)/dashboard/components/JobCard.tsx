import React from 'react';
import styles from './JobCard.module.css';

export interface Job {
  id: number;
  title: string;
  company: string;
  location: string;
  skills: string[];
}

interface JobCardProps {
  job: Job;
  onSave?: () => void;
  onHide?: () => void;
  isSaved?: boolean;
}

const JobCard: React.FC<JobCardProps> = ({ job, onSave, onHide, isSaved }) => {
  return (
    <div className={styles.card}>
      <div className={styles.cardHeader}>
        <h4 className={styles.title}>{job.title}</h4>
        <p className={styles.company}>{job.company}</p>
        <p className={styles.location}>{job.location}</p>
      </div>
      <div className={styles.skillsContainer}>
        <p>Skills Matched:</p>
        <div className={styles.skills}>
          {job.skills.map(skill => (
            <span key={skill} className={styles.skillTag}>{skill}</span>
          ))}
        </div>
      </div>
      <div className={styles.cardActions}>
        <button className={styles.applyButton}>Apply Now</button>
        <button className={styles.saveButton} onClick={onSave} disabled={isSaved}>{isSaved ? 'Saved' : 'Save'}</button>
        <button className={styles.hideButton} onClick={onHide}>Hide</button>
      </div>
    </div>
  );
};

export default JobCard;
