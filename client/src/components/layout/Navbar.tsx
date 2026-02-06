import { Link, useLocation } from "wouter";
import { cn } from "@/lib/utils";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [location] = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const isHomePage = location === "/";

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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
            : "bg-background/90 backdrop-blur-md border-b border-border/40 py-4 shadow-sm"
        )}
      >
        <div className="container mx-auto px-6 flex items-center justify-between">
          <Link 
            href="/" 
            className={cn(
              "text-lg md:text-xl font-heading font-bold tracking-tight uppercase transition-all duration-300",
              isHomePage && !isScrolled && !isMobileMenuOpen ? "text-white" : "text-foreground"
            )}
          >
            Sechicam
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex gap-8">
            {navItems.map((item) => (
              <Link 
                key={item.href} 
                href={item.href}
                className={cn(
                  "text-sm font-medium tracking-wide uppercase transition-colors",
                  isHomePage && !isScrolled
                    ? (location === item.href ? "text-white" : "text-white/60 hover:text-white")
                    : (location === item.href ? "text-foreground" : "text-muted-foreground hover:text-foreground")
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
