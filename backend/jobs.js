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

// POST /api/jobs (for demo only, no auth)
router.post("/", (req, res) => {
  const { title, company, location, description } = req.body;
  if (!title || !company || !location || !description) {
    return res.status(400).json({ message: "All fields are required" });
  }
  const newJob = {
    id: jobs.length ? jobs[jobs.length - 1].id + 1 : 1,
    title,
    company,
    location,
    description
  };
  jobs.push(newJob);
  res.status(201).json(newJob);
});

export default router;
