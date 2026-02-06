import { Link, useLocation } from "wouter";
import { cn } from "@/lib/utils";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [location] = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
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
    <nav 
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isHomePage && !isScrolled 
          ? "bg-transparent py-8" 
          : "bg-background/90 backdrop-blur-md border-b border-border/40 py-4 shadow-sm"
      )}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        <Link 
          href="/" 
          className={cn(
            "text-xl font-heading font-bold tracking-tight uppercase transition-all duration-300",
            isHomePage && !isScrolled ? "text-white" : "text-foreground"
          )}
        >
          Sechicam
        </Link>

        <div className="flex gap-8">
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
      </div>
    </nav>
  );
}
