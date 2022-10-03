import React, { useContext, useEffect } from "react";
import { AppContext } from "../../../context/app-context";
import { Grid } from "@mui/material";
import { getUserDetails } from "../../../services/userServices";
import useToken from "../../../hooks/useToken";

export default function Dashboard() {
  const { token } = useToken();
  const { user, pricingRules, checkout } = useContext(AppContext);
  const { userDetails, setUserDetails } = user;

  const getDetails = async () => {
    const details = await getUserDetails(token);
    if (details) {
      setUserDetails(details);
    }
  };

  useEffect(() => {
    if (!user.userDetails) {
      getDetails();
    }
  }, []);

  if (!user.userDetails) {
    return <h2>Loading...</h2>;
  }
  return (
    <>
      <h2>Dashboard</h2>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          Hi {userDetails?.name}
        </Grid>
        <Grid item xs={12}></Grid>
      </Grid>
    </>
  );
}
