import { useRoute, Link } from "wouter";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { portfolioData } from "@/data/portfolio";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ExternalLink } from "lucide-react";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import NotFound from "@/pages/not-found";

export default function FilmDetail() {
  const [, params] = useRoute("/work/films/:slug");
  const film = portfolioData.films.find((f) => f.slug === params?.slug);

  if (!film) {
    return <NotFound />;
  }

  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <Navbar />

      <main className="flex-1 container mx-auto px-6 py-32">
        <Link 
          href="/work?category=films"
          className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground transition-colors mb-12 uppercase tracking-wide"
        >
          <ArrowLeft className="w-4 h-4 mr-2" /> Back to Work
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24">
          <div className="lg:col-span-5">
            <div className="bg-secondary sticky top-32">
              <AspectRatio ratio={2 / 3}>
                <img
                  src={film.posterUrl}
                  alt={film.title}
                  className="w-full h-full object-cover grayscale"
                />
              </AspectRatio>
            </div>
          </div>

          <div className="lg:col-span-7 flex flex-col justify-center space-y-12">
            <div>
              <h1 className="text-4xl md:text-6xl font-heading font-bold tracking-tight mb-2">
                {film.title}
              </h1>
              <span className="text-xl text-muted-foreground font-mono">{film.year}</span>
            </div>

            <div className="space-y-8 max-w-prose">
              <p className="text-lg leading-relaxed text-foreground/90">
                {film.description}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 py-8 border-t border-b border-border">
                <div>
                  <h4 className="text-xs uppercase tracking-widest text-muted-foreground mb-2">Role</h4>
                  <p className="font-medium">Camera Operator</p>
                  <p className="text-foreground/80">{film.credits.cameraOperator}</p>
                </div>
                {film.credits.steadicamOperator && (
                  <div>
                    <h4 className="text-xs uppercase tracking-widest text-muted-foreground mb-2">Steadicam</h4>
                    <p className="font-medium">{film.credits.steadicamOperator}</p>
                  </div>
                )}
                {film.credits.director && (
                  <div>
                    <h4 className="text-xs uppercase tracking-widest text-muted-foreground mb-2">Director</h4>
                    <p className="font-medium">{film.credits.director}</p>
                  </div>
                )}
                {film.credits.dop && (
                  <div>
                    <h4 className="text-xs uppercase tracking-widest text-muted-foreground mb-2">DOP</h4>
                    <p className="font-medium">{film.credits.dop}</p>
                  </div>
                )}
              </div>

              {film.links && film.links.length > 0 && (
                <div className="flex gap-4">
                  {film.links.map((link) => (
                    <Button key={link.label} asChild variant="outline" className="rounded-none h-12 px-6 border-foreground/20">
                      <a href={link.url} target="_blank" rel="noopener noreferrer">
                        {link.label} <ExternalLink className="ml-2 w-4 h-4" />
                      </a>
                    </Button>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
