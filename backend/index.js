import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

const users = [];

// Register
app.post("/api/auth/register", async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) return res.status(400).json({ message: "Email and password required" });
  const existing = users.find(u => u.email === email);
  if (existing) return res.status(409).json({ message: "User already exists" });
  const hashed = await bcrypt.hash(password, 10);
  users.push({ email, password: hashed });
  res.status(201).json({ message: "User registered" });
});

// Login
app.post("/api/auth/login", async (req, res) => {
  const { email, password } = req.body;
  const user = users.find(u => u.email === email);
  if (!user) return res.status(401).json({ message: "Invalid credentials" });
  const valid = await bcrypt.compare(password, user.password);
  if (!valid) return res.status(401).json({ message: "Invalid credentials" });
  const token = jwt.sign({ email }, process.env.JWT_SECRET || "secret", { expiresIn: "2h" });
  res.json({ token });
});

// Protected route example
app.get("/api/user/me", (req, res) => {
  const auth = req.headers.authorization;
  if (!auth) return res.status(401).json({ message: "No token" });
  try {
    const [, token] = auth.split(" ");
    const payload = jwt.verify(token, process.env.JWT_SECRET || "secret");
    res.json({ email: payload.email });
  } catch {
    res.status(401).json({ message: "Invalid token" });
  }
});

import jobsRouter from "./jobs.js";
import cvRouter from "./cv.js";
import applicationsRouter from "./applications.js";
app.use("/api/jobs", jobsRouter);
app.use("/api/cv", cvRouter);
app.use("/api/applications", applicationsRouter);

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log(`API running on port ${PORT}`));
