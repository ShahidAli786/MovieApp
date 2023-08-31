import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/dist/query/react';
import {TMDB_API_KEY, TMDB_URL} from '@config/config';
import {Genre, IMovieDetails, TYPE} from '@definitions/movies';
import {IMoviesListResponse, INowPlayingsResponse} from './moviesTypes';

console.log(TMDB_URL);
export const moviesApis = createApi({
  reducerPath: 'createPostApis',
  baseQuery: fetchBaseQuery({
    baseUrl: TMDB_URL,
  }),

  endpoints: builder => ({
    retrieveMoviesGenres: builder.query<{genres: Genre[]}, void>({
      query: () => `/genre/movie/list?api_key=${TMDB_API_KEY}`,
    }),
    retrievePopularMovies: builder.query<IMoviesListResponse, {page: number}>({
      query: ({page}) => `/movie/popular?api_key=${TMDB_API_KEY}&page=${page}`,
    }),
    retrieveNowPlaying: builder.query<INowPlayingsResponse, {page: number}>({
      query: ({page}) =>
        `/movie/now_playing?api_key=${TMDB_API_KEY}&page=${page}`,
    }),
    retrieveMovieDetails: builder.query<IMovieDetails, {movieId: number}>({
      query: ({movieId}) =>
        `movie/${movieId}?api_key=${TMDB_API_KEY}&append_to_response=casts,images,videos`,
    }),
    retrieveMoviesList: builder.query<
      IMoviesListResponse,
      {page: number; type: TYPE}
    >({
      query: ({page, type}) =>
        `/movie/${type}?api_key=${TMDB_API_KEY}&page=${page}`,
      // Refetch when the page arg changes
      forceRefetch({currentArg, previousArg}) {
        return currentArg !== previousArg;
      },
    }),
  }),
});

export const {
  useRetrieveMoviesGenresQuery: useRetrieveMoviesGenres,
  useRetrievePopularMoviesQuery: useRetrievePopularMovies,
  useRetrieveNowPlayingQuery: useRetrieveNowPlaying,
  useRetrieveMoviesListQuery: useRetrieveMoviesList,
  useRetrieveMovieDetailsQuery: useRetrieveMovieDetails,
} = moviesApis;
