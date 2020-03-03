import reducer, { InitThemeState, toggleThemeType } from '../../store/reducer/slices/themeSlice';
import { ThemeTypes } from '../../types';

describe('ThemeReducer tests', () => {
  it('should return the initial state', () => {
    const result = reducer(undefined, { type: '' });
    expect(result).toEqual(InitThemeState);
  });

  it('should toggle the themeType on a toggleThemeType action', () => {
    const nextState = reducer(InitThemeState, toggleThemeType());
    expect(nextState.themeType).toEqual(ThemeTypes.LIGHT);

    const newState = reducer(nextState, toggleThemeType());
    expect(newState.themeType).toEqual(ThemeTypes.DARK);
  });

});
