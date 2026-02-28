import { MusicVideoProject } from "@/data/portfolio";
import { Link } from "wouter";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { toThumbnailUrl } from "@/lib/video-url";

interface MusicVideoCardProps {
  video: MusicVideoProject;
}

export default function MusicVideoCard({ video }: MusicVideoCardProps) {
  const thumbnailUrl = toThumbnailUrl(video.url, video.platform, video.thumbnailUrl);
  const titleParts = video.title.split(" - ");
  const songTitle =
    titleParts.length > 1 ? titleParts.slice(1).join(" - ").trim() : video.title;

  return (
    <Link
      href={`/work/music-videos/${video.slug}`}
      className="group block space-y-3 cursor-pointer"
    >
      <div className="relative overflow-hidden border border-transparent bg-secondary transition-all duration-200 group-hover:border-[var(--accent)] group-hover:shadow-[0_0_24px_var(--accentSoft)]">
        <AspectRatio ratio={16 / 9}>
          <img
            src={thumbnailUrl}
            alt={video.title}
            className="object-cover w-full h-full grayscale transition-all duration-200 ease-in-out group-hover:grayscale-0 group-hover:scale-[1.02] group-hover:brightness-[0.92] group-hover:contrast-105"
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
          {songTitle}
        </h3>
      </div>
    </Link>
  );
}
