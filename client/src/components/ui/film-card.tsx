import { FilmProject } from "@/data/portfolio";
import { Link } from "wouter";
import { AspectRatio } from "@/components/ui/aspect-ratio";

interface FilmCardProps {
  film: FilmProject;
}

export default function FilmCard({ film }: FilmCardProps) {
  return (
    <Link 
      href={`/work/films/${film.slug}`} 
      className="group block space-y-3 cursor-pointer"
    >
      <div className="relative overflow-hidden border border-transparent bg-transparent transition-all duration-200 group-hover:border-[var(--accent)] group-hover:shadow-[0_0_24px_var(--accentSoft)]">
        <AspectRatio ratio={2 / 3}>
          <img
            src={film.posterUrl}
            alt={film.title}
            className="block object-cover w-full h-full grayscale group-hover:grayscale-0 transition-all duration-200 ease-in-out scale-[1.0] group-hover:brightness-[0.92] group-hover:contrast-105 group-hover:scale-[1.02]"
          />
          <div className="absolute inset-0 flex items-end bg-gradient-to-t from-black/75 via-black/15 to-transparent opacity-0 transition-opacity duration-200 group-hover:opacity-100">
            <div className="flex items-center gap-2 px-4 py-3 text-[11px] font-medium uppercase tracking-[0.18em] text-white/92">
              <span className="text-[var(--accent)]">▶</span>
              <span>View Project</span>
            </div>
          </div>
        </AspectRatio>
      </div>
      <div className="space-y-1">
        <h3 className="font-heading font-medium text-lg leading-none transition-colors duration-200 group-hover:text-[var(--accent)]">
          {film.title}
        </h3>
        <p className="text-xs text-muted-foreground font-mono uppercase tracking-wider">
          {film.year}
        </p>
      </div>
    </Link>
  );
}
