import React, { useLayoutEffect } from 'react';
import { createMuiTheme, CssBaseline, responsiveFontSizes, ThemeProvider } from '@material-ui/core';
import { NavBar } from '../components/NavBar';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../store/reducer';
import { toggleTheme } from '../store/reducer/slices/themeSlice';
import { fetchAllCbts } from '../store/actions';

const App: React.FC = () => {
  const dispatch = useDispatch();

  useLayoutEffect(() => {
      dispatch(fetchAllCbts());
  });

  const { themeType } = useSelector(
    (state: RootState) => state.theme,
  );

  // const { cbts } = useSelector(
  //   (state: RootState) => state.cbts,
  // );

  const theme = createMuiTheme({
    palette: {
      type: themeType,
    },
  });

  const muiTheme = responsiveFontSizes(theme);


  const toggleThemeType = () => {
    dispatch(toggleTheme());
  };

  return (
    <ThemeProvider theme={muiTheme}>
      <CssBaseline/>
      <div className="App">
        <NavBar themeType={themeType} toggleThemeType={toggleThemeType}/>
        <header className="App-header">
          Hello World
        </header>
      </div>
    </ThemeProvider>
  );
};

export default App;