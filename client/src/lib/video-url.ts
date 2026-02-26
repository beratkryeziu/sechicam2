export type CommercialPlatform = "youtube" | "vimeo" | "facebook" | "unknown";

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

function getVimeoVideoId(url: string): string | null {
  try {
    const parsed = new URL(url);
    const pathParts = parsed.pathname.split("/").filter(Boolean);

    if (pathParts[0] === "video" && pathParts[1]) {
      return pathParts[1];
    }

    return pathParts.find((part) => /^\d+$/.test(part)) ?? null;
  } catch {
    return null;
  }
}

export function getPlatform(url?: string): CommercialPlatform {
  if (!url) {
    return "unknown";
  }

  try {
    const parsed = new URL(url);
    const host = parsed.hostname.toLowerCase();

    if (host.includes("youtube.com") || host.includes("youtu.be")) {
      return "youtube";
    }

    if (host.includes("vimeo.com")) {
      return "vimeo";
    }

    if (host.includes("facebook.com") || host.includes("fb.watch")) {
      return "facebook";
    }

    return "unknown";
  } catch {
    return "unknown";
  }
}

export function toEmbedUrl(url?: string, platform?: CommercialPlatform): string | null {
  if (!url) {
    return null;
  }

  const detectedPlatform = platform ?? getPlatform(url);

  try {
    if (detectedPlatform === "youtube") {
      const videoId = getYouTubeVideoId(url);
      if (videoId) {
        return `https://www.youtube.com/embed/${videoId}`;
      }

      return null;
    }

    if (detectedPlatform === "vimeo") {
      const id = getVimeoVideoId(url);
      if (id) {
        return `https://player.vimeo.com/video/${id}`;
      }

      return null;
    }

    return null;
  } catch {
    return null;
  }
}

export function toThumbnailUrl(
  url: string | undefined,
  platform: CommercialPlatform | undefined,
  fallbackThumbnail: string,
): string {
  if (!url) {
    return fallbackThumbnail;
  }

  const detectedPlatform = platform ?? getPlatform(url);

  if (detectedPlatform === "youtube") {
    const videoId = getYouTubeVideoId(url);
    if (videoId) {
      return `https://i.ytimg.com/vi/${videoId}/hqdefault.jpg`;
    }
  }

  if (detectedPlatform === "vimeo") {
    const videoId = getVimeoVideoId(url);
    if (videoId) {
      return `https://vumbnail.com/${videoId}.jpg`;
    }
  }

  return fallbackThumbnail;
}
