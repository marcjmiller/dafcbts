import { AppBar, Button, IconButton, Toolbar, Typography } from '@material-ui/core';
import * as React from 'react';
import LightbulbIcon from '../resources/icons/LightbulbIcon';
import MenuIcon from '../resources/icons/MenuIcon';
import { ThemeType } from '../resources/types';
import { useStyles } from '../resources/theme';

interface MyProps {
  themeType: ThemeType;
  toggleTheme: () => void;
}

export const NavBar: React.FC<MyProps> = (props) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            DumbAFCbts
          </Typography>
          <Button color="inherit">LOGIN</Button>
          <div className={'themeToggle'} onClick={props.toggleTheme}>
            <IconButton color="inherit">
              <LightbulbIcon variant={props.themeType} />
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
};