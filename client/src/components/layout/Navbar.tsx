import { Link, useLocation } from "wouter";
import { cn } from "@/lib/utils";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import sechicamLogo from "@/assets/sechicam-logo.png";

export default function Navbar() {
  const [location] = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [logoBlinkTick, setLogoBlinkTick] = useState(0);
  const isHomePage = location === "/";

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setLogoBlinkTick((tick) => tick + 1);
  }, [location]);

  const triggerLogoBlink = () => {
    setLogoBlinkTick((tick) => tick + 1);
  };

  const navItems = [
    { label: "Home", href: "/" },
    { label: "Work", href: "/work" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <>
      <nav 
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          isHomePage && !isScrolled && !isMobileMenuOpen
            ? "bg-transparent py-6 md:py-8" 
            : "bg-transparent py-4 md:py-6"
        )}
      >
        <div className="container mx-auto px-6 flex items-center justify-between">
          <Link 
            href="/" 
            onClick={triggerLogoBlink}
            className={cn(
              "inline-flex items-center transition-all duration-300",
              isHomePage && !isScrolled && !isMobileMenuOpen ? "text-white" : "text-foreground"
            )}
          >
            <span className="relative inline-flex items-center">
              <img
                src={sechicamLogo}
                alt="Sechicam"
                className="h-6 md:h-7 w-auto brightness-100"
              />
              <span
                key={logoBlinkTick}
                className="logo-dot-blink pointer-events-none absolute left-[76.1%] top-[72.5%] h-[4.5px] w-[4.5px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-red-500 md:h-[5px] md:w-[5px]"
                aria-hidden
              />
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex gap-8">
            {navItems.map((item) => (
              <Link 
                key={item.href} 
                href={item.href}
                className={cn(
                  "relative text-sm font-semibold tracking-wide uppercase transition-colors duration-200 after:absolute after:left-0 after:-bottom-2 after:h-px after:bg-[var(--accent)] after:transition-all after:duration-200",
                  isHomePage && !isScrolled
                    ? (location === item.href
                      ? "text-white after:w-full"
                      : "text-white/60 hover:text-[var(--accent)] after:w-0 hover:after:w-full")
                    : (location === item.href
                      ? "text-foreground after:w-full"
                      : "text-muted-foreground hover:text-[var(--accent)] after:w-0 hover:after:w-full")
                )}
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className={cn("w-6 h-6", isHomePage && !isScrolled ? "text-white" : "text-foreground")} />
            ) : (
              <Menu className={cn("w-6 h-6", isHomePage && !isScrolled ? "text-white" : "text-foreground")} />
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-background flex flex-col items-center justify-center gap-8 md:hidden">
          {navItems.map((item) => (
            <Link 
              key={item.href} 
              href={item.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className={cn(
                "text-2xl font-heading font-bold uppercase tracking-widest transition-colors",
                location === item.href ? "text-foreground" : "text-muted-foreground"
              )}
            >
              {item.label}
            </Link>
          ))}
        </div>
      )}
    </>
  );
}
