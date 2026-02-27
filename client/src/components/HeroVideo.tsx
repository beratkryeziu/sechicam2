import { motion, Variants } from "framer-motion";
import { Link } from "wouter";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import heroBg from "@/assets/home_page_bg.jpeg";

export default function HeroVideo() {
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
    hidden: { opacity: 0, y: 15, filter: "blur(8px)" },
    show: { 
      opacity: 1, 
      y: 0, 
      filter: "blur(0px)",
      transition: { duration: 0.5, ease: "easeOut" }
    }
  };

  return (
    <section className="relative h-[90svh] md:h-screen w-full overflow-hidden flex items-center justify-center">
      {/* Background */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${heroBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          transform: "scaleX(-1)",
        }}
        aria-hidden
      >
        {/* Overlays */}
        <div className="absolute inset-0 bg-black/50 md:bg-gradient-to-b md:from-black/60 md:via-black/40 md:to-black/80 z-10" />
        <div className="absolute inset-0 pointer-events-none opacity-[0.03] mix-blend-overlay z-20 noise-overlay" />
      </div>

      {/* Content */}
      <div className="container relative z-30 px-6 mx-auto">
        <motion.div 
          variants={container}
          initial="hidden"
          animate="show"
          className="max-w-4xl space-y-6 md:space-y-8"
        >
          <div className="space-y-3 md:space-y-4">
            <motion.h1 
              variants={item}
              className="text-2xl md:text-5xl font-heading font-bold tracking-tighter text-white leading-[0.9]"
            >
              Jetmir Zenelaj
            </motion.h1>
            <motion.div variants={item} className="space-y-1 md:space-y-2">
              <p className="text-lg md:text-2xl text-[#fcbe11] font-light tracking-tight">
                Steadycam & Camera operator 
              </p>
              <div className="h-px w-24 bg-[#fcbe11]/70" />
              <p className="hidden md:block text-sm text-white/60 font-mono uppercase tracking-[0.2em]">
                Films • Commercials • Music Videos
              </p>
            </motion.div>
          </div>

          <motion.p variants={item} className="hidden md:block text-lg md:text-xl text-white/70 leading-relaxed max-w-xl">
            Crafting visual narratives through precise movement and composition. 
            Based in Los Angeles, available worldwide.
          </motion.p>

          <motion.div variants={item} className="flex flex-row gap-4 pt-2 md:pt-4">
            <Link href="/work" className={cn(buttonVariants({ size: "default" }), "md:h-12 md:px-8 rounded-none text-xs md:text-base uppercase tracking-wide font-medium bg-white text-black hover:bg-white/90")}>
              Work
            </Link>
            <Link href="/contact" className={cn(buttonVariants({ variant: "outline", size: "default" }), "md:h-12 md:px-8 rounded-none text-xs md:text-base uppercase tracking-wide font-medium border-white/20 text-white hover:bg-white/10 backdrop-blur-sm")}>
              Contact
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
