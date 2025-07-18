"use client";
import React, { useState } from "react";
import styles from './JobSearchSection.module.css';
import JobCard, { Job } from './JobCard';

const MOCK_JOBS: Job[] = [
  { id: 1, title: 'Senior Frontend Developer', company: 'Innovate Inc.', location: 'Remote', skills: ['React', 'TypeScript', 'Next.js'] },
  { id: 2, title: 'AI/ML Engineer', company: 'DataDriven Co.', location: 'San Francisco, CA', skills: ['Python', 'TensorFlow', 'PyTorch'] },
  { id: 3, title: 'UX/UI Designer', company: 'Creative Solutions', location: 'New York, NY', skills: ['Figma', 'Sketch', 'Adobe XD'] },
  { id: 4, title: 'Data Scientist', company: 'DataWiz', location: 'Berlin', skills: ['Python', 'Pandas', 'Machine Learning'] },
  { id: 5, title: 'Product Manager', company: 'TechCorp', location: 'London', skills: ['Agile', 'Scrum', 'Leadership'] },
];

const MOCK_TRENDS = {
  skills: ['AI', 'TypeScript', 'React', 'Machine Learning', 'Cloud'],
  companies: ['OpenAI', 'TechCorp', 'DataDriven Co.', 'Innovate Inc.']
};

const MOCK_SAVED_SEARCHES = [
  'Remote AI Jobs',
  'Frontend London',
  'Product Manager Europe'
];

const JobSearchSection = () => {
  const [query, setQuery] = useState("");
  const [showFilters, setShowFilters] = useState(false);
  const [savedSearches] = useState(MOCK_SAVED_SEARCHES);
  const [jobs, setJobs] = useState(MOCK_JOBS);
  const [hiddenJobs, setHiddenJobs] = useState<number[]>([]);
  const [savedJobs, setSavedJobs] = useState<number[]>([]);
  const [suggestions, setSuggestions] = useState<string[]>([]);
  const [filters, setFilters] = useState({ location: '', salary: '', type: '', industry: '', experience: '' });

  // Simple auto-suggest logic
  function handleQueryChange(e: React.ChangeEvent<HTMLInputElement>) {
    const val = e.target.value;
    setQuery(val);
    if (val.length > 1) {
      setSuggestions(MOCK_JOBS.filter(j => j.title.toLowerCase().includes(val.toLowerCase()) || j.company.toLowerCase().includes(val.toLowerCase())).map(j => j.title));
    } else {
      setSuggestions([]);
    }
  }

  function handleFilterChange(e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) {
    setFilters({ ...filters, [e.target.name]: e.target.value });
  }

  function handleSaveJob(id: number) {
    setSavedJobs(jobs => [...jobs, id]);
  }
  function handleHideJob(id: number) {
    setHiddenJobs(jobs => [...jobs, id]);
  }

  // Filter jobs for display
  const visibleJobs = jobs.filter(j => !hiddenJobs.includes(j.id));

  return (
    <section className={styles.jobSearchContainer}>
      <div className={styles.header}>
        <h2>Job Search</h2>
        <p>Personalized recommendations & powerful search tools</p>
      </div>

      {/* Search and Filters */}
      <div className={styles.searchFilterBar}>
        <div style={{position: 'relative', flex: 1}}>
          <input
            type="text"
            placeholder="Search by keyword, role, or company..."
            className={styles.searchBar}
            value={query}
            onChange={handleQueryChange}
          />
          {suggestions.length > 0 && (
            <ul className={styles.suggestionsList}>
              {suggestions.map((s, i) => (
                <li key={i} onClick={() => setQuery(s)}>{s}</li>
              ))}
            </ul>
          )}
        </div>
        <button className={styles.filterButton} onClick={() => setShowFilters(f => !f)}>Advanced Filters</button>
      </div>
      {showFilters && (
        <div className={styles.advancedFilters}>
          <input name="location" placeholder="Location" value={filters.location} onChange={handleFilterChange} />
          <input name="salary" placeholder="Salary" value={filters.salary} onChange={handleFilterChange} />
          <select name="type" value={filters.type} onChange={handleFilterChange}>
            <option value="">Job Type</option>
            <option value="full-time">Full Time</option>
            <option value="part-time">Part Time</option>
            <option value="contract">Contract</option>
            <option value="internship">Internship</option>
          </select>
          <input name="industry" placeholder="Industry" value={filters.industry} onChange={handleFilterChange} />
          <input name="experience" placeholder="Experience (years)" value={filters.experience} onChange={handleFilterChange} />
        </div>
      )}

      {/* Saved Searches */}
      <div className={styles.savedSearches}>
        <h4>Saved Searches</h4>
        <ul>
          {savedSearches.map((s, i) => <li key={i}>{s}</li>)}
        </ul>
      </div>

      {/* AI Trends */}
      <div className={styles.trendsSection}>
        <h4>AI Trends</h4>
        <div><b>Emerging Skills:</b> {MOCK_TRENDS.skills.join(", ")}</div>
        <div><b>Top Companies:</b> {MOCK_TRENDS.companies.join(", ")}</div>
      </div>

      {/* For You Section */}
      <div className={styles.forYouSection}>
        <h3>For You: Top AI Matches</h3>
        <p style={{fontSize: '0.95em', color: '#666'}}>These jobs are recommended based on your profile, skills, and recent searches.</p>
        <div className={styles.jobGrid}>
          {visibleJobs.map(job => (
            <JobCard
              key={job.id}
              job={job}
              onSave={() => handleSaveJob(job.id)}
              onHide={() => handleHideJob(job.id)}
              isSaved={savedJobs.includes(job.id)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default JobSearchSection;
