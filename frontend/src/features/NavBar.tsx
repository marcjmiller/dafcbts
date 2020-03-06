import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState, ThemeType } from '../resources/types';
import { useStyles } from '../resources/theme';
import { AuthStep, signOut, signInStart } from '../store/reducer/slices/authSlice';
import { AppBar, Button, IconButton, Toolbar, Typography } from '@material-ui/core';
import MenuIcon from '../resources/icons/MenuIcon';
import LightbulbIcon from '../resources/icons/LightbulbIcon';

interface MyProps {
  themeType: ThemeType;
  toggleTheme: () => void;
}

export const NavBar: React.FC<MyProps> = (props) => {
  const { authStep, user } = useSelector(
    (state: RootState) => state.auth,
  );

  const classes = useStyles();
  const dispatch = useDispatch();

  const isLoggedIn = authStep === AuthStep.LOGGED_IN;

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
          {isLoggedIn ?
           <div className={'user-info--wrapper'}>
             <Button className={'user-info--username'} color="inherit">{user.userName}</Button>
             <Button className={'user--logout-button'} color='inherit'
                     onClick={() => dispatch(signOut())}>LOGOUT</Button>
           </div>
                      :
           <Button className={'user--login-button'} color="inherit"
                   onClick={() => dispatch(signInStart())}>LOGIN</Button>
          }
          <div className={'theme-toggle--button'} onClick={props.toggleTheme}>
            <IconButton color="inherit">
              <LightbulbIcon variant={props.themeType}/>
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
};