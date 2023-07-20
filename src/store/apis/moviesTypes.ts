import {IMovie} from '@definitions/movies';

export interface IMoviesListResponse {
  page: number;
  results: IMovie[];
  total_results: number;
  total_pages: number;
}

export interface INowPlayingsResponse extends IMoviesListResponse {
  dates: {
    maximum: string;
    minimum: string;
  };
}
