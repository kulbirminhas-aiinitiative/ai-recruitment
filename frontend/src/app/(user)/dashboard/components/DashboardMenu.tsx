"use client";

import React from 'react';
import styles from './DashboardMenu.module.css';

interface DashboardMenuProps {
  items: string[];
  activeItem: string;
  onItemClick: (item: string) => void;
}

const DashboardMenu: React.FC<DashboardMenuProps> = ({ items, activeItem, onItemClick }) => {
  return (
    <aside className={styles.menu}>
      <nav>
        <ul>
          {items.map(item => (
            <li key={item}>
              <button
                className={activeItem === item ? styles.active : ''}
                onClick={() => onItemClick(item)}
              >
                {item}
              </button>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
};

export default DashboardMenu;
