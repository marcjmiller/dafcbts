import { AppBar, Button, createStyles, IconButton, Theme, Toolbar, Typography } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import Brightness7Icon from '@material-ui/icons/Brightness7';
import Brightness4Icon from '@material-ui/icons/Brightness4';
import { makeStyles } from '@material-ui/core/styles';
import * as React from 'react';
import { ThemeTypes } from '../types';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
  }),
);

interface OwnProps {
  themeType: string;
  toggleThemeType: () => void;
}

export const NavBar: React.FC<OwnProps> = (props) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon/>
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            DumbAFCbts
          </Typography>
          <Button color="inherit">Login</Button>
          <IconButton color="inherit" onClick={props.toggleThemeType}>
            {
              props.themeType === ThemeTypes.DARK ?
                <Brightness7Icon/>
                :
                <Brightness4Icon/>
            }
          </IconButton>

        </Toolbar>
      </AppBar>
    </div>
  );
}