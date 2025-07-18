"use client";
import { useEffect, useState } from "react";

export default function MyApplicationsPage() {
  const [applications, setApplications] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const email = typeof window !== "undefined" ? localStorage.getItem("userEmail") : null;

  useEffect(() => {
    async function fetchApplications() {
      setLoading(true);
      setError("");
      try {
        if (!email) throw new Error("Not logged in");
        const res = await fetch(`http://localhost:4000/api/applications/user/${email}`);
        if (!res.ok) throw new Error(await res.text());
        setApplications(await res.json());
      } catch (err: any) {
        setError(err.message || "Failed to load applications");
      } finally {
        setLoading(false);
      }
    }
    if (email) fetchApplications();
  }, [email]);

  return (
    <div style={{maxWidth: 800, margin: "2rem auto", padding: 24}}>
      <h2>My Applications</h2>
      {loading && <div>Loading...</div>}
      {error && <div style={{color: "red"}}>{error}</div>}
      {applications.length > 0 ? (
        <table style={{width: "100%", borderCollapse: "collapse"}}>
          <thead>
            <tr>
              <th style={{borderBottom: "1px solid #eee", textAlign: "left"}}>Job ID</th>
              <th style={{borderBottom: "1px solid #eee", textAlign: "left"}}>CV</th>
              <th style={{borderBottom: "1px solid #eee", textAlign: "left"}}>Status</th>
              <th style={{borderBottom: "1px solid #eee", textAlign: "left"}}>Date</th>
            </tr>
          </thead>
          <tbody>
            {applications.map(app => (
              <tr key={app.id}>
                <td>{app.jobId}</td>
                <td>{app.cvFilename}</td>
                <td>{app.status}</td>
                <td>{new Date(app.date).toLocaleString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : !loading && <div>No applications found.</div>}
    </div>
  );
}

