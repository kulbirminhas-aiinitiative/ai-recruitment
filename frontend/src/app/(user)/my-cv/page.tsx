"use client";
import { useRef, useState } from "react";

export default function MyCVPage() {
  const fileInput = useRef<HTMLInputElement>(null);
  const [uploading, setUploading] = useState(false);
  const [result, setResult] = useState<any>(null);
  const [error, setError] = useState("");

  async function handleUpload(e: React.FormEvent) {
    e.preventDefault();
    setError("");
    setResult(null);
    if (!fileInput.current?.files?.[0]) {
      setError("Please select a file.");
      return;
    }
    const formData = new FormData();
    formData.append("cv", fileInput.current.files[0]);
    setUploading(true);
    try {
      const res = await fetch("http://localhost:4000/api/cv/upload", {
        method: "POST",
        body: formData,
      });
      if (!res.ok) throw new Error(await res.text());
      setResult(await res.json());
    } catch (err: any) {
      setError(err.message || "Upload failed");
    } finally {
      setUploading(false);
    }
  }

  return (
    <div style={{maxWidth: 500, margin: "2rem auto", padding: 24}}>
      <h2>Upload Your CV</h2>
      <form onSubmit={handleUpload}>
        <input ref={fileInput} type="file" accept=".pdf,.doc,.docx" />
        <button type="submit" style={{marginLeft: 12}} disabled={uploading}>Upload</button>
      </form>
      {uploading && <div>Uploading...</div>}
      {error && <div style={{color: "red", marginTop: 12}}>{error}</div>}
      {result && (
        <div style={{marginTop: 24, border: "1px solid #eee", borderRadius: 8, padding: 16}}>
          <h3>AI CV Analysis</h3>
          <div><b>Filename:</b> {result.filename}</div>
          <div><b>Summary:</b> {result.analysis.summary}</div>
          <div><b>Score:</b> {result.analysis.score}/100</div>
          <div><b>Suggestions:</b>
            <ul>
              {result.analysis.suggestions.map((s: string, i: number) => <li key={i}>{s}</li>)}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}

