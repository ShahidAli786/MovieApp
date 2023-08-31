export type TYPE = 'upcoming' | 'top_rated' | 'now_playing' | 'popular';

export interface Genre {
  id: number;
  name: string;
}

export interface IMovie {
  id: number;
  title: string;
  original_title: string;
  poster_path: string;
  adult: boolean;
  overview: string;
  release_date: string;
  genre_ids: number[];
  original_language: string;
  backdrop_path: string;
  popularity: number;
  vote_count: number;
  video: boolean;
  vote_average: number;
}

export interface Collection {
  id: number;
  backdrop_path: string;
  name: string;
  poster_path: string;
}

// interface Company {
//   id: number;
//   logo_path: string;
//   name: string;
// }
// interface Country {
//   iso_3166_1: string;
//   name: string;
// }
// interface Language {
//   iso_639_1: string;
//   name: string;
// }

type ProductionCompany = {
  id: number;
  logo_path: string | null;
  name: string;
  origin_country: string;
};

type SpokenLanguage = {
  english_name: string;
  iso_639_1: string;
  name: string;
};

type Cast = {
  adult: boolean;
  gender: number;
  id: number;
  known_for_department: string;
  name: string;
  original_name: string;
  popularity: number;
  profile_path: string | null;
  cast_id: number;
  character: string;
  credit_id: string;
  order: number;
};

type Movie = {
  adult: boolean;
  backdrop_path: string | null;
  belongs_to_collection: null | string;
  budget: number;
  genres: Genre[];
  homepage: string;
  id: number;
  imdb_id: string;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string | null;
  production_companies: ProductionCompany[];
  production_countries: {iso_3166_1: string; name: string}[];
  release_date: string;
  revenue: number;
  runtime: number;
  spoken_languages: SpokenLanguage[];
  status: string;
  tagline: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
  casts: {cast: Cast[]};
  images: ImageData;
};

type Backdrop = {
  aspect_ratio: number;
  height: number;
  iso_639_1: string | null;
  file_path: string;
  vote_average: number;
  vote_count: number;
  width: number;
};

type ImageData = {
  backdrops: Backdrop[];
};

export interface IMovieDetails extends Movie {}
