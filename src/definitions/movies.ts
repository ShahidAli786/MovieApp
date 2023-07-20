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

interface Company {
  id: number;
  logo_path: string;
  name: string;
}
interface Country {
  iso_3166_1: string;
  name: string;
}
interface Language {
  iso_639_1: string;
  name: string;
}

export interface IMovieDetails extends IMovie {
  belongs_to_collection: Collection;
  budget: number;
  genres: Genre[];
  homepage: string;
  imdb_id: string;
  production_companies: Company[];
  production_countries: Country[];
  revenue: number;
  runtime: number;
  spoken_languages: Language[];
  status: string;
  tagline: string;
}
