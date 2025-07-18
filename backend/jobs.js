import express from "express";
const router = express.Router();

// In-memory jobs for demo
const jobs = [
  { id: 1, title: "AI Engineer", company: "OpenAI", location: "Remote", description: "Work on cutting-edge AI projects." },
  { id: 2, title: "Full Stack Developer", company: "TechCorp", location: "London", description: "Develop scalable web apps." },
  { id: 3, title: "Data Scientist", company: "DataWiz", location: "Berlin", description: "Analyze and model data for business insights." },
];

// GET /api/jobs
router.get("/", (req, res) => {
  const { query } = req.query;
  if (query) {
    const q = query.toLowerCase();
    return res.json(jobs.filter(j => j.title.toLowerCase().includes(q) || j.company.toLowerCase().includes(q)));
  }
  res.json(jobs);
});

// GET /api/jobs/:id
router.get("/:id", (req, res) => {
  const job = jobs.find(j => j.id === Number(req.params.id));
  if (!job) return res.status(404).json({ message: "Job not found" });
  res.json(job);
});

export default router;
