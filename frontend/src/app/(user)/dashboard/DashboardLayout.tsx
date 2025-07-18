"use client";

import React, { useState } from 'react';
import DashboardMenu from './components/DashboardMenu';
import styles from './DashboardLayout.module.css';

interface DashboardLayoutProps {
  sections: {
    [key: string]: React.ReactNode;
  };
}

const sectionNames = [
  'Current Applications',
  'Job Search',
  'Your Job Search Stats',
  'Learning & Interview Prep',
  'Career Goals & Profile',
];

const DashboardLayout: React.FC<DashboardLayoutProps> = ({ sections }) => {
  const [activeSection, setActiveSection] = useState(sectionNames[0]);

  return (
    <div className={styles.dashboardContainer}>
      <DashboardMenu
        items={sectionNames}
        activeItem={activeSection}
        onItemClick={setActiveSection}
      />
      <main className={styles.contentArea}>
        {sections[activeSection]}
      </main>
    </div>
  );
};

export default DashboardLayout;
