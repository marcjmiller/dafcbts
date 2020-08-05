import { InitThemeState } from './slices/themeSlice';
import { InitCbtState } from './slices/cbtSlice';
import { InitAuthState } from './slices/authSlice';

export * from './rootReducer';

export const InitRootState = {
  InitThemeState,
  InitCbtState,
  InitAuthState,
};