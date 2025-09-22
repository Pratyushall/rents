// server.js (root)
import express from "express";
import next from "next";
import path from "path";
import cors from "cors";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const port = parseInt(process.env.PORT || "3000", 10);
const dev = process.env.NODE_ENV !== "production";
const app = next({ dev, dir: __dirname });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  const server = express();

  // ✅ Middlewares belong on `server` (not on `app`)
  server.use(
    cors({
      origin: (process.env.FRONTEND_CORS_ORIGINS || "http://localhost:3000")
        .split(",")
        .map((s) => s.trim()),
      credentials: true,
    })
  );
  server.use(express.json({ limit: "5mb" }));

  // Static assets from /public
  server.use(express.static(path.join(__dirname, "public")));

  // Next.js handler
  server.all("*", (req, res) => handle(req, res));

  server.listen(port, () => {
    console.log(` Frontend ready on http://localhost:${port}`);
  });
});
