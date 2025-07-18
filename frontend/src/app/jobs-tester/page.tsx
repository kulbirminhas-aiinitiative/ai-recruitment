"use client";
import { useState } from "react";

export default function JobsTester() {
  const [jobs, setJobs] = useState(null);
  const [jobId, setJobId] = useState("");
  const [singleJob, setSingleJob] = useState(null);
  const [error, setError] = useState("");

  const apiBase = "http://localhost:4000/api/jobs";

  const fetchJobs = async () => {
    setError("");
    setSingleJob(null);
    try {
      const res = await fetch(apiBase);
      if (!res.ok) throw new Error("Failed to fetch jobs");
      setJobs(await res.json());
    } catch (e) {
      setError(e.message);
    }
  };

  const fetchJobById = async () => {
    setError("");
    setJobs(null);
    try {
      const res = await fetch(`${apiBase}/${jobId}`);
      if (!res.ok) throw new Error("Job not found");
      setSingleJob(await res.json());
    } catch (e) {
      setError(e.message);
    }
  };

  return (
    <div style={{ maxWidth: 600, margin: "2rem auto", padding: 24, border: "1px solid #eee", borderRadius: 8, fontFamily: "sans-serif" }}>
      <h2>Jobs API Tester</h2>
      <button onClick={fetchJobs} style={{ marginRight: 8 }}>Fetch All Jobs</button>
      <input
        type="number"
        placeholder="Job ID"
        value={jobId}
        onChange={e => setJobId(e.target.value)}
        style={{ width: 80, marginRight: 8 }}
      />
      <button onClick={fetchJobById}>Fetch Job by ID</button>
      {error && <div style={{ color: "red", marginTop: 16 }}>{error}</div>}
      {jobs && (
        <div style={{ marginTop: 24 }}>
          <h3>All Jobs</h3>
          <ul>
            {jobs.map(job => (
              <li key={job.id} style={{ marginBottom: 12 }}>
                <b>{job.title}</b> at {job.company} ({job.location})<br />
                <span style={{ color: "#555" }}>{job.description}</span>
              </li>
            ))}
          </ul>
        </div>
      )}
      {singleJob && (
        <div style={{ marginTop: 24 }}>
          <h3>Job Details</h3>
          <b>{singleJob.title}</b> at {singleJob.company} ({singleJob.location})<br />
          <span style={{ color: "#555" }}>{singleJob.description}</span>
        </div>
      )}
    </div>
  );
}
