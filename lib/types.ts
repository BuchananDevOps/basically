export type Image = {
    url: string;
    blurDataURL?: string;
  };

export type Media = {
    name: string;
    description: string;
    slug: string;
    website: string;
    callToAction: string;
    callToActionLink: string;
    links: MediaLink[];
    discord: string;
    tier: string;
    cardImage: Image;
    logo: Image;
    youtubeSlug: string;
  };
  
  export type MediaLink = {
    text: string;
    url: string;
  };