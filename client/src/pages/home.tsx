import { motion } from "framer-motion";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import HeroVideo from "@/components/HeroVideo";
import { portfolioData } from "@/data/portfolio";
import FilmCard from "@/components/ui/film-card";
import VideoThumbnail from "@/components/ui/video-thumbnail";
import { Link } from "wouter";
import { ArrowRight } from "lucide-react";

export default function Home() {
  // Select work for teaser
  const selectedFilm = portfolioData.films[0];
  const selectedCommercial = portfolioData.commercials[0];
  const selectedMusicVideo = portfolioData.musicVideos[0];

  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <Navbar />
      
      <main className="flex-1">
        <HeroVideo />

        {/* Selected Work Section */}
        <section className="py-32 px-6 container mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="space-y-16"
          >
            <div className="flex justify-between items-end border-b border-border pb-8">
              <div className="space-y-4">
                <h2 className="text-3xl md:text-4xl font-heading font-bold tracking-tight">Selected Work</h2>
                <p className="text-muted-foreground text-lg">Featured projects across film, commercials and music videos.</p>
              </div>
              <Link href="/work" className="hidden md:flex items-center gap-2 text-sm uppercase tracking-widest font-medium hover:gap-4 transition-all group">
                View all work <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              {/* Film Teaser */}
              <div className="space-y-6">
                <h3 className="text-xs uppercase tracking-widest text-muted-foreground">Narrative</h3>
                <FilmCard film={selectedFilm} />
              </div>

              {/* Commercial Teaser */}
              <div className="space-y-6">
                <h3 className="text-xs uppercase tracking-widest text-muted-foreground">Commercial</h3>
                <VideoThumbnail video={selectedCommercial} />
              </div>

              {/* Music Video Teaser */}
              <div className="space-y-6">
                <h3 className="text-xs uppercase tracking-widest text-muted-foreground">Music Video</h3>
                <VideoThumbnail video={selectedMusicVideo} />
              </div>
            </div>

            <div className="md:hidden pt-8">
               <Link href="/work" className="flex items-center justify-center gap-2 text-sm uppercase tracking-widest font-medium border border-border py-4 w-full">
                View all work <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </motion.div>
        </section>

        {/* Selected Clients Bar */}
        <section className="py-20 border-t border-border/40 bg-secondary/20">
          <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-12 opacity-50 grayscale hover:grayscale-0 transition-all duration-700">
            <span className="text-xs uppercase tracking-[0.4em] font-medium">Selected Clients</span>
            <div className="flex flex-wrap justify-center gap-x-12 gap-y-8 text-xl md:text-2xl font-heading font-bold tracking-tighter">
              <span>NIKE</span>
              <span>APPLE</span>
              <span>NETFLIX</span>
              <span>HBO</span>
              <span>A24</span>
              <span>ADIDAS</span>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
