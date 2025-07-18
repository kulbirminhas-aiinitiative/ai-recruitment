import express from "express";
import multer from "multer";

const router = express.Router();
const upload = multer({ storage: multer.memoryStorage() });

// POST /api/cv/upload
router.post("/upload", upload.single("cv"), async (req, res) => {
  if (!req.file) return res.status(400).json({ message: "No file uploaded" });
  // Mock AI analysis (replace with real AI integration)
  const analysis = {
    summary: "Your CV is well-structured. Consider adding more quantifiable achievements.",
    score: 78,
    suggestions: [
      "Add a summary section at the top.",
      "Highlight technical skills with specific tools.",
      "Include measurable results for past roles."
    ]
  };
  res.json({ filename: req.file.originalname, analysis });
});

export default router;
