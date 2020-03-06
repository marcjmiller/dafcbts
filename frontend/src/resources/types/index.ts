import { Action, ThunkAction } from '@reduxjs/toolkit';
import { store } from '../../store';
import { rootReducer } from '../../store/reducer';

export enum ThemeType {
  DARK = 'dark',
  LIGHT = 'light',
}

export type RootState = ReturnType<typeof rootReducer>;

export type AppThunk = ThunkAction<void, RootState, unknown, Action<string>>

export type AppDispatch = typeof store.dispatch;