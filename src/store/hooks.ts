import {TypedUseSelectorHook, useDispatch, useSelector} from 'react-redux';
import type {RootState, AppDispatch} from './createStore';

// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useAppDispatch: () => AppDispatch | any = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
