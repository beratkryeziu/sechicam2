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
      <div className="relative overflow-hidden bg-secondary">
        <AspectRatio ratio={16 / 9}>
          <img
            src={thumbnailUrl}
            alt={commercial.title}
            className="object-cover w-full h-full grayscale group-hover:grayscale-0 transition-all duration-500"
          />
        </AspectRatio>
      </div>
      <div className="space-y-1">
        <h3 className="font-heading font-medium text-base leading-snug group-hover:underline decoration-1 underline-offset-4">
          {commercial.title}
        </h3>
        <p className="text-xs text-muted-foreground font-mono uppercase tracking-wider">
          {year || "tbd"}
        </p>
      </div>
    </Link>
  );
}
