import React from 'react';
import { createMuiTheme, CssBaseline, ThemeProvider } from '@material-ui/core';
import { NavBar } from '../features/dashboard/NavBar';
import { useDispatch, useSelector } from 'react-redux';
import { toggleThemeType } from '../store/reducer/slices/themeSlice';
import { RootState } from '../resources/types';
import { AuthStep } from '../store/reducer/slices/authSlice';
import LoginModal from '../features/login/LoginModal';
import Dashboard from '../features/dashboard/cbtDashboard/CbtDashboard';
import Footer from '../features/dashboard/Footer';
import { baseStyles } from '../resources/theme';

const App: React.FC = () => {
  const dispatch = useDispatch();

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

  const toggleTheme = () => {
    dispatch(toggleThemeType());
  };

  const classes = baseStyles();
  const isLoggingIn = authStep === AuthStep.LOGGING_IN;

  return (
    <ThemeProvider theme={muiTheme}>
      <CssBaseline/>
      <div className={classes.app}>
        <NavBar themeType={themeType} toggleTheme={toggleTheme}/>
        <Dashboard/>
        <Footer/>
        <LoginModal display={isLoggingIn}/>
      </div>
    </ThemeProvider>
  );
};

export default App;