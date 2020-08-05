import React, { useEffect } from "react";
import { baseStyles } from "../../../resources/theme";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../resources/types";
import { fetchAllCbts } from "../../../store/actions";
import CbtCard from "../../cbts/CbtCard";

const Dashboard = () => {
  const dispatch = useDispatch();
  const classes = baseStyles();
  // const [refresh, setRefresh] = useState(true);

  useEffect(() => {
    dispatch(fetchAllCbts());
  }, [dispatch]);

  const { cbts, loading } = useSelector((state: RootState) => state.cbts);

  return (
    <div className={classes.dashboardContainer}>
      <div className={classes.dashboard}>
        <div className={classes.cardContainer}>
          {cbts.length >
            ? cbts.map((cbt, index) => <CbtCard cbt={cbt} key={index} />)
            : loading ? "Loading CBTs..." : "No CBTs found"}
        </div>
        {/* <div>
          <Button
            onClick={() => setRefresh(!refresh)}
            variant={"contained"}
            color={"primary"}
            className={"refetch"}
          >
            Re-Fetch
          </Button>
        </div> */}
      </div>
    </div>
  );
};

export default Dashboard;
