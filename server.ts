import express from "express";
import path from "path";
import fs from "fs";

async function startServer() {
  const app = express();
  const PORT = 3000;

  // Redirect HTTP -> HTTPS and non-www -> www in production
  app.use((req, res, next) => {
    const host = req.headers.host || "";
    const isHttp = req.headers["x-forwarded-proto"] === "http";
    const isNonWww = !host.startsWith("www.") && !host.includes("localhost") && !host.includes("127.0.0.1");

    if (isHttp || isNonWww) {
      const secureHost = host.startsWith("www.") ? host : `www.${host}`;
      return res.redirect(301, `https://${secureHost}${req.originalUrl}`);
    }
    next();
  });

  // Add a simple API health check endpoint if needed
  app.get("/api/health", (req, res) => {
    res.json({ status: "ok" });
  });

  // Safe check if we are in production
  // - Either NODE_ENV is set to production
  // - Or we are executing from the compiled CJS server file
  const isProd = process.env.NODE_ENV === "production" || 
                 (typeof __filename !== "undefined" && __filename.includes("server.cjs")) ||
                 process.argv[1]?.includes("server.cjs");

  if (!isProd) {
    console.log("Starting server in DEVELOPMENT mode with Vite live preview...");
    // Dynamic import to prevent Node from resolving or crashing on production startup
    const { createServer: createViteServer } = await import("vite");
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);

    // Dynamic routing fallback in development to support refreshes on clean URLs
    app.get("*", async (req, res, next) => {
      const url = req.originalUrl;
      // Skip static files with extensions or API routes
      if (url.startsWith("/api/") || url.includes(".")) {
        return next();
      }
      try {
        const templatePath = path.resolve(process.cwd(), "index.html");
        let template = fs.readFileSync(templatePath, "utf-8");
        // Apply Vite HTML transformation to inject HMR and build dependencies
        template = await vite.transformIndexHtml(url, template);
        res.status(200).set({ "Content-Type": "text/html" }).end(template);
      } catch (e) {
        vite.ssrFixStacktrace(e as Error);
        next(e);
      }
    });
  } else {
    console.log("Starting server in PRODUCTION mode...");
    const distPath = path.join(process.cwd(), 'dist');
    // Serve static assets out of the distribution folder
    app.use(express.static(distPath));
    // Fallback all incoming requests back to index.html so the client router handles them
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer().catch((err) => {
  console.error("Failed to start server:", err);
  process.exit(1);
});
