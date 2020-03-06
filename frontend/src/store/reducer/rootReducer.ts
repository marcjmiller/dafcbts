import { combineReducers } from '@reduxjs/toolkit';
import themeReducer from './slices/themeSlice';
import cbtReducer from './slices/cbtSlice';
import authReducer from './slices/authSlice';

export const rootReducer = combineReducers({
  theme: themeReducer,
  cbts: cbtReducer,
  auth: authReducer,
});

export default rootReducer;