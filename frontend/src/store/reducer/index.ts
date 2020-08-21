import { InitThemeState } from './slices/themeSlice';
import { InitCbtState } from './slices/cbtSlice';
import { InitAuthState } from './slices/authSlice';
import { InitQuestionState } from './slices/questionSlice';

export * from './rootReducer';

export const InitRootState = {
  InitThemeState,
  InitCbtState,
  InitAuthState,
  InitQuestionState,
};