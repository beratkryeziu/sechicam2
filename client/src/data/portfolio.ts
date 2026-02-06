export interface Credit {
  cameraOperator: string;
  steadicamOperator?: string;
  director?: string;
  dop?: string;
}

export interface FilmProject {
  id: string;
  slug: string;
  title: string;
  year: string;
  posterUrl: string;
  description: string;
  credits: Credit;
  links?: { label: string; url: string }[];
}

export interface VideoProject {
  id: string;
  title: string;
  client?: string;
  platform: "youtube" | "vimeo" | "instagram";
  url: string; // The full URL or embed ID
  thumbnailUrl: string;
}

export interface PortfolioData {
  films: FilmProject[];
  commercials: VideoProject[];
  musicVideos: VideoProject[];
}

export const portfolioData: PortfolioData = {
  films: [
    {
      id: "f1",
      slug: "shadows-of-tomorrow",
      title: "Shadows of Tomorrow",
      year: "2024",
      posterUrl: "/assets/poster_1.jpg",
      description: "A gritty neo-noir thriller set in a dystopian near-future. The camera work emphasizes the isolation of the protagonist through wide, static frames and slow, creeping steadicam moves that suggest an unseen observer.",
      credits: {
        cameraOperator: "Alex Chen",
        steadicamOperator: "Sarah Jenkins",
        director: "Elena Rossi",
        dop: "Marcus Thorne"
      },
      links: [
        { label: "IMDb", url: "#" },
        { label: "Trailer", url: "#" }
      ]
    },
    {
      id: "f2",
      slug: "neon-nights",
      title: "Neon Nights",
      year: "2023",
      posterUrl: "/assets/poster_2.jpg",
      description: "An independent drama exploring the underground racing scene. Shot entirely at night, requiring high-sensitivity sensors and fast steadicam operation to keep up with the action without losing the intimate emotional beats.",
      credits: {
        cameraOperator: "Sarah Jenkins",
        director: "James O'Connor"
      }
    },
    {
      id: "f3",
      slug: "the-silent-echo",
      title: "The Silent Echo",
      year: "2023",
      posterUrl: "/assets/poster_3.jpg",
      description: "A psychological horror film that relies on long takes to build tension. The steadicam was used to create a floating, dream-like quality that contrasts with the harsh reality of the narrative.",
      credits: {
        cameraOperator: "Sarah Jenkins",
        steadicamOperator: "Sarah Jenkins",
        dop: "David Kim"
      }
    },
    {
      id: "f4",
      slug: "urban-rhythm",
      title: "Urban Rhythm",
      year: "2022",
      posterUrl: "/assets/poster_1.jpg",
      description: "A musical documentary capturing the pulse of the city. Handheld and steadicam work blends seamlessly to follow the dancers through chaotic street environments.",
      credits: {
        cameraOperator: "Sarah Jenkins",
      }
    },
    {
      id: "f5",
      slug: "last-train-home",
      title: "Last Train Home",
      year: "2022",
      posterUrl: "/assets/poster_2.jpg",
      description: "An intimate character study filmed primarily on public transport. The challenge was to operate effectively in tight, moving spaces while maintaining stability.",
      credits: {
        cameraOperator: "Michael Ross",
        steadicamOperator: "Sarah Jenkins"
      }
    },
    {
      id: "f6",
      slug: "veridian",
      title: "Veridian",
      year: "2021",
      posterUrl: "/assets/poster_3.jpg",
      description: "Sci-fi short film featuring complex action sequences. Required precise coordination between stunts, VFX, and camera movement.",
      credits: {
        cameraOperator: "Sarah Jenkins",
        steadicamOperator: "Sarah Jenkins"
      }
    }
  ],
  commercials: [
    {
      id: "c1",
      title: "Nike - Run The City",
      client: "Nike",
      platform: "vimeo",
      url: "https://player.vimeo.com/video/76979871", // Placeholder
      thumbnailUrl: "/assets/thumb_1.jpg"
    },
    {
      id: "c2",
      title: "Coca Cola - Summer",
      client: "Coca Cola",
      platform: "youtube",
      url: "https://www.youtube.com/embed/dQw4w9WgXcQ", // Placeholder
      thumbnailUrl: "/assets/thumb_2.jpg"
    },
    {
      id: "c3",
      title: "BMW - Sheer Driving",
      client: "BMW",
      platform: "vimeo",
      url: "https://player.vimeo.com/video/76979871",
      thumbnailUrl: "/assets/thumb_3.jpg"
    },
    {
      id: "c4",
      title: "Apple - Vision",
      client: "Apple",
      platform: "youtube",
      url: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      thumbnailUrl: "/assets/thumb_1.jpg"
    },
    {
      id: "c5",
      title: "Samsung - Galaxy",
      client: "Samsung",
      platform: "vimeo",
      url: "https://player.vimeo.com/video/76979871",
      thumbnailUrl: "/assets/thumb_2.jpg"
    },
    {
      id: "c6",
      title: "Adidas - Impossible",
      client: "Adidas",
      platform: "youtube",
      url: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      thumbnailUrl: "/assets/thumb_3.jpg"
    },
    {
      id: "c7",
      title: "Tesla - Autopilot",
      client: "Tesla",
      platform: "vimeo",
      url: "https://player.vimeo.com/video/76979871",
      thumbnailUrl: "/assets/thumb_1.jpg"
    },
    {
      id: "c8",
      title: "Sony - Alpha",
      client: "Sony",
      platform: "youtube",
      url: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      thumbnailUrl: "/assets/thumb_2.jpg"
    }
  ],
  musicVideos: [
    {
      id: "mv1",
      title: "The Weeknd - Blinding Lights (Cover)",
      platform: "youtube",
      url: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      thumbnailUrl: "/assets/thumb_3.jpg"
    },
    {
      id: "mv2",
      title: "Dua Lipa - Levitating (Remix)",
      platform: "vimeo",
      url: "https://player.vimeo.com/video/76979871",
      thumbnailUrl: "/assets/thumb_1.jpg"
    },
    {
      id: "mv3",
      title: "Kendrick Lamar - DNA",
      platform: "youtube",
      url: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      thumbnailUrl: "/assets/thumb_2.jpg"
    },
    {
      id: "mv4",
      title: "Tame Impala - Lost In Yesterday",
      platform: "vimeo",
      url: "https://player.vimeo.com/video/76979871",
      thumbnailUrl: "/assets/thumb_3.jpg"
    },
    {
      id: "mv5",
      title: "Arctic Monkeys - Do I Wanna Know?",
      platform: "youtube",
      url: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      thumbnailUrl: "/assets/thumb_1.jpg"
    },
    {
      id: "mv6",
      title: "Billie Eilish - Bad Guy",
      platform: "vimeo",
      url: "https://player.vimeo.com/video/76979871",
      thumbnailUrl: "/assets/thumb_2.jpg"
    },
    {
      id: "mv7",
      title: "Gorillaz - Feel Good Inc",
      platform: "youtube",
      url: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      thumbnailUrl: "/assets/thumb_3.jpg"
    },
    {
      id: "mv8",
      title: "Daft Punk - Get Lucky",
      platform: "vimeo",
      url: "https://player.vimeo.com/video/76979871",
      thumbnailUrl: "/assets/thumb_1.jpg"
    }
  ]
};
