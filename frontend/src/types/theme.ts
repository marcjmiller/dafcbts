import { colors } from './colors';

export const globalTheme = {
  color: {
    fontColorPrimary: colors.black,
  },

  font: {
    familyPrimary: 'Roboto',
    sizePrimary: '16px',
  },
};

export enum ThemeTypes {
  DARK = 'dark',
  LIGHT = 'light',
}