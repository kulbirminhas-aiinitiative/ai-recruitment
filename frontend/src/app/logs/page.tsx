"use client";

import { useLogs } from "../components/LogContext";
import { useEffect, useState } from "react";

export default function LogsPage() {
  const { logs: frontendLogs } = useLogs();
  const [backendLogs, setBackendLogs] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    fetch(process.env.NEXT_PUBLIC_API_URL + "/api/logs")
      .then(res => res.json())
      .then(setBackendLogs)
      .catch(() => setError("Could not fetch backend logs."))
      .finally(() => setLoading(false));
  }, []);

  return (
    <div style={{maxWidth: 900, margin: "2rem auto", padding: 24}}>
      <h1>Website Logs (Errors & Warnings)</h1>

      <h2>Frontend (Client) Logs</h2>
      {frontendLogs.length === 0 ? (
        <p>No frontend logs yet. Errors and warnings will appear here.</p>
      ) : (
        <ul style={{listStyle: "none", padding: 0}}>
          {frontendLogs.map((log, i) => (
            <li key={i} style={{
              background: log.type === "error" ? "#fee2e2" : log.type === "warn" ? "#fef9c3" : "#e0e7ff",
              color: log.type === "error" ? "#b91c1c" : log.type === "warn" ? "#92400e" : "#1e40af",
              border: "1px solid #ddd", borderRadius: 8, margin: "12px 0", padding: 12
            }}>
              <b>[{log.type.toUpperCase()}]</b> {log.timestamp}<br/>
              <span style={{whiteSpace: "pre-wrap"}}>{log.message}</span>
            </li>
          ))}
        </ul>
      )}

      <h2 style={{marginTop: 40}}>Backend (Server) Logs</h2>
      {loading ? (
        <p>Loading backend logs...</p>
      ) : error ? (
        <p style={{color: "red"}}>{error}</p>
      ) : backendLogs.length === 0 ? (
        <p>No backend logs yet.</p>
      ) : (
        <ul style={{listStyle: "none", padding: 0}}>
          {backendLogs.map((log, i) => (
            <li key={i} style={{
              background: log.type === "error" ? "#fee2e2" : log.type === "warn" ? "#fef9c3" : "#e0e7ff",
              color: log.type === "error" ? "#b91c1c" : log.type === "warn" ? "#92400e" : "#1e40af",
              border: "1px solid #ddd", borderRadius: 8, margin: "12px 0", padding: 12
            }}>
              <b>[{log.type.toUpperCase()}]</b> {log.timestamp}<br/>
              <span style={{whiteSpace: "pre-wrap"}}>{log.message}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
