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
      slug: "dy-gisht-mjalte-2",
      title: "Dy Gisht Mjaltë 2",
      year: "2024",
      posterUrl: dyGishtMjalte2Poster,
      description: "",
      credits: {
        cameraOperator: "Jetmir Zenelaj"
      }
    },
    {
      id: "f2",
      slug: "hive",
      title: "HIVE",
      year: "2023",
      posterUrl: hivePoster,
      description: "",
      credits: {
        cameraOperator: "Jetmir Zenelaj"
      }
    },
    {
      id: "f3",
      slug: "ndera",
      title: "Ndera",
      year: "2023",
      posterUrl: nderaPoster,
      description: "",
      credits: {
        cameraOperator: "Jetmir Zenelaj"
      }
    },
    {
      id: "f4",
      slug: "shame-and-money",
      title: "Shame and Money",
      year: "2022",
      posterUrl: shameAndMoneyPoster,
      description: "",
      credits: {
        cameraOperator: "Jetmir Zenelaj"
      }
    },
    {
      id: "f5",
      slug: "silence-of-sirens",
      title: "Silence of Sirens",
      year: "2022",
      posterUrl: silenceOfSirensPoster,
      description: "",
      credits: {
        cameraOperator: "Jetmir Zenelaj"
      }
    },
    {
      id: "f6",
      slug: "the-land-within",
      title: "The Land Within",
      year: "2021",
      posterUrl: theLandWithinPoster,
      description: "",
      credits: {
        cameraOperator: "Jetmir Zenelaj"
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
import dyGishtMjalte2Poster from "@/assets/Dy Gisht Mjaltë 2.png";
import hivePoster from "@/assets/HIVE.png";
import nderaPoster from "@/assets/Ndera.png";
import shameAndMoneyPoster from "@/assets/Shame and Money.png";
import silenceOfSirensPoster from "@/assets/Silence of Sirens.png";
import theLandWithinPoster from "@/assets/The Land Within.png";
