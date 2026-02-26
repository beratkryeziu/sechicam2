import dyGishtMjalte2Poster from "@/assets/Dy Gisht Mjaltë 2.png";
import hivePoster from "@/assets/HIVE.png";
import nderaPoster from "@/assets/Ndera.png";
import shameAndMoneyPoster from "@/assets/Shame and Money.png";
import silenceOfSirensPoster from "@/assets/Silence of Sirens.png";
import theLandWithinPoster from "@/assets/The Land Within.png";

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
  url: string;
  thumbnailUrl: string;
}

export interface CommercialProject {
  id: string;
  slug: string;
  title: string;
  year?: string;
  client: string;
  production: string;
  director: string;
  dop: string;
  platform: "youtube" | "vimeo" | "facebook" | "unknown";
  url?: string;
  thumbnailUrl: string;
  description?: string;
}

export interface MusicVideoProject {
  id: string;
  slug: string;
  title: string;
  year?: string;
  production: string;
  director: string;
  dop: string;
  platform: "youtube" | "vimeo" | "facebook" | "unknown";
  url?: string;
  thumbnailUrl: string;
  description?: string;
}

export interface PortfolioData {
  films: FilmProject[];
  commercials: CommercialProject[];
  musicVideos: MusicVideoProject[];
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
        cameraOperator: "Jetmir Zenelaj",
      },
    },
    {
      id: "f2",
      slug: "hive",
      title: "HIVE",
      year: "2023",
      posterUrl: hivePoster,
      description: "",
      credits: {
        cameraOperator: "Jetmir Zenelaj",
      },
    },
    {
      id: "f3",
      slug: "ndera",
      title: "Ndera",
      year: "2023",
      posterUrl: nderaPoster,
      description: "",
      credits: {
        cameraOperator: "Jetmir Zenelaj",
      },
    },
    {
      id: "f4",
      slug: "shame-and-money",
      title: "Shame and Money",
      year: "2022",
      posterUrl: shameAndMoneyPoster,
      description: "",
      credits: {
        cameraOperator: "Jetmir Zenelaj",
      },
    },
    {
      id: "f5",
      slug: "silence-of-sirens",
      title: "Silence of Sirens",
      year: "2022",
      posterUrl: silenceOfSirensPoster,
      description: "",
      credits: {
        cameraOperator: "Jetmir Zenelaj",
      },
    },
    {
      id: "f6",
      slug: "the-land-within",
      title: "The Land Within",
      year: "2021",
      posterUrl: theLandWithinPoster,
      description: "",
      credits: {
        cameraOperator: "Jetmir Zenelaj",
      },
    },
  ],
  commercials: [
    {
      id: "c1",
      slug: "ipko-telecom-1",
      title: "IPKO Telecom",
      client: "IPKO Telecom",
      production: "Koperativa",
      director: "Yll Çitaku",
      dop: "Aleksandar Krstevski",
      platform: "youtube",
      url: "https://www.youtube.com/watch?v=GLqYb_G6vLk",
      thumbnailUrl: "/assets/thumb_1.jpg",
    },
    {
      id: "c2",
      slug: "albi-mall-1",
      title: "Albi Mall",
      client: "Albi Mall",
      production: "Base Agency",
      director: "Genc Dobroshi",
      dop: "Aleksandar Krstevski",
      platform: "facebook",
      url: "https://www.facebook.com/baseadvertisingagency/videos/albi-mall-gjilan-reklama/662232262732725/",
      thumbnailUrl: "/assets/thumb_2.jpg",
    },
    {
      id: "c3",
      slug: "ipko-telecom-2",
      title: "IPKO Telecom",
      client: "IPKO Telecom",
      production: "New Moment",
      director: "Marko Gjokovik",
      dop: "Aleksandar Krstevski",
      platform: "youtube",
      url: "https://www.youtube.com/watch?v=g5YYayj2j7w",
      thumbnailUrl: "/assets/thumb_3.jpg",
    },
    {
      id: "c4",
      slug: "casino-flamingo",
      title: "Casino Flamingo",
      client: "Casino Flamingo",
      production: "Vertigo",
      director: "Marko Gjokovik",
      dop: "Aleksandar Krstevski",
      platform: "vimeo",
      url: "https://vimeo.com/923380037",
      thumbnailUrl: "/assets/thumb_1.jpg",
    },
    {
      id: "c5",
      slug: "neptun-albania",
      title: "Neptun Albania",
      client: "Neptun Albania",
      production: "Clique Al",
      director: "Besmir Limani",
      dop: "Shpetim Baça",
      platform: "youtube",
      url: "https://www.youtube.com/watch?v=bcJ6qwfIrmY",
      thumbnailUrl: "/assets/thumb_2.jpg",
    },
    {
      id: "c6",
      slug: "nimi-tv",
      title: "Nimi TV",
      client: "Nimi TV",
      production: "Shift Agency",
      director: "Shkamb Goranci",
      dop: "Aleksandar Krstevski",
      platform: "vimeo",
      url: "https://vimeo.com/1040938792",
      thumbnailUrl: "/assets/thumb_3.jpg",
    },
    {
      id: "c7",
      slug: "viva-fresh-store",
      title: "Viva Fresh Store",
      client: "Viva Fresh Store",
      production: "ZeroPozitive",
      director: "Aron Dobroshi",
      dop: "Aleksandar Krstevski",
      platform: "youtube",
      url: "https://www.youtube.com/watch?v=xbqrZzp_iP4",
      thumbnailUrl: "/assets/thumb_1.jpg",
    },
    {
      id: "c8",
      slug: "kosovo-olympic-committee",
      title: "Kosovo Olympic Committee",
      client: "Kosovo Olympic Committee",
      production: "Vertigo",
      director: "Valon Bajgora",
      dop: "Aleksandar Krstevski",
      platform: "youtube",
      url: "https://www.youtube.com/watch?v=8YcIpqKgJAo",
      thumbnailUrl: "/assets/thumb_2.jpg",
    },
    {
      id: "c9",
      slug: "selita-water",
      title: "Selita Water",
      client: "Selita Water",
      production: "Llunatik",
      director: "Yll Zymberi",
      dop: "Aleksandar Krstevski",
      platform: "youtube",
      url: "https://www.youtube.com/watch?v=ksp1kakKXS0",
      thumbnailUrl: "/assets/thumb_3.jpg",
    },
    {
      id: "c10",
      slug: "true-religion-snipes",
      title: "True Religion & Snipes",
      client: "True Religion & Snipes",
      production: "Ikonë Studio",
      director: "Ari Dalladaku",
      dop: "Aleksandar Krstevski",
      platform: "vimeo",
      url: "https://vimeo.com/1040974667",
      thumbnailUrl: "/assets/thumb_1.jpg",
    },
    {
      id: "c11",
      slug: "pro-credit-bank",
      title: "Pro Credit Bank",
      client: "Pro Credit Bank",
      production: "Llunatik",
      director: "Yll Zymberi",
      dop: "Aleksandar Krstevski",
      platform: "youtube",
      url: "https://www.youtube.com/watch?v=k_gDJ_pxC3Q",
      thumbnailUrl: "/assets/thumb_2.jpg",
    },
    {
      id: "c12",
      slug: "dental-med-austria",
      title: "Dental Med Austria",
      client: "Dental Med Austria",
      production: "Base Agency",
      director: "Genc Dobroshi",
      dop: "Aleksandar Krstevski",
      platform: "youtube",
      url: "https://www.youtube.com/watch?v=nOuys5BFOg4",
      thumbnailUrl: "/assets/thumb_3.jpg",
    },
    {
      id: "c13",
      slug: "go-energy-drink",
      title: "GO+ Energy Drink",
      client: "GO+ Energy Drink",
      production: "Llunatik",
      director: "Yll Zymberi",
      dop: "Aleksandar Krstevski",
      platform: "youtube",
      url: "https://www.youtube.com/watch?v=LVta-QjAmjY",
      thumbnailUrl: "/assets/thumb_1.jpg",
    },
    {
      id: "c14",
      slug: "ipko-telecom-3",
      title: "IPKO Telecom",
      client: "IPKO Telecom",
      production: "New Moment",
      director: "Marko Gjokovik",
      dop: "Aleksandar Krstevski",
      platform: "youtube",
      url: "https://www.youtube.com/watch?v=yybsfflF95w",
      thumbnailUrl: "/assets/thumb_2.jpg",
    },
    {
      id: "c15",
      slug: "golden-eagle",
      title: "Golden Eagle",
      client: "Golden Eagle",
      production: "Aviano",
      director: "Veton Bekteshi",
      dop: "Aleksandar Krstevski",
      platform: "youtube",
      url: "https://www.youtube.com/watch?v=G9Czf5JnQzA",
      thumbnailUrl: "/assets/thumb_3.jpg",
    },
    {
      id: "c16",
      slug: "amstel-beer",
      title: "Amstel Beer",
      client: "Amstel Beer",
      production: "OZ Productions",
      director: "Marko Gjokovik",
      dop: "Igor Vukovic",
      platform: "unknown",
      thumbnailUrl: "/assets/thumb_1.jpg",
    },
    {
      id: "c17",
      slug: "elbar-beer",
      title: "Elbar Beer",
      client: "Elbar Beer",
      production: "OZ Productions",
      director: "Luka Sepcic",
      dop: "Ante Vitanović",
      platform: "unknown",
      thumbnailUrl: "/assets/thumb_2.jpg",
    },
    {
      id: "c18",
      slug: "peja-chill-beer",
      title: "Peja Chill Beer",
      client: "Peja Chill Beer",
      production: "Llunatik",
      director: "Yll Zymberi",
      dop: "Aleksandar Krstevski",
      platform: "youtube",
      url: "https://www.youtube.com/watch?v=zrWwNKkAH70",
      thumbnailUrl: "/assets/thumb_3.jpg",
    },
    {
      id: "c19",
      slug: "tikves-winery",
      title: "Tikveś Winery",
      client: "Tikveś Winery",
      production: "Adventure",
      director: "Marko Gjokovik",
      dop: "Aleksandar Krstevski",
      platform: "unknown",
      thumbnailUrl: "/assets/thumb_1.jpg",
    },
    {
      id: "c20",
      slug: "ipko-telecom-4",
      title: "IPKO Telecom",
      client: "IPKO Telecom",
      production: "New Moment",
      director: "Marko Gjokovik",
      dop: "Aleksandar Krstevski",
      platform: "unknown",
      thumbnailUrl: "/assets/thumb_2.jpg",
    },
    {
      id: "c21",
      slug: "albi-mall-2",
      title: "Albi Mall",
      client: "Albi Mall",
      production: "Base Agency",
      director: "Genc Dobroshi",
      dop: "Aleksandar Krstevski",
      platform: "unknown",
      thumbnailUrl: "/assets/thumb_3.jpg",
    },
    {
      id: "c22",
      slug: "art-motion",
      title: "Art Motion",
      client: "Art Motion",
      production: "Llunatik",
      director: "Yll Zymberi",
      dop: "Aleksandar Krstevski",
      platform: "youtube",
      url: "https://www.youtube.com/watch?v=pKRliuO1mUM",
      thumbnailUrl: "/assets/thumb_1.jpg",
    },
  ],
  musicVideos: [
    {
      id: "mv1",
      slug: "dardan-laufen",
      title: "Dardan - Laufen",
      production: "Ikone Studio",
      director: "Fitim Rrustemi",
      dop: "Aleksandar Krstevski",
      platform: "youtube",
      url: "https://www.youtube.com/watch?v=UQ749LxiiQE&list=RDUQ749LxiiQE&start_radio=1",
      thumbnailUrl: "/assets/thumb_1.jpg",
    },
    {
      id: "mv2",
      slug: "azet-dradan-gang",
      title: "Azet ft Dradan - Gang",
      production: "Fati TV",
      director: "Fitim Rrustemi",
      dop: "Gëzim Hysenaj",
      platform: "youtube",
      url: "https://www.youtube.com/watch?v=0sfIzm5-gZ0&list=RD0sfIzm5-gZ0&start_radio=1",
      thumbnailUrl: "/assets/thumb_2.jpg",
    },
    {
      id: "mv3",
      slug: "samra-nie-wieder-tilidin",
      title: "Samra - Nie Wieder Tilidin",
      production: "Fati TV",
      director: "Fitim Rrustemi",
      dop: "Gëzim Hysenaj",
      platform: "youtube",
      url: "https://www.youtube.com/watch?v=CSZ03HonL48&list=RDCSZ03HonL48&start_radio=1",
      thumbnailUrl: "/assets/thumb_3.jpg",
    },
    {
      id: "mv4",
      slug: "dardan-azet-malli",
      title: "Dardan ft Azet - Malli",
      production: "Fati TV",
      director: "Fitim Rrustemi",
      dop: "Gëzim Hysenaj",
      platform: "youtube",
      url: "https://www.youtube.com/watch?v=j9pfh4RCNKw&list=RDj9pfh4RCNKw&start_radio=1",
      thumbnailUrl: "/assets/thumb_1.jpg",
    },
    {
      id: "mv5",
      slug: "elvana-gjata-pak",
      title: "Elvana Gjata - Pak",
      production: "Supercut Studio",
      director: "Besian Durmishi",
      dop: "Arianit Gjonbalaj",
      platform: "youtube",
      url: "https://www.youtube.com/watch?v=tvihtNxEn6o&list=RDtvihtNxEn6o&start_radio=1",
      thumbnailUrl: "/assets/thumb_2.jpg",
    },
    {
      id: "mv6",
      slug: "dafina-zeqiri-shpat-deda-naten",
      title: "Dafina Zeqiri ft Shpat Deda - Naten",
      production: "Enter Media",
      director: "Genc Mehmetaj",
      dop: "Flamur Hasani",
      platform: "youtube",
      url: "https://www.youtube.com/watch?v=Fx6mXjSvZ54&list=RDFx6mXjSvZ54&start_radio=1",
      thumbnailUrl: "/assets/thumb_3.jpg",
    },
    {
      id: "mv7",
      slug: "xhesila-ledri-vula-ma-kthe",
      title: "Xhesila ft Ledri Vula - Ma kthe",
      production: "Dilli Studios",
      director: "Fat Gjakova",
      dop: "Aleksandar Krstevski",
      platform: "youtube",
      url: "https://www.youtube.com/watch?v=2Z-ZSosLFaY&list=RD2Z-ZSosLFaY&start_radio=1",
      thumbnailUrl: "/assets/thumb_1.jpg",
    },
    {
      id: "mv8",
      slug: "dafina-zeqiri-ku-shkove-naten",
      title: "Dafina Zeqiri - Ku Shkove Naten",
      production: "Basement",
      director: "Dren Berisha",
      dop: "Aleksandar Krstevski",
      platform: "youtube",
      url: "https://www.youtube.com/watch?v=FSx8F8P72Uk&list=RDFSx8F8P72Uk&start_radio=1",
      thumbnailUrl: "/assets/thumb_2.jpg",
    },
  ],
};
