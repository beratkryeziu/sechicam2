import { CommercialProject } from "@/data/portfolio";
import { Link } from "wouter";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { toThumbnailUrl } from "@/lib/video-url";

interface CommercialCardProps {
  commercial: CommercialProject;
  year?: string | null;
}

export default function CommercialCard({ commercial, year }: CommercialCardProps) {
  const thumbnailUrl = toThumbnailUrl(
    commercial.url,
    commercial.platform,
    commercial.thumbnailUrl,
  );

  return (
    <Link
      href={`/work/commercials/${commercial.slug}`}
      className="group block space-y-3 cursor-pointer"
    >
      <div className="relative overflow-hidden border border-transparent bg-secondary transition-all duration-200 group-hover:border-[var(--accent)] group-hover:shadow-[0_0_24px_var(--accentSoft)]">
        <AspectRatio ratio={16 / 9}>
          <img
            src={thumbnailUrl}
            alt={commercial.title}
            className="object-cover w-full h-full grayscale group-hover:grayscale-0 transition-all duration-500"
          />
          <div className="absolute inset-0 flex items-end bg-gradient-to-t from-black/78 via-black/18 to-transparent opacity-0 transition-opacity duration-200 group-hover:opacity-100">
            <div className="flex items-center gap-2 px-4 py-3 text-[11px] font-medium uppercase tracking-[0.18em] text-white/92">
              <span className="text-[var(--accent)]">▶</span>
              <span>View Project</span>
            </div>
          </div>
        </AspectRatio>
      </div>
      <div className="space-y-1">
        <h3 className="font-heading font-medium text-base leading-snug transition-colors duration-200 group-hover:text-[var(--accent)]">
          {commercial.title}
        </h3>
        <p className="text-xs text-muted-foreground font-mono uppercase tracking-wider">
          {year || "tbd"}
        </p>
      </div>
    </Link>
  );
}
