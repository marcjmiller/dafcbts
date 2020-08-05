import { makeStyles } from '@material-ui/core/styles';
import { createStyles, Theme } from '@material-ui/core';

export const baseStyles = makeStyles((theme: Theme) =>
  createStyles({
    app: {
      height: '100vh',
      width: '100vw',
      minWidth: '375px',
      minHeight: '250px',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
    },
    
    dashboardContainer: {
      width: '100vw',
      height: '100vh',
      maxHeight: 'calc(100vh - 128px)',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'flex-start',
      alignItems: 'center',
    },
    
    cardContainer: {
      width: '100vw',
      maxHeight: 'calc(100vh - 136px)',
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-around',
      alignItems: 'flex-start',
      flexWrap: 'wrap',
      overflow: 'scroll',
    },

    dashboard: {
      width: '100vw',
      display: 'flex',
      flexDirection: 'row',
      flexWrap: 'wrap',
      justifyContent: 'flex-start',
      alignItems: 'flex-start',
      padding: '8px',
    },

    footer: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      height: '64px',
      width: '100vw',
      padding: '8px 24px 24px 8px',
    },

    icon: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },

    root: {
      flexGrow: 0,
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
      width: 275,
      height: 300,
      backgroundColor: theme.palette.background.paper,
      border: '2px solid #000',
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
    },

    modalBody: {
      marginLeft: -137,
      marginTop: -150,
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

export const cbtStyles = makeStyles({
  cardContent: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'flex-start'
  },
  cardAvatar: {
    backgroundColor: '#f44336'
  },
  card: {
    minWidth: '350px',
    maxWidth: '350px',
    margin: 16
  },
  cardVisible: {
    transition: 'opacity 0.5s',
    opacity: 1,
  },
  cardHidden: {
    opacity: 0,
    pointerEvents: 'none',
  },
  cardButtonContainer: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between'
  }
});
