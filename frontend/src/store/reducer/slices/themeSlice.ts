import { createSlice } from '@reduxjs/toolkit';
import { ThemeTypes } from '../../../types';

interface ThemeState {
  themeType: ThemeTypes.DARK | ThemeTypes.LIGHT
}

const initialState: ThemeState = {
  themeType: ThemeTypes.DARK,
};

const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    toggleTheme(state) {
      if (state.themeType === ThemeTypes.DARK) {
        state.themeType = ThemeTypes.LIGHT
      } else {
        state.themeType = ThemeTypes.DARK
      }
    },
  },
});

export const { toggleTheme } = themeSlice.actions;

export default themeSlice.reducer;