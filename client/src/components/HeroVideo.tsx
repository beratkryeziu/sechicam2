import { motion, Variants, useReducedMotion } from "framer-motion";
import { Link } from "wouter";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import heroBg from "@/assets/home_page_bg.jpeg";

export default function HeroVideo() {
  const prefersReducedMotion = useReducedMotion();

  const container: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: prefersReducedMotion ? 0 : 0.08,
        delayChildren: prefersReducedMotion ? 0 : 0.08,
      },
    },
  };

  const item: Variants = {
    hidden: prefersReducedMotion ? { opacity: 0 } : { opacity: 0, y: 10, filter: "blur(4px)" },
    show: { 
      opacity: 1, 
      y: 0,
      filter: "blur(0px)",
      transition: { duration: prefersReducedMotion ? 0.01 : 0.38, ease: "easeInOut" },
    },
  };

  return (
    <section className="relative min-h-[100svh] overflow-hidden">
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

      {/* Left gradient overlay */}
      <div className="pointer-events-none absolute inset-0 z-20">
        <div className="absolute inset-y-0 left-0 w-[65%] bg-gradient-to-r from-black/85 via-black/55 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-30 flex min-h-[100svh] items-center px-[clamp(24px,6vw,96px)]">
        <motion.div 
          variants={container}
          initial="hidden"
          animate="show"
          className="max-w-[640px] -translate-y-[4svh]"
        >
          <div>
            <motion.h1 
              variants={item}
              className="text-[44px] sm:text-[56px] lg:text-[80px] font-heading font-extrabold tracking-[-0.045em] text-white leading-[0.95]"
            >
              Sechicam
            </motion.h1>
          </div>

          <motion.div variants={item} className="mt-2 text-[16px] sm:text-[18px] font-medium text-white/78">
            Jetmir Zenelaj
          </motion.div>

          <motion.div variants={item} className="mt-3 text-[20px] sm:text-[22px] md:text-[24px] font-semibold tracking-[-0.02em] text-[#fcbe11]">
            Steadycam &amp; Camera Operator
          </motion.div>

          <motion.div variants={item} className="mt-5 text-[12px] sm:text-[13px] text-white/80 font-mono font-semibold uppercase tracking-[0.22em]">
            FILMS • COMMERCIALS • MUSIC VIDEOS
          </motion.div>

          <motion.p variants={item} className="mt-6 max-w-[56ch] text-[16px] sm:text-[18px] text-white/75 leading-[1.62]">
            Jetmir Zenelaj is a visual storyteller specializing in dynamic camera movement and strong composition.
            Certified Steadicam Operator, Tiffen Gold Workshop, Atlanta, Georgia (2022).
          </motion.p>

          <motion.div variants={item} className="mt-7 flex flex-row gap-4">
            <Link
              href="/work"
              className={cn(
                buttonVariants({ size: "default" }),
                "h-12 px-7 md:px-8 rounded-none text-xs md:text-sm uppercase tracking-[0.2em] font-semibold bg-white text-black border border-white/15 transition-all duration-200 ease-out hover:-translate-y-[2px] hover:bg-white hover:shadow-[0_14px_34px_rgba(0,0,0,0.28)] active:translate-y-0 active:shadow-[0_8px_18px_rgba(0,0,0,0.22)]",
              )}
            >
              Work
            </Link>
            <Link
              href="/contact"
              className={cn(
                buttonVariants({ variant: "outline", size: "default" }),
                "h-12 px-7 md:px-8 rounded-none text-xs md:text-sm uppercase tracking-[0.2em] font-semibold border border-white/35 text-white transition-all duration-200 ease-out hover:-translate-y-[2px] hover:border-white/60 hover:bg-white/10 hover:shadow-[0_14px_34px_rgba(0,0,0,0.3)] active:translate-y-0 active:shadow-[0_8px_18px_rgba(0,0,0,0.22)] backdrop-blur-sm",
              )}
            >
              Contact
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
