export default function Footer() {
  return (
    <footer className="py-20 border-t border-border/40 bg-background">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
          <div className="space-y-6">
            <h2 className="text-xl font-heading font-bold uppercase tracking-tight">Sechicam</h2>
            <p className="text-sm text-muted-foreground max-w-xs leading-relaxed">
              Professional Camera and Steadicam Operator focused on technical precision and visual storytelling.
            </p>
          </div>
          
          <div className="space-y-6">
            <h3 className="text-xs uppercase tracking-widest font-bold text-foreground">Navigation</h3>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li><a href="/" className="hover:text-foreground transition-colors">Home</a></li>
              <li><a href="/work" className="hover:text-foreground transition-colors">Work</a></li>
              <li><a href="/contact" className="hover:text-foreground transition-colors">Contact</a></li>
            </ul>
          </div>

          <div className="space-y-6">
            <h3 className="text-xs uppercase tracking-widest font-bold text-foreground">Social</h3>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-foreground transition-colors">Instagram</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Vimeo</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">IMDb</a></li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-border/20 text-xs text-muted-foreground uppercase tracking-widest">
          <p>&copy; {new Date().getFullYear()} Sechicam. All rights reserved.</p>
          <p className="mt-4 md:mt-0">Los Angeles • Available Worldwide</p>
        </div>
      </div>
    </footer>
  );
}
