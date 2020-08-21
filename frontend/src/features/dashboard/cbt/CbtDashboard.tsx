import React, { useEffect } from 'react';
import { baseStyles } from '../../../resources/theme';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../resources/types';
import { fetchAllCbts, fetchQuestionsByCbtId } from '../../../store/actions';
import CbtCard from '../../cbts/CbtCard';

const Dashboard = () => {
  const dispatch = useDispatch();
  const classes = baseStyles();

  useEffect(() => {
    dispatch(fetchAllCbts());
  }, [dispatch]);

  const { cbts, loading } = useSelector((state: RootState) => state.cbts);

  const handleViewCbt = (cbtId: number) => {
    dispatch(fetchQuestionsByCbtId(cbtId))
  }

  return (
    <div className={classes.dashboardContainer}>
      <div className={classes.dashboard}>
        <div className={classes.cardContainer}>
          {cbts.length > 0
            ? cbts.map((cbt, index) => <CbtCard cbt={cbt} key={index} handleViewCbt={handleViewCbt} />)
            : loading
            ? 'Loading CBTs...'
            : 'No CBTs found'}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
