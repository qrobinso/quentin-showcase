import "dotenv/config";
import express from "express";
import cors from "cors";
import path from "path";
import { fileURLToPath } from "url";
import { SYSTEM_PROMPT } from "./src/lib/system-prompt.js";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const app = express();
app.use(cors());
app.use(express.json());

const OPENROUTER_API_KEY = process.env.OPENROUTER_API_KEY;

app.post("/api/chat", async (req, res) => {
  if (!OPENROUTER_API_KEY) {
    return res.status(500).json({ error: "OPENROUTER_API_KEY not configured" });
  }

  try {
    const { messages } = req.body;

    const response = await fetch("https://openrouter.ai/api/v1/chat/completions", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${OPENROUTER_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "google/gemini-3-flash-preview",
        messages: [{ role: "system", content: SYSTEM_PROMPT }, ...messages],
      }),
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error("OpenRouter error:", response.status, errorText);
      return res.status(response.status).json({ error: "AI gateway error" });
    }

    const data = await response.json();
    res.json(data);
  } catch (error) {
    console.error("Chat error:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

// Serve built frontend in production
app.use(express.static(path.join(__dirname, "dist")));
app.get("/{*splat}", (req, res) => {
  res.sendFile(path.join(__dirname, "dist", "index.html"));
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
