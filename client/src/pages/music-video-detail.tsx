import { useRoute, Link } from "wouter";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { portfolioData } from "@/data/portfolio";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ExternalLink } from "lucide-react";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import NotFound from "@/pages/not-found";
import { toEmbedUrl, toThumbnailUrl } from "@/lib/video-url";
import { useYoutubeYear } from "@/hooks/use-youtube-year";

export default function MusicVideoDetail() {
  const [, params] = useRoute("/work/music-videos/:slug");
  const video = portfolioData.musicVideos.find((item) => item.slug === params?.slug);

  if (!video) {
    return <NotFound />;
  }

  const embedUrl = toEmbedUrl(video.url, video.platform);
  const thumbnailUrl = toThumbnailUrl(video.url, video.platform, video.thumbnailUrl);
  const year = useYoutubeYear(video.url, video.platform, video.year);

  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <Navbar />

      <main className="flex-1 container mx-auto px-6 py-32">
        <Link
          href="/work?category=music-videos"
          className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground transition-colors mb-12 uppercase tracking-wide"
        >
          <ArrowLeft className="w-4 h-4 mr-2" /> Back to Work
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24">
          <div className="lg:col-span-7">
            <div className="bg-secondary sticky top-32">
              <AspectRatio ratio={16 / 9}>
                {embedUrl ? (
                  <iframe
                    src={embedUrl}
                    title={video.title}
                    className="w-full h-full"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                ) : (
                  <div className="relative w-full h-full bg-black">
                    <img
                      src={thumbnailUrl}
                      alt={video.title}
                      className="w-full h-full object-cover opacity-50"
                    />
                    <div className="absolute inset-0 flex items-center justify-center text-center p-6">
                      <p className="text-sm uppercase tracking-wider text-white/90">
                        Playback unavailable in-page for this platform.
                      </p>
                    </div>
                  </div>
                )}
              </AspectRatio>
            </div>
          </div>

          <div className="lg:col-span-5 flex flex-col justify-center space-y-12">
            <div>
              <h1 className="text-4xl md:text-6xl font-heading font-bold tracking-tight mb-2">
                {video.title}
              </h1>
              <span className="text-xl text-muted-foreground font-mono">{year || "tbd"}</span>
            </div>

            <div className="space-y-8 max-w-prose">
              <p className="text-lg leading-relaxed text-foreground/90">
                {video.description || "Music video project from the Steadycam Operator portfolio."}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 py-8 border-t border-b border-border">
                <div>
                  <h4 className="text-xs uppercase tracking-widest text-muted-foreground mb-2">Production</h4>
                  <p className="font-medium">{video.production}</p>
                </div>
                <div>
                  <h4 className="text-xs uppercase tracking-widest text-muted-foreground mb-2">Director</h4>
                  <p className="font-medium">{video.director}</p>
                </div>
                <div>
                  <h4 className="text-xs uppercase tracking-widest text-muted-foreground mb-2">DOP</h4>
                  <p className="font-medium">{video.dop}</p>
                </div>
              </div>

              {video.url && (
                <div className="flex gap-4">
                  <Button asChild variant="outline" className="rounded-none h-12 px-6 border-foreground/20">
                    <a href={video.url} target="_blank" rel="noopener noreferrer">
                      Watch Original <ExternalLink className="ml-2 w-4 h-4" />
                    </a>
                  </Button>
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
