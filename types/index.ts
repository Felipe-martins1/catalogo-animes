export type IAnime = {
  attributes: {
    createdAt: string;
    updatedAt: string;
    slug: string;
    synopsis: string;
    coverImageTopOffset: number;
    titles: {
      en: string;
      en_jp: string;
      ja_jp: string;
    };
    canonicalTitle: string;
    abbreviatedTitles: string[];
    averageRating: string;
    ratingFrequencies: unknown;
    userCount: number;
    favoritesCount: number;
    startDate: string;
    endDate: string;
    nextRelease: null;
    popularityRank: number;
    ratingRank: number;
    ageRating: string;
    ageRatingGuide: string;
    subtype: string;
    status: string;
    tba: string;
    posterImage: IAnimeImage;
    coverImage: IAnimeImage;
    episodeCount: number;
    episodeLength: number;
    totalLength: number;
    youtubeVideoId: string;
    showType: string;
    nsfw: boolean;
  };
};

type IAnimeImage = {
  tiny: string;
  small: string;
  medium: string;
  large: string;
  original: string;
};

export type IAPIResponse = {
  data: IAnime[];
  links: {
    first: string;
    last: string;
    next: string;
  };
  meta: {
    count: number;
  };
};
