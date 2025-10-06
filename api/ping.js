// api/ping.js  (ESM)
import express from "express";
const app = express();

app.get("/health", (_req, res) => res.json({ ok: true }));

// Bind to localhost explicitly (Windows-friendly)
const PORT = 3001;
app.listen(PORT, "127.0.0.1", () => {
  console.log(`PING on http://127.0.0.1:${PORT}/health`);
});
