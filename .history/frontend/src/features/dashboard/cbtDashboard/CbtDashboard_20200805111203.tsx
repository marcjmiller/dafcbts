import React, { useEffect, useState } from "react";
import { baseStyles } from "../../../resources/theme";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../resources/types";
import { fetchAllCbts } from "../../../store/actions";
import { Button } from "@material-ui/core";
import CbtCard from "../../cbts/CbtCard";

const Dashboard = () => {
  const dispatch = useDispatch();
  const classes = baseStyles();
  const [refresh, setRefresh] = useState(true);

  useEffect(() => {
    dispatch(fetchAllCbts());
  }, [refresh, dispatch]);

  const { cbts } = useSelector((state: RootState) => state.cbts);

  return (
    <div className={classes.dashboardContainer}>
      <div className={classes.dashboard}>
        <div className={classes.cardContainer}>
          {cbts.length > 0
            ? cbts.map((cbt) => <CbtCard cbt={cbt} />)
            : "No CBTs found"}
            <br
          <Button
            onClick={() => setRefresh(!refresh)}
            variant={"contained"}
            color={"primary"}
            className={"refetch"}
          >
            Re-Fetch
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
