'use client';

import React from 'react';
import styles from './LearningSection.module.css';
import ResourceCard from './ResourceCard';
import { BookOpen, Mic, FileText } from 'lucide-react';

const LearningSection = () => {
  // Mock data for demonstration
  const recommendedResources = [
    { id: 1, type: 'course', title: 'Advanced TypeScript for Modern React', description: 'Master TypeScript to build scalable, enterprise-level applications.', icon: <BookOpen size={24} /> },
    { id: 2, type: 'interview', title: 'AI Mock Interview: Behavioral', description: 'Practice your answers to common behavioral questions with our AI interviewer.', icon: <Mic size={24} /> },
    { id: 3, type: 'article', title: 'Optimizing Your CV for ATS', description: 'Learn how to tailor your resume to pass through Applicant Tracking Systems.', icon: <FileText size={24} /> },
  ];

  return (
    <section className={styles.learningContainer}>
      <div className={styles.header}>
        <h2>Skill Development & Interview Prep</h2>
        <p>Empower your job search with AI-driven learning and preparation.</p>
      </div>

      <div className={styles.contentGrid}>
        {/* Main Recommendations */}
        <div className={styles.recommendations}>
          <h3>Recommended for You</h3>
          <p className={styles.subheading}>AI has identified these resources to help you reach your career goals.</p>
          <div className={styles.resourceList}>
            {recommendedResources.map(resource => (
              <ResourceCard key={resource.id} resource={resource} />
            ))}
          </div>
        </div>

        {/* Interview Success Kit */}
        <aside className={styles.interviewKit}>
          <h3>Interview Success Kit</h3>
          <ul>
            <li>Common Interview Questions</li>
            <li>Company-Specific Tips</li>
            <li>CV/Cover Letter Optimizer</li>
            <li>Practice Mock Interviews</li>
          </ul>
          <button className={styles.kitButton}>Explore Kit</button>
        </aside>
      </div>
    </section>
  );
};


export default LearningSection;
