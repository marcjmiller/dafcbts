import React from 'react';
import { createMuiTheme, CssBaseline, responsiveFontSizes, ThemeProvider } from '@material-ui/core';
import { NavBar } from '../components/NavBar';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../store/reducer';
import { toggleThemeType } from '../store/reducer/slices/themeSlice';
import { fetchAllCbts } from '../store/actions';

const App: React.FC = () => {
  const dispatch = useDispatch();

  setTimeout(() => {
    dispatch(fetchAllCbts());
  }, 500);

  const { themeType } = useSelector(
    (state: RootState) => state.theme,
  );

  const { cbts, error, loading } = useSelector(
    (state: RootState) => state.cbts,
  );

  const theme = createMuiTheme({
    palette: {
      type: themeType,
    },
  });

  const muiTheme = responsiveFontSizes(theme);

  const toggleTheme = () => {
    dispatch(toggleThemeType());
  };

  return (
    <ThemeProvider theme={muiTheme}>
      <CssBaseline/>
      <div className="App">
        <NavBar themeType={themeType} toggleTheme={toggleTheme}/>
      </div>
    </ThemeProvider>
  );
};

export default App;