"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { apiRequest } from "../../lib/api";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError("");
    try {
      const res = await apiRequest("/api/auth/login", {
        method: "POST",
        body: JSON.stringify({ email, password }),
      });
      localStorage.setItem("token", res.token);
      router.push("/dashboard");
    } catch (err: any) {
      setError(err.message || "Login failed");
    }
  }

  return (
    <div style={{maxWidth: 400, margin: "2rem auto", padding: 24, border: "1px solid #eee", borderRadius: 8}}>
      <h2>Login</h2>
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
        <button type="submit" style={{width: "100%", padding: 10}}>Login</button>
      </form>
      <div style={{marginTop: 16}}>
        <a href="/forgot-password">Forgot Password?</a>
        <br />
        <a href="/register">Don't have an account? Sign Up</a>
      </div>
    </div>
  );
}

