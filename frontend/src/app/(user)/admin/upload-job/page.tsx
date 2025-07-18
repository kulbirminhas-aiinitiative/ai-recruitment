"use client";
import { useState } from "react";

export default function UploadJobPage() {
  const [form, setForm] = useState({ title: "", company: "", location: "", description: "" });
  const [message, setMessage] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setMessage("");
    const res = await fetch("http://localhost:4000/api/jobs", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });
    if (res.ok) {
      setMessage("Job uploaded successfully!");
      setForm({ title: "", company: "", location: "", description: "" });
    } else {
      setMessage("Failed to upload job.");
    }
  };

  return (
    <main style={{ maxWidth: 500, margin: "2rem auto", padding: "2rem" }}>
      <h1>Upload New Job</h1>
      <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: 16 }}>
        <input name="title" placeholder="Job Title" value={form.title} onChange={handleChange} required />
        <input name="company" placeholder="Company" value={form.company} onChange={handleChange} required />
        <input name="location" placeholder="Location" value={form.location} onChange={handleChange} required />
        <textarea name="description" placeholder="Description" value={form.description} onChange={handleChange} required rows={4} />
        <button type="submit">Upload Job</button>
      </form>
      {message && <div style={{ marginTop: 16 }}>{message}</div>}
    </main>
  );
}
