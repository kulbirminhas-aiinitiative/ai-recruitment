'use client';

import React from 'react';
import styles from './CareerProfileSection.module.css';
import { Target, DollarSign, MapPin, Edit } from 'lucide-react';

const CareerProfileSection = () => {
  const profileStrength = 85; // Mock data

  return (
    <section className={styles.profileContainer}>
      <div className={styles.header}>
        <h2>Career Goals & Profile</h2>
        <p>Define your aspirations and keep your profile optimized for success.</p>
      </div>

      <div className={styles.contentGrid}>
        {/* Left Side: Profile Details */}
        <div className={styles.profileDetails}>
          <div className={styles.formGroup}>
            <label>Target Role</label>
            <div className={styles.inputWithIcon}>
              <Target size={20} />
              <input type="text" defaultValue="Senior AI/ML Engineer" />
              <Edit size={16} className={styles.editIcon} />
            </div>
          </div>
          <div className={styles.formGroup}>
            <label>Desired Salary</label>
            <div className={styles.inputWithIcon}>
              <DollarSign size={20} />
              <input type="text" defaultValue="$150,000 - $180,000" />
              <Edit size={16} className={styles.editIcon} />
            </div>
          </div>
          <div className={styles.formGroup}>
            <label>Preferred Locations</label>
            <div className={styles.inputWithIcon}>
              <MapPin size={20} />
              <input type="text" defaultValue="Remote, San Francisco, New York" />
              <Edit size={16} className={styles.editIcon} />
            </div>
          </div>
        </div>

        {/* Right Side: Widgets */}
        <div className={styles.widgets}>
          <div className={styles.widgetCard}>
            <h4>Profile Strength</h4>
            <div className={styles.strengthMeter}>
              <div className={styles.strengthBar} style={{ width: `${profileStrength}%` }}>
                {profileStrength}%
              </div>
            </div>
            <p>Next step: Add more projects to your portfolio.</p>
          </div>

          <div className={styles.widgetCard}>
            <h4>AI Suggestions</h4>
            <p>Consider adding 'Agile Methodology' to your skills for Project Manager roles.</p>
          </div>
        </div>
      </div>
    </section>
  );
};


export default CareerProfileSection;
