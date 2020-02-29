import React, {useState} from 'react';
import {createMuiTheme, CssBaseline, responsiveFontSizes, ThemeProvider} from "@material-ui/core";
import {ThemeTypes} from "./types";
import {NavBar} from "./components/NavBar";

const App = () => {
  const [themeType, setThemeType] = useState(ThemeTypes.DARK);

  const theme = createMuiTheme({
    palette: {
      type: themeType,
    },
  });

  const muiTheme = responsiveFontSizes(theme);

  const toggleThemeType = () => {
    let newThemeType = (themeType === ThemeTypes.DARK ? ThemeTypes.LIGHT : ThemeTypes.DARK);
    setThemeType(newThemeType);
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