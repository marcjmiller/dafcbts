import * as React from 'react';
import { CbtModel } from '../../../models/CbtModel';
import { Card, CardContent, Typography, CardActions, Button, Avatar, CardHeader } from '@material-ui/core';
import { cardStyles } from '../../../resources/theme';

interface MyProps {
  cbt: CbtModel;
  handleViewCbt: (cbtId: number) => void;
}

const CbtCard: React.FC<MyProps> = ({ cbt, handleViewCbt }) => {
  const { content, header, avatar, cbtCard, visible, hidden, buttonContainer } = cardStyles();

  const [open, setOpen] = React.useState(false);

  React.useEffect(() => {
    setTimeout(() => {
      setOpen(!open);
    }, 500);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Card className={`cbt-card--container ${cbtCard} ${open ? visible : hidden}`} raised>
      <CardHeader
        className={header}
        avatar={<Avatar className={avatar}>{cbt.name.slice(0, 1).toUpperCase()}</Avatar>}
        title={cbt.name}
        titleTypographyProps={{
          variant: 'h5',
        }}
      />
      <CardContent className={`cbt-card--content ${content}`}>
        <Typography variant='body2' color='textSecondary' component='p'>
          {cbt.description}
        </Typography>
      </CardContent>
      <CardActions>
        <div className={`cbt-card--button-container ${buttonContainer}`}>
          <Button
            size='small'
            color='primary'
            variant='contained'
            onClick={() => {
              window.open('http://' + cbt.webAddress, '_blank');
            }}
          >
            Take this CBT
          </Button>
          <Button className={`view-cbt-button-${cbt.id}`} size='small' color='primary' variant='contained' onClick={() => handleViewCbt(cbt.id)}>
            View CBT
          </Button>
        </div>
      </CardActions>
    </Card>
  );
};

export default CbtCard;
