import * as React from 'react';
import { CbtModel } from '../../models/CbtModel';
import {
  Card,
  makeStyles,
  CardContent,
  Typography,
  CardActions,
  Button,
  Avatar,
  CardHeader
} from '@material-ui/core';

const useStyles = makeStyles({
  root: {
    minWidth: 275,
    maxWidth: 345,
    margin: 16
  },
  content: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'flex-start'
  },
  avatar: {
    backgroundColor: '#f44336'
  },
  card: {
    transition: 'opacity 0.5s',
    opacity: 1,
    minWidth: '350px',
    maxWidth: '350px'
  },
  cardHidden: {
    opacity: 0,
    pointerEvents: 'none',
    minWidth: '350px',
    maxWidth: '350px'
  },
  cardButtonContainer: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between'
  }
});

interface MyProps {
  cbt: CbtModel;
}

const CbtCard: React.FC<MyProps> = ({ cbt }) => {
  const {
    root,
    content,
    avatar,
    card,
    cardHidden,
    cardButtonContainer
  } = useStyles();
  const [open, setOpen] = React.useState(false);

  React.useEffect(() => {
    setTimeout(() => {
      setOpen(!open);
    }, 500);
  }, []);

  return (
    <Card className={`cbt-card--container ${root} ${open ? card : cardHidden}`} raised>
      <CardHeader
        avatar={
          <Avatar className={`${avatar}`}>
            {cbt.name.slice(0, 1).toUpperCase()}
          </Avatar>
        }
        title={cbt.name}
        titleTypographyProps={{
          variant: 'h5',
        }}
      />
      <CardContent className={`${content}`}>
        <Typography variant="body2" color="textSecondary" component="p">
          {cbt.description}
        </Typography>
      </CardContent>
      <CardActions>
        <div className={cardButtonContainer}>
          <Button
            size="small"
            color="primary"
            variant="contained"
            onClick={() => {
              window.open('http://' + cbt.webAddress, '_blank');
            }}
          >
            Take this CBT
          </Button>
          <Button size="small" color="primary" variant="contained">
            View Answers
          </Button>
        </div>
      </CardActions>
    </Card>
  );
};

export default CbtCard;
