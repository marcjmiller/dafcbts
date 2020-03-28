import * as React from "react";
import { CbtModel } from "../../models/CbtModel";
import { Card, makeStyles, CardContent, Typography, CardActions, Button, Avatar, CardHeader } from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    minWidth: 275,
    maxWidth: 345,
    margin: 16,
    
  },
  content: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "flex-start"
  },
  avatar: {
    backgroundColor: "#f44336",
  },
  card: {
    transition: "opacity 0.5s",
    opacity: 1,
  },
  cardHidden: {
    opacity: 0,
    pointerEvents: 'none',
  },
});

interface MyProps {
  cbt: CbtModel;
}

const CbtCard: React.FC<MyProps> = ({cbt}) => {
  const { root, content, avatar, card, cardHidden } = useStyles();
  const [open, setOpen] = React.useState(false);

  React.useEffect(() => {
    setTimeout(() => {
    setOpen(!open)
    }, 500)
  }, [])

  return (
    <Card className={`cbt-card--container ${root} ${open ? card : cardHidden }`}>
      <CardHeader 
      avatar={
        <Avatar className={`${avatar}`}>
          {cbt.name.slice(0, 1).toUpperCase()}
        </Avatar>
      }
      title={cbt.name}
      // subheader={cbt.webAddress}
      />
      <CardContent className={`${content}`}>
        <Typography variant="body2" color="textSecondary" component="p">
          {cbt.description}
          </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" color="primary" onClick={() => {window.open('http://' + cbt.webAddress, '_blank')}}>
        {cbt.cbtSource}
        </Button>
        <Button size="small" color="primary">
          Learn More
        </Button>
      </CardActions>
    </Card>
  );
};

export default CbtCard;
