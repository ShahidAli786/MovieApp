import {NavigatorScreenParams} from '@react-navigation/native';
import {MainTabsParamsList} from '@navigations/types';
import {IMovie, TYPE} from '@definitions/movies';

export type MainStackParamsList = {
  Login: undefined;
  OnBoarding: undefined;
  MainTabs: NavigatorScreenParams<MainTabsParamsList>;
  MoviesList: {title: string; type: TYPE};
  MovieDetails: {info: IMovie};
  SearchMovies: undefined;
};
