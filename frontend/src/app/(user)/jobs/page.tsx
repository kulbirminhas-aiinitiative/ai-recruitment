"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { apiRequest } from "../../lib/api";
import styles from "./jobs.module.css";
import Image from "next/image";

export default function JobsPage() {
  const [jobs, setJobs] = useState<any[]>([]);
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function fetchJobs(search = "") {
    setLoading(true);
    setError("");
    try {
      const data = await apiRequest(`/api/jobs${search ? `?query=${encodeURIComponent(search)}` : ""}`);
      setJobs(data);
    } catch (err: any) {
      setError("Failed to load jobs");
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchJobs();
  }, []);

  function handleSearch(e: React.FormEvent) {
    e.preventDefault();
    fetchJobs(query);
  }

  return (
    <div className={styles.jobsPage}>
      <div className={styles.jobsHeader}>
        <Image src="/job-search.svg" alt="Job Search" width={48} height={48} />
        <h2>Job Search</h2>
      </div>
      <form onSubmit={handleSearch} className={styles.searchBar}>
        <input
          type="text"
          placeholder="Search jobs by title or company"
          value={query}
          onChange={e => setQuery(e.target.value)}
        />
        <button type="submit">Search</button>
      </form>
      {loading && <div className={styles.info}>Loading jobs...</div>}
      {error && <div className={styles.error}>{error}</div>}
      <div className={styles.jobGrid}>
        {jobs.map(job => (
          <div key={job.id} className={styles.jobCard}>
            <div className={styles.jobCardHeader}>
              <Image src="/company.svg" alt="Company" width={32} height={32} />
              <div>
                <h3>{job.title}</h3>
                <div className={styles.company}>{job.company}</div>
              </div>
            </div>
            <div className={styles.location}><b>Location:</b> {job.location}</div>
            <div className={styles.description}>{job.description}</div>
            <Link className={styles.detailsLink} href={`/jobs/${job.id}`}>View Details</Link>
          </div>
        ))}
      </div>
      {jobs.length === 0 && !loading && <div className={styles.info}>No jobs found.</div>}
    </div>
  );
}

