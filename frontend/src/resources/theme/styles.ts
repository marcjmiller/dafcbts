import { makeStyles } from '@material-ui/core/styles';
import { createStyles, Theme } from '@material-ui/core';

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    icon: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },

    root: {
      flexGrow: 1,
    },

    menuButton: {
      marginRight: theme.spacing(2),
    },

    title: {
      flexGrow: 1,
    },

    paper: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      position: 'absolute',
      width: 400,
      height: 400,
      backgroundColor: theme.palette.background.paper,
      border: '2px solid #000',
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
    },

    modalBody: {
      marginLeft: -200,
      marginTop: -200,
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-around',
      alignItems: 'center',
      textAlign: 'center',
      outline: 'none',
      borderRadius: 8,
      borderWidth: 2,
      borderStyle: 'solid',
    },

  }),
);