import { useEffect, useState } from "react";

const youtubeYearCache = new Map<string, string | null>();

export function useYoutubeYear(
  url: string | undefined,
  platform: string,
  fallbackYear?: string,
): string | null {
  const [resolvedYear, setResolvedYear] = useState<string | null>(fallbackYear ?? null);

  useEffect(() => {
    if (fallbackYear) {
      setResolvedYear(fallbackYear);
      return;
    }

    if (!url || platform !== "youtube") {
      setResolvedYear(null);
      return;
    }

    if (youtubeYearCache.has(url)) {
      setResolvedYear(youtubeYearCache.get(url) ?? null);
      return;
    }

    let cancelled = false;

    fetch(`/api/youtube-year?url=${encodeURIComponent(url)}`)
      .then(async (response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch YouTube year.");
        }
        const data = (await response.json()) as { year?: string | null };
        return data.year ?? null;
      })
      .then((year) => {
        youtubeYearCache.set(url, year);
        if (!cancelled) {
          setResolvedYear(year);
        }
      })
      .catch(() => {
        youtubeYearCache.set(url, null);
        if (!cancelled) {
          setResolvedYear(null);
        }
      });

    return () => {
      cancelled = true;
    };
  }, [fallbackYear, platform, url]);

  return resolvedYear;
}
