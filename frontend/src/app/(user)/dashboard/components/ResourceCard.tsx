import React from 'react';
import styles from './ResourceCard.module.css';

export interface Resource {
  id: number;
  type: 'course' | 'interview' | 'article';
  title: string;
  description: string;
  icon: React.ReactNode;
}

interface ResourceCardProps {
  resource: Resource;
}

const ResourceCard: React.FC<ResourceCardProps> = ({ resource }) => {
  return (
    <div className={styles.card}>
      <div className={styles.iconWrapper}>
        {resource.icon}
      </div>
      <div className={styles.content}>
        <h4 className={styles.title}>{resource.title}</h4>
        <p className={styles.description}>{resource.description}</p>
      </div>
      <button className={styles.actionButton}>Start Learning</button>
    </div>
  );
};

export default ResourceCard;
