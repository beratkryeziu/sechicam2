import { useState, useEffect } from "react";
import { motion, Variants } from "framer-motion";
import { Link } from "wouter";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export default function HeroVideo() {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setPrefersReducedMotion(mediaQuery.matches);
    
    const handler = (e: MediaQueryListEvent) => setPrefersReducedMotion(e.matches);
    mediaQuery.addEventListener("change", handler);
    return () => mediaQuery.removeEventListener("change", handler);
  }, []);

  const container: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const item: Variants = {
    hidden: { opacity: 0, y: 20, filter: "blur(10px)" },
    show: { 
      opacity: 1, 
      y: 0, 
      filter: "blur(0px)",
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  return (
    <section className="relative h-screen w-full overflow-hidden flex items-center justify-center">
      {/* Video/Background */}
      <div className="absolute inset-0 z-0">
        {!prefersReducedMotion ? (
          <video
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            poster="/hero-poster.jpg"
            className="w-full h-full object-cover"
          >
            <source src="/hero.mp4" type="video/mp4" />
          </video>
        ) : (
          <img src="/hero-poster.jpg" className="w-full h-full object-cover" alt="Hero background" />
        )}
        {/* Overlays */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/80 z-10" />
        <div className="absolute inset-0 pointer-events-none opacity-[0.03] mix-blend-overlay z-20 noise-overlay" />
      </div>

      {/* Content */}
      <div className="container relative z-30 px-6 mx-auto">
        <motion.div 
          variants={container}
          initial="hidden"
          animate="show"
          className="max-w-4xl space-y-8"
        >
          <div className="space-y-4">
            <motion.h1 
              variants={item}
              className="text-6xl md:text-8xl font-heading font-bold tracking-tighter text-white leading-[0.9]"
            >
              Sarah Jenkins
            </motion.h1>
            <motion.div variants={item} className="space-y-2">
              <p className="text-xl md:text-2xl text-white/80 font-light tracking-tight">
                Camera Operator / Steadicam Operator
              </p>
              <p className="text-sm md:text-base text-white/60 font-mono uppercase tracking-[0.2em]">
                Feature Films • Commercials • Music Videos • Steadicam
              </p>
            </motion.div>
          </div>

          <motion.p variants={item} className="text-lg md:text-xl text-white/70 leading-relaxed max-w-xl">
            Crafting visual narratives through precise movement and composition. 
            Based in Los Angeles, available worldwide.
          </motion.p>

          <motion.div variants={item} className="flex flex-col sm:flex-row gap-4 pt-4">
            <Link href="/work" className={cn(buttonVariants({ size: "lg" }), "rounded-none text-base px-8 h-12 uppercase tracking-wide font-medium bg-white text-black hover:bg-white/90")}>
              View Work
            </Link>
            <Link href="/contact" className={cn(buttonVariants({ variant: "outline", size: "lg" }), "rounded-none text-base px-8 h-12 uppercase tracking-wide font-medium border-white/20 text-white hover:bg-white/10 backdrop-blur-sm")}>
              Contact
            </Link>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-30 flex flex-col items-center gap-2"
      >
        <span className="text-[10px] uppercase tracking-[0.3em] text-white/40">Scroll</span>
        <div className="w-px h-12 bg-gradient-to-b from-white/40 to-transparent" />
      </motion.div>
    </section>
  );
}
