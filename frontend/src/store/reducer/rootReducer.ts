import { combineReducers } from '@reduxjs/toolkit';
import themeReducer from './themeSlice';
import cbtReducer from './cbtSlice';

export const rootReducer = combineReducers({ theme: themeReducer, cbts: cbtReducer });

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;