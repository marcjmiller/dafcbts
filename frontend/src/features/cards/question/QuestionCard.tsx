import React from 'react';
import { QuestionModel } from '../../../../../.history/frontend/src/models/QuestionModel_20200821143751';
import { Card, CardHeader, Avatar, CardContent, Typography } from '@material-ui/core';
import { cardStyles } from '../../../resources/theme';

interface MyProps {
  question: QuestionModel;
}

const QuestionCard: React.FC<MyProps> = ({ question }) => {
  const { header, avatar, content, questionCard, visible, hidden } = cardStyles();

  const answers = [
    { id: 1, text: 'someText', score: 15 },
    { id: 2, text: 'someMoreText', score: 4 },
    { id: 3, text: 'someOtherText', score: 5 },
    { id: 4, text: 'someLessTxt', score: 0 },
  ];

  const [open, setOpen] = React.useState(false);

  React.useEffect(() => {
    setTimeout(() => {
      setOpen(!open);
    }, 500);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Card className={`question-card ${questionCard} ${open ? visible : hidden}`} raised>
      <CardHeader
        className={header}
        avatar={<Avatar className={avatar}>?</Avatar>}
        title={question.text}
        titleTypographyProps={{
          variant: 'h5',
        }}
      />
      {answers.map((answer, index) => (
        <CardContent className={`cbt-card--content ${content}`} key={index}>
          <Typography variant='body2' color='textSecondary' component='p'>
            {answer.id + ': ' + answer.text}
          </Typography>
        </CardContent>
      ))}
    </Card>
  );
};

export default QuestionCard;
