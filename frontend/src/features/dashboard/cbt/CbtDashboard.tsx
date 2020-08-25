import React, { useEffect } from 'react';
import { baseStyles } from '../../../resources/theme';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../resources/types';
import { fetchAllCbts, fetchQuestionsByCbtId } from '../../../store/actions';
import CbtCard from '../../cards/cbt/CbtCard';

interface MyProps {
  handleViewQuestions: () => void;
}

const CbtDashboard: React.FC<MyProps> = ({ handleViewQuestions }) => {
  const dispatch = useDispatch();
  const classes = baseStyles();

  useEffect(() => {
    dispatch(fetchAllCbts());
  }, [dispatch]);

  const { cbts, loading } = useSelector((state: RootState) => state.cbts);

  const handleViewCbt = (cbtId: number) => {
    handleViewQuestions();
    dispatch(fetchQuestionsByCbtId(cbtId));
  };

  return (
    <div className={classes.cardContainer}>
      {loading
        ? 'Loading CBTs...'
        : cbts.length > 0
        ? cbts.map((cbt, index) => <CbtCard cbt={cbt} key={index} handleViewCbt={handleViewCbt} />)
        : 'No CBTs found'}
    </div>
  );
};

export default CbtDashboard;
