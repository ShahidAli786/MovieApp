import {configureStore, ThunkAction, Action} from '@reduxjs/toolkit';
import {moviesApis} from './apis/moviesApis';
import counterSlice from './slices/counterSlice';
import moviesSlice from './slices/moviesSlice';

export const store = configureStore({
  reducer: {
    counter: counterSlice,
    [moviesApis.reducerPath]: moviesApis.reducer,
    movies: moviesSlice,
  },
  middleware: getDefaultMiddleware => [
    ...getDefaultMiddleware(),
    moviesApis.middleware,
  ],
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
