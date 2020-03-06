import React from 'react';
import { createMuiTheme, CssBaseline, ThemeProvider } from '@material-ui/core';
import { NavBar } from '../features/NavBar';
import { useDispatch, useSelector } from 'react-redux';
import { toggleThemeType } from '../store/reducer/slices/themeSlice';
import { fetchAllCbts } from '../store/actions';
import { RootState } from '../resources/types';
import { AuthStep } from '../store/reducer/slices/authSlice';
import LoginModal from '../features/LoginModal';

const App: React.FC = () => {
  const dispatch = useDispatch();

  setTimeout(() => {
    dispatch(fetchAllCbts());
  }, 500);

  const { themeType } = useSelector(
    (state: RootState) => state.theme,
  );

  const { authStep } = useSelector(
    (state: RootState) => state.auth,
  );

  const muiTheme = createMuiTheme({
    palette: {
      type: themeType,
    },
  });

  const { cbts, error, loading } = useSelector(
    (state: RootState) => state.cbts,
  );

  const toggleTheme = () => {
    dispatch(toggleThemeType());
  };

  const isLoggingIn = authStep === AuthStep.LOGGING_IN;

  return (
    <ThemeProvider theme={muiTheme}>
      <CssBaseline/>
      <div className="App">
        <NavBar themeType={themeType} toggleTheme={toggleTheme}/>
        <LoginModal display={isLoggingIn}/>
      </div>
    </ThemeProvider>
  );
};

export default App;