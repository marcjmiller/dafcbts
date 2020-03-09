import React, { useEffect, useState } from 'react';
import { useStyles } from '../../resources/theme';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../resources/types';
import { fetchAllCbts } from '../../store/actions';
import { Button } from '@material-ui/core';

const Dashboard = () => {
  const dispatch = useDispatch();
  const classes = useStyles();
  const [refresh, setRefresh] = useState(true);

  useEffect(() => {
    dispatch(fetchAllCbts());
  }, [refresh]);

  const { cbts } = useSelector(
    (state: RootState) => state.cbts,
  );

  return (
    <div className={classes.dashboardContainer}>
      <div className={classes.dashboard}>
        Cbts fetched: {cbts.length}
        <Button onClick={() => setRefresh(!refresh)} color={'primary'} className={'refetch'}>Re-Fetch</Button>
      </div>
    </div>
  );
};

export default Dashboard;