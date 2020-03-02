import { combineReducers } from '@reduxjs/toolkit';
import themeReducer from './slices/themeSlice';
import cbtReducer from './slices/cbtSlice';

export const rootReducer = combineReducers({ theme: themeReducer, cbts: cbtReducer });

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;