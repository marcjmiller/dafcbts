import React, { useState } from 'react';
import CbtDashboard from './cbt/CbtDashboard';
import QuestionDashboard from './question/QuestionDashboard';
import { baseStyles } from '../../resources/theme';

export enum ViewState {
  DEFAULT = 'DEFAULT',
  QUESTIONS = 'QUESTIONS',
}

const DashboardContainer: React.FC = () => {
  const classes = baseStyles();

  const [viewState, setViewState] = useState(ViewState.DEFAULT);

  return (
    <div className={classes.dashboardContainer}>
      {viewState === ViewState.DEFAULT ? (
        <CbtDashboard handleViewQuestions={() => setViewState(ViewState.QUESTIONS)} />
      ) : (
        <QuestionDashboard />
      )}
    </div>
  );
};

export default DashboardContainer;
