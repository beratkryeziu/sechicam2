import { useEffect, useState } from "react";

type YearItem = {
  id: string;
  url?: string;
  platform: string;
  year?: string;
};

const youtubeYearCache = new Map<string, string | null>();

export function useYoutubeYearsMap(items: YearItem[]): Record<string, string | null> {
  const [yearsById, setYearsById] = useState<Record<string, string | null>>({});

  useEffect(() => {
    const baseYears: Record<string, string | null> = {};

    items.forEach((item) => {
      baseYears[item.id] = item.year ?? null;
    });

    setYearsById(baseYears);

    const youtubeItems = items.filter(
      (item) => !item.year && item.url && item.platform === "youtube",
    );

    if (youtubeItems.length === 0) {
      return;
    }

    let cancelled = false;

    const tasks = youtubeItems.map(async (item) => {
      const url = item.url as string;

      if (youtubeYearCache.has(url)) {
        return { id: item.id, year: youtubeYearCache.get(url) ?? null };
      }

      try {
        const response = await fetch(`/api/youtube-year?url=${encodeURIComponent(url)}`);
        if (!response.ok) {
          youtubeYearCache.set(url, null);
          return { id: item.id, year: null };
        }

        const data = (await response.json()) as { year?: string | null };
        const year = data.year ?? null;
        youtubeYearCache.set(url, year);
        return { id: item.id, year };
      } catch {
        youtubeYearCache.set(url, null);
        return { id: item.id, year: null };
      }
    });

    void Promise.all(tasks).then((results) => {
      if (cancelled) {
        return;
      }

      const updates: Record<string, string | null> = {};
      results.forEach((result) => {
        updates[result.id] = result.year;
      });

      setYearsById((prev) => ({ ...prev, ...updates }));
    });

    return () => {
      cancelled = true;
    };
  }, [items]);

  return yearsById;
}
