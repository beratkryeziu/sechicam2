import { useState, useEffect, useMemo } from "react";
import { useLocation, useSearch } from "wouter";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { portfolioData } from "@/data/portfolio";
import FilmCard from "@/components/ui/film-card";
import CommercialCard from "@/components/ui/commercial-card";
import MusicVideoCard from "@/components/ui/music-video-card";
import { cn } from "@/lib/utils";
import { useYoutubeYearsMap } from "@/hooks/use-youtube-years-map";
import { AnimatePresence, motion } from "framer-motion";

type Category = "films" | "commercials" | "music-videos";

export default function Work() {
  const [location, setLocation] = useLocation();
  const search = useSearch();
  const [activeCategory, setActiveCategory] = useState<Category>("films");

  // Sync state with URL query param
  useEffect(() => {
    const params = new URLSearchParams(search);
    const category = params.get("category");
    if (category && ["films", "commercials", "music-videos"].includes(category)) {
      setActiveCategory(category as Category);
    }
  }, [search]);

  const handleTabChange = (category: Category) => {
    setActiveCategory(category);
    setLocation(`/work?category=${category}`);
  };

  const tabs: { id: Category; label: string }[] = [
    { id: "films", label: "Films" },
    { id: "commercials", label: "Commercials" },
    { id: "music-videos", label: "Music Videos" },
  ];

  const filmsSorted = useMemo(
    () =>
      [...portfolioData.films].sort((a, b) => {
        const yearA = Number.parseInt(a.year, 10);
        const yearB = Number.parseInt(b.year, 10);

        if (yearB !== yearA) {
          return yearB - yearA;
        }

        return a.title.localeCompare(b.title);
      }),
    [],
  );

  const commercialYearsById = useYoutubeYearsMap(portfolioData.commercials);
  const musicVideoYearsById = useYoutubeYearsMap(portfolioData.musicVideos);

  const commercialsSorted = useMemo(
    () =>
      [...portfolioData.commercials].sort((a, b) => {
        const yearA = Number.parseInt(commercialYearsById[a.id] ?? a.year ?? "0", 10);
        const yearB = Number.parseInt(commercialYearsById[b.id] ?? b.year ?? "0", 10);
        return yearB - yearA;
      }),
    [commercialYearsById],
  );

  const musicVideosSorted = useMemo(
    () =>
      [...portfolioData.musicVideos].sort((a, b) => {
        const yearA = Number.parseInt(musicVideoYearsById[a.id] ?? a.year ?? "0", 10);
        const yearB = Number.parseInt(musicVideoYearsById[b.id] ?? b.year ?? "0", 10);
        return yearB - yearA;
      }),
    [musicVideoYearsById],
  );

  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <Navbar />
      
      <main className="flex-1 container mx-auto px-6 py-32">
        <header className="mb-16 space-y-8">
          <h1 className="text-4xl md:text-5xl font-heading font-bold tracking-tight">Work</h1>
          
          <div className="flex flex-wrap gap-8 border-b border-border pb-px">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => handleTabChange(tab.id)}
                className={cn(
                  "text-sm uppercase tracking-wider font-medium pb-4 border-b-2 transition-colors duration-200",
                  activeCategory === tab.id
                    ? "border-[var(--accent)] text-foreground"
                    : "border-transparent text-muted-foreground hover:text-[var(--accent)]"
                )}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </header>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 24, filter: "blur(10px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            exit={{ opacity: 0, y: -12, filter: "blur(8px)" }}
            transition={{ duration: 0.38, ease: "easeOut" }}
          >
            {activeCategory === "films" && (
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-8 gap-y-12">
                {filmsSorted.map((film) => (
                  <FilmCard key={film.id} film={film} />
                ))}
              </div>
            )}

            {activeCategory === "commercials" && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-12">
                {commercialsSorted.map((commercial) => (
                  <CommercialCard
                    key={commercial.id}
                    commercial={commercial}
                    year={commercialYearsById[commercial.id] ?? commercial.year}
                  />
                ))}
              </div>
            )}

            {activeCategory === "music-videos" && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-12">
                {musicVideosSorted.map((video) => (
                  <MusicVideoCard
                    key={video.id}
                    video={video}
                  />
                ))}
              </div>
            )}
          </motion.div>
        </AnimatePresence>
      </main>

      <Footer />
    </div>
  );
}
