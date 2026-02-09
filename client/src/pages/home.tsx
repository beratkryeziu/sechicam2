import { motion } from "framer-motion";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import HeroVideo from "@/components/HeroVideo";
import { portfolioData } from "@/data/portfolio";
import FilmCard from "@/components/ui/film-card";
import VideoThumbnail from "@/components/ui/video-thumbnail";
import { Link } from "wouter";
import { ArrowRight, Camera, Film, Monitor } from "lucide-react";

export default function Home() {
  const selectedFilm = portfolioData.films[0];
  const selectedCommercial = portfolioData.commercials[0];
  const selectedMusicVideo = portfolioData.musicVideos[0];

  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <Navbar />
      
      <main className="flex-1">
        <HeroVideo />

        {/* Introduction Section - Making it feel like a professional website */}
        <section className="py-24 px-6 container mx-auto border-b border-border/40">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <h2 className="text-sm uppercase tracking-[0.3em] text-muted-foreground font-medium">About</h2>
              <p className="text-3xl md:text-4xl font-heading font-bold leading-tight tracking-tight">
                Sarah Jenkins is a professional Camera and Steadicam Operator specializing in narrative features and high-end commercials.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              <div className="space-y-3">
                <div className="w-10 h-10 bg-secondary flex items-center justify-center">
                  <Film className="w-5 h-5" />
                </div>
                <h3 className="font-bold uppercase text-xs tracking-widest">Narrative</h3>
                <p className="text-sm text-muted-foreground">Expertise in long-form storytelling and complex camera choreography.</p>
              </div>
              <div className="space-y-3">
                <div className="w-10 h-10 bg-secondary flex items-center justify-center">
                  <Monitor className="w-5 h-5" />
                </div>
                <h3 className="font-bold uppercase text-xs tracking-widest">Commercials</h3>
                <p className="text-sm text-muted-foreground">Dynamic movement for global brands including Nike, Apple, and BMW.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Selected Work Section */}
        <section className="py-24 px-6 container mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="space-y-16"
          >
            <div className="flex justify-between items-end border-b border-border pb-8">
              <div className="space-y-4">
                <h2 className="text-sm uppercase tracking-[0.3em] text-muted-foreground font-medium">Selected Portfolio</h2>
                <h3 className="text-3xl md:text-4xl font-heading font-bold tracking-tight">Recent Work</h3>
              </div>
              <Link href="/work" className="hidden md:flex items-center gap-2 text-sm uppercase tracking-widest font-medium hover:gap-4 transition-all group">
                Full Portfolio <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              <div className="space-y-6">
                <span className="text-[10px] uppercase tracking-widest text-muted-foreground border-l border-foreground pl-3">Feature Film</span>
                <FilmCard film={selectedFilm} />
              </div>
              <div className="space-y-6">
                <span className="text-[10px] uppercase tracking-widest text-muted-foreground border-l border-foreground pl-3">Commercial</span>
                <VideoThumbnail video={selectedCommercial} />
              </div>
              <div className="space-y-6">
                <span className="text-[10px] uppercase tracking-widest text-muted-foreground border-l border-foreground pl-3">Music Video</span>
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

        {/* Clients Section */}
        <section className="py-24 border-t border-border/40 bg-secondary/10">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto text-center space-y-12">
              <h2 className="text-sm uppercase tracking-[0.4em] text-muted-foreground">Trusted By</h2>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center opacity-60 grayscale">
                <div className="text-xl font-heading font-black tracking-tighter">NIKE</div>
                <div className="text-xl font-heading font-black tracking-tighter">APPLE</div>
                <div className="text-xl font-heading font-black tracking-tighter">NETFLIX</div>
                <div className="text-xl font-heading font-black tracking-tighter">HBO</div>
                <div className="text-xl font-heading font-black tracking-tighter">A24</div>
                <div className="text-xl font-heading font-black tracking-tighter">ADIDAS</div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
