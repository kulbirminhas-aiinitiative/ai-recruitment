"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { apiRequest } from "../../lib/api";

export default function RegisterPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const router = useRouter();

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError("");
    setSuccess("");
    try {
      await apiRequest("/api/auth/register", {
        method: "POST",
        body: JSON.stringify({ email, password }),
      });
      setSuccess("Registration successful! Redirecting to login...");
      setTimeout(() => router.push("/login"), 1200);
    } catch (err: any) {
      setError(err.message || "Registration failed");
    }
  }

  return (
    <div style={{maxWidth: 400, margin: "2rem auto", padding: 24, border: "1px solid #eee", borderRadius: 8}}>
      <h2>Sign Up</h2>
      <form onSubmit={handleSubmit}>
        <div style={{marginBottom: 12}}>
          <label>Email</label>
          <input type="email" value={email} onChange={e => setEmail(e.target.value)} required style={{width: "100%", padding: 8}} />
        </div>
        <div style={{marginBottom: 12}}>
          <label>Password</label>
          <input type="password" value={password} onChange={e => setPassword(e.target.value)} required style={{width: "100%", padding: 8}} />
        </div>
        {error && <div style={{color: "red", marginBottom: 12}}>{error}</div>}
        {success && <div style={{color: "green", marginBottom: 12}}>{success}</div>}
        <button type="submit" style={{width: "100%", padding: 10}}>Register</button>
      </form>
      <div style={{marginTop: 16}}>
        <a href="/login">Already have an account? Login</a>
      </div>
    </div>
  );
}

