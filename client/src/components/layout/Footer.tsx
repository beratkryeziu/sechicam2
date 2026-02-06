export default function Footer() {
  return (
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
  );
}
