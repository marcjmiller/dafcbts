import * as React from 'react';
import { CbtModel } from '../../models/CbtModel';
import {
  Card,
  CardContent,
  Typography,
  CardActions,
  Button,
  Avatar,
  CardHeader
} from '@material-ui/core';
import { cbtStyles } from '../../resources/theme';

interface MyProps {
  cbt: CbtModel;
}

const CbtCard: React.FC<MyProps> = ({ cbt }) => {
  const {
    cardContent,
    cardAvatar,
    card,
    cardVisible,
    cardHidden,
    cardButtonContainer
  } = cbtStyles();

  const [open, setOpen] = React.useState(false);

  React.useEffect(() => {
    setTimeout(() => {
      setOpen(!open);
    }, 500);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Card className={`cbt-card--container ${card} ${open ? cardVisible : cardHidden}`} raised>
      <CardHeader
        avatar={
          <Avatar className={`${cardAvatar}`}>
            {cbt.name.slice(0, 1).toUpperCase()}
          </Avatar>
        }
        title={cbt.name}
        titleTypographyProps={{
          variant: 'h5',
        }}
      />
      <CardContent className={`cbt-card--content ${cardContent}`}>
        <Typography variant="body2" color="textSecondary" component="p">
          {cbt.description}
        </Typography>
      </CardContent>
      <CardActions>
        <div className={`cbt-card--button-container ${cardButtonContainer}`}>
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
