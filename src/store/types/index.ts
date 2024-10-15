export type INullable<T> = null | T;

type ICountriesFilm = {
  country: string;
};

type IGenre = {
  genre: string;
};

export type IFilmsData = {
  kinopoiskId?: number;
  filmId?: number;
  imdbId: string;
  nameRu: INullable<string>;
  nameEn: INullable<string>;
  nameOriginal: INullable<string>;
  countries: [ICountriesFilm];
  genres: [IGenre];
  ratingKinopoisk: number;
  ratingImdb: number;
  year: number;
  type: string;
  posterUrl: string;
  posterUrlPreview: string;
};

export type IDetailedFilmsData = IFilmsData & {
  kinopoiskHDId?: string;
  coverUrl?: string;
  logoUrl?: string;
  reviewsCount?: number;
  ratingGoodReview?: number;
  ratingGoodReviewVoteCount?: number;
  ratingKinopoiskVoteCount?: number;
  ratingImdbVoteCount?: number;
  ratingFilmCritics?: number;
  ratingFilmCriticsVoteCount?: number;
  ratingAwait?: number;
  ratingAwaitCount?: number;
  ratingRfCritics?: number;
  ratingRfCriticsVoteCount?: number;
  webUrl?: string;
  filmLength?: number;
  slogan?: string;
  description?: string;
  shortDescription?: string;
  editorAnnotation?: string;
  isTicketsAvailable?: boolean;
  productionStatus?: string;
  ratingMpaa?: string;
  ratingAgeLimits?: string;
  hasImax?: boolean;
  has3D?: boolean;
  lastSync?: string;
  startYear?: number;
  endYear?: number;
  serial?: boolean;
  shortFilm?: boolean;
  completed?: boolean;
};
