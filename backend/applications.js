import express from "express";
const router = express.Router();

// In-memory applications for demo
const applications = [];

// POST /api/applications/apply
router.post("/apply", (req, res) => {
  const { jobId, email, cvFilename } = req.body;
  if (!jobId || !email) return res.status(400).json({ message: "Missing jobId or email" });
  const app = { id: applications.length + 1, jobId, email, cvFilename, status: "Submitted", date: new Date().toISOString() };
  applications.push(app);
  res.status(201).json({ message: "Application submitted", application: app });
});

// GET /api/applications/user/:email
router.get("/user/:email", (req, res) => {
  const { email } = req.params;
  res.json(applications.filter(a => a.email === email));
});

export default router;
