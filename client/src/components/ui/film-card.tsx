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
      <div className="overflow-hidden bg-secondary">
        <AspectRatio ratio={2 / 3}>
          <img
            src={film.posterUrl}
            alt={film.title}
            className="object-cover w-full h-full grayscale group-hover:grayscale-0 transition-all duration-500 ease-out group-hover:scale-105"
          />
        </AspectRatio>
      </div>
      <div className="space-y-1">
        <h3 className="font-heading font-medium text-lg leading-none group-hover:underline decoration-1 underline-offset-4">
          {film.title}
        </h3>
        <p className="text-xs text-muted-foreground font-mono uppercase tracking-wider">
          {film.year}
        </p>
      </div>
    </Link>
  );
}
