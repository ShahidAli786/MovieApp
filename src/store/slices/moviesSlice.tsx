import {IMovie} from '@definitions/movies';
import {createSlice} from '@reduxjs/toolkit';
import {moviesApis} from '@store/apis/moviesApis';

interface IMoviesState {
  movies: IMovie[];
  currentPage: number;
  isLoading: boolean;
  totalPages: number;
  prevPage: number;
}

const initialState: IMoviesState = {
  movies: [],
  currentPage: 1,
  prevPage: 0,
  isLoading: false,
  totalPages: 1,
};

const moviesSlice = createSlice({
  name: 'movies',
  initialState: initialState,
  reducers: {
    reset: state => {
      state.currentPage = 1;
      state.isLoading = false;
      state.totalPages = 1;
      state.prevPage = 0;
      state.movies = [];
    },
  },
  extraReducers: builder => {
    builder.addMatcher(
      moviesApis.endpoints.retrieveMoviesList.matchPending,
      state => {
        state.isLoading = true;
      },
    );
    builder.addMatcher(
      moviesApis.endpoints.retrieveMoviesList.matchFulfilled,
      (state, {payload}) => {
        state.movies = [...state.movies, ...payload.results];
        state.prevPage = state.currentPage;
        state.currentPage += 1;
        state.totalPages = payload.total_pages;

        state.isLoading = false;
      },
    );
    builder.addMatcher(
      moviesApis.endpoints.retrieveMoviesList.matchRejected,
      state => {
        state.isLoading = false;
      },
    );
  },
});

export const {reset} = moviesSlice.actions;
export default moviesSlice.reducer;
