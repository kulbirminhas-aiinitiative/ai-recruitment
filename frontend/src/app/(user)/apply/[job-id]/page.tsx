"use client";
import { useState } from "react";
import { useParams, useRouter } from "next/navigation";

export default function ApplicationProcessPage() {
  const params = useParams();
  const router = useRouter();
  const jobId = params["job-id"];
  const [cvFilename, setCvFilename] = useState("");
  const [coverLetter, setCoverLetter] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  // For demo, allow user to type CV filename (in real app, fetch from backend)
  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError("");
    setSuccess("");
    const email = localStorage.getItem("userEmail");
    if (!cvFilename || !email) {
      setError("Please enter your CV filename and ensure you are logged in.");
      return;
    }
    fetch("http://localhost:4000/api/applications/apply", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ jobId, email, cvFilename, coverLetter }),
    })
      .then(async res => {
        if (!res.ok) throw new Error(await res.text());
        setSuccess("Application submitted!");
        setTimeout(() => router.push("/my-applications"), 1200);
      })
      .catch(err => setError(err.message || "Application failed"));
  }

  return (
    <div style={{maxWidth: 500, margin: "2rem auto", padding: 24}}>
      <h2>Apply for Job</h2>
      <form onSubmit={handleSubmit}>
        <div style={{marginBottom: 12}}>
          <label>CV Filename</label>
          <input type="text" value={cvFilename} onChange={e => setCvFilename(e.target.value)} required style={{width: "100%", padding: 8}} placeholder="e.g. mycv.pdf" />
        </div>
        <div style={{marginBottom: 12}}>
          <label>Cover Letter</label>
          <textarea value={coverLetter} onChange={e => setCoverLetter(e.target.value)} rows={5} style={{width: "100%", padding: 8}} placeholder="Write a short cover letter..." />
        </div>
        {error && <div style={{color: "red", marginBottom: 12}}>{error}</div>}
        {success && <div style={{color: "green", marginBottom: 12}}>{success}</div>}
        <button type="submit" style={{width: "100%", padding: 10}}>Submit Application</button>
      </form>
      <div style={{marginTop: 16}}>
        <a href="/jobs">Back to Jobs</a>
      </div>
    </div>
  );
}

