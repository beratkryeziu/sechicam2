import { useState, useEffect } from "react";
import { useLocation, useSearch } from "wouter";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { portfolioData } from "@/data/portfolio";
import FilmCard from "@/components/ui/film-card";
import VideoThumbnail from "@/components/ui/video-thumbnail";
import { cn } from "@/lib/utils";

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
                  "text-sm uppercase tracking-wider font-medium pb-4 border-b-2 transition-colors",
                  activeCategory === tab.id
                    ? "border-foreground text-foreground"
                    : "border-transparent text-muted-foreground hover:text-foreground"
                )}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </header>

        <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
          {activeCategory === "films" && (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-8 gap-y-12">
              {portfolioData.films.map((film) => (
                <FilmCard key={film.id} film={film} />
              ))}
            </div>
          )}

          {activeCategory === "commercials" && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-12">
              {portfolioData.commercials.map((video) => (
                <VideoThumbnail key={video.id} video={video} />
              ))}
            </div>
          )}

          {activeCategory === "music-videos" && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-12">
              {portfolioData.musicVideos.map((video) => (
                <VideoThumbnail key={video.id} video={video} />
              ))}
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
}
