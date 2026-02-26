import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";

const youtubeYearCache = new Map<string, string>();

function getYouTubeVideoId(url: string): string | null {
  try {
    const parsed = new URL(url);
    const host = parsed.hostname.toLowerCase();
    const pathParts = parsed.pathname.split("/").filter(Boolean);

    if (host.includes("youtu.be") && pathParts.length > 0) {
      return pathParts[0];
    }

    if (pathParts[0] === "embed" && pathParts[1]) {
      return pathParts[1];
    }

    if (pathParts[0] === "shorts" && pathParts[1]) {
      return pathParts[1];
    }

    return parsed.searchParams.get("v");
  } catch {
    return null;
  }
}

async function fetchYouTubeYear(videoId: string): Promise<string | null> {
  if (youtubeYearCache.has(videoId)) {
    return youtubeYearCache.get(videoId) ?? null;
  }

  try {
    const response = await fetch(`https://www.youtube.com/watch?v=${videoId}`, {
      headers: {
        "User-Agent":
          "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36",
        "Accept-Language": "en-US,en;q=0.9",
      },
    });
    if (!response.ok) {
      return null;
    }

    const html = await response.text();
    const publishDateMatch =
      html.match(/"publishDate":"(\d{4})-\d{2}-\d{2}"/) ??
      html.match(/"datePublished":"(\d{4})-\d{2}-\d{2}"/) ??
      html.match(/"uploadDate":"(\d{4})-\d{2}-\d{2}"/) ??
      html.match(/itemprop="datePublished"\s+content="(\d{4})-\d{2}-\d{2}/);

    const year = publishDateMatch?.[1] ?? null;
    if (year) {
      youtubeYearCache.set(videoId, year);
    }
    return year;
  } catch {
    return null;
  }
}

export async function registerRoutes(
  httpServer: Server,
  app: Express
): Promise<Server> {
  // put application routes here
  // prefix all routes with /api

  // use storage to perform CRUD operations on the storage interface
  // e.g. storage.insertUser(user) or storage.getUserByUsername(username)
  app.get("/api/youtube-year", async (req, res) => {
    const url = typeof req.query.url === "string" ? req.query.url : undefined;

    if (!url) {
      return res.status(400).json({ message: "Missing url query parameter." });
    }

    const videoId = getYouTubeVideoId(url);
    if (!videoId) {
      return res.status(400).json({ message: "Invalid YouTube URL." });
    }

    const year = await fetchYouTubeYear(videoId);
    return res.json({ year });
  });

  return httpServer;
}
