import React from 'react';
import QuestionCard from '../../cards/question/QuestionCard';
import { useSelector } from 'react-redux';
import { RootState } from '../../../resources/types';
import { baseStyles } from '../../../resources/theme';

const QuestionDashboard = () => {
  const classes = baseStyles();

  const { questions, loading } = useSelector((state: RootState) => state.questions);

  return (
    <div className={classes.cardContainer}>
      {loading ? (
        'Loading Questions...'
      ) : (
        <>
          {questions.map((question, index) => (
            <QuestionCard question={question} key={index} />
          ))}
        </>
      )}
    </div>
  );
};

export default QuestionDashboard;
