import { combineReducers } from '@reduxjs/toolkit';
import themeReducer from './slices/themeSlice';
import cbtReducer from './slices/cbtSlice';
import authReducer from './slices/authSlice';
import questionReducer from './slices/questionSlice'

export const rootReducer = combineReducers({
  theme: themeReducer,
  cbts: cbtReducer,
  questions: questionReducer,
  auth: authReducer,
});

export default rootReducer;