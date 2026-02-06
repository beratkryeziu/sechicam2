import { VideoProject } from "@/data/portfolio";
import { Play } from "lucide-react";
import { useState } from "react";
import { AspectRatio } from "@/components/ui/aspect-ratio";

interface VideoThumbnailProps {
  video: VideoProject;
}

export default function VideoThumbnail({ video }: VideoThumbnailProps) {
  const [isPlaying, setIsPlaying] = useState(false);

  // Helper to extract embed URL
  const getEmbedUrl = (url: string, platform: string) => {
    // Ideally this would parse various URL formats. 
    // For now assuming the data contains embed-ready URLs or we trust the mockup data.
    return url;
  };

  if (isPlaying) {
    return (
      <div className="w-full bg-black">
        <AspectRatio ratio={16 / 9}>
          <iframe
            src={video.url}
            title={video.title}
            className="w-full h-full"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </AspectRatio>
      </div>
    );
  }

  return (
    <div 
      className="group cursor-pointer space-y-3" 
      onClick={() => setIsPlaying(true)}
    >
      <div className="relative overflow-hidden bg-secondary">
        <AspectRatio ratio={16 / 9}>
          <img
            src={video.thumbnailUrl}
            alt={video.title}
            className="object-cover w-full h-full grayscale group-hover:grayscale-0 transition-all duration-500"
          />
          <div className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/10 transition-colors">
            <div className="w-12 h-12 flex items-center justify-center rounded-full bg-white/90 backdrop-blur-sm text-black transition-transform duration-300 group-hover:scale-110">
              <Play className="w-5 h-5 fill-current ml-1" />
            </div>
          </div>
        </AspectRatio>
      </div>
      <div className="space-y-1">
        <h3 className="font-heading font-medium text-base leading-snug">
          {video.title}
        </h3>
        <p className="text-xs text-muted-foreground font-mono uppercase tracking-wider">
          {video.client || video.platform}
        </p>
      </div>
    </div>
  );
}
