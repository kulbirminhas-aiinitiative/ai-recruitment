"use client";
import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { apiRequest } from "../../../lib/api";

export default function JobDetailsPage() {
  const params = useParams();
  const router = useRouter();
  const jobId = params["job-id"];
  const [job, setJob] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function fetchJob() {
      setLoading(true);
      setError("");
      try {
        const data = await apiRequest(`/api/jobs/${jobId}`);
        setJob(data);
      } catch (err: any) {
        setError("Job not found");
      } finally {
        setLoading(false);
      }
    }
    if (jobId) fetchJob();
  }, [jobId]);

  if (loading) return <div style={{padding: 24}}>Loading job details...</div>;
  if (error) return <div style={{padding: 24, color: "red"}}>{error}</div>;
  if (!job) return null;

  return (
    <div style={{maxWidth: 600, margin: "2rem auto", padding: 24, border: "1px solid #eee", borderRadius: 8}}>
      <h2>{job.title}</h2>
      <div><b>Company:</b> {job.company}</div>
      <div><b>Location:</b> {job.location}</div>
      <div style={{margin: "12px 0"}}>{job.description}</div>
      <div style={{display: "flex", gap: 12, marginTop: 20}}>
        <button style={{padding: "8px 18px"}} onClick={() => router.push(`/apply/${job.id}`)}>Apply Now</button>
        <button style={{padding: "8px 18px"}}>Save Job</button>
      </div>
      <div style={{marginTop: 16}}>
        <a href="/jobs">Back to Search Results</a>
      </div>
    </div>
  );
}
