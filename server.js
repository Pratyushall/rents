// server.js
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

  // ✅ DO NOT import `static`, just use express.static directly
  server.use(express.static(path.join(__dirname, "public")));

  server.all("*", (req, res) => {
    return handle(req, res);
  });

  app.use(
    cors({
      origin: "http://localhost:3000",
      credentials: true,
    })
  );
  app.use(express.json());

  server.listen(port, () => {
    console.log(`🚀 Frontend ready on http://localhost:${port}`);
  });
});
