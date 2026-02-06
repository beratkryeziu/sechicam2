import { Link } from "wouter";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm border-b border-border/40">
        <div className="container mx-auto px-6 h-20 flex items-center justify-between">
          <Link href="/" className="text-xl font-heading font-bold tracking-tight uppercase hover:opacity-70 transition-opacity">
            Sechicam
          </Link>

          <div className="flex gap-8">
            <Link href="/" className="text-sm font-medium tracking-wide uppercase transition-colors hover:text-foreground text-foreground">
              Home
            </Link>
            <Link href="/work" className="text-sm font-medium tracking-wide uppercase transition-colors hover:text-foreground text-muted-foreground">
              Work
            </Link>
            <Link href="/contact" className="text-sm font-medium tracking-wide uppercase transition-colors hover:text-foreground text-muted-foreground">
              Contact
            </Link>
          </div>
        </div>
      </nav>
      
      <main className="flex-1 flex flex-col justify-center items-center px-6 relative overflow-hidden">
        {/* Abstract background element */}
        <div className="absolute inset-0 z-0 opacity-5 pointer-events-none">
           <img 
             src="/assets/hero-operator.jpg" 
             className="w-full h-full object-cover grayscale"
             alt=""
           />
        </div>

        <div className="z-10 max-w-4xl w-full space-y-12 text-center md:text-left md:flex md:items-center md:justify-between md:space-y-0 md:gap-16">
          <div className="space-y-8 flex-1">
            <div className="space-y-4">
              <h1 className="text-5xl md:text-7xl font-heading font-bold tracking-tighter leading-[0.9]">
                Sarah Jenkins
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground font-light tracking-tight max-w-md">
                Camera Operator / Steadicam Operator
              </p>
            </div>
            
            <p className="text-lg text-foreground/80 leading-relaxed max-w-lg">
              Crafting visual narratives through precise movement and composition. 
              Based in Los Angeles, available worldwide.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Link href="/work" className={cn(buttonVariants({ size: "lg" }), "rounded-none text-base px-8 h-12 uppercase tracking-wide font-medium")}>
                View Work
              </Link>
              <Link href="/contact" className={cn(buttonVariants({ variant: "outline", size: "lg" }), "rounded-none text-base px-8 h-12 uppercase tracking-wide font-medium border-foreground/20 hover:bg-secondary")}>
                Contact
              </Link>
            </div>
          </div>

          <div className="hidden md:block w-px h-64 bg-border/60 mx-auto"></div>

          <div className="hidden md:block w-48 space-y-6 text-sm text-muted-foreground text-right">
            <div>
              <p className="font-medium text-foreground mb-1">Selected Clients</p>
              <ul className="space-y-1 leading-relaxed">
                <li>Nike</li>
                <li>Apple</li>
                <li>Netflix</li>
                <li>HBO</li>
                <li>A24</li>
              </ul>
            </div>
          </div>
        </div>
      </main>

      <footer className="py-12 border-t border-border/40 mt-auto">
        <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6 text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Sechicam. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-foreground transition-colors">Instagram</a>
            <a href="#" className="hover:text-foreground transition-colors">Vimeo</a>
            <a href="#" className="hover:text-foreground transition-colors">IMDb</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
