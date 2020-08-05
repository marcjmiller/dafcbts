import { createSlice } from '@reduxjs/toolkit';
import { ThemeType } from '../../../resources/types';

interface ThemeState {
  themeType: ThemeType
}

const initialState: ThemeState = {
  themeType: ThemeType.DARK,
};

const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    toggleThemeType(state) {
      if (state.themeType === ThemeType.DARK) {
        state.themeType = ThemeType.LIGHT;
      } else {
        state.themeType = ThemeType.DARK;
      }
    },
  },
});

export const { toggleThemeType } = themeSlice.actions;

export default themeSlice.reducer;

export const InitThemeState = initialState;